# 🌟 Profile Card – Stage 0 Task

A responsive, accessible **Profile Card** built with plain **HTML, CSS, and JavaScript**.


- Semantic & accessible HTML  
- Responsive layout (Flexbox/Grid)  
- Current time in milliseconds (`Date.now()`)  
- Avatar with `alt` text  
- Social links open in new tab  
- Separate hobbies & dislikes lists  
- All elements include required `data-testid`s

---

### 🚀 Run Locally
```command prompt 
git clone https://github.com/your-username/profile-card-stage0.git
cd profile-card-stage0
open index.html

Here’s a concise **README.md** you can use for your Stage 1 submission:

---

# 🌟 Frontend Wizards — Stage 1 Task

## 🚀 Overview

This project builds upon **Stage 0**, expanding a single-page card into a **multi-page web app** with:

* A **Contact Us** page (form validation + accessibility)
* An **About Me** page (reflective sections)

Hosted and coded using semantic HTML, responsive CSS, and accessible design principles.

---

## 📄 Pages

### 📨 Contact Us (`contact.html`)

Features a validated contact form with the following fields:

* Full Name (`data-testid="test-contact-name"`)
* Email (`data-testid="test-contact-email"`)
* Subject (`data-testid="test-contact-subject"`)
* Message (`data-testid="test-contact-message"`)
* Submit Button (`data-testid="test-contact-submit"`)
* Error messages and success confirmation

**Validation Rules:**

* All fields required
* Valid email format
* Message ≥ 10 characters

**Accessibility:**
Linked labels, `aria-describedby` for errors, and full keyboard navigation.

---

### 👤 About Me (`about.html`)

Includes reflective sections wrapped in `<main data-testid="test-about-page">`:

* Bio (`test-about-bio`)
* Goals (`test-about-goals`)
* Areas of low confidence (`test-about-confidence`)
* Note to future self (`test-about-future-note`)
* Extra thoughts (`test-about-extra`)

Uses semantic structure with headings and responsive layout.

---

## 🧩 Tech Stack

* HTML5
* CSS3 (Responsive + Accessible Design)
* JavaScript (Form Validation)

---
