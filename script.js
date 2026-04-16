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
