---
title: "Hexo: How to Set Up a Subdomain on GitHub Pages and Fix CNAME Issues"
sticky: 0
date: 2024-10-20 21:35:20
tags:
  - "dns"
  - "github-pages"
  - "hexo"
categories:
  - "Software Engineering"
  - "Configurations"
  - "DNS"
  - "Frameworks"
  - "Hexo"
subtitle: "A Step-by-Step Guide to Configuring a Subdomain and Fixing Common CNAME Issues"
description: "Learn how to configure a subdomain on GitHub Pages, troubleshoot CNAME issues, and ensure smooth deployment with Hexo. This guide simplifies the process to get your site up and running with a custom domain."
keywords:
  - GitHub Pages subdomain
  - CNAME issues
  - Hexo deployment
  - DNS configuration
  - Custom domain setup
---



## Introduction:

Running into the `InvalidDNSError` while trying to set up a subdomain on GitHub Pages? You're not alone! I recently faced this issue when I tried to set up `blog.enkr1.com`. After a bit of back and forth with DNS settings, I figured it out, and here's how you can do it, too.

Why did I even bother? Well, it turns out that without setting up the subdomain, Firestore's visitor tracking wasn't working properly due to cross-domain issues (which I only found out after **six months** when I got an inactivity email from the database! 😂). So, here we go!

---

## Steps to Configure a Subdomain on GitHub Pages

### 1. Set Up the CNAME Record in Your DNS Provider

The first thing you need to do is tell your DNS provider where to send traffic for your subdomain. Here's how to add a CNAME record:

- **Log in to your DNS provider** (Dynadot (I am using this), GoDaddy, Namecheap, Cloudflare, etc.).
- Head to the **DNS Management** section for your domain (`enkr1.com`).
- **Create a new CNAME record** with these details:

  - **Type**: CNAME
  - **Host**: `blog` (this is your subdomain)
  - **Points to**: `enkr1.github.io` (replace `enkr1` with your GitHub username if different)
  - **TTL**: Leave it at the default setting (usually 1 hour or automatic)

  Example:
  ```
  Type: CNAME
  Host: blog
  Points to: enkr1.github.io
  ```

- **Save** the record and wait for DNS propagation (anywhere from a few minutes to 24 hours, depending on your provider).

---

### 2. Verify the DNS Record

Once you've set up the CNAME record, it's time to check if it's pointing in the right direction:

- Use [DNSChecker](https://dnschecker.org/) (or a similar tool).
- Enter `blog.enkr1.com` and select **CNAME**.
- Ensure it's correctly pointing to `enkr1.github.io`.

If everything looks good, you're ready for the next step!

---

### 3. Configure the Custom Domain in GitHub Pages

Next, let GitHub know about your shiny new subdomain.

- Open the **GitHub repository** where your website is hosted (in my case, for `blog.enkr1.com`).
- Go to **Settings** → **Pages**.
- In the **Custom Domain** field, type `blog.enkr1.com` and click **Save**.

This will create a `CNAME` file in your repository, linking your site to the subdomain.

---

### 4. Enable HTTPS & Fixing the CNAME Issue After Deploying with Hexo

After the DNS propagation finishes (again, this could take up to 24 hours), you'll want to secure your site with HTTPS.

- Return to **Settings** → **Pages** in your GitHub repository.
- Check the **Enforce HTTPS** option (if it's available).

Once HTTPS is enforced, your site will load over a secure connection.

**OR;**

If you're using Hexo to deploy your site to GitHub Pages, you might run into an issue where the CNAME gets reset after every deployment, causing your custom domain to disappear from the GitHub Pages settings. I faced this issue as well, and here's a quick fix for it.

To prevent the CNAME from getting wiped during deployment, simply create a `CNAME` file in the `source/` folder of your Hexo project.

Here's how:

1. **Navigate to your Hexo project's source directory**:
   ```sh
   cd ~/hexo/source
   ```

2. **Create a `CNAME` file** in the `source/` directory:
   ```sh
   echo "blog.enkr1.com" > CNAME
   ```

   Replace `blog.enkr1.com` with your custom domain.

3. **Deploy your Hexo site**:
   Run your normal deploy command:
   ```sh
   hexo deploy
   ```

Now, the `CNAME` file will be deployed along with your site, ensuring that your custom domain stays intact after each deployment.

---

### 5. Wait for Propagation and Test Your Subdomain

Now it's just a waiting game. Once DNS propagation is complete:

- Go to `https://blog.enkr1.com` and make sure your GitHub Pages site loads correctly.
- Double-check in **Settings** that HTTPS is enabled.

If everything is working, congratulations—you've just set up a subdomain on GitHub Pages! 🎉

---

## Troubleshooting

Even if you follow the steps perfectly, there are always those annoying issues that can pop up. Here are a few possible solutions if you hit a roadblock:

- **InvalidDNSError**:
  - This usually means your CNAME record isn't configured correctly or hasn't propagated yet. Use tools like **DNSChecker** to ensure that `blog.enkr1.com` points to `enkr1.github.io`.
  - Double-check the DNS entry at your domain provider—small typos or incorrect hostnames are common issues.
  - Make sure your GitHub Pages repository is **public**. Private repos won't work with custom domains unless you're on GitHub's paid plan.

- **HTTPS Unavailable**:
  - If you can't enable HTTPS, it's likely that the DNS propagation hasn't completed. Give it a bit more time and check again.
  - If you're still having issues, make sure there aren't conflicting DNS records (like an A record) for the same subdomain.

- **Cross-Domain Issues with Firestore or Other Services**:
  - Make sure you've correctly set up CORS (Cross-Origin Resource Sharing) in your Firestore rules to avoid visitor tracking issues.

---

## Conclusion:

Setting up a subdomain on GitHub Pages can feel a little frustrating at first—especially with DNS propagation times and potential errors—but it's all worth it in the end. I hope this guide helps you avoid the same headaches I had when setting up `blog.enkr1.com`. If you run into any issues, don't hesitate to reach out, or check the official [GitHub Pages documentation](https://docs.github.com/en/pages).

Your site should now be live, secure, and ready to go! 🚀
