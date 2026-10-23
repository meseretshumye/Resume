import React from 'react';

export default function TechIcon({ name, className = 'w-6 h-6' }) {
  const norm = (name || '').toLowerCase().trim();

  // 1. React.js
  if (norm.includes('react.js') || norm === 'react') {
    return (
      <svg viewBox="0 0 115.3 100" className={className}>
        <circle cx="57.65" cy="50" r="10" fill="#00d8ff" />
        <ellipse cx="57.65" cy="50" rx="55" ry="20" fill="none" stroke="#00d8ff" strokeWidth="6" />
        <ellipse cx="57.65" cy="50" rx="55" ry="20" fill="none" stroke="#00d8ff" strokeWidth="6" transform="rotate(60 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="55" ry="20" fill="none" stroke="#00d8ff" strokeWidth="6" transform="rotate(120 57.65 50)" />
      </svg>
    );
  }

  // 2. React Native
  if (norm.includes('react native')) {
    return (
      <svg viewBox="0 0 120 100" className={className}>
        <rect x="35" y="10" width="50" height="80" rx="8" fill="none" stroke="#38bdf8" strokeWidth="4" />
        <circle cx="60" cy="80" r="3" fill="#38bdf8" />
        <ellipse cx="60" cy="45" rx="36" ry="12" fill="none" stroke="#00d8ff" strokeWidth="3.5" transform="rotate(30 60 45)" />
        <ellipse cx="60" cy="45" rx="36" ry="12" fill="none" stroke="#00d8ff" strokeWidth="3.5" transform="rotate(-30 60 45)" />
        <circle cx="60" cy="45" r="5" fill="#00d8ff" />
      </svg>
    );
  }

  // 3. JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="16" fill="#F7DF1E" />
        <path d="M 32 40 L 32 68 C 32 75 28 78 20 78 C 14 78 10 75 8 70 L 17 64 C 18 68 20 70 23 70 C 26 70 27 68 27 64 L 27 40 Z" fill="#000000" />
        <path d="M 45 68 C 50 74 58 78 68 78 C 80 78 88 72 88 61 C 88 51 82 48 71 44 L 66 42 C 59 39 55 37 55 31 C 55 25 60 21 68 21 C 74 21 80 24 84 30 L 91 22 C 85 14 77 11 67 11 C 55 11 47 18 47 29 C 47 39 53 43 63 47 L 68 49 C 76 52 80 55 80 62 C 80 69 74 73 66 73 C 58 73 52 68 47 62 Z" fill="#000000" transform="translate(-10, -5)" />
      </svg>
    );
  }

  // 4. TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="16" fill="#3178C6" />
        <path d="M 22 36 L 48 36 L 48 44 L 39 44 L 39 76 L 31 76 L 31 44 L 22 44 Z" fill="#FFFFFF" />
        <path d="M 52 65 C 56 71 63 76 72 76 C 81 76 87 71 87 63 C 87 55 81 51 72 48 L 67 46 C 61 44 58 42 58 37 C 58 32 62 29 69 29 C 74 29 79 32 82 36 L 88 30 C 83 24 76 21 68 21 C 57 21 50 27 50 36 C 50 44 55 49 64 52 L 69 54 C 76 57 79 59 79 65 C 79 70 74 74 67 74 C 61 74 56 70 52 64 Z" fill="#FFFFFF" transform="translate(0, -2)" />
      </svg>
    );
  }

  // 5. Next.js
  if (norm.includes('next.js') || norm === 'nextjs') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="48" fill="#000000" stroke="#334155" strokeWidth="2" />
        <path d="M 34 30 L 34 70 L 42 70 L 42 44 L 66 72 L 72 72 L 72 30 L 64 30 L 64 56 L 40 28 L 34 30 Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 6. Expo
  if (norm.includes('expo')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#1e1e2f" stroke="#38bdf8" strokeWidth="2" />
        <path d="M 50 18 L 82 72 L 66 72 L 50 44 L 34 72 L 18 72 Z" fill="#38bdf8" />
        <polygon points="50,42 60,60 40,60" fill="#ffffff" />
      </svg>
    );
  }

  // 7. Redux Toolkit
  if (norm.includes('redux')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#1e1b4b" stroke="#764ABC" strokeWidth="2" />
        <circle cx="50" cy="50" r="14" fill="#764ABC" />
        <circle cx="30" cy="35" r="9" fill="#9333ea" />
        <circle cx="70" cy="35" r="9" fill="#9333ea" />
        <circle cx="50" cy="72" r="9" fill="#c084fc" />
        <path d="M 30 35 Q 50 15 70 35 T 50 72 Z" fill="none" stroke="#764ABC" strokeWidth="4" />
      </svg>
    );
  }

  // 8. Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 28 40 C 33 28 42 22 55 22 C 68 22 72 30 78 35 C 83 39 88 41 94 41 C 89 53 80 59 67 59 C 54 59 50 51 44 46 C 39 42 34 40 28 40 Z" fill="#06B6D4" />
        <path d="M 6 63 C 11 51 20 45 33 45 C 46 45 50 53 56 58 C 61 62 66 64 72 64 C 67 76 58 82 45 82 C 32 82 28 74 22 69 C 17 65 12 63 6 63 Z" fill="#38BDF8" />
      </svg>
    );
  }

  // 9. HTML5
  if (norm.includes('html5') || norm === 'html') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 12 8 L 20 88 L 50 96 L 80 88 L 88 8 Z" fill="#E34F26" />
        <path d="M 50 14 L 50 90 L 74 83 L 81 14 Z" fill="#EF652A" />
        <path d="M 50 28 L 28 28 L 30 44 L 50 44 L 50 58 L 35 58 L 34 48 L 24 48 L 26 68 L 50 68 L 50 82 L 67 77 L 70 48 L 72 28 Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 10. CSS3
  if (norm.includes('css3') || norm === 'css') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 12 8 L 20 88 L 50 96 L 80 88 L 88 8 Z" fill="#1572B6" />
        <path d="M 50 14 L 50 90 L 74 83 L 81 14 Z" fill="#33A9DC" />
        <path d="M 50 28 L 72 28 L 70 44 L 50 44 L 50 58 L 65 58 L 64 68 L 50 72 L 50 82 L 67 77 L 70 48 L 72 28 Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 11. Bootstrap 5
  if (norm.includes('bootstrap')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="22" fill="#7952B3" />
        <path d="M 34 26 L 54 26 C 64 26 70 30 70 37 C 70 42 66 46 60 48 C 68 50 72 56 72 63 C 72 72 64 76 52 76 L 34 76 Z M 46 37 L 46 47 L 53 47 C 58 47 61 45 61 42 C 61 39 58 37 53 37 Z M 46 55 L 46 66 L 54 66 C 60 66 63 64 63 60 C 63 57 60 55 54 55 Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 12. Responsive UI
  if (norm.includes('responsive') || norm.includes('mobile-first')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="8" y="14" width="60" height="42" rx="4" fill="none" stroke="#6366f1" strokeWidth="4" />
        <line x1="28" y1="56" x2="48" y2="56" stroke="#6366f1" strokeWidth="4" />
        <line x1="38" y1="56" x2="38" y2="66" stroke="#6366f1" strokeWidth="4" />
        <line x1="26" y1="66" x2="50" y2="66" stroke="#6366f1" strokeWidth="4" />
        <rect x="58" y="32" width="34" height="54" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="4" />
        <circle cx="75" cy="78" r="2.5" fill="#10b981" />
      </svg>
    );
  }

  // 12.5. NestJS
  if (norm.includes('nest')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 16 32 L 32 46 C 38 42 44 40 50 40 C 56 40 62 42 68 46 L 84 32 C 86 42 86 54 80 66 C 74 78 63 86 50 88 C 37 86 26 78 20 66 C 14 54 14 42 16 32 Z" fill="#E0234E" />
        <path d="M 28 44 L 38 54 C 42 52 46 50 50 50 C 54 50 58 52 62 54 L 72 44 C 68 38 60 34 50 34 C 40 34 32 38 28 44 Z" fill="#C51840" />
        <circle cx="36" cy="58" r="4" fill="#ffffff" />
        <circle cx="64" cy="58" r="4" fill="#ffffff" />
        <polygon points="50,66 46,72 54,72" fill="#ffffff" />
      </svg>
    );
  }

  // 13. Node.js
  if (norm.includes('node.js') || norm === 'node') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <polygon points="50,8 88,30 88,72 50,94 12,72 12,30" fill="#339933" />
        <path d="M 50 24 L 74 38 L 74 64 L 50 78 L 26 64 L 26 38 Z" fill="#0f172a" opacity="0.4" />
        <text x="50" y="58" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="800" textAnchor="middle">NODE</text>
      </svg>
    );
  }

  // 14. Express.js
  if (norm.includes('express')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="20" fill="#1e293b" stroke="#475569" strokeWidth="2" />
        <text x="50" y="60" fill="#f8fafc" fontFamily="system-ui, sans-serif" fontSize="32" fontWeight="900" fontStyle="italic" textAnchor="middle">ex</text>
      </svg>
    );
  }

  // 15. RESTful APIs
  if (norm.includes('rest')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#042f2e" stroke="#14b8a6" strokeWidth="2" />
        <path d="M 25 35 L 15 50 L 25 65" fill="none" stroke="#2dd4bf" strokeWidth="6" strokeLinecap="round" />
        <path d="M 75 35 L 85 50 L 75 65" fill="none" stroke="#2dd4bf" strokeWidth="6" strokeLinecap="round" />
        <text x="50" y="58" fill="#ffffff" fontFamily="monospace" fontSize="18" fontWeight="800" textAnchor="middle">API</text>
      </svg>
    );
  }

  // 16. WebSockets / Socket.io
  if (norm.includes('socket') || norm.includes('websocket')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="46" fill="#000000" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#38bdf8" strokeWidth="3" opacity="0.5" />
        <circle cx="50" cy="50" r="16" fill="none" stroke="#38bdf8" strokeWidth="3" />
        <polygon points="52,22 40,50 50,50 46,76 62,46 52,46" fill="#facc15" />
      </svg>
    );
  }

  // 17. GraphQL
  if (norm.includes('graphql')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="18" r="8" fill="#E10098" />
        <circle cx="78" cy="34" r="8" fill="#E10098" />
        <circle cx="78" cy="66" r="8" fill="#E10098" />
        <circle cx="50" cy="82" r="8" fill="#E10098" />
        <circle cx="22" cy="66" r="8" fill="#E10098" />
        <circle cx="22" cy="34" r="8" fill="#E10098" />
        <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="none" stroke="#E10098" strokeWidth="4" />
        <polygon points="50,18 78,66 22,66" fill="none" stroke="#E10098" strokeWidth="3" opacity="0.6" />
        <polygon points="50,82 78,34 22,34" fill="none" stroke="#E10098" strokeWidth="3" opacity="0.6" />
      </svg>
    );
  }

  // 18. JWT & Auth
  if (norm.includes('jwt') || norm.includes('auth')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#18181b" stroke="#d946ef" strokeWidth="2" />
        <circle cx="30" cy="50" r="12" fill="#ec4899" />
        <circle cx="50" cy="50" r="12" fill="#a855f7" />
        <circle cx="70" cy="50" r="12" fill="#06b6d4" />
        <text x="50" y="80" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="800" textAnchor="middle">JWT</text>
      </svg>
    );
  }

  // 19. Microservices
  if (norm.includes('microservices')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="15" y="15" width="28" height="28" rx="6" fill="#3b82f6" />
        <rect x="57" y="15" width="28" height="28" rx="6" fill="#10b981" />
        <rect x="15" y="57" width="28" height="28" rx="6" fill="#f59e0b" />
        <rect x="57" y="57" width="28" height="28" rx="6" fill="#8b5cf6" />
        <line x1="43" y1="29" x2="57" y2="29" stroke="#94a3b8" strokeWidth="3" strokeDasharray="2" />
        <line x1="29" y1="43" x2="29" y2="57" stroke="#94a3b8" strokeWidth="3" strokeDasharray="2" />
        <line x1="71" y1="43" x2="71" y2="57" stroke="#94a3b8" strokeWidth="3" strokeDasharray="2" />
      </svg>
    );
  }

  // 20. PostgreSQL
  if (norm.includes('postgres')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#1e293b" stroke="#336791" strokeWidth="2" />
        <path d="M 40 25 C 55 20 72 25 76 42 C 80 58 68 76 52 78 L 48 78 L 48 64 C 40 64 34 58 34 50 C 34 42 40 38 48 38 C 48 30 44 26 40 25 Z" fill="#336791" />
        <circle cx="58" cy="40" r="4" fill="#ffffff" />
        <text x="50" y="92" fill="#38bdf8" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" textAnchor="middle">POSTGRES</text>
      </svg>
    );
  }

  // 21. MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#022c22" stroke="#47A248" strokeWidth="2" />
        <path d="M 50 14 C 50 14 30 38 30 58 C 30 74 42 86 50 90 C 58 86 70 74 70 58 C 70 38 50 14 50 14 Z" fill="#47A248" />
        <path d="M 50 14 L 50 90 C 58 86 70 74 70 58 C 70 38 50 14 50 14 Z" fill="#499D4A" opacity="0.6" />
        <line x1="50" y1="18" x2="50" y2="88" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
      </svg>
    );
  }

  // 22. MySQL
  if (norm.includes('mysql')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#082f49" stroke="#00758F" strokeWidth="2" />
        <path d="M 22 62 C 34 40 60 30 76 45 C 84 52 82 66 74 70 C 66 74 54 68 50 60 C 44 64 32 68 22 62 Z" fill="#F29111" />
        <path d="M 30 50 C 42 35 68 32 78 50" fill="none" stroke="#00758F" strokeWidth="4" />
        <text x="50" y="86" fill="#38bdf8" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="800" textAnchor="middle">MySQL</text>
      </svg>
    );
  }

  // 23. Redis
  if (norm.includes('redis')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#450a0a" stroke="#DC382D" strokeWidth="2" />
        <polygon points="50,22 82,38 50,54 18,38" fill="#DC382D" />
        <polygon points="50,42 82,58 50,74 18,58" fill="#B91C1C" />
        <polygon points="50,60 82,76 50,92 18,76" fill="#991B1B" />
      </svg>
    );
  }

  // 24. Firebase
  if (norm.includes('firebase')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#18181b" stroke="#FFCA28" strokeWidth="2" />
        <polygon points="24,76 40,24 50,44" fill="#FFA000" />
        <polygon points="24,76 76,76 58,16" fill="#FFCA28" />
        <polygon points="50,44 76,76 24,76" fill="#FF8F00" />
      </svg>
    );
  }

  // 25. Supabase & SQLite
  if (norm.includes('supabase') || norm.includes('sqlite')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#062e26" stroke="#3ECF8E" strokeWidth="2" />
        <path d="M 54 14 L 24 54 C 22 57 24 61 28 61 L 48 61 L 42 86 C 40 90 45 93 48 89 L 76 46 C 78 43 76 39 72 39 L 52 39 L 54 14 Z" fill="#3ECF8E" />
      </svg>
    );
  }

  // 25.5. AWS Cloud
  if (norm.includes('aws') || norm.includes('amazon')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <text x="50" y="46" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="900" textAnchor="middle" letterSpacing="1">aws</text>
        <path d="M 26 56 C 40 68 60 68 74 56" fill="none" stroke="#FF9900" strokeWidth="4.5" strokeLinecap="round" />
        <polygon points="75,53 76,61 69,57" fill="#FF9900" />
      </svg>
    );
  }

  // 25.6. Database Modeling
  if (norm.includes('modeling') || norm.includes('schema') || norm.includes('erd')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
        <ellipse cx="50" cy="28" rx="26" ry="9" fill="#34d399" />
        <path d="M 24 28 V 46 C 24 51 35.6 55 50 55 C 64.4 55 76 51 76 46 V 28" fill="none" stroke="#34d399" strokeWidth="3" />
        <path d="M 24 46 V 64 C 24 69 35.6 73 50 73 C 64.4 73 76 69 76 64 V 46" fill="none" stroke="#34d399" strokeWidth="3" />
        <line x1="36" y1="37" x2="64" y2="37" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <line x1="36" y1="55" x2="64" y2="55" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 26. Docker
  if (norm.includes('docker')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#082f49" stroke="#2496ED" strokeWidth="2" />
        <rect x="36" y="30" width="8" height="8" fill="#2496ED" />
        <rect x="46" y="30" width="8" height="8" fill="#2496ED" />
        <rect x="56" y="30" width="8" height="8" fill="#2496ED" />
        <rect x="26" y="40" width="8" height="8" fill="#2496ED" />
        <rect x="36" y="40" width="8" height="8" fill="#2496ED" />
        <rect x="46" y="40" width="8" height="8" fill="#2496ED" />
        <rect x="56" y="40" width="8" height="8" fill="#2496ED" />
        <rect x="66" y="40" width="8" height="8" fill="#2496ED" />
        <path d="M 16 52 C 22 52 28 58 38 58 C 48 58 52 50 64 50 C 76 50 82 56 86 64 C 84 72 74 76 60 76 C 36 76 18 68 16 52 Z" fill="#2496ED" />
        <circle cx="76" cy="58" r="2.5" fill="#ffffff" />
      </svg>
    );
  }

  // 27. Git / GitHub
  if (norm.includes('git')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#260f08" stroke="#F05032" strokeWidth="2" />
        <g transform="rotate(45 50 50)">
          <rect x="25" y="25" width="50" height="50" rx="10" fill="#F05032" />
          <circle cx="40" cy="40" r="5" fill="#ffffff" />
          <circle cx="60" cy="60" r="5" fill="#ffffff" />
          <circle cx="60" cy="40" r="5" fill="#ffffff" />
          <line x1="40" y1="40" x2="60" y2="60" stroke="#ffffff" strokeWidth="3" />
          <line x1="60" y1="40" x2="60" y2="60" stroke="#ffffff" strokeWidth="3" />
        </g>
      </svg>
    );
  }

  // 28. CI/CD & GitHub Actions
  if (norm.includes('ci/cd') || norm.includes('actions')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
        <circle cx="32" cy="50" r="10" fill="none" stroke="#818cf8" strokeWidth="4" />
        <circle cx="68" cy="34" r="10" fill="none" stroke="#34d399" strokeWidth="4" />
        <circle cx="68" cy="66" r="10" fill="none" stroke="#38bdf8" strokeWidth="4" />
        <path d="M 42 50 C 52 50 56 34 58 34" fill="none" stroke="#94a3b8" strokeWidth="3" />
        <path d="M 42 50 C 52 50 56 66 58 66" fill="none" stroke="#94a3b8" strokeWidth="3" />
      </svg>
    );
  }

  // 29. Vite
  if (norm.includes('vite')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <polygon points="50,12 88,32 50,92 12,32" fill="#646CFF" opacity="0.3" />
        <polygon points="50,14 84,34 50,88 16,34" fill="none" stroke="#BD34FE" strokeWidth="3" />
        <polygon points="54,20 32,54 48,54 42,82 68,44 52,44" fill="#FFD62E" />
      </svg>
    );
  }

  // 30. Postman & Swagger
  if (norm.includes('postman') || norm.includes('swagger')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="46" fill="#FF6C37" />
        <path d="M 35 60 C 40 45 52 35 65 30 L 68 34 C 55 40 46 50 42 64 Z" fill="#FFFFFF" />
        <polygon points="62,26 72,32 64,40" fill="#FFFFFF" />
        <circle cx="48" cy="48" r="8" fill="#FFFFFF" />
      </svg>
    );
  }

  // 30.5. Agile / Scrum
  if (norm.includes('agile') || norm.includes('scrum')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M 50 22 C 65 22 78 35 78 50 C 78 65 65 78 50 78 C 37 78 26 69 23 56" fill="none" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
        <polygon points="16,54 24,44 30,56" fill="#a855f7" />
        <circle cx="50" cy="50" r="10" fill="#c084fc" />
      </svg>
    );
  }

  // 31. Linux / Bash
  if (norm.includes('linux') || norm.includes('bash')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#0f172a" stroke="#e2e8f0" strokeWidth="2" />
        <path d="M 24 38 L 42 50 L 24 62" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="48" y1="62" x2="74" y2="62" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // 32. Figma
  if (norm.includes('figma')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#18181b" stroke="#334155" strokeWidth="2" />
        <path d="M 36 20 C 43 20 50 27 50 35 L 50 50 L 36 50 C 28 50 22 43 22 35 C 22 27 28 20 36 20 Z" fill="#F24E1E" />
        <path d="M 50 20 L 64 20 C 72 20 78 27 78 35 C 78 43 72 50 64 50 L 50 50 Z" fill="#FF7262" />
        <path d="M 50 50 L 64 50 C 72 50 78 57 78 65 C 78 73 72 80 64 80 C 56 80 50 73 50 65 Z" fill="#1ABCFE" />
        <path d="M 22 65 C 22 57 28 50 36 50 L 50 50 L 50 65 C 50 73 43 80 36 80 C 28 80 22 73 22 65 Z" fill="#0ACF83" />
        <circle cx="36" cy="50" r="14" fill="#A259FF" />
      </svg>
    );
  }

  // 33. Contract & Project Administration
  if (norm.includes('contract') || norm.includes('project administration')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
        <rect x="25" y="20" width="50" height="60" rx="6" fill="#ffffff" />
        <line x1="35" y1="34" x2="65" y2="34" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
        <line x1="35" y1="46" x2="65" y2="46" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <line x1="35" y1="56" x2="55" y2="56" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="62" cy="65" r="9" fill="#f59e0b" />
        <polygon points="62,60 64,64 68,64 65,67 66,71 62,69 58,71 59,67 56,64 60,64" fill="#ffffff" />
      </svg>
    );
  }

  // 34. Quality Assurance & Compliance
  if (norm.includes('quality') || norm.includes('compliance')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="18" fill="#052e16" stroke="#22c55e" strokeWidth="2" />
        <path d="M 50 18 L 76 28 C 76 54 64 74 50 82 C 36 74 24 54 24 28 Z" fill="#15803d" />
        <path d="M 40 48 L 48 56 L 62 40" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Fallback generic badge
  return (
    <div className={`${className} rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs`}>
      {name.substring(0, 2).toUpperCase()}
    </div>
  );
}

