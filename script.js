const root = document.documentElement;
const header = document.querySelector('.site-header');
const themeButton = document.getElementById('theme-button');
const menuButton = document.getElementById('menu-button');
const navLinks = document.getElementById('nav-links');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const mobileViewport = window.matchMedia('(max-width: 900px)');
const themeMeta = document.querySelector('meta[name="theme-color"]');
let chosenTheme;

function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
}
function setTheme(theme) {
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
    themeMeta.setAttribute('content', isDark ? '#111827' : '#f7f8fa');
    themeButton.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
    themeButton.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}" aria-hidden="true"></i>`;
    refreshIcons();
}
// Storage can be unavailable in private or restricted browser contexts.
try { chosenTheme = localStorage.getItem('theme'); } catch { /* Use the system preference. */ }
if (!['light', 'dark'].includes(chosenTheme)) chosenTheme = null;
setTheme(chosenTheme || (prefersDark.matches ? 'dark' : 'light'));
themeButton.addEventListener('click', () => {
    chosenTheme = root.classList.contains('dark') ? 'light' : 'dark';
    try { localStorage.setItem('theme', chosenTheme); } catch { /* The toggle still works. */ }
    setTheme(chosenTheme);
});
prefersDark.addEventListener('change', (event) => {
    if (!chosenTheme) setTheme(event.matches ? 'dark' : 'light');
});

function setMenu(open, restoreFocus = false) {
    navLinks.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menuButton.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" aria-hidden="true"></i>`;
    refreshIcons();
    if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
header.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        const wasOpen = navLinks.classList.contains('open');
        setMenu(false);
        if (wasOpen && link.getAttribute('href').startsWith('#')) {
            const target = document.querySelector(link.getAttribute('href'));
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
            target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
    });
});
document.addEventListener('click', (event) => {
    // Icon replacement can detach event.target; the original event path is stable.
    if (navLinks.classList.contains('open') && !event.composedPath().includes(header)) setMenu(false);
});
document.addEventListener('keydown', (event) => {
    if (!navLinks.classList.contains('open')) return;
    if (event.key === 'Escape') setMenu(false, true);
    if (event.key === 'Tab') {
        const focusable = [...header.querySelectorAll('a, button')].filter((item) => item.getClientRects().length);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault(); first.focus();
        }
    }
});
mobileViewport.addEventListener('change', () => setMenu(false));

const sectionGroups = [
    ['home', null], ['about', 'about'], ['skills', 'about'],
    ['projects', 'projects'], ['experience', 'experience'],
    ['education', 'experience'], ['achievements', 'achievements'], ['contact', 'contact']
].map(([id, navId]) => ({ element: document.getElementById(id), navId }));
const navigationLinks = [...navLinks.querySelectorAll('a')];
let scrollPending = false;
function updateNavigation() {
    header.classList.toggle('scrolled', window.scrollY > 24);
    const readingLine = header.offsetHeight + 130;
    let current = null;
    sectionGroups.forEach(({ element, navId }) => {
        if (element.getBoundingClientRect().top <= readingLine) current = navId;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) current = 'contact';
    navigationLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${current}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
    scrollPending = false;
}
function scheduleNavigation() {
    if (!scrollPending) {
        scrollPending = true;
        window.requestAnimationFrame(updateNavigation);
    }
}
window.addEventListener('scroll', scheduleNavigation, { passive: true });
window.addEventListener('resize', scheduleNavigation);
window.addEventListener('load', updateNavigation);
updateNavigation();

const filters = document.querySelector('.project-filters');
const projects = [...document.querySelectorAll('.project-card')];
const projectStatus = document.getElementById('project-status');
filters.hidden = false;
filters.addEventListener('click', (event) => {
    const selected = event.target.closest('[data-filter]');
    if (!selected) return;
    const category = selected.dataset.filter;
    filters.querySelectorAll('button').forEach((button) => {
        const active = button === selected;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
    });
    projects.forEach((project) => { project.hidden = category !== 'all' && project.dataset.category !== category; });
    const count = projects.filter((project) => !project.hidden).length;
    projectStatus.textContent = `${count} ${count === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
    scheduleNavigation();
});
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
