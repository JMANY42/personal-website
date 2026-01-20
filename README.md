# Personal Website

This repository contains the source code for my personal website. The site serves as a portfolio for potential recruiters and a platform to showcase technical projects, including those that are actively deployed and monitored.

The website is self-hosted on a server running in my apartment and securely exposed to the internet using a Cloudflare Tunnel. This setup demonstrates hands-on experience with real-world deployment, networking, and systems operations.

---

## Goals

- Provide a professional online presence for applications
- Showcase technical projects with clear context and results
- Demonstrate real-world deployment and operations experience
- Allow easy iteration and long-term scalability

---

## Features

### Home Page
- Brief introduction and personal tagline
- Summary of technical interests
- Featured projects
- Links to GitHub, resume, and contact information

### About Me
- Academic and personal background
- Education (Computer Science)
- Technical focus areas and interests
- Relevant coursework, teams, and experience
- Tools and technologies I use regularly

### Projects
- Central listing of all projects
- Each project includes:
  - Description and motivation
  - Technologies used
  - Current status (active, on hold, in development)
  - Links to source code and live demos

### Individual Project Pages
- Detailed technical write-ups
- Architecture and design decisions
- Challenges encountered and solutions
- Screenshots, diagrams, or videos
- Lessons learned and future work

### Recent / Active Projects
- Highlights recently updated projects
- Automatically sorted by last update
- Emphasizes ongoing development activity

### Project Status Dashboard
- Live status for deployed projects
- Metrics such as:
  - Uptime
  - Last deployment time
  - Service health indicators
- Demonstrates monitoring and reliability practices

### Contact Form
- Ability to submit questions or comments directly to me
- Showcases simple CRUD abilities
---

## Architecture

### Frontend
- React for a modular, component-based UI
- Fast iteration and maintainable structure
- Static personal and biographical content embedded in the frontend

### Backend / Data
- Lightweight local database for:
  - Project metadata
  - Deployment status
  - Update timestamps
- Simple API endpoints to expose data to the frontend

### Hosting & Infrastructure
- Self-hosted Linux server
- Cloudflare Tunnel for secure public access
- No inbound ports exposed to the internet
- Emphasis on security, reliability, and maintainability

---

## Security Considerations

- Tunnel-based access instead of direct public SSH
- Read-only public APIs
- Separation between public services and system-level components
- Safe restart and deployment procedures

---

## Future Enhancements

- Automated uptime and health checks
- CI/CD pipeline for automatic deployments
- Technical blog or notes section
- Admin dashboard for managing project data
- Expanded monitoring and logging

---

## TODO

- [x] Set up hosting and internet access via Cloudflare Tunnel  
- [X] Add deployment automation  
- [X] Finalize site-wide layout and navigation  
- [ ] Design and implement Home, About Me, and Projects page
- [ ] Build backend for project and status data  
- [ ] Add uptime monitoring and health checks  
- [ ] Improve UI polish and mobile responsiveness  

---
