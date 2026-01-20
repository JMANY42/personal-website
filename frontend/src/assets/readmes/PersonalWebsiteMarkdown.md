# Overview

This project is my personal website, built to serve as a professional portfolio for applications and a platform to showcase technical projects. In addition to static portfolio content, the site includes live status information for deployed projects, demonstrating real-world hosting, monitoring, and operations experience.

The website is self-hosted on a server running in my apartment and securely exposed to the internet using a Cloudflare Tunnel. This design prioritizes security, control, and hands-on infrastructure experience over managed hosting platforms.

Changes to the production, staging, and dev version of the website are automatically deployed to my server via a secure github automation. 

---

## Problem

Most portfolio websites are fully static and hosted on managed platforms, which limits opportunities to demonstrate systems, networking, and deployment experience. The goal of this project was to build a portfolio that not only presents work but also *is itself* a production system.

---

## Key motivations

- Show off my Projects with a Project
- Maintain full control over hosting and infrastructure
- Demonstrate secure public exposure without opening inbound ports
- Integrate live project status and uptime data
- Ease of modification to add display future projects

---

## High-Level Architecture

**Frontend**
- React-based single-page application
- Component-driven layout for easy updates and expansion
- Static biographical content embedded directly in the frontend

**Backend**
- Lightweight API for serving project data and status information
- Other services to come as needed

**Infrastructure**
- Self-hosted Linux server
- Cloudflare Tunnel for secure ingress
- No direct public SSH or exposed ports
- Reverse proxy for serving frontend and API traffic

---

## Challenges

- **Secure public access**  
  Solved using Cloudflare Tunnel to provide encrypted ingress and access control.

- **Tracking project uptime and status**  
  Implemented periodic health checks with timeout handling and status caching.

- **Balancing static and dynamic content**  
  Static bio data is embedded in the frontend, while project data is served dynamically to allow live updates.

---

## Results & Impact

- Fully deployed personal website with live project data
- Reliable public access
- Platform capable of showcasing both completed and active projects
- Demonstrates practical experience with:
  - Web Dev
  - Linux servers
  - Networking and security

---

## What I Learned

- Differences between local development and production environments
- Better understanding of web server architecture 
- Importance of monitoring and uptime visibility
- Designing systems with future expansion in mind

---

## Future Work

- Expanded monitoring and alerting
- Admin interface for managing project data
- Technical blog or write-up section
- Improved mobile responsiveness and UI polish

---