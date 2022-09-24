export interface Menuitem {
  title: string;
  href: string;
  icon: string;
}

export const userMenu: Menuitem[] = [
  {
    title: 'Inbox',
    href: 'app/inbox',
    icon: 'inbox',
  },
  {
    title: 'Outbox',
    href: 'app/outbox',
    icon: 'outbox',
  },
  {
    title: 'Cart',
    href: 'app/cart',
    icon: 'shopping_cart',
  },
  {
    title: 'Profile',
    href: 'app/profile',
    icon: 'manage_accounts',
  },
];

export const adminMenu = [
  ...userMenu,
  {
    title:'Admin',
    href:'/admin',
    icon: 'admin_panel_settings'
  }
];
