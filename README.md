# Internet Museum (1995–2005)

A retro web project that recreates the look and behavior of early internet-era software using modern JavaScript.

This project intentionally avoids modern UI patterns and instead mimics late-1990s desktop-style web applications.

---

## Overview

Internet Museum (1995–2005) is an interactive web application designed like a legacy system.  
It demonstrates core web development concepts through historically inspired interfaces such as terminals, email clients, and early search engines.

The focus is on **clarity of concepts**, not modern aesthetics.

---

## Features

### Desktop-Style UI
- Fixed-size window (Windows 95 inspired)
- Title bar, menu bar, status bar
- Table-based layouts

### Rooms
- **Email Room**  
  Old-school email client with compose form and inbox (uses localStorage)

- **Server Room**  
  Interactive terminal with boot sequence and commands  
  (`help`, `ls`, `cd`, `ping`, `netstat`, `reboot`, etc.)

- **Search Room**  
  Early search-engine style interface with client-side filtering

- **HTML Room**  
  Live HTML editor and preview showing raw HTML rendering

### Retro Effects
- Blinking indicators
- Marquee text
- CRT scanline effect
- No modern animations (intentional)

---

## Tech Stack

- HTML
- CSS
- JavaScript
- React (Vite)

---

## Project Structure

src/
├── components/
├── pages/
├── server/
├── styles/
└── App.jsx

yaml
Copy code

---

## Syllabus Mapping

| Concept | Used In |
|------|--------|
| HTML Forms | Email Room |
| JavaScript Events | Buttons, Inputs, Terminal |
| DOM Manipulation | HTML Room |
| localStorage | Email Room |
| Modular JS | Server command engine |
| CSS Styling | Retro UI |

---

## How to Run

```bash
npm install
npm run dev
Open http://localhost:5173