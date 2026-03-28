/**
 * CMS Client for Heirloom
 * Fetches data from Fusion CMS API
 */

const CMS_URL = process.env.CMS_INTERNAL_URL || process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000'
const API_KEY = process.env.CMS_API_KEY || ''
const COMPANY_SLUG = 'heirloom'

// Cache duration in seconds (1 minute)
const CACHE_REVALIDATE = 60

interface CMSClientOptions {
  page?: number;
  limit?: number;
  search?: string;
  category?: string | string[];
  categoryFilter?: string[];
  brand?: string | string[];
  condition?: string;
  inStock?: boolean;
  status?: string;
  type?: string;
  sortBy?: string;
  companySlug?: string;
  minPrice?: number;
  maxPrice?: number;
}

interface SEOOptions {
  path: string;
  locale?: string;
}

/**
 * Make authenticated request to CMS API
 */
async function fetchCMS(endpoint: string, options: RequestInit = {}) {
  const url = `${CMS_URL}${endpoint}`

  const response = await fetch(url, {
    ...options,
    headers: {
      'X-API-Key': API_KEY,
      'Content-Type': 'application/json',
      ...options.headers,
    },
    next: {
      revalidate: CACHE_REVALIDATE,
      ...options.next,
    },
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }))
    throw new Error(error.error || `CMS API error: ${response.status}`)
  }

  return response.json()
}

export function getCMSClient() {
  return {
    baseUrl: CMS_URL,
    apiKey: API_KEY,
    companySlug: COMPANY_SLUG,

    /**
     * Get products from CMS
     */
    async getPublicProducts(options: CMSClientOptions = {}) {
      const params = new URLSearchParams({
        companySlug: COMPANY_SLUG,
        status: options.status || 'active',
        ...(options.page && { page: options.page.toString() }),
        ...(options.limit && { limit: options.limit.toString() }),
        ...(options.search && { search: options.search }),
        ...(options.condition && { condition: options.condition }),
        ...(options.inStock !== undefined && { inStock: options.inStock.toString() }),
        ...(options.minPrice && { minPrice: options.minPrice.toString() }),
        ...(options.maxPrice && { maxPrice: options.maxPrice.toString() }),
      })

      if (options.category) {
        const categories = Array.isArray(options.category) ? options.category : [options.category]
        categories.forEach(cat => params.append('category', cat))
      }

      if (options.brand) {
        const brands = Array.isArray(options.brand) ? options.brand : [options.brand]
        brands.forEach(brand => params.append('brand', brand))
      }

      const data = await fetchCMS(`/api/public/products?${params}`)
      return {
        products: data.products || [],
        pagination: data.pagination || { page: 1, limit: 12, total: 0, totalPages: 0 }
      }
    },

    /**
     * Get single product by SKU
     */
    async getPublicProduct(sku: string) {
      const params = new URLSearchParams({ companySlug: COMPANY_SLUG })
      const data = await fetchCMS(`/api/public/products/${sku}?${params}`)
      return {
        success: data.success,
        product: data.product
      }
    },

    /**
     * Get product aggregations (categories, brands)
     */
    async getAggregations(options: CMSClientOptions = {}) {
      const params = new URLSearchParams({
        companySlug: COMPANY_SLUG,
        type: options.type || 'both',
        status: options.status || 'active',
      })

      if (options.categoryFilter) {
        options.categoryFilter.forEach(cat => params.append('categoryFilter', cat))
      }

      const data = await fetchCMS(`/api/public/products/aggregations?${params}`)
      return {
        categories: data.categories || [],
        brands: data.brands || []
      }
    },

    /**
     * Get categories
     */
    async getCategories(options: { sortBy?: string; limit?: number } = {}) {
      const params = new URLSearchParams({
        companySlug: COMPANY_SLUG,
        ...(options.sortBy && { sortBy: options.sortBy }),
        ...(options.limit && { limit: options.limit.toString() }),
      })

      const data = await fetchCMS(`/api/public/categories?${params}`)
      return {
        categories: data.categories || []
      }
    },

    /**
     * Get SEO metadata for a page
     */
    async getSEO(options: SEOOptions) {
      const params = new URLSearchParams({
        companySlug: COMPANY_SLUG,
        path: options.path,
        ...(options.locale && { locale: options.locale }),
      })

      const data = await fetchCMS(`/api/public/seo?${params}`)
      return {
        success: data.success,
        seo: data.seo,
        fallback: data.fallback || false
      }
    },

    /**
     * Get all SEO pages
     */
    async getAllSEOPages() {
      const params = new URLSearchParams({
        companySlug: COMPANY_SLUG,
      })

      const data = await fetchCMS(`/api/public/seo/all?${params}`)
      return {
        pages: data.pages || []
      }
    },

    /**
     * Health check
     */
    async healthCheck() {
      try {
        await fetchCMS('/api/public/company')
        return true
      } catch {
        return false
      }
    },
  }
}
