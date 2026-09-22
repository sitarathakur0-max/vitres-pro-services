export interface BusinessInfo {
  name: string;
  category: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  phoneTel: string;
  rating: number;
  reviewCount: number;
  about: string;
}

export const BUSINESS: BusinessInfo = {
  name: 'Vitres Pro Services',
  category: 'Window Cleaning',
  address: '29 Rue Nationale, 59000 Lille, France',
  postalCode: '59000',
  city: 'Lille',
  country: 'France',
  phone: '+33 3 20 48 17 65',
  phoneTel: 'tel:+33320481765',
  rating: 4.8,
  reviewCount: 32,
  about: 'Local professional window-cleaning service serving homes, offices and small commercial properties in Lille.',
};

export const IMAGES = {
  hero: '/src/assets/images/window_hero_clarity_1789838602460.jpg',
  residential: '/src/assets/images/residential_window_1789838622176.jpg',
  detail: '/src/assets/images/glass_cleaning_detail_1789838638334.jpg',
};

export type PageId =
  | 'home'
  | 'window-cleaning'
  | 'residential'
  | 'commercial'
  | 'about'
  | 'faq'
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'window-cleaning', label: 'Window Cleaning', href: '#window-cleaning' },
  { id: 'residential', label: 'Residential Services', href: '#residential' },
  { id: 'commercial', label: 'Commercial Services', href: '#commercial' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
