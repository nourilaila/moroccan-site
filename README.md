# Moroccan Design Studio – Next.js Site

This repository contains a multilingual interior design portfolio built with **Next.js 14** using the App Router and **TypeScript**.  The site presents a refined, minimal aesthetic with Moroccan‑modern influences—drawing on handcrafted zellige patterns, warm terracotta and olive hues, soft arches and micro‑textures—while remaining performant and accessible.  It supports English, French and Arabic (RTL) locales via path‑based routing and exposes a simple content model using MDX files.

## Features

- **Multilingual:** `/en`, `/fr` and `/ar` namespaces with automatic redirects when a locale is missing.  The `LocaleProvider` sets `dir="rtl"` for Arabic and updates the `<html>` language attribute.
- **Responsive design:** built with Tailwind CSS and a custom theme including terracotta, olive, sand and bone colour tokens plus serif and sans‑serif typography choices.  Components embrace micro‑interactions (hover states, parallax) and support reduced motion.
- **Content layer:** projects and articles are stored as MDX with front‑matter metadata.  The site reads these at build time for static generation.
- **SEO & accessibility:** each page defines structured metadata and JSON‑LD for organisations, breadcrumbs and articles; components include `alt` text and keyboard focus styles.
- **Contact form:** a server action validates submissions and includes a honeypot field to deter spam.

The code samples included in this repository are intended to illustrate how to scaffold such a site.  They are not meant to be a complete production implementation but provide a strong starting point for further development.