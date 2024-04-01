import {
  BookText,
  ClipboardList,
  Layers,
  Layout,
  List,
  ShoppingCart,
  Users,
} from 'lucide-react';

export const menuRoutes = [
  {
    label: 'Home',
    items: [
      {
        icon: Layout,
        label: 'Dashboard',
        href: '/',
      },
    ],
  },
  {
    label: 'Master Data',
    items: [
      {
        icon: Layers,
        label: 'Book Category',
        href: '/category',
      },
      {
        icon: BookText,
        label: 'Book Data',
        href: '/book-data',
      },
      {
        icon: Users,
        label: 'User Data',
        href: '/user-data',
      },
    ],
  },
  {
    label: 'Transaction',
    items: [
      {
        icon: ShoppingCart,
        label: 'Loan Data',
        href: '/loan-data',
      },
      {
        icon: List,
        label: 'Booking Data',
        href: '/Booking-data',
      },
    ],
  },
  {
    label: 'Report',
    items: [
      {
        icon: ClipboardList,
        label: 'Book Data Report',
        href: '/book-data-report',
      },
      {
        icon: ClipboardList,
        label: 'Member Data Report',
        href: '/member-data-report',
      },
      {
        icon: ClipboardList,
        label: 'Transaction Report',
        href: '/transaction-report',
      },
    ],
  },
];
