// script.js

// 1. Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
});

// 2. Carousel Logic
const products = [
  { name: "Genesis Tee", subtitle: "The First Forging. Heavyweight Cotton.", image: "../public/images/products/tshirt.png", price: "55" },
  { name: "The Mantle Hoodie", subtitle: "Armor for the cold. 400gsm.", image: "../public/images/products/hoodie.png", price: "85" },
  { name: "The Scroll Longsleeve", subtitle: "Scripture woven into thread.", image: "../public/images/products/longsleeve.png", price: "65" },
  { name: "The Aegis Jacket", subtitle: "Weather the storm. Waterproof shell.", image: "../public/images/products/jacket.png", price: "120" },
  { name: "Foundation Pants", subtitle: "Built to stand firm. Utility cargo.", image: "../public/images/products/pants.png", price: "95" }
];

let activeIndex = 1;

function renderCarousel() {
  const container = document.getElementById('carousel');
  const dotsContainer = document.getElementById('carousel-dots');
  
  container.innerHTML = '';
  dotsContainer.innerHTML = '';

  products.forEach((product, i) => {
    // Determine position relative to active index
    // Using a simplified layout for vanilla JS
    let offset = i - activeIndex;
    
    const item = document.createElement('div');
    item.className = `carousel-item ${offset === 0 ? 'active' : ''}`;
    
    // Positioning math (similar to framer-motion)
    item.style.transform = `translateX(${offset * 300}px) scale(${offset === 0 ? 1 : 0.8})`;
    item.style.zIndex = offset === 0 ? 10 : 5 - Math.abs(offset);
    item.style.opacity = offset === 0 ? 1 : 0.5;
    if(offset !== 0) item.style.filter = 'brightness(0.5)';

    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="carousel-info">
        <h3>${product.name}</h3>
        <p>${product.subtitle}</p>
        <a href="#">Claim Artifact — $${product.price}</a>
      </div>
    `;

    item.addEventListener('click', () => {
      activeIndex = i;
      renderCarousel();
    });

    container.appendChild(item);

    // Dot
    const dot = document.createElement('div');
    dot.className = `dot ${offset === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      activeIndex = i;
      renderCarousel();
    });
    dotsContainer.appendChild(dot);
  });
}

// 3. Marquee Logic
const marqueeImages = [
  "../public/images/products/tshirt.png",
  "../public/images/products/hoodie.png",
  "../public/images/products/longsleeve.png",
  "../public/images/products/jacket.png",
  "../public/images/products/pants.png",
  "../public/images/details/tag.png",
  "../public/images/details/glyph.png",
  "../public/images/details/scripture.png"
];

function renderMarquee() {
  const track = document.getElementById('marquee-track');
  // Duplicate images to create continuous loop
  const allImages = [...marqueeImages, ...marqueeImages];
  
  allImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    track.appendChild(img);
  });
}

// 4. Pillars Logic
const pillarsData = [
  {
    num: "I", name: "Struggle",
    verse: "Genesis 32:24 — So Jacob was left alone, and a man wrestled with him till daybreak.",
    desc: "Every garment begins in the dark. The ink is pressure. The fabric is resistance. Before the glyph is stamped, before the number is written, there is the weight.",
    image: "../public/images/pillars/struggle.png"
  },
  {
    num: "II", name: "Faith",
    verse: "Hebrews 11:1 — Now faith is confidence in what we hope for and assurance about what we do not see.",
    desc: "Faith is not a feeling. It is a decision made in the absence of light. Our garments reflect this raw, unyielding trust.",
    image: "../public/images/pillars/faith.png"
  },
  {
    num: "III", name: "Transcendence",
    verse: "Romans 12:2 — Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
    desc: "When the struggle is met with faith, the result is transcendence. You are no longer who you were.",
    image: "../public/images/pillars/transcendence.png"
  }
];

function renderPillars() {
  const container = document.getElementById('pillars-container');
  pillarsData.forEach(p => {
    const row = document.createElement('div');
    row.className = 'pillar-row';
    row.innerHTML = `
      <div class="pillar-img">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="pillar-content">
        <p class="pillar-num">Pillar ${p.num}</p>
        <h3 class="pillar-title">${p.name}</h3>
        <p class="pillar-verse">${p.verse}</p>
        <p class="pillar-desc">${p.desc}</p>
      </div>
    `;
    container.appendChild(row);
  });
}

// Initialize everything
renderCarousel();
renderMarquee();
renderPillars();
