// --- LOCALIZATION (i18n) ---
const translations = {
    en: {
        loader_init: "Initializing System...",
        hero_subtitle: "ACCESSING_MAINFRAME",
        hero_desc: "Cybersecurity Intern Candidate & Software Developer. I build systems focused on network security, vulnerability assessment, and modern software architectures.",
        about_heading: "Find Vulnerabilities,<br><span style='color: var(--core-cyan);'>Strengthen the System.</span>",
        about_desc: "I am an 11th-grade Information Technologies student. I combine theoretical knowledge with practice to develop projects in C#, Python, Flutter, and IoT. My greatest passion is developing defense strategies against real-world threat scenarios.",
        term_status: "11th Grade Software Student",
        term_f1: "Cybersecurity",
        term_f2: "Network Analysis",
        term_f3: "Embedded Systems",
        term_target: "Developing Secure Architectures",
        skills_heading: "Technical <span style='color: var(--core-cyan);'>Arsenal</span>",
        sk1_title: "System & Security",
        sk1_1: "Kali Linux Operations",
        sk1_2: "Wireshark Network Analysis",
        sk1_3: "Nmap Scanning & Vulnerability Detection",
        sk2_title: "Software & Application",
        sk2_1: "C# Desktop Applications",
        sk2_2: "Python Scripting & Automation",
        sk2_3: "Flutter & Dart Mobile Solutions",
        sk2_4: "Secure Coding Principles",
        sk3_title: "Hardware & IoT",
        sk3_1: "Systems based on Arduino & ESP",
        sk3_2: "Smart Planter & Automation Projects",
        sk3_3: "3D Printer Hardware Optimization (Klipper)",
        sk3_4: "Fusion 360 Basic Modeling",
        proj_heading: "Operation <span style='color: var(--core-cyan);'>Logs</span>",
        p1_title: "Cybersecurity Laboratory",
        p1_desc: "Network scanning tests conducted using Kali Linux and Nmap in a personal laboratory environment. Vulnerability detection, protocol analysis, and development of defense mechanisms.",
        p2_title: "Secure IoT & Smart Planter",
        p2_desc: "IoT ecosystem collecting data via ESP and sensors. Architecture with secure data communication. Theoretical/practical infrastructure exhibited in MEB Robot and TUBITAK projects.",
        p3_title: "Certifications",
        p3_1: "Introduction to Cybersecurity",
        p3_2: "Social Engineering and Phishing",
        p4_title: "Mobile Software Development",
        p4_desc: "Flutter-based mobile applications with secure API communication and AI-supported infrastructures, where user data is processed securely.",
        contact_heading: "Join My <span style='color: var(--core-cyan);'>Network.</span>",
        contact_desc: "You can contact me for hackathons, internship opportunities, or new security-focused projects."
    },
    tr: {
        loader_init: "Sistem Başlatılıyor...",
        hero_subtitle: "ANA_SİSTEME_ERİŞİLİYOR",
        hero_desc: "Siber Güvenlik Stajyer Adayı & Yazılım Geliştirici. Ağ güvenliği, zafiyet tespiti ve modern yazılım mimarileri üzerine sistemler inşa ediyorum.",
        about_heading: "Zafiyetleri Bul,<br><span style='color: var(--core-cyan);'>Sistemi Güçlendir.</span>",
        about_desc: "11. Sınıf Bilişim Teknolojileri bölümü öğrencisiyim. Teorik bilgiyi pratikle birleştirerek C#, Python, Flutter ve IoT alanlarında projeler geliştiriyorum. Gerçek dünyadaki tehdit senaryolarına karşı savunma stratejileri geliştirmek en büyük tutkum.",
        term_status: "11. Sınıf Yazılım Öğrencisi",
        term_f1: "Siber Güvenlik",
        term_f2: "Ağ Analizi",
        term_f3: "Gömülü Sistemler",
        term_target: "Güvenli Mimari Geliştirmek",
        skills_heading: "Teknik <span style='color: var(--core-cyan);'>Cephanelik</span>",
        sk1_title: "Sistem & Güvenlik",
        sk1_1: "Kali Linux Operasyonları",
        sk1_2: "Wireshark Ağ Analizi",
        sk1_3: "Nmap Tarama & Zafiyet Tespiti",
        sk2_title: "Yazılım & Uygulama",
        sk2_1: "C# Masaüstü Gömülü Sistemler",
        sk2_2: "Python Scripting & Otomasyon",
        sk2_3: "Flutter & Dart Mobil Çözümler",
        sk2_4: "Güvenli Kod Yazım Prensipleri",
        sk3_title: "Donanım & IoT",
        sk3_1: "Arduino & ESP8266/ESP32 Üzerine Sistemler",
        sk3_2: "Akıllı Saksı & Otomasyon Projeleri",
        sk3_3: "3D Yazıcı Donanım Optimizasyonu (Klipper)",
        sk3_4: "Fusion 360 Temel Modelleme",
        proj_heading: "Operasyon <span style='color: var(--core-cyan);'>Kayıtları</span>",
        p1_title: "Siber Güvenlik Laboratuvarı",
        p1_desc: "Kişisel laboratuvar ortamında Kali Linux ve Nmap kullanılarak gerçekleştirilen ağ tarama testleri. Zafiyet tespiti, protokol analizi ve savunma mekanizmalarının geliştirilmesi.",
        p2_title: "Güvenli IoT & Akıllı Saksı",
        p2_desc: "ESP ve sensörler ile veri toplayan IoT ekosistemi. Veri iletişim güvenliği sağlanmış mimari. MEB Robot ve TÜBİTAK projelerinde sergilenmiş teorik/pratik altyapı.",
        p3_title: "Yetkinlik Belgeleri",
        p3_1: "Siber Güvenliğe Giriş",
        p3_2: "Sosyal Mühendislik ve Oltalama",
        p4_title: "Mobil Yazılım Geliştirme",
        p4_desc: "Güvenli API haberleşmesi ve yapay zeka destekli altyapılara sahip, kullanıcı verilerinin güvenle işlendiği Flutter tabanlı mobil uygulamalar.",
        contact_heading: "Ağıma <span style='color: var(--core-cyan);'>Katıl.</span>",
        contact_desc: "Hackathon'lar, staj süreçleri veya güvenlik odaklı yeni projeler için benimle iletişime geçebilirsin."
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    const switchBtn = document.getElementById('lang-switch');
    switchBtn.innerText = currentLang === 'en' ? 'TR' : 'EN';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // innerHTML is needed for the <br> and <span> tags
        }
    });

    // Update glitch text attribute specially
    const glitchEl = document.querySelector('.cyber-glitch-0');
    // Name doesn't change, but ensuring we know where to intercept if we need special attributes
}


