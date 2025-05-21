# Guild Site

This project hosts a simple React frontend and an Express backend. Everything is
containerised so you only need Docker and Docker Compose to run it. MongoDB and
mongo‑express are included for the database layer.

## Requirements

- Docker and Docker Compose
- Optionally Node.js 18+ and [pnpm](https://pnpm.io/) if you want to run the
  services directly

## Docker Installation (Linux)

If you're new to Docker, you can install it with a single command:

```bash
# For Ubuntu/Debian
sudo apt update && sudo apt install -y docker.io docker-compose

# For Fedora
sudo dnf install -y docker docker-compose

# For CentOS/RHEL
sudo yum install -y docker docker-compose
```

After installation, start Docker and enable it to run on boot:

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

Add your user to the Docker group to run Docker commands without sudo:

```bash
sudo usermod -aG docker $USER
```

You'll need to log out and back in for this to take effect.

## Quick Start

1. Clone this repository
2. Copy the example environment file and fill in your credentials

```bash
cp backend/.example.env backend/.env
# Edit backend/.env and set the following variables
# BLIZZARD_CLIENT_ID=<your-client-id>
# BLIZZARD_CLIENT_SECRET=<your-client-secret>
# FRONTEND_URL=http://localhost:3000
# MONGO_URI=mongodb://admin:password@mongodb:27017/guild-site?authSource=admin
```

3. Start the stack

```bash
BLIZZARD_CLIENT_ID=... BLIZZARD_CLIENT_SECRET=... \
MONGO_URI=mongodb://admin:password@mongodb:27017/guild-site?authSource=admin \
docker-compose up -d
```

This will build the images and start MongoDB, the backend and the frontend.

## Accessing the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Mongo Express: http://localhost:8081

## Stopping the Application

```bash
docker-compose down
```

To remove all data (including MongoDB data):

```bash
docker-compose down -v
```

## Developing Without Docker

You can also run the services directly with Node.js and pnpm. This is useful
when making frontend or backend changes.

```bash
# Backend
cd backend
pnpm install
pnpm run dev

# In a separate terminal for the frontend
cd frontend
pnpm install
pnpm run dev
```

MongoDB must be running locally or accessible via `MONGO_URI` for the backend
to start. You can reuse the `mongodb` service from Docker Compose or point to
your own instance.
