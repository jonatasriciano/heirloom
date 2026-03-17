# ============================================
# Heirloom - Production Dockerfile
# Multi-stage build following Docker best practices
# ============================================

# ---------- Base Stage ----------
FROM node:22.19.0-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat curl

# ---------- Dependencies Stage ----------
FROM base AS deps
# Copy package files for dependency installation
COPY package.json package-lock.json ./
RUN npm ci

# ---------- Builder Stage ----------
FROM base AS builder
# Copy dependencies from previous stage
COPY --from=deps /app/node_modules ./node_modules
# Copy source code
COPY . .

# Build-time environment variables
ARG NEXT_PUBLIC_CMS_URL
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_CMS_URL=$NEXT_PUBLIC_CMS_URL
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ---------- Runner Stage (Production) ----------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME="0.0.0.0"
ENV PORT=10000

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built application with proper ownership
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

EXPOSE 10000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:10000/api/health || exit 1

CMD ["node", "server.js"]
