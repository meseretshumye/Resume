# Meseret Shumye - Modern Full-Stack Resume & Portfolio (React + Tailwind CSS)

A modern, responsive, and executive-level portfolio and resume application built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide React**.

Converted and upgraded into a dynamic, modern, component-driven web application with dark/light mode, interactive project modals, and a printable executive CV viewer.

---

## 🌟 Key Features & Enhancements

1. **Modern Developer Aesthetics**:
   - Clean glassmorphism styling, ambient glowing gradients, and smooth transitions.
   - Dual theme support: **Dark Mode & Light Mode** with automatic system preference detection and `localStorage` persistence.
   - Fully responsive design engineered for mobile, tablet, laptop, and ultra-wide screens.

2. **Executive Bio & Professional Narrative**:
   - Highlighting Meseret's unique dual profile: **B.Sc. in Civil Engineering (Wollo University)** + **Project Engineer (Ethiopian Roads Authority)** combined with **Full-Stack Web Development (React & Node.js)**.
   - Polished grammar, impactful phrasing, and professional action-oriented bullet points.

3. **Interactive Competencies & Skills Matrix**:
   - Filterable skills domains: *All Skills*, *Frontend & Mobile*, *Backend & APIs*, *Databases*, *DevOps & Engineering Tools*.
   - Component & symbol badges for each technology (`⚛`, `JS`, `TS`, `📱`, `Node`, `REST`, `🐘`, `🍃`, `🐬`, `🐳`, etc.).
   - Animated progress bars with mastery badges (*Mastery*, *Expert*, *Advanced*, *Proficient*).
   - Preserved and highlighted foundational stack badges (`HTML5`, `CSS3`, `Bootstrap 5`).

4. **Experience & Education Timeline**:
   - Interactive milestone view with custom filters (*All Milestones*, *Experience*, *Education*).
   - Timeline cards with role badges, key responsibility checklists, and technology tags.

5. **Client Services Suite**:
   - 6 comprehensive service cards (*Full-Stack Web Development*, *Responsive UI/UX*, *Custom Business Portals*, *Performance & SEO*, *Graphic & Digital Design*, *Technical Consultancy*).
   - Key deliverables checklist and direct inquiry triggers.

6. **Interactive Projects & Case Studies**:
   - Category filtering (*All Projects*, *Enterprise SAAS*, *Mobile App*, *E-Commerce*).
   - Detailed modal case studies for:
     - **PharmaLink**: Enterprise Pharmacy Management & Supply Chain SaaS.
     - **Enat Health Care Solution**: Comprehensive Digital Health & Clinic Enterprise SaaS.
     - **Zekien Ride-App**: On-Demand Urban Mobility & Ride-Hailing Mobile Application.
     - **Apple E-Commerce**: Premium Device Showcase & Interactive Online Storefront.

7. **Printable Executive CV / PDF Exporter**:
   - One-click **Resume / CV Modal** formatted according to international recruiter standards.
   - Dedicated print styles (`@media print`) enabling clean **Print to PDF** directly from the browser without browser clutter.

8. **Direct Communication & Accurate Location**:
   - One-click email copying with instant feedback checkmark.
   - Direct WhatsApp and phone call actions (`+251 921 250 464`).
   - Interactive Google Map accurately centered on **Addis Ababa, Ethiopia**.
   - Contact form with state validation and celebratory micro-interactions.

---

## 🚀 Getting Started

### 1. Requirements
- Node.js (v18 or higher recommended, tested on Node v24)
- npm

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```
8. My Resume-2/
├── dist/                     # Optimized production build assets
├── public/
│   └── images/               # Profile, banner, and project assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Glassmorphic header & mobile navigation
│   │   ├── Hero.jsx          # Hero section, stats counters & quick actions
│   │   ├── About.jsx         # Executive biography & engineering pillars
│   │   ├── Skills.jsx        # Filterable skills matrix & tech badges
│   │   ├── ExperienceEducation.jsx # Interactive milestone timelines
│   │   ├── Services.jsx      # Client services & deliverable lists
│   │   ├── Projects.jsx      # Portfolio showcase & case study modals
│   │   ├── ResumeModal.jsx   # Printable 2-column Executive CV / PDF view
│   │   ├── Contact.jsx       # Contact cards, form & Addis Ababa location
│   │   ├── Footer.jsx        # Footer with back-to-top & social links
│   │   └── ThemeToggle.jsx   # Dark / Light theme switch
│   ├── data/
│   │   └── resumeData.js     # Centralized resume content & configuration
│   ├── App.jsx               # Application root & theme state
│   ├── index.css             # Tailwind imports & custom print styles
│   └── main.jsx              # React DOM entry point
├── index.html                # HTML entry point with modern typography
├── package.json              # Project dependencies & scripts
├── tailwind.config.js        # Tailwind CSS theme configuration
└── vite.config.js            # Vite configuration
```

---

## ✏️ How to Update Your Information

All personal details, skills, experiences, projects, and contact information are centralized in:
👉 [`src/data/resumeData.js`](file:///c:/Users/hp/Desktop/Eneho%20Tech/Batch-1/1.%20Phase%20-1/8.%20My%20Resume-2/src/data/resumeData.js)

To update your details, simply edit this file and the changes will update instantly!

