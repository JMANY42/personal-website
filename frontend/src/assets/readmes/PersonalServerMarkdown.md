# Overview

This project is my personal server made from an old PC running Ubuntu Server. It is connected to the internet via a cloudflared tunnel and accessable only through http requests to davidjonathanlewis.com. SSH access is acheived through devices enrolled my Cloudflare WARP network for maximum security and managed SSH access.

---

## Problem

I have no way of hosting my applications and projects for the internet and recruiters to see. I considered cloud hosting with AWS or similar, but that wouldn't allow me to be as creative with what I build and wouldn't alow me full access to manage the server. Additionally, I learned how to use cloudflare for more advanced features than deploying by hosting my own server. 

---

## Key motivations

- Maintain full control over hosting and infrastructure
- Demonstrate secure public exposure without opening inbound ports
- Integrate live projects securely accessable on the internet

---

## Challenges

- **Secure public access**  
  Solved using Cloudflare Tunnel to provide encrypted ingress and access control.

- **Tracking project uptime and status**  
  Implemented periodic health checks with timeout handling and status caching.

- **Users and Scaling**
  The biggest downside to self hosting is I am limited by my hardware. However, this limitation will force me to be creative and program efficiently, and shouldn't be a forseeable problem for a long time. 

---

## Results & Impact

- Fully deployed personal server with controlled internet access
- Reliable public access
- Platform capable of showcasing both completed and active projects
- Demonstrates practical experience with:
  - Linux Server administration
  - Networking and security

---

## What I Learned

- Secure networking practices for self-hosted services
- Importance of monitoring and uptime visibility
- Networking through and with Cloudflare

---

## Future Work

- Expanded monitoring and alerting
- Robust logging

---