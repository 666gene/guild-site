# Backend

This server exposes a small REST API used by the frontend. A few environment
variables are required for it to run. Copy `.example.env` to `.env` and provide
real values.

## CORS behaviour

When `NODE_ENV` is set to `production` the server restricts CORS requests to the
URL defined in the `FRONTEND_URL` environment variable. During development it
defaults to `http://localhost:3000`.

`FRONTEND_URL` must match the domain where the frontend is deployed, for
example:

```
FRONTEND_URL=https://guild-site-iota.vercel.app
```

## Setting variables in deployments

- **Docker Compose**: add the variable under the `backend` service in
  `docker-compose.yml` using the `environment:` section.
- **Railway** or other hosting platforms: define `FRONTEND_URL` in the project
  environment variables so it is available when the container starts.
