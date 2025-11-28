/**
 * Mobile Menu Handler
 * Gère l'ouverture/fermeture du menu mobile et l'accessibilité au clavier
 */

export function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const header = document.querySelector('header');
  let isMenuOpen = false;

  if (!menuButton || !header) return;

  // Créer le menu mobile s'il n'existe pas
  let mobileMenu = document.getElementById('mobile-menu');
  if (!mobileMenu) {
    mobileMenu = createMobileMenu(header);
  }

  // Toggle menu au clic
  menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    toggleMenu(menuButton, mobileMenu, isMenuOpen);
  });

  // Fermer le menu au clic sur un lien
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      toggleMenu(menuButton, mobileMenu, isMenuOpen);
    });
  });

  // Fermer le menu avec la touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      isMenuOpen = false;
      toggleMenu(menuButton, mobileMenu, isMenuOpen);
      menuButton.focus();
    }
  });

  // Fermer le menu au clic en dehors
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && isMenuOpen) {
      isMenuOpen = false;
      toggleMenu(menuButton, mobileMenu, isMenuOpen);
    }
  });
}

function createMobileMenu(header) {
  // Cloner la navigation depuis le header
  const navElement = header.querySelector('nav .flex-1');

  const mobileMenu = document.createElement('div');
  mobileMenu.id = 'mobile-menu';
  mobileMenu.className = 'md:hidden hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40 py-4 px-4';
  mobileMenu.setAttribute('aria-label', 'Menu mobile');

  if (navElement) {
    mobileMenu.innerHTML = navElement.innerHTML;
  }

  // Ajouter les boutons mobiles
  const actions = document.createElement('div');
  actions.className = 'flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200';

  const callBtn = document.createElement('a');
  callBtn.href = 'tel:+15141234567';
  callBtn.className = 'block text-center px-4 py-2 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors';
  callBtn.textContent = 'Appel gratuit';

  const contactBtn = document.createElement('a');
  contactBtn.href = '/contact/';
  contactBtn.className = 'block text-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium';
  contactBtn.textContent = 'Nous contacter';

  actions.appendChild(callBtn);
  actions.appendChild(contactBtn);
  mobileMenu.appendChild(actions);

  header.appendChild(mobileMenu);
  return mobileMenu;
}

function toggleMenu(button, menu, isOpen) {
  button.setAttribute('aria-expanded', String(isOpen));

  if (isOpen) {
    menu.classList.remove('hidden');
    menu.classList.add('block');
  } else {
    menu.classList.add('hidden');
    menu.classList.remove('block');
  }
}

// Initialiser le menu au chargement de la page
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
  initMobileMenu();
}
