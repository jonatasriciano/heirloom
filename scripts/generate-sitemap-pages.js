/**
 * Generate sitemap pages list at build time
 * This script runs before the Next.js build to discover all pages
 * and save them to a JSON file that can be read at runtime
 */
const { glob } = require('glob')
const path = require('path')
const fs = require('fs')

async function generateSitemapPages() {
  const pagesDir = path.join(process.cwd(), 'src/app/[locale]')
  
  const pageFiles = await glob('**/page.tsx', { 
    cwd: pagesDir,
    ignore: [
      '**/node_modules/**',
      '**/.next/**',
      '**/\\[*\\]/**',
    ]
  })
  
  const pages = pageFiles
    .filter(file => !file.includes('['))
    .map(file => {
      let urlPath = file.replace('/page.tsx', '')
      if (urlPath === 'page.tsx' || urlPath === '') urlPath = '/'
      else urlPath = '/' + urlPath
      return urlPath
    })
    .sort()

  const outputPath = path.join(process.cwd(), 'src/generated/sitemap-pages.json')
  
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, JSON.stringify({ pages, generatedAt: new Date().toISOString() }, null, 2))
  
  console.log(`[Sitemap] Generated ${pages.length} pages:`)
  pages.forEach(p => console.log(`  - ${p}`))
}

generateSitemapPages().catch(console.error)
