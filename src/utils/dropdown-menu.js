/**
 * Dropdown Menu Keyboard Navigation Handler
 * Gère la navigation au clavier sur les menus déroulants
 * Support: Enter, Space, Escape, Arrow Down, Arrow Up, Tab
 */

export function initDropdownMenus() {
  const menuTriggers = document.querySelectorAll('[data-menu-trigger]');

  menuTriggers.forEach((trigger) => {
    const triggerElement = trigger;
    const menuIndex = triggerElement.getAttribute('data-menu-trigger');
    const menuContainer = document.querySelector(`[data-menu="${menuIndex}"]`);

    if (!menuContainer) return;

    const menuItems = menuContainer.querySelectorAll('[role="menuitem"]');

    // Ouvrir le menu avec Enter ou Space
    triggerElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMenu(triggerElement, menuContainer);
        // Focus sur le premier item du menu
        const firstItem = menuItems[0];
        if (firstItem) {
          firstItem.focus();
        }
      }
    });

    // Fermer le menu avec Escape
    menuContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu(triggerElement, menuContainer);
        triggerElement.focus();
      }
    });

    // Navigation avec les flèches (Arrow Down, Arrow Up)
    menuContainer.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const focusedElement = document.activeElement;
        const items = Array.from(menuItems);
        const currentIndex = items.indexOf(focusedElement);

        let nextIndex;
        if (e.key === 'ArrowDown') {
          nextIndex = (currentIndex + 1) % items.length;
        } else {
          nextIndex = (currentIndex - 1 + items.length) % items.length;
        }

        items[nextIndex].focus();
      }
    });

    // Fermer le menu quand on navigue en dehors avec Tab
    Array.from(menuItems).forEach((item, index) => {
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          // Fermer le menu si on est au dernier item
          if (index === menuItems.length - 1 && !e.shiftKey) {
            closeMenu(triggerElement, menuContainer);
          }
          // Fermer le menu si on est au premier item et on navigue en arrière
          if (index === 0 && e.shiftKey) {
            closeMenu(triggerElement, menuContainer);
          }
        }
      });
    });

    // Afficher le menu au focus du trigger (optionnel)
    triggerElement.addEventListener('focus', () => {
      // Optionnel: afficher le menu au focus aussi
      // openMenu(triggerElement, menuContainer);
    });
  });
}

function openMenu(trigger, menu) {
  // Ajouter la classe visible si elle existe, ou simplement afficher
  trigger.setAttribute('aria-expanded', 'true');
  menu.classList.add('group-hover:opacity-100', 'group-hover:visible');
  menu.classList.remove('opacity-0', 'invisible');

  // Alternative: utiliser une classe custom
  menu.setAttribute('data-open', 'true');
}

function closeMenu(trigger, menu) {
  trigger.setAttribute('aria-expanded', 'false');
  menu.classList.remove('group-hover:opacity-100', 'group-hover:visible');
  menu.classList.add('opacity-0', 'invisible');

  // Alternative: utiliser une classe custom
  menu.removeAttribute('data-open');
}

// Initialiser les menus au chargement de la page
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDropdownMenus);
} else {
  initDropdownMenus();
}
