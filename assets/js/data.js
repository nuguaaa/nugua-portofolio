/**
 * Portfolio Data File
 * Fully localized for English (en), Indonesian (id), and German (de)
 */

const portfolioData = {
    // Projects Data
    projects: [
        {
            id: "nexus-commerce",
            category: "fullstack",
            featured: true,
            previewIcon: "fa-solid fa-store",
            previewLabel: "E-Commerce App",
            badgeText: {
                en: "Production",
                id: "Produksi",
                de: "Produktion"
            },
            badgeColorClass: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
            githubUrl: "https://github.com/nuguaaa",
            liveUrl: "https://github.com/nuguaaa",
            title: {
                en: "NexusCommerce Enterprise",
                id: "NexusCommerce Enterprise",
                de: "NexusCommerce Enterprise"
            },
            shortDesc: {
                en: "High-performance full-stack e-commerce solution with multi-currency checkout, inventory management, and automated invoice delivery.",
                id: "Solusi toko online full-stack performa tinggi dengan multi-mata uang, manajemen stok real-time, dan invoice otomatis.",
                de: "Leistungsstarke Full-Stack-E-Commerce-Lösung mit Multi-Währungs-Checkout, Bestandsverwaltung und automatisierter Rechnungserstellung."
            },
            fullDesc: {
                en: "NexusCommerce is a robust, production-ready web application engineered to bridge complex retail operations with a frictionless shopping experience. Features secure payment gateway integrations (Stripe, Midtrans), comprehensive administrative dashboard, RBAC permissions, and sub-second page loads via server-side caching.",
                id: "NexusCommerce adalah aplikasi web skala produksi yang dirancang untuk menghubungkan operasional ritel kompleks dengan pengalaman belanja yang mulus. Dilengkapi integrasi gateway pembayaran aman (Stripe, Midtrans), dashboard admin komprehensif, hak akses RBAC, dan waktu muat cepat.",
                de: "NexusCommerce ist eine produktionsreife Webanwendung, die anspruchsvollen Einzelhandel mit einem reibungslosen Einkaufserlebnis verbindet. Mit sicherer Payment-Gateway-Integration (Stripe, Midtrans), umfassendem Admin-Dashboard und sub-sekundenschnellen Ladezeiten."
            },
            features: {
                en: [
                    "Full shopping cart lifecycle with guest & member checkout",
                    "Real-time stock reservation and webhook order notifications",
                    "Admin analytics cockpit with sales charts and export to CSV/PDF",
                    "Optimized for 95+ Google Lighthouse performance score"
                ],
                id: [
                    "Siklus keranjang belanja lengkap untuk tamu dan akun terdaftar",
                    "Reservasi stok real-time dan notifikasi pesanan via webhook",
                    "Dashboard analitik admin dengan grafik penjualan dan ekspor CSV/PDF",
                    "Dioptimalkan untuk skor performa Google Lighthouse 95+"
                ],
                de: [
                    "Vollständiger Warenkorb-Lebenszyklus mit Gast- und Mitglieds-Checkout",
                    "Echtzeit-Lagerreservierung und Webhook-Bestellbenachrichtigungen",
                    "Admin-Analyse-Cockpit mit Verkaufsdiagrammen und PDF/CSV-Export",
                    "Optimiert für 95+ Google Lighthouse Performance-Score"
                ]
            },
            techs: [
                { name: "Laravel 11", icon: "fa-brands fa-laravel text-red-500" },
                { name: "PHP 8.2", icon: "fa-brands fa-php text-indigo-400" },
                { name: "Tailwind CSS", icon: "fa-solid fa-wind text-sky-400" },
                { name: "JavaScript", icon: "fa-brands fa-js text-yellow-500" },
                { name: "MySQL", icon: "fa-solid fa-database text-blue-400" },
                { name: "Redis", icon: "fa-solid fa-server text-red-400" }
            ]
        },
        {
            id: "pulse-saas-dashboard",
            category: "fullstack",
            featured: true,
            previewIcon: "fa-solid fa-chart-line",
            previewLabel: "SaaS Analytics",
            badgeText: {
                en: "Enterprise SaaS",
                id: "SaaS Enterprise",
                de: "Enterprise SaaS"
            },
            badgeColorClass: "bg-[#7593ff]/20 text-[#7593ff] border border-[#7593ff]/30",
            githubUrl: "https://github.com/nuguaaa",
            liveUrl: "https://github.com/nuguaaa",
            title: {
                en: "Pulse Analytics Cockpit",
                id: "Pulse Analytics Cockpit",
                de: "Pulse Analytics Cockpit"
            },
            shortDesc: {
                en: "Modern glassmorphic business intelligence dashboard featuring real-time event streaming, team activity tracking, and customizable telemetry widgets.",
                id: "Dashboard business intelligence bergaya glassmorphic dengan streaming metrik real-time, pantauan aktivitas tim, dan widget modular.",
                de: "Modernes Business-Intelligence-Dashboard mit Echtzeit-Event-Streaming, Team-Aktivitätsverfolgung und konfigurierbaren Widgets."
            },
            fullDesc: {
                en: "Pulse empowers modern tech teams to visualize key performance indicators in real time. Designed with responsive glassmorphism aesthetic, dark/light dynamic theming, and an intuitive component architecture that renders massive datasets without browser lag.",
                id: "Pulse memberdayakan tim teknologi untuk memvisualisasikan KPI bisnis secara real-time. Didesain dengan estetika glassmorphism responsif, tema gelap/terang dinamis, dan rendering data cepat tanpa lag pada browser.",
                de: "Pulse ermöglicht es agilen Tech-Teams, zentrale Kennzahlen in Echtzeit zu visualisieren. Entwickelt mit moderner Glassmorphismus-Ästhetik, Dark/Light-Theming und einer hochperformanten Komponentenarchitektur."
            },
            features: {
                en: [
                    "Interactive charts with dynamic date-range filtering",
                    "Customizable dashboard layout with drag-and-drop cards",
                    "Granular user permissions and team workspace switching",
                    "RESTful API integration with sub-50ms query responses"
                ],
                id: [
                    "Grafik interaktif dengan filter rentang tanggal dinamis",
                    "Tata letak dashboard modular yang dapat disesuaikan",
                    "Hak akses pengguna bertingkat dan multi-ruang kerja tim",
                    "Integrasi RESTful API dengan respon kueri super cepat"
                ],
                de: [
                    "Interaktive Diagramme mit flexibler Datumsbereichsfilterung",
                    "Anpassbares Dashboard-Layout mit modularen Widgets",
                    "Granulare Benutzerrechte und Mandantenfähigkeit",
                    "REST-API-Integration mit extrem schnellen Antwortzeiten"
                ]
            },
            techs: [
                { name: "JavaScript ES6+", icon: "fa-brands fa-js text-yellow-500" },
                { name: "Tailwind CSS", icon: "fa-solid fa-wind text-sky-400" },
                { name: "PHP / Laravel", icon: "fa-brands fa-laravel text-red-500" },
                { name: "Chart.js", icon: "fa-solid fa-chart-pie text-amber-400" },
                { name: "MySQL", icon: "fa-solid fa-database text-blue-400" }
            ]
        },
        {
            id: "carelink-portal",
            category: "fullstack",
            featured: true,
            previewIcon: "fa-solid fa-hospital-user",
            previewLabel: "Healthcare Portal",
            badgeText: {
                en: "Commercial",
                id: "Komersial",
                de: "Kommerziell"
            },
            badgeColorClass: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
            githubUrl: "https://github.com/nuguaaa",
            liveUrl: "https://github.com/nuguaaa",
            title: {
                en: "CareLink Telehealth System",
                id: "CareLink Sistem Telemedisin",
                de: "CareLink Telemedizin-Portal"
            },
            shortDesc: {
                en: "Scalable clinic management and digital consultation platform featuring real-time doctor scheduling and electronic medical records.",
                id: "Platform manajemen klinik dan konsultasi digital dengan jadwal dokter real-time dan rekam medis elektronik terenkripsi.",
                de: "Skalierbare Praxismanagement- und Konsultationsplattform mit Arzt-Terminplanung in Echtzeit und elektronischer Patientenakte."
            },
            fullDesc: {
                en: "A comprehensive digital health solution designed for clinics and patients. Built with data privacy and audit compliance at its core, enabling instant digital booking, prescription tracking, and automated reminder alerts via email and SMS.",
                id: "Solusi kesehatan digital lengkap untuk klinik dan pasien. Dibangun dengan fokus privasi data dan keamanan audit, memudahkan reservasi langsung, pelacakan resep, dan pengingat otomatis.",
                de: "Umfassende digitale Gesundheitslösung für Praxen und Patienten. Entwickelt mit Fokus auf Datenschutz und Datensicherheit, inklusive digitaler Buchung und automatischer Erinnerungen."
            },
            features: {
                en: [
                    "Doctor timetable synchronization with slot booking",
                    "Encrypted patient medical records and diagnostic notes",
                    "Automated email notifications and reminder schedules",
                    "Fully accessible UI compliant with WCAG 2.1 AA guidelines"
                ],
                id: [
                    "Sinkronisasi jadwal praktik dokter dengan pemesanan slot otomatis",
                    "Rekam medis pasien terenkripsi dan catatan diagnosa aman",
                    "Notifikasi email otomatis dan pengingat jadwal konsultasi",
                    "Antarmuka ramah aksesibilitas sesuai panduan WCAG 2.1 AA"
                ],
                de: [
                    "Terminsynchronisation mit automatischer Slot-Vergabe",
                    "Verschlüsselte elektronische Patientenakten",
                    "Automatische E-Mail-Erinnerungen für Termine",
                    "Barrierefreie Benutzeroberfläche nach WCAG 2.1 AA Standards"
                ]
            },
            techs: [
                { name: "Laravel", icon: "fa-brands fa-laravel text-red-500" },
                { name: "Tailwind CSS", icon: "fa-solid fa-wind text-sky-400" },
                { name: "JavaScript", icon: "fa-brands fa-js text-yellow-500" },
                { name: "PostgreSQL", icon: "fa-solid fa-database text-blue-500" }
            ]
        },
        {
            id: "devflow-ai",
            category: "frontend",
            featured: true,
            previewIcon: "fa-solid fa-robot",
            previewLabel: "AI Developer Tool",
            badgeText: {
                en: "Featured App",
                id: "Aplikasi Unggulan",
                de: "Top-Anwendung"
            },
            badgeColorClass: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
            githubUrl: "https://github.com/nuguaaa",
            liveUrl: "https://github.com/nuguaaa",
            title: {
                en: "DevFlow AI Coding Suite",
                id: "DevFlow AI Coding Suite",
                de: "DevFlow KI-Entwickler-Suite"
            },
            shortDesc: {
                en: "Interactive web workspace integrating AI language models to generate syntax-highlighted code snippets, refactor functions, and explain complex algorithms.",
                id: "Ruang kerja web interaktif bertenaga AI untuk membuat cuplikan kode, refaktor fungsi secara otomatis, dan penjelasan algoritma.",
                de: "Interaktiver KI-Arbeitsbereich im Browser zur Generierung formatierter Code-Snippets, automatisierten Refaktorierung und Algorithmus-Erklärung."
            },
            fullDesc: {
                en: "DevFlow AI provides a frictionless developer playground with streaming token output, syntax tree inspector, and multiple code export formats. Designed with extreme attention to keyboard navigation, dark mode ergonomics, and instant clipboard utilities.",
                id: "DevFlow AI menghadirkan lingkungan kerja interaktif dengan streaming token langsung, penyorot sintaks kode, dan opsi ekspor. Didesain dengan navigasi keyboard yang mulus dan mode gelap ergonomis.",
                de: "DevFlow AI bietet Entwicklern eine reibungslose Spielwiese mit Streaming-Token-Ausgabe, Syntax-Highlighting und schnellen Exportfunktionen. Optimiert für Tastatur-Navigation und Dark-Mode-Ergonomie."
            },
            features: {
                en: [
                    "Streaming response generator for instant visual feedback",
                    "Syntax highlighting for 20+ programming languages",
                    "One-click snippet copy, markdown export, and local history cache",
                    "Zero framework dependencies for ultra-fast startup"
                ],
                id: [
                    "Generator respon streaming untuk feedback visual instan",
                    "Penyorot sintaks untuk lebih dari 20 bahasa pemrograman",
                    "Salin cuplikan satu klik, ekspor markdown, dan riwayat lokal",
                    "Arsitektur ringan tanpa beban framework untuk performa maksimal"
                ],
                de: [
                    "Streaming-Antworten für sofortige visuelle Rückmeldung",
                    "Syntax-Hervorhebung für über 20 Programmiersprachen",
                    "1-Klick-Code-Kopie, Markdown-Export und lokaler Verlaufsspeicher",
                    "Ultraschnelle Ladezeiten durch optimierte Kernbibliotheken"
                ]
            },
            techs: [
                { name: "JavaScript ES6+", icon: "fa-brands fa-js text-yellow-500" },
                { name: "Tailwind CSS", icon: "fa-solid fa-wind text-sky-400" },
                { name: "OpenAI API", icon: "fa-solid fa-microchip text-emerald-400" },
                { name: "HTML5", icon: "fa-brands fa-html5 text-orange-500" }
            ]
        },
        {
            id: "omnitask-api",
            category: "backend",
            featured: false,
            previewIcon: "fa-solid fa-network-wired",
            previewLabel: "RESTful API Engine",
            badgeText: {
                en: "Backend Architecture",
                id: "Arsitektur Backend",
                de: "Backend-Architektur"
            },
            badgeColorClass: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
            githubUrl: "https://github.com/nuguaaa",
            liveUrl: "https://github.com/nuguaaa",
            title: {
                en: "OmniTask Microservice API",
                id: "OmniTask Microservice API",
                de: "OmniTask Microservice API"
            },
            shortDesc: {
                en: "High-throughput task orchestration engine built with clean RESTful architecture, JWT authentication, and background worker queues.",
                id: "Mesin orkestrasi tugas berkinerja tinggi dengan arsitektur RESTful bersih, autentikasi JWT, dan antrean tugas background.",
                de: "Hochleistungsfähige Task-Orchestrierungs-Engine mit sauberer REST-Architektur, JWT-Authentifizierung und Hintergrund-Warteschlangen."
            },
            fullDesc: {
                en: "OmniTask API serves as the backbone for multi-tenant collaborative workflow systems. Features rate-limiting protection, comprehensive OpenAPI/Swagger documentation, redis caching layer, and automated PHPUnit test suites ensuring 92% code coverage.",
                id: "OmniTask API berfungsi sebagai tulang punggung sistem kolaborasi alur kerja multi-tenant. Dilengkapi proteksi pembatasan laju kueri, dokumentasi Swagger, caching Redis, dan pengujian PHPUnit.",
                de: "OmniTask API bildet das Rückgrat für mandantenfähige Kollaborationssysteme. Ausgestattet mit Rate-Limiting, OpenAPI/Swagger-Dokumentation, Redis-Caching und automatisierter Testabdeckung."
            },
            features: {
                en: [
                    "Stateful JWT authentication with refresh token rotation",
                    "Asynchronous worker queues processing 1,000+ jobs/min",
                    "Automated Swagger/OpenAPI interactive endpoint documentation",
                    "Strict PSR-12 coding compliance and automated testing"
                ],
                id: [
                    "Autentikasi JWT aman dengan rotasi token penyegaran",
                    "Antrean pemrosesan asynchronous berkapasitas 1.000+ pekerjaan/menit",
                    "Dokumentasi endpoint Swagger/OpenAPI interaktif otomatis",
                    "Kepatuhan standar PSR-12 dan cakupan pengujian unit tinggi"
                ],
                de: [
                    "Sichere JWT-Authentifizierung mit Refresh-Token-Rotation",
                    "Asynchrone Warteschlangen für über 1.000 Aufgaben/Minute",
                    "Automatische interaktive Swagger/OpenAPI-Dokumentation",
                    "Vollständige PSR-12-Konformität und Unit-Test-Suite"
                ]
            },
            techs: [
                { name: "PHP 8.2", icon: "fa-brands fa-php text-indigo-400" },
                { name: "Laravel", icon: "fa-brands fa-laravel text-red-500" },
                { name: "Redis", icon: "fa-solid fa-server text-red-400" },
                { name: "MySQL", icon: "fa-solid fa-database text-blue-400" },
                { name: "Docker", icon: "fa-brands fa-docker text-sky-500" }
            ]
        },
        {
            id: "cryptotrack-live",
            category: "frontend",
            featured: false,
            previewIcon: "fa-solid fa-coins",
            previewLabel: "Financial Ticker",
            badgeText: {
                en: "Real-Time Web",
                id: "Real-Time Web",
                de: "Echtzeit-Web"
            },
            badgeColorClass: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
            githubUrl: "https://github.com/nuguaaa",
            liveUrl: "https://github.com/nuguaaa",
            title: {
                en: "CryptoTrack Global Exchange",
                id: "CryptoTrack Global Exchange",
                de: "CryptoTrack Börsen-Ticker"
            },
            shortDesc: {
                en: "Ultra-low-latency financial dashboard streaming real-time cryptocurrency exchange orderbooks via WebSockets with interactive candle charts.",
                id: "Dashboard finansial latensi rendah yang menampilkan pergerakan harga aset kripto secara langsung menggunakan WebSocket dan grafik interaktif.",
                de: "Finanz-Dashboard mit extrem niedriger Latenz, das Echtzeit-Orderbücher über WebSockets streamt und interaktive Candlestick-Charts bietet."
            },
            fullDesc: {
                en: "A pure frontend engineering showcase handling high-frequency market updates. Employs requestAnimationFrame canvas rendering, customizable price alert triggers, and offline local storage caching for user watchlists.",
                id: "Aplikasi frontend modern yang mampu menangani ribuan pembaruan data pasar per detik. Memanfaatkan render canvas berbasis requestAnimationFrame dan alarm harga kustom.",
                de: "Modernes Frontend-Vorzeigeprojekt für hochfrequente Marktdaten. Nutzt Canvas-Rendering mit requestAnimationFrame und konfigurierbare Preisalarme."
            },
            features: {
                en: [
                    "Direct Binance public WebSocket stream integration",
                    "Interactive HTML5 Canvas candle charts with zoom & pan",
                    "Custom threshold browser sound and toast notifications",
                    "Lightweight footprint under 50KB gzipped"
                ],
                id: [
                    "Integrasi aliran data langsung WebSocket publik Binance",
                    "Grafik candlestick HTML5 Canvas interaktif dengan zoom dan geser",
                    "Notifikasi toast dan audio saat harga mencapai batas target",
                    "Ukuran bundle sangat ringan di bawah 50KB gzipped"
                ],
                de: [
                    "Direkte Anbindung an öffentliche WebSocket-Streams von Binance",
                    "Interaktive HTML5-Canvas-Candlestick-Charts mit Zoom-Funktion",
                    "Audio- und Toast-Warnungen bei Erreichen von Preisschwellen",
                    "Minimaler Bundle-Footprint unter 50 KB"
                ]
            },
            techs: [
                { name: "JavaScript ES6+", icon: "fa-brands fa-js text-yellow-500" },
                { name: "HTML5 Canvas", icon: "fa-solid fa-palette text-orange-400" },
                { name: "WebSockets", icon: "fa-solid fa-bolt text-amber-300" },
                { name: "Tailwind CSS", icon: "fa-solid fa-wind text-sky-400" }
            ]
        },
        {
            id: "cybergrid-synthwave",
            category: "fun",
            featured: false,
            previewIcon: "fa-solid fa-gamepad",
            previewLabel: "Creative Experiment",
            badgeText: {
                en: "Fun / Creative",
                id: "Eksperimen Santai",
                de: "Kreativ / Experiment"
            },
            badgeColorClass: "bg-pink-500/20 text-pink-400 border border-pink-500/30",
            githubUrl: "https://github.com/nuguaaa",
            liveUrl: "https://github.com/nuguaaa",
            title: {
                en: "CyberGrid Audio Visualizer",
                id: "CyberGrid Audio Visualizer",
                de: "CyberGrid Audio-Visualisierer"
            },
            shortDesc: {
                en: "An interactive audio-reactive WebGL experiment with procedural retro-futuristic terrain, neon shading, and dynamic beat detection.",
                id: "Eksperimen visual interaktif WebGL responsif audio dengan pemandangan retro-futuristik prosedural, efek neon, dan deteksi ketukan lagu.",
                de: "Ein interaktives audio-reaktives WebGL-Experiment mit prozeduralem Retro-Terrain, Neon-Shadern und dynamischer Beat-Erkennung."
            },
            fullDesc: {
                en: "Built during free time to explore Web Audio API Fourier transforms and 3D matrix math in the browser. Users can upload any MP3 file or use the built-in synth loops to see the visual terrain pulse dynamically to the bass frequencies.",
                id: "Dibangun di waktu luang untuk mendalami Web Audio API Fourier transforms dan matematika matriks 3D pada browser. Pengguna dapat memutar audio dan melihat lanskap visual menari mengikuti alunan nada.",
                de: "In der Freizeit entwickelt, um die Web Audio API und 3D-Matrixmathematik im Browser zu vertiefen. Ermöglicht das Hochladen eigener Musik mit dynamischer Frequenzreaktion."
            },
            features: {
                en: [
                    "Real-time Fast Fourier Transform (FFT) frequency analysis",
                    "Procedural 3D wireframe terrain with dynamic color grading",
                    "Smooth 60 FPS rendering utilizing WebGL shaders",
                    "Microphone input mode for live ambient music reaction"
                ],
                id: [
                    "Analisis frekuensi Fast Fourier Transform (FFT) real-time",
                    "Lanskap kawat 3D prosedural dengan gradasi warna neon dinamis",
                    "Performa visual mulus 60 FPS memanfaatkan shader WebGL",
                    "Dukungan mikrofon untuk reaksi visual suara sekitar secara live"
                ],
                de: [
                    "Echtzeit-Frequenzanalyse mittels Fast Fourier Transform (FFT)",
                    "Prozedurales 3D-Drahtgitter-Terrain mit dynamischen Neonfarben",
                    "Flüssige 60 FPS-Darstellung dank optimierter WebGL-Shader",
                    "Mikrofonmodus zur Visualisierung von Umgebungsgeräuschen"
                ]
            },
            techs: [
                { name: "JavaScript", icon: "fa-brands fa-js text-yellow-500" },
                { name: "Web Audio API", icon: "fa-solid fa-music text-pink-400" },
                { name: "WebGL / Canvas", icon: "fa-solid fa-cube text-indigo-400" }
            ]
        },
        {
            id: "devdocs-cms",
            category: "backend",
            featured: false,
            previewIcon: "fa-solid fa-book-bookmark",
            previewLabel: "Developer Tool",
            badgeText: {
                en: "Open Source",
                id: "Open Source",
                de: "Open Source"
            },
            badgeColorClass: "bg-teal-500/20 text-teal-400 border border-teal-500/30",
            githubUrl: "https://github.com/nuguaaa",
            liveUrl: "https://github.com/nuguaaa",
            title: {
                en: "DevDocs Flat-File Engine",
                id: "DevDocs Flat-File Engine",
                de: "DevDocs Flat-File-Engine"
            },
            shortDesc: {
                en: "Blazing-fast documentation server parsing markdown files on the fly with fuzzy search, version switching, and zero database setup required.",
                id: "Server dokumentasi super cepat berbasis parsing file markdown dengan pencarian instan, manajemen versi, tanpa konfigurasi database.",
                de: "Extrem schneller Dokumentationsserver zur Verarbeitung von Markdown-Dateien mit Volltextsuche, Versionswechsel und ohne Datenbank."
            },
            fullDesc: {
                en: "DevDocs provides technical writers and developers with an instant documentation site deployed directly from git commits. Features automated table of contents extraction, dark mode syntax highlighting, and offline PWA capability.",
                id: "DevDocs memberikan kemudahan bagi developer untuk merilis portal dokumentasi teknis langsung dari commit git. Dilengkapi ekstraksi daftar isi otomatis dan dukungan offline PWA.",
                de: "DevDocs bietet Entwicklern eine sofort einsatzbereite Dokumentationsseite, die direkt aus Git-Commits generiert wird. Mit automatischer Inhaltsverzeichnis-Erstellung und Offline-Funktionalität."
            },
            features: {
                en: [
                    "Instant markdown parsing with CommonMark & GFM support",
                    "Client-side fuzzy search indexed in under 20ms",
                    "Automatic Table of Contents and active scroll spy",
                    "Deployable as a single static binary or PHP container"
                ],
                id: [
                    "Parsing markdown instan dengan dukungan CommonMark dan GFM",
                    "Pencarian cepat berbasis indeks sisi klien di bawah 20ms",
                    "Ekstraksi daftar isi otomatis dengan pelacak posisi gulir aktif",
                    "Dapat dijalankan sebagai binary mandiri atau kontainer PHP"
                ],
                de: [
                    "Blitzschnelle Markdown-Verarbeitung nach CommonMark & GFM",
                    "Client-seitige Indexsuche in unter 20 Millisekunden",
                    "Automatisches Inhaltsverzeichnis mit aktivem Scroll-Spy",
                    "Einfach bereitstellbar als Docker-Container oder PHP-App"
                ]
            },
            techs: [
                { name: "PHP 8.2", icon: "fa-brands fa-php text-indigo-400" },
                { name: "Tailwind CSS", icon: "fa-solid fa-wind text-sky-400" },
                { name: "JavaScript", icon: "fa-brands fa-js text-yellow-500" },
                { name: "Markdown", icon: "fa-brands fa-markdown text-slate-300" }
            ]
        }
    ],

    // Engineering Workflow / Steps
    steps: [
        {
            step: 1,
            threshold: 0.20,
            icon: "fa-solid fa-lightbulb",
            title: {
                en: "1. Discovery & Strategy",
                id: "1. Riset & Strategi",
                de: "1. Analyse & Strategie"
            },
            description: {
                en: "Deep-diving into project requirements, business objectives, user journeys, and technical feasibility to establish a rock-solid roadmap.",
                id: "Menganalisis kebutuhan proyek, tujuan bisnis, alur pengguna, dan kelayakan teknis untuk menyusun roadmap pengembangan yang solid.",
                de: "Detaillierte Erfassung von Projektanforderungen, Geschäftszielen und technischer Machbarkeit zur Erstellung einer soliden Roadmap."
            }
        },
        {
            step: 2,
            threshold: 0.40,
            icon: "fa-solid fa-palette",
            title: {
                en: "2. UI/UX & Architecture",
                id: "2. Desain UI/UX & Arsitektur",
                de: "2. UI/UX & Architektur"
            },
            description: {
                en: "Crafting modern, accessible layouts and architecting clean database schemas and scalable API contracts before writing code.",
                id: "Merancang tata letak antarmuka yang ramah pengguna serta arsitektur database dan kontrak API yang bersih dan skalabel.",
                de: "Entwurf moderner, barrierefreier Layouts sowie Konzeption sauberer Datenbankschemata und skalierbarer API-Schnittstellen."
            }
        },
        {
            step: 3,
            threshold: 0.60,
            icon: "fa-solid fa-laptop-code",
            title: {
                en: "3. Clean Code Development",
                id: "3. Pengembangan Kode Bersih",
                de: "3. Saubere Softwareentwicklung"
            },
            description: {
                en: "Engineering robust full-stack applications with modern tech stacks, adhering strictly to clean code standards and modular architecture.",
                id: "Membangun aplikasi full-stack andal dengan teknologi modern, menerapkan standar clean code dan arsitektur modular yang rapi.",
                de: "Entwicklung robuster Full-Stack-Anwendungen mit modernen Technologien unter strikter Einhaltung von Clean-Code-Standards."
            }
        },
        {
            step: 4,
            threshold: 0.80,
            icon: "fa-solid fa-shield-halved",
            title: {
                en: "4. Testing & Optimization",
                id: "4. Pengujian & Optimasi",
                de: "4. Qualitätssicherung & Tuning"
            },
            description: {
                en: "Executing rigorous cross-browser testing, security audits, database query optimization, and Lighthouse performance tuning.",
                id: "Menjalankan pengujian lintas browser, audit keamanan, optimasi kueri database, serta peningkatan skor performa Lighthouse.",
                de: "Durchführung umfassender Tests, Sicherheitsaudits, Optimierung von Datenbankabfragen und Performance-Tuning."
            }
        },
        {
            step: 5,
            threshold: 0.95,
            icon: "fa-solid fa-rocket",
            title: {
                en: "5. Deployment & Ongoing Scale",
                id: "5. Peluncuran & Pemeliharaan",
                de: "5. Rollout & Skalierung"
            },
            description: {
                en: "Configuring CI/CD pipelines, SSL certificates, cloud environments, and monitoring systems for 99.9% reliable uptime.",
                id: "Mengatur alur CI/CD, sertifikat SSL, lingkungan cloud, dan sistem pemantauan untuk keandalan uptime yang optimal.",
                de: "Einrichtung von CI/CD-Pipelines, SSL-Zertifikaten, Cloud-Umgebungen und Monitoring für höchste Systemverfügbarkeit."
            }
        }
    ],

    // Specialized Services
    services: [
        {
            icon: "fa-solid fa-code",
            title: {
                en: "Full-Stack Web Development",
                id: "Pengembangan Web Full-Stack",
                de: "Full-Stack-Webentwicklung"
            },
            description: {
                en: "End-to-end custom web applications built with Laravel, PHP, JavaScript, and Tailwind CSS. Tailored to your exact business workflow.",
                id: "Aplikasi web kustom menyeluruh berbasis Laravel, PHP, JavaScript, dan Tailwind CSS yang dirancang sesuai kebutuhan alur bisnis Anda.",
                de: "Individuelle End-to-End-Webanwendungen mit Laravel, PHP, JavaScript und Tailwind CSS, exakt auf Ihre Geschäftsprozesse zugeschnitten."
            }
        },
        {
            icon: "fa-solid fa-server",
            title: {
                en: "API & Backend Architecture",
                id: "Arsitektur API & Backend",
                de: "API- & Backend-Architektur"
            },
            description: {
                en: "Secure, high-throughput RESTful APIs, relational database design (MySQL, PostgreSQL), token authentication, and third-party integrations.",
                id: "Penyusunan RESTful API aman berkinerja tinggi, struktur database relasional (MySQL, PostgreSQL), autentikasi token, dan integrasi pihak ketiga.",
                de: "Sichere, performante REST-APIs, relationales Datenbankdesign (MySQL, PostgreSQL), Token-Authentifizierung und Systemintegrationen."
            }
        },
        {
            icon: "fa-solid fa-wand-magic-sparkles",
            title: {
                en: "Modern UI/UX Engineering",
                id: "Rekayasa UI/UX Modern",
                de: "Modernes UI/UX-Engineering"
            },
            description: {
                en: "Pixel-perfect, mobile-first responsive interfaces with smooth micro-interactions, dark/light themes, and WCAG accessibility standards.",
                id: "Antarmuka responsif ramah seluler dengan mikro-interaksi halus, dukungan tema gelap/terang, dan standar aksesibilitas WCAG.",
                de: "Pixelgenaue, mobile-first optimierte Oberflächen mit intuitiven Interaktionen, Dark/Light-Design und Barrierefreiheit nach WCAG."
            }
        },
        {
            icon: "fa-solid fa-gauge-high",
            title: {
                en: "Performance & SEO Tuning",
                id: "Optimasi Performa & SEO",
                de: "Performance & SEO-Tuning"
            },
            description: {
                en: "Speed audits, asset minification, caching strategies, and semantic markup to achieve top-tier Google Lighthouse scores.",
                id: "Audit kecepatan, kompresi aset, strategi caching cerdas, dan struktur semantik untuk meraih skor Google Lighthouse terbaik.",
                de: "Geschwindigkeitsaudits, Asset-Optimierung, Caching-Strategien und semantisches Markup für maximale Google Lighthouse-Werte."
            }
        }
    ],

    // Professional Experience Timeline
    experience: [
        {
            period: "2024 — Present",
            role: {
                en: "Senior Freelance Full-Stack Developer",
                id: "Pengembang Full-Stack Lepas Mandiri",
                de: "Senior Freelance Full-Stack-Entwickler"
            },
            company: {
                en: "Independent Worldwide Practice",
                id: "Praktik Mandiri Global",
                de: "Unabhängige weltweite Praxis"
            },
            description: {
                en: "Engineering bespoke web applications, e-commerce systems, and client dashboards for international clients and high-growth SMEs. Delivering performant codebases with 100% on-time milestone delivery.",
                id: "Membangun aplikasi web kustom, sistem e-commerce, dan dashboard analitik untuk klien internasional dan pelaku UMKM berkembang. Menjaga ketepatan waktu rilis 100%.",
                de: "Entwicklung maßgeschneiderter Webanwendungen, E-Commerce-Systeme und Dashboards für weltweite Kunden und wachsende Unternehmen mit termingerechter Lieferung."
            }
        },
        {
            period: "2023 — 2024",
            role: {
                en: "Web Application Developer",
                id: "Pengembang Aplikasi Web",
                de: "Webanwendungs-Entwickler"
            },
            company: {
                en: "Digital Solutions & Tech Contracts",
                id: "Layanan Solusi Digital & Kontrak",
                de: "Digitale Lösungen & Tech-Aufträge"
            },
            description: {
                en: "Collaborated on production Laravel applications, built responsive frontend views with Tailwind CSS, and optimized database queries for multi-tenant customer applications.",
                id: "Berkolaborasi dalam proyek produksi aplikasi Laravel, membangun tampilan frontend responsif dengan Tailwind CSS, dan mengoptimalkan kueri database.",
                de: "Mitwirkung an produktiven Laravel-Projekten, Entwicklung responsiver Frontend-Komponenten mit Tailwind CSS und Optimierung komplexer Datenbankabfragen."
            }
        },
        {
            period: "2022 — 2023",
            role: {
                en: "Junior Web Developer & Open Source Contributor",
                id: "Pengembang Web Junior & Kontributor Open Source",
                de: "Junior Webentwickler & Open-Source-Beitragender"
            },
            company: {
                en: "Tech Community & Freelance Labs",
                id: "Komunitas Teknologi & Lab Eksperimen",
                de: "Tech-Community & Entwickler-Labs"
            },
            description: {
                en: "Authored reusable UI components, contributed to public repositories, and engineered lightweight JavaScript utilities and interactive tools.",
                id: "Membuat komponen antarmuka siap pakai, berkontribusi pada repositori publik, serta merancang perkakas JavaScript ringan dan interaktif.",
                de: "Entwicklung wiederverwendbarer UI-Komponenten, Beiträge zu öffentlichen Repositorien und Erstellung leichtgewichtiger JavaScript-Werkzeuge."
            }
        }
    ],

    // Client Testimonials
    testimonials: [
        {
            quote: {
                en: "\"Nugua delivered our e-commerce platform ahead of schedule. The code architecture is extraordinarily clean, the interface is fluid, and our conversion rate increased by 28% within the first month. An absolute professional!\"",
                id: "\"Nugua menyelesaikan platform toko online kami lebih cepat dari jadwal. Struktur kodenya sangat rapi, tampilannya mulus, dan tingkat konversi kami meningkat 28% di bulan pertama. Sangat profesional!\"",
                de: "\"Nugua hat unsere E-Commerce-Plattform vor dem geplanten Termin geliefert. Die Code-Architektur ist außerordentlich sauber, das Design flüssig und unsere Konversionsrate stieg im ersten Monat um 28%.\""
            },
            name: "Marcus Lindqvist",
            role: {
                en: "Tech Lead & E-Commerce Director",
                id: "Tech Lead & Direktur E-Commerce",
                de: "Tech Lead & E-Commerce-Direktor"
            },
            country: "Stockholm, Sweden",
            initials: "ML"
        },
        {
            quote: {
                en: "\"Working with Nugua was effortless despite time zone differences. Communication was crystal clear, and the SaaS dashboard UI surpassed our executive team's expectations. Highly recommended for international projects.\"",
                id: "\"Bekerja bersama Nugua sangat mudah meskipun ada perbedaan zona waktu. Komunikasinya sangat jelas, dan tampilan dashboard SaaS yang dihasilkan melebihi ekspektasi manajemen kami. Sangat direkomendasikan!\"",
                de: "\"Die Zusammenarbeit mit Nugua war trotz Zeitzonenunterschieden absolut reibungslos. Die Kommunikation war vorbildlich und das SaaS-Dashboard hat alle Erwartungen übertroffen.\""
            },
            name: "Sarah Jenkins",
            role: {
                en: "Founder & Head of Product",
                id: "Founder & Head of Product",
                de: "Gründerin & Produktleiterin"
            },
            country: "London, United Kingdom",
            initials: "SJ"
        },
        {
            quote: {
                en: "\"Hasil kerja Nugua sangat memuaskan! Aplikasi internal klinik kami berjalan sangat stabil, cepat, dan mudah dipahami oleh seluruh staf. Dukungan teknisnya juga responsif dan solutif.\"",
                id: "\"Hasil kerja Nugua sangat memuaskan! Aplikasi internal klinik kami berjalan sangat stabil, cepat, dan mudah dipahami oleh seluruh staf. Dukungan teknisnya juga responsif dan solutif.\"",
                de: "\"Die Zusammenarbeit war erstklassig! Unsere Praxisanwendung läuft stabil, schnell und ist für alle Mitarbeiter intuitiv bedienbar. Der technische Support war stets schnell und lösungsorientiert.\""
            },
            name: "Ahmad Setiawan",
            role: {
                en: "Managing Director, Healthcare Group",
                id: "Direktur Pengelola, Grup Layanan Kesehatan",
                de: "Geschäftsführer, Healthcare-Gruppe"
            },
            country: "Jakarta, Indonesia",
            initials: "AS"
        },
        {
            quote: {
                en: "\"Nugua demonstrated exceptional mastery of modern frontend frameworks and Laravel. The API integration was seamless and security standards were strictly maintained throughout the build.\"",
                id: "\"Nugua menunjukkan penguasaan luar biasa terhadap framework frontend modern dan Laravel. Integrasi API berjalan mulus dan standar keamanan selalu terjaga dengan ketat.\"",
                de: "\"Nugua hat herausragende Kenntnisse moderner Frontend-Frameworks und Laravel bewiesen. Die API-Integration war nahtlos und höchste Sicherheitsstandards wurden konsequent eingehalten.\""
            },
            name: "Elena Schmidt",
            role: {
                en: "Senior Product Manager",
                id: "Manajer Produk Senior",
                de: "Senior Produktmanagerin"
            },
            country: "Berlin, Germany",
            initials: "ES"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
