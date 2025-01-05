Here's a structured README.md file for the Airflight Ticketing System project. This document provides an overview, setup instructions, and deployment guidelines.


---

Airflight Ticketing System

Version: 1.0.0
Author: Allyelvis
License: MIT

Table of Contents

Overview

Features

Technologies

Installation

Environment Variables

Docker Deployment

SSL and Nginx Setup

CI/CD Integration

Database Configuration

Contributing

License



---

Overview

The Airflight Ticketing System is a scalable and secure platform for booking and managing airline tickets. It features an intuitive user interface for customers, robust admin dashboards, and real-time updates powered by modern web technologies.


---

Features

Secure Online Booking

User Management & Authentication

Admin Dashboard for Flight and User Management

Real-time Flight Availability

PostgreSQL Integration

Dockerized Deployment

SSL via Let's Encrypt

CI/CD Pipeline for automated deployment



---

Technologies

Frontend: React (or replace with Vue/Angular if applicable)

Backend: Node.js, Express

Database: PostgreSQL

Deployment: Docker, Docker Compose

Web Server: Nginx

SSL: Certbot (Let's Encrypt)

CI/CD: GitHub Actions



---

Installation

Prerequisites:

Ubuntu 20.04+ (or any Linux server)

Node.js (v20)

Docker & Docker Compose

PostgreSQL

Nginx


1. Clone the Repository

git clone https://github.com/allyelvis/airflight-ticketing-system-1.git
cd airflight-ticketing-system-1

2. Set Up Environment Variables
Create a .env file in the root directory:

DATABASE_URL=postgresql://eticket_user:your_password@localhost:5432/eticket_db
PORT=3000
SECRET_KEY=your_random_secret_key

3. Install Dependencies

npm install

4. Run the Application

npm run dev


---

Environment Variables

Ensure the following variables are set in the .env file:

DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
PORT=3000
SECRET_KEY=your_secret_key


---

Docker Deployment

1. Build and Start the Containers

docker-compose up -d

2. Stop the Containers

docker-compose down


---

SSL and Nginx Setup

1. Install Certbot

sudo apt install certbot python3-certbot-nginx

2. Configure Nginx for Reverse Proxy
Create a new Nginx configuration file:

sudo nano /etc/nginx/sites-available/airflight-ticketing

Paste the following configuration:

server {
    server_name example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

Enable the site:

sudo ln -s /etc/nginx/sites-available/airflight-ticketing /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

3. Obtain SSL Certificate

sudo certbot --nginx -d example.com


---

CI/CD Integration

Automate deployments with GitHub Actions.

1. Create Workflow
In .github/workflows/deploy.yml:

name: Deploy to Server

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: SSH and Deploy
        env:
          SSH_KEY: ${{ secrets.SSH_KEY }}
          SSH_USER: ${{ secrets.SSH_USER }}
          SERVER_IP: ${{ secrets.SERVER_IP }}
        run: |
          echo "$SSH_KEY" | tr -d '\r' | ssh-add - > /dev/null
          ssh -o StrictHostKeyChecking=no $SSH_USER@$SERVER_IP "
          cd airflight-ticketing-system &&
          git pull &&
          docker-compose down &&
          docker-compose up -d
          "

2. Configure Secrets in GitHub

SSH_KEY: Your server’s SSH private key

SSH_USER: User with server access

SERVER_IP: IP address of the server



---

Database Configuration

1. Create Database and User

sudo -u postgres psql
CREATE DATABASE eticket_db;
CREATE USER eticket_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE eticket_db TO eticket_user;

2. Run Database Migrations

npm run migrate


---

Contributing

Contributions are welcome!

1. Fork the repository.


2. Create a new branch (feature/xyz).


3. Commit your changes.


4. Submit a Pull Request.




---

License

This project is licensed under the MIT License.
See the LICENSE file for more details.


---

Contact

For issues, please open a GitHub issue or contact allyelvis6569@gmail.com.

