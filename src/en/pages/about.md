---
title: About
seo:
  description: Freelance Aberystwyth Llawrydd is a network of self-employed professionals based in and around the town. 

---

Freelance Aberystwyth Llawrydd is a network of self-employed professionals based in and around the town. 

{% image "/assets/img/screenshots.png", "Screenshot of freelanceaber in VSCodium and the browser", "100vw", "freelanceaber uses Front Matter CMS for easy content management", "rounded", "lazy", "auto", "async", "2400", "1688" %}

Features include:

### Performance things

* Optimised CSS, JS and HTML
* Responsive image shortcode that supports lazy loading and modern formats (avif, webp)
* Support for the [Photon CDN](https://developer.wordpress.com/docs/photon/) (can be turned on via settings)

### Accessibility things

* [Multilingual](https://www.11ty.dev/docs/plugins/i18n/)
* Dark / light mode (see the toggle in the footer)
* Skip link and ARIA hints

### Standards things

* [RSS feed]({{ "/feed/feed.xml" | locale_url }}) with XSLT styles
* [JSON feed]({{ "/feed/feed.json" | locale_url }})
* [Sitemap](/sitemap.xml)
* [Web manifest for PWAs]({{ "/site.webmanifest" | locale_url }})
* [humans.txt](/humans.txt) 
* [robots.txt](/robots.txt)
* Discourage Google AI from indexing your content

### Other things

* [Front Matter CMS](https://frontmatter.codes/)
* Open graph image generation from within Front Matter CMS (dev server must be running)
* Draft support
* [Syntax highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/)
* [Simplified embeds for YouTube, Vimeo etc](https://github.com/gfscott/eleventy-plugin-embed-everything)
* Plenty of helpful filters and functions
* [Alpine.js](https://alpinejs.dev/)
* [Eleventy Fetch](https://www.11ty.dev/docs/plugins/fetch/)