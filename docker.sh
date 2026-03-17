#!/bin/bash
# ============================================
# Heirloom - Docker Helper Script
# Standardized Docker management commands
# ============================================

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

IMAGE_NAME="heirloom"

# Helper functions
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }

# Commands
case "$1" in
  build)
    print_info "Building production Docker image..."
    docker build -t "$IMAGE_NAME" .
    print_success "Build completed!"
    ;;

  run)
    print_info "Running production container..."
    docker run -p 3011:3000 --env-file .env.local "$IMAGE_NAME"
    ;;

  up)
    print_info "Starting DEV with Docker Compose..."
    docker compose up --build app-dev
    ;;

  up:prod)
    print_info "Starting PROD with Docker Compose..."
    docker compose --profile production up --build app-prod
    ;;

  down)
    print_info "Stopping Docker Compose..."
    docker compose down
    print_success "Stopped!"
    ;;

  logs)
    print_info "Showing logs..."
    docker compose logs -f app-dev
    ;;

  test)
    print_info "Testing production build..."
    docker build -t "${IMAGE_NAME}-test" .
    print_success "Build test passed!"

    print_info "Testing container startup..."
    CONTAINER_ID=$(docker run -d -p 3011:3000 --env-file .env.local "${IMAGE_NAME}-test")

    cleanup() {
      if [ -n "$CONTAINER_ID" ]; then
        docker stop "$CONTAINER_ID" > /dev/null 2>&1 || true
        docker rm "$CONTAINER_ID" > /dev/null 2>&1 || true
      fi
    }
    trap cleanup EXIT

    print_info "Waiting for container to start..."
    for i in {1..20}; do
      if curl -fsS http://localhost:3011/api/health > /dev/null 2>&1; then
        print_success "Application is responding!"
        print_success "Container test passed!"
        exit 0
      fi
      sleep 1
    done

    print_error "Health check failed"
    docker logs "$CONTAINER_ID" || true
    exit 1
    ;;

  clean)
    print_warning "Cleaning Docker resources..."
    docker compose down -v || true
    docker system prune -f
    print_success "Cleanup completed!"
    ;;

  shell)
    print_info "Opening shell in container..."
    docker compose exec app-dev sh
    ;;

  size)
    print_info "Docker image size:"
    docker images "$IMAGE_NAME"
    ;;

  *)
    echo "🐳 Heirloom Docker Helper"
    echo ""
    echo "Usage: ./docker.sh [command]"
    echo ""
    echo "Commands:"
    echo "  build     - Build production Docker image"
    echo "  run       - Run production container"
    echo "  up        - Start DEV with docker compose"
    echo "  up:prod   - Start PROD with docker compose"
    echo "  down      - Stop docker compose"
    echo "  logs      - Show logs"
    echo "  test      - Test production build"
    echo "  clean     - Clean docker resources"
    echo "  shell     - Open shell in container"
    echo "  size      - Show image size"
    ;;
esac
