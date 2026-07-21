# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the Angular application
RUN npm run build -- --configuration production

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

# Install a simple HTTP server to serve the built app
RUN npm install -g http-server

# Copy built application from build stage
# Angular builds output to dist/task-manager by default
COPY --from=build /app/dist/task-manager ./dist

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1

# Start the application
CMD ["http-server", "dist", "-p", "8080", "-c-1"]
