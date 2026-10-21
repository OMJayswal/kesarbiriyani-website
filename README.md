# Kesar Biryani website

Static one-page site for **Kesar Biryani**, Lainchaur, Kathmandu. Host it for free on GitHub Pages and point the Namecheap domain `www.kesarbiriyani.com` at it.

Live canonical URL: https://www.kesarbiriyani.com/

## Publish on GitHub Pages

1. Push this folder to the public repository [`OMJayswal/kesarbiriyani-website`](https://github.com/OMJayswal/kesarbiriyani-website) on the `main` branch.
2. GitHub → **Settings** → **Pages**.
3. Source: **Deploy from a branch** → `main` → `/ (root)` → Save.
4. Custom domain: `www.kesarbiriyani.com`.
5. Wait for the DNS check to pass, then enable **Enforce HTTPS**.
6. Recommended: in your GitHub profile **Settings** → **Pages**, add `kesarbiriyani.com` as a verified domain so no other repository can claim it.

This repo already includes a `CNAME` file set to `www.kesarbiriyani.com`.

The Pages hostname GitHub shows is usually `YOUR_GITHUB_USER.github.io`. If your username is `omjayswal`, that hostname is `omjayswal.github.io`.

## Namecheap DNS

In Namecheap → Domain List → `kesarbiriyani.com` → **Advanced DNS**, delete the default parking records (and any old URL Redirect, A or CNAME records for `@` or `www`), then add:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| CNAME Record | `www` | `omjayswal.github.io.` | Automatic |
| A Record | `@` | `185.199.108.153` | Automatic |
| A Record | `@` | `185.199.109.153` | Automatic |
| A Record | `@` | `185.199.110.153` | Automatic |
| A Record | `@` | `185.199.111.153` | Automatic |

The A records point the bare domain at GitHub Pages. GitHub then redirects `kesarbiriyani.com` to `www.kesarbiriyani.com` and issues HTTPS certificates for both. Do not use a Namecheap URL Redirect for `@`: it cannot serve HTTPS, so `https://kesarbiriyani.com` would show a certificate error.

DNS and the HTTPS certificate can take from a few minutes up to 24 hours.

## After the domain is live

1. Open https://www.kesarbiriyani.com/ and confirm HTTPS. Check that `kesarbiriyani.com` and `http://www.kesarbiriyani.com` both redirect there.
2. In [Google Search Console](https://search.google.com/search-console), add the URL prefix `https://www.kesarbiriyani.com/` and submit `https://www.kesarbiriyani.com/sitemap.xml`.
3. Keep the Google Business Profile NAP (name, address, phone) the same as this site.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080/

## Contact actions

- Call: `tel:+9779762179487`
- WhatsApp: `https://wa.me/9779762179487`
- Email: `mailto:kesarbiryani.ktm@gmail.com`
