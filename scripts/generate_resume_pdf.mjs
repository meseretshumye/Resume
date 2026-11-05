// Generator for Meseret_Shumye_Resume.pdf
import fs from 'fs';
import path from 'path';

function createPDF() {
  // A4 dimensions: 595.28 x 841.89 points
  const pageWidth = 595.28;
  const pageHeight = 841.89;

  // Escape special PDF characters in strings
  function esc(str) {
    if (!str) return '';
    return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  }

  let p1Ops = [];
  let p2Ops = [];

  function rect(ops, x, y, w, h, r, g, b, fill = true, stroke = false) {
    ops.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} ${fill ? 'rg' : 'RG'}`);
    ops.push(`${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re ${fill ? (stroke ? 'B' : 'f') : 'S'}`);
  }

  function text(ops, font, size, x, y, txt, r = 0, g = 0, b = 0) {
    ops.push(`BT`);
    ops.push(`/${font} ${size} Tf`);
    ops.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg`);
    ops.push(`1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm`);
    ops.push(`(${esc(txt)}) Tj`);
    ops.push(`ET`);
  }

  function line(ops, x1, y1, x2, y2, r = 0.8, g = 0.8, b = 0.8, width = 1) {
    ops.push(`${width} w`);
    ops.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} RG`);
    ops.push(`${x1.toFixed(2)} ${y1.toFixed(2)} m ${x2.toFixed(2)} ${y2.toFixed(2)} l S`);
  }

  // ==================== PAGE 1 ====================
  // 1. Top "Back to Home / Portfolio" Interactive Bar (y: 818 to 842)
  rect(p1Ops, 0, 818, pageWidth, 23.89, 0.04, 0.07, 0.14);
  text(p1Ops, 'F2', 9, 30, 826, '<-- BACK TO HOME / PORTFOLIO  |  Click anywhere on this bar to return to website', 0.2, 0.85, 0.65);

  // 2. Main Executive Header (y: 710 to 818)
  rect(p1Ops, 0, 712, pageWidth, 106, 0.05, 0.08, 0.15); // Dark navy banner
  rect(p1Ops, 0, 708, pageWidth, 4, 0.13, 0.77, 0.58);  // Teal accent line

  text(p1Ops, 'F2', 25, 35, 778, 'MESERET SHUMYE', 1, 1, 1);
  text(p1Ops, 'F1', 11.5, 35, 759, 'Full-Stack Developer  |  Project Engineer & Contract Administrator', 0.13, 0.77, 0.58);
  text(p1Ops, 'F1', 9.5, 35, 740, 'Addis Ababa, Ethiopia   |   meseretshumye12@gmail.com   |   +251 912 91 80 18', 0.82, 0.86, 0.92);
  text(p1Ops, 'F1', 9.5, 35, 725, 'GitHub: github.com/meseretshumye   |   LinkedIn: linkedin.com/in/meseret-shumye', 0.82, 0.86, 0.92);

  // Section 1: Executive Profile
  let y = 678;
  text(p1Ops, 'F2', 11.5, 35, y, 'EXECUTIVE PROFILE', 0.05, 0.08, 0.15);
  line(p1Ops, 35, y - 4, pageWidth - 35, y - 4, 0.13, 0.77, 0.58, 1.5);
  y -= 18;

  const profileLines = [
    'Passionate Full-Stack Developer and seasoned Project Engineer & Contract Administrator bridging the gap',
    'between rigorous engineering discipline and modern web & mobile architecture. Demonstrated track record of',
    'delivering high-performance SaaS applications, scalable REST APIs, responsive React interfaces, and managing',
    'complex engineering contracts with rigorous quality assurance and international compliance.'
  ];
  for (const pl of profileLines) {
    text(p1Ops, 'F1', 9.5, 35, y, pl, 0.2, 0.22, 0.26);
    y -= 13;
  }

  // Section 2: Technical Skills
  y -= 10;
  text(p1Ops, 'F2', 11.5, 35, y, 'TECHNICAL SKILLS & COMPETENCIES', 0.05, 0.08, 0.15);
  line(p1Ops, 35, y - 4, pageWidth - 35, y - 4, 0.13, 0.77, 0.58, 1.5);
  y -= 20;

  const skillGroups = [
    { title: 'Frontend & Mobile:', list: 'React.js, React Native, Next.js, Tailwind CSS' },
    { title: 'Backend & APIs:', list: 'Node.js, Express.js, NestJS, JWT, OAuth 2.0, API Security' },
    { title: 'Databases:', list: 'PostgreSQL, MySQL, Relational Database Management, SQL Query Optimization' },
    { title: 'DevOps & Tools:', list: 'Git & GitHub, Postman, Swagger, Version Control Workflows, Quality Assurance' },
    { title: 'Engineering Management:', list: 'Contract Administration (FIDIC), Cross-Functional Team Leadership, Technical Documentation' }
  ];

  for (const sg of skillGroups) {
    text(p1Ops, 'F2', 9.5, 35, y, sg.title, 0.05, 0.08, 0.15);
    text(p1Ops, 'F1', 9.5, 175, y, sg.list, 0.25, 0.28, 0.32);
    y -= 14.5;
  }

  // Section 3: Professional Experience
  y -= 10;
  text(p1Ops, 'F2', 11.5, 35, y, 'PROFESSIONAL EXPERIENCE', 0.05, 0.08, 0.15);
  line(p1Ops, 35, y - 4, pageWidth - 35, y - 4, 0.13, 0.77, 0.58, 1.5);
  y -= 20;

  // Experience 1: Full-Stack Developer
  text(p1Ops, 'F2', 11, 35, y, 'Full-Stack Developer', 0.05, 0.08, 0.15);
  text(p1Ops, 'F2', 9.5, pageWidth - 135, y, '2022 - Present', 0.13, 0.77, 0.58);
  y -= 13;
  text(p1Ops, 'F1', 9.5, 35, y, 'Freelance / Remote Consultancy  -  Addis Ababa, Ethiopia', 0.4, 0.44, 0.48);
  y -= 15;

  const exp1Bullets = [
    'Architecting and delivering scalable SaaS web apps and responsive mobile interfaces with modern full-stack technologies.',
    'Developing high-performance APIs, database architectures, and automated testing pipelines.'
  ];
  for (const b of exp1Bullets) {
    text(p1Ops, 'F2', 10, 42, y, '-', 0.13, 0.77, 0.58);
    text(p1Ops, 'F1', 9.5, 52, y, b, 0.2, 0.22, 0.26);
    y -= 13.5;
  }

  // Experience 2: Project Engineer & Contract Administrator
  y -= 10;
  text(p1Ops, 'F2', 11, 35, y, 'Project Engineer & Contract Administrator', 0.05, 0.08, 0.15);
  text(p1Ops, 'F2', 9.5, pageWidth - 135, y, '2018 - 2022', 0.13, 0.77, 0.58);
  y -= 13;
  text(p1Ops, 'F1', 9.5, 35, y, 'Infrastructure Engineering Consultancy  -  Ethiopia', 0.4, 0.44, 0.48);
  y -= 15;

  const exp2Bullets = [
    'Administering national infrastructure contracts, managing diverse stakeholder correspondence, and enforcing strict quality assurance.',
    'Managing engineering correspondence, claim assessments, and contractual compliance under FIDIC conditions of contract.'
  ];
  for (const b of exp2Bullets) {
    text(p1Ops, 'F2', 10, 42, y, '-', 0.13, 0.77, 0.58);
    text(p1Ops, 'F1', 9.5, 52, y, b, 0.2, 0.22, 0.26);
    y -= 13.5;
  }

  // Page 1 Footer
  text(p1Ops, 'F1', 8.5, 35, 25, 'Meseret Shumye  -  Executive Curriculum Vitae (Page 1 of 2)  |  Return home: http://localhost:3000/', 0.55, 0.58, 0.62);
  line(p1Ops, 35, 36, pageWidth - 35, 36, 0.88, 0.9, 0.92, 0.75);

  // ==================== PAGE 2 ====================
  // Top "Back to Home" Bar Page 2
  rect(p2Ops, 0, 818, pageWidth, 23.89, 0.04, 0.07, 0.14);
  text(p2Ops, 'F2', 9, 30, 826, '<-- BACK TO HOME / PORTFOLIO  |  Click anywhere on this bar to return to website', 0.2, 0.85, 0.65);

  // Subheader Page 2
  rect(p2Ops, 0, 770, pageWidth, 44, 0.05, 0.08, 0.15);
  rect(p2Ops, 0, 767, pageWidth, 3, 0.13, 0.77, 0.58);
  text(p2Ops, 'F2', 13, 35, 786, 'MESERET SHUMYE  -  CURRICULUM VITAE (CONT.)', 1, 1, 1);

  let y2 = 735;

  // Education Section
  text(p2Ops, 'F2', 11.5, 35, y2, 'ACADEMIC QUALIFICATIONS', 0.05, 0.08, 0.15);
  line(p2Ops, 35, y2 - 4, pageWidth - 35, y2 - 4, 0.13, 0.77, 0.58, 1.5);
  y2 -= 20;

  text(p2Ops, 'F2', 11, 35, y2, 'B.Sc. in Civil & Environmental Engineering', 0.05, 0.08, 0.15);
  text(p2Ops, 'F2', 9.5, pageWidth - 135, y2, '2013 - 2018', 0.13, 0.77, 0.58);
  y2 -= 13;
  text(p2Ops, 'F1', 9.5, 35, y2, 'Addis Ababa University (AAiT)  -  Addis Ababa, Ethiopia', 0.4, 0.44, 0.48);
  y2 -= 14;
  text(p2Ops, 'F1', 9.5, 35, y2, 'Rigorous 5-year engineering curriculum covering structural analysis, computational modeling, and project management.', 0.25, 0.28, 0.32);

  // Featured Projects Section
  y2 -= 26;
  text(p2Ops, 'F2', 11.5, 35, y2, 'KEY PROJECTS & TECHNICAL HIGHLIGHTS', 0.05, 0.08, 0.15);
  line(p2Ops, 35, y2 - 4, pageWidth - 35, y2 - 4, 0.13, 0.77, 0.58, 1.5);
  y2 -= 20;

  const projList = [
    {
      name: 'Enterprise SaaS Dashboard & Management Platform',
      tech: 'React, Node.js, Express, PostgreSQL, Tailwind CSS',
      desc: 'Architected end-to-end full-stack dashboard featuring real-time data visualization, JWT role-based authentication, and optimized SQL performance.'
    },
    {
      name: 'On-Demand Urban Mobility & Ride-Hailing Mobile App',
      tech: 'React Native, Expo, Node.js, WebSocket, Google Maps API',
      desc: 'Developed cross-platform mobile client with live GPS driver-rider matching, responsive interactive maps, and frictionless payment workflow.'
    },
    {
      name: 'Medical Clinic Management & Appointment System',
      tech: 'Next.js, Tailwind CSS, PostgreSQL, NestJS',
      desc: 'Automated patient booking, doctor schedules, medical records encryption, and SMS reminders with 99.9% uptime reliability.'
    }
  ];

  for (const pr of projList) {
    text(p2Ops, 'F2', 10, 35, y2, pr.name, 0.05, 0.08, 0.15);
    y2 -= 12;
    text(p2Ops, 'F1', 8.8, 35, y2, `Technologies: ${pr.tech}`, 0.13, 0.77, 0.58);
    y2 -= 12;
    text(p2Ops, 'F1', 9.2, 35, y2, pr.desc, 0.25, 0.28, 0.32);
    y2 -= 18;
  }

  // Core Strengths & Languages
  y2 -= 6;
  text(p2Ops, 'F2', 11.5, 35, y2, 'CORE STRENGTHS & LANGUAGES', 0.05, 0.08, 0.15);
  line(p2Ops, 35, y2 - 4, pageWidth - 35, y2 - 4, 0.13, 0.77, 0.58, 1.5);
  y2 -= 20;

  const strengths = [
    'Contract Administration (FIDIC) & Engineering Law',
    'Cross-Functional Team Collaboration & Leadership',
    'Quality Assurance, Regulatory Compliance & Testing',
    'English: Professional Working Proficiency',
    'Amharic: Native / Bilingual Proficiency'
  ];
  for (const s of strengths) {
    text(p2Ops, 'F2', 10, 42, y2, '*', 0.13, 0.77, 0.58);
    text(p2Ops, 'F1', 9.5, 54, y2, s, 0.2, 0.22, 0.26);
    y2 -= 14;
  }

  // Page 2 Footer
  text(p2Ops, 'F1', 8.5, 35, 25, 'Meseret Shumye  -  Executive Curriculum Vitae (Page 2 of 2)  |  Return home: http://localhost:3000/', 0.55, 0.58, 0.62);
  line(p2Ops, 35, 36, pageWidth - 35, 36, 0.88, 0.9, 0.92, 0.75);

  // Compile streams
  const s1 = p1Ops.join('\n');
  const s2 = p2Ops.join('\n');

  // Build Objects
  // 1: Catalog
  // 2: Pages
  // 3: F1 (Helvetica)
  // 4: F2 (Helvetica-Bold)
  // 5: Page 1
  // 6: Stream 1
  // 7: Page 2
  // 8: Stream 2
  // 9: Link Annotation 1
  // 10: Link Annotation 2

  const objList = [];

  objList[1] = `<< /Type /Catalog /Pages 2 0 R >>`;
  objList[2] = `<< /Type /Pages /Kids [5 0 R 7 0 R] /Count 2 >>`;
  objList[3] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`;
  objList[4] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`;
  objList[5] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents 6 0 R /Annots [ 9 0 R ] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> >>`;
  objList[6] = `<< /Length ${Buffer.byteLength(s1, 'utf8')} >>\nstream\n${s1}\nendstream`;
  objList[7] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents 8 0 R /Annots [ 10 0 R ] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> >>`;
  objList[8] = `<< /Length ${Buffer.byteLength(s2, 'utf8')} >>\nstream\n${s2}\nendstream`;
  objList[9] = `<< /Type /Annot /Subtype /Link /Rect [0 818 ${pageWidth} 841.89] /Border [0 0 0] /A << /Type /Action /S /URI /URI (http://localhost:3000/) >> >>`;
  objList[10] = `<< /Type /Annot /Subtype /Link /Rect [0 818 ${pageWidth} 841.89] /Border [0 0 0] /A << /Type /Action /S /URI /URI (http://localhost:3000/) >> >>`;

  let out = `%PDF-1.4\n%\xE2\xE3\xCF\xD3\n`;
  const xref = [0];

  for (let i = 1; i <= 10; i++) {
    xref[i] = Buffer.byteLength(out, 'utf8');
    out += `${i} 0 obj\n${objList[i]}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(out, 'utf8');
  out += `xref\n0 11\n`;
  out += `0000000000 65535 f \n`;
  for (let i = 1; i <= 10; i++) {
    out += `${String(xref[i]).padStart(10, '0')} 00000 n \n`;
  }

  out += `trailer\n<< /Size 11 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const destDir = path.resolve('public');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const destPath = path.join(destDir, 'Meseret_Shumye_Resume.pdf');
  fs.writeFileSync(destPath, Buffer.from(out, 'utf8'));
  console.log(`PDF successfully generated with Back-to-Home link annotations at: ${destPath} (${fs.statSync(destPath).size} bytes)`);
}

createPDF();
