export const headerData = {
  links: [
    {
      text: 'Qui nous sommes',
      href: '/qui-sommes-nous/',
      submenu: [
        { text: 'Nos valeurs', href: '/nos-valeurs/', description: 'Ce qui nous guide' },
      ],
    },
    {
      text: 'Services',
      href: '/services/',
      submenu: [
        { text: 'Pour les aînés', href: '/services/aines/', description: 'Accompagnement personnalisé' },
        { text: 'Pour les proches', href: '/services/proches/', description: 'Protéger vos proches' },
        { text: 'Pour les résidences', href: '/services/residences/', description: 'Programmes complets' },
      ],
    },
    {
      text: 'Ressources',
      href: '/blog/',
      submenu: [
        { text: 'Blog', href: '/blog/', description: 'Articles et conseils' },
        { text: 'Reconnaître les fraudes', href: '/fraudes/', description: 'Guide complet des arnaqueurs' },
        { text: 'Urgence numérique', href: '/urgence-numerique/', description: 'Aide immédiate' },
      ],
    },
    {
      text: 'Tarifs',
      href: '/tarifs/',
    },
    {
      text: 'À propos',
      href: '/a-propos/',
      submenu: [
        { text: 'À propos', href: '/a-propos/', description: 'Notre histoire' },
        { text: 'Partenariat', href: '/partenariat/', description: 'Collaborer avec nous' },
      ],
    },
  ],
  actions: [
    {
      text: 'Nous contacter',
      href: '/contact/',
      type: 'button',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Pour les aînés', href: '/services/aines/' },
        { text: 'Pour les proches', href: '/services/proches/' },
        { text: 'Pour les résidences', href: '/services/residences/' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { text: 'Reconnaître les fraudes', href: '/fraudes/' },
        { text: 'Urgence numérique', href: '/urgence-numerique/' },
        { text: 'Blog', href: '/blog/' },
      ],
    },
    {
      title: 'Entreprise',
      links: [
        { text: 'Qui nous sommes', href: '/qui-sommes-nous/' },
        { text: 'Nos valeurs', href: '/nos-valeurs/' },
        { text: 'Partenariat', href: '/partenariat/' },
        { text: 'Contact', href: '/contact/' },
      ],
    },
  ],
  socials: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/seniorgeek' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/seniorgeek' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/seniorgeekca' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/seniorgeek' },
  ],
  footNote: `❤️ Fait avec amour pour les aînés du Québec. SeniorGeek © ${new Date().getFullYear()}`,
};
