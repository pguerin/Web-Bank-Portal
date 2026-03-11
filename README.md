# Web Bank Portal

Docker support has been added for local development and production builds.

## Quick start with Docker

1. **Copy environment variables**
   ```bash
   cp .env.example .env
   # edit .env to suit your needs (SESSION_SECRET, etc.)
   ```

2. **Build and run (production mode)**
   ```bash
   npm run docker:up
   # or manually: docker compose up --build
   ```

   The app will be available at `http://localhost:5000`. The postgres database listens on `5432`.

3. **Database migrations**

   ```bash
   docker compose exec app npm run db:push
   ```

### 🛠 Development workflow

Compose can also be used for development by mounting the source directory and running the dev script:

```yaml
# note: uncomment these lines in docker-compose.yml when developing
# volumes:
#   - .:/usr/src/app
#   - /usr/src/app/node_modules
# command: npm run dev
```

Then start with `docker compose up --build` and edits will reflect inside the container. Use the host port `5000` as usual.



## Building for production

```bash
npm run docker:build
``` 

This creates an image tagged `web-bank-portal` which can be run with:

```bash
docker run -e PORT=5000 -e DATABASE_URL="..." -p5000:5000 web-bank-portal
```

## Environment variables

See `.env.example` for a template. Ensure you set `DATABASE_URL`, `SESSION_SECRET`, and any other required values.
