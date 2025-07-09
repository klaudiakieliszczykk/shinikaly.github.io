// Linki do mediów
const links = [
  {name: 'Twitch', url: 'https://twitch.tv/shinikaly', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 2v20l4-4h5l5 4V2z"/></svg>'},
  {name: 'TikTok', url: 'https://www.tiktok.com/@shinikaly', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 3v12a4 4 0 0 0 5 3.7V15a4 4 0 0 1-3-1.4V3H9z"/></svg>'},
  {name: 'Ko-fi', url: 'https://ko-fi.com/shinikaly', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21s-6-4-6-10 3-5 6-5 6 2 6 5-6 10-6 10z"/></svg>'},
  {name: 'Discord', url: 'https://discord.gg/shinikaly', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>'}
];

const linksContainer = document.getElementById('links');
for(const link of links) {
  const a = document.createElement('a');
  a.href = link.url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.innerHTML = `${link.icon}<span>${link.name}</span>`;
  linksContainer.appendChild(a);
}

// Motyw dzienny/nocny
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
  if(theme === 'light') {
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }
}

const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'light') {
  setTheme('light');
} else {
  setTheme('dark');
}

themeToggle.addEventListener('click', () => {
  if(body.classList.contains('light')) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

// Magiczny kursor
const magicCursor = document.getElementById('magic-cursor');
const particleContainer = document.getElementById('particle-container');

document.addEventListener('mousemove', e => {
  magicCursor.style.left = e.clientX + 'px';
  magicCursor.style.top = e.clientY + 'px';

  createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
  const p = document.createElement('div');
  p.classList.add('particle');
  p.style.left = (x + (Math.random() * 10 - 5)) + 'px';
  p.style.top = (y + (Math.random() * 10 - 5)) + 'px';
  p.style.background = `hsl(${Math.random() * 360}, 70%, 75%)`;
  particleContainer.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 1000);
}
