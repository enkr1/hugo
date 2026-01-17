---
title: "Computer Networking Notebook"
date: 2024-05-01 23:11:21
tags:
  - "backend"
categories:
  - "Software Engineering"
  - "Computer Networking"
  - "Notebooks"
subtitle: "Essential Insights and Techniques in Computer Networking"
description: "Dive into the intricacies of computer networking with this detailed notebook. From basic concepts to advanced networking techniques, this post offers a thorough exploration of network design, protocols, and security measures. Ideal for students and professionals alike, learn how to effectively manage and optimize network infrastructure for better performance and reliability."
keywords:
  - "Computer networking basics"
  - "Networking protocols"
  - "Network security best practices"
  - "Advanced networking techniques"
  - "Network infrastructure management"
---


wip ...

<!-- more -->

## Network IP vs Router IP
### Analogy: Your Home as a Network

Think of your **home** as your local network, and your **home's postal address** as your router's **public IP address**.

1. **Public IP Address (Router's External IP)**
   - **Analogy**: Your home's postal address (e.g., 219.75.101.20)
   - This address is how the outside world (e.g., mail delivery, friends visiting) finds your home. When you send a letter (data) from your home, it goes out with this address, and any mail sent to this address from the outside (such as a response from a website) knows how to reach your home.
   - **Security Note**: Just as your home's address can be seen by anyone, your public IP can be seen by anyone on the internet. This is why you wouldn't put sensitive information like your security codes or safe keys publicly accessible at your postal address.

2. **Local Network IPs (Private IPs)**
   - **Analogy**: Rooms within your home (e.g., 192.168.1.72)
   - Each device in your network is like a room in your house. Inside your home, each room has its own specific purpose and place, much like how each device in your network has its own specific IP address. These addresses only make sense inside your network (home).
   - **Security Note**: Just as someone can't directly access a room in your house unless they first come to your main door (router), devices from the internet cannot directly access a device on your private network without going through the router, which acts as a gatekeeper.

#### Accessing the Router:

- **SSH to Router**: If SSH is set up and accessible from the internet (usually not recommended for security reasons), someone could potentially attempt to SSH into your router using its public IP address (e.g., 219.75.101.20). This would be akin to someone coming to your home's main entrance and trying to unlock the door.
- **Local Access**: Accessing your router's settings is typically done from within the network using its private IP (like `192.168.1.1`), similar to how you'd manage things within your house internally.

**Security Considerations**: Just as you would keep your home secure by locking doors and perhaps having a security system, your network should be secured. This includes using strong passwords, updating firmware, disabling unnecessary external access (like SSH from the internet), and using firewalls.

This analogy simplifies a bit, but it should help illustrate the basic concepts of how public and private IP addresses function in relation to your network (home) and the internet (outside world).
