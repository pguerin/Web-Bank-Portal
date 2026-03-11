# multi-stage build for production

# 1. build stage -------------------------------------------------------------
FROM node:20-alpine AS build
WORKDIR /usr/src/app

# install dependencies
COPY package.json package-lock.json* ./
# use npm ci if lockfile present for reproducible builds
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# copy all source
COPY . .

# build everything (client + server)
RUN npm run build


# 2. production stage -------------------------------------------------------
FROM node:20-alpine AS prod
WORKDIR /usr/src/app

# only copy what we need from build
COPY --from=build /usr/src/app/dist ./dist
# client assets are placed in dist/public by vite
COPY --from=build /usr/src/app/dist/public ./dist/public

COPY package.json package-lock.json* ./

# prune dev deps and install only production deps
RUN if [ -f package-lock.json ]; then npm ci --only=production; else npm install --only=production; fi

ENV NODE_ENV=production
EXPOSE 5000

# default entrypoint
CMD ["node", "dist/index.cjs"]