// --- PRELOADER SEQUENCE ---
document.addEventListener("DOMContentLoaded", () => {
    let progress = 0;
    const progressEl = document.getElementById('loader-progress');
    const textEl = document.getElementById('loader-text');
    const preloader = document.getElementById('preloader');

    const bootSequence = [
        "KERNEL: CONNECTED",
        "ACCESSING CORE REPOSITORIES...",
        "DECRYPTING PORTFOLIO...",
        "AUTHENTICATION GRANTED",
        "SYSTEM_READY"
    ];

    let msgIndex = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if(progress > 100) progress = 100;
        
        progressEl.style.width = progress + '%';

        if(progress > (msgIndex + 1) * 20 && msgIndex < bootSequence.length - 1) {
            msgIndex++;
            textEl.innerText = bootSequence[msgIndex];
        }

        if(progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                textEl.innerText = bootSequence[bootSequence.length-1];
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    setTimeout(() => preloader.style.visibility = 'hidden', 1000);
                    // trigger initial animations
                    document.querySelectorAll('.section').forEach(sec => {
                        if(sec.getBoundingClientRect().top < window.innerHeight) {
                            sec.classList.add('in-view');
                            sec.querySelectorAll('.fade-up').forEach(el => el.classList.add('active'));
                        }
                    });
                }, 500);
            }, 500);
        }
    }, 100);
});

// --- CUSTOM CURSOR ---
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Dot follows strict
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

// Smooth ring follow
function animateCursor() {
    ringX += (mouseX - ringX) * 0.2;
    ringY += (mouseY - ringY) * 0.2;
    
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Magnetic Hover States
const magnetics = document.querySelectorAll('.magnetic, a');
magnetics.forEach(btn => {
    btn.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    btn.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
        btn.style.transform = '';
    });
    
    btn.addEventListener('mousemove', (e) => {
        if(btn.classList.contains('magnetic')) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        }
    });
});

// --- SCROLL ANIMATIONS & NAV ---
const sections = document.querySelectorAll('.section');
const navDots = document.querySelectorAll('.nav-dot');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            entry.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('active'));
            
            // Update Nav
            const id = entry.target.getAttribute('id');
            navDots.forEach(dot => {
                dot.classList.remove('active');
                if(dot.getAttribute('href') === `#${id}`) {
                    dot.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(sec => observer.observe(sec));

// Smooth scroll for nav
navDots.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});


// --- 3D TILT EFFECT ---
const tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});


// --- NETWORK CANVAS BACKGROUND ---
const canvas = document.getElementById('network-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let w, h;
const connectionDistance = 150;

function resizeCanvas() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Node {
    constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if(this.x < 0 || this.x > w) this.vx *= -1;
        if(this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.fill();
    }
}

// Create particles logic based on screen size
const particleCount = Math.floor((w * h) / 15000); 
for (let i = 0; i < particleCount; i++) {
    particles.push(new Node());
}

function animateNetwork() {
    ctx.clearRect(0, 0, w, h);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect to others
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < connectionDistance) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 240, 255, ${1 - dist/connectionDistance})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
        
        // Connect to mouse
        const mdx = particles[i].x - mouseX;
        const mdy = particles[i].y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        
        if (mDist < 200) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 0, 60, ${1 - mDist/200})`; // Hover connection is magenta
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
        }
    }
    
    requestAnimationFrame(animateNetwork);
}
animateNetwork();

console.log("SYSTEM LOADED. NO BREACHES DETECTED.");
