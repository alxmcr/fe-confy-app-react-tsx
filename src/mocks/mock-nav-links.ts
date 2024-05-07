import { NavLinkData } from '../@types/appTypes';

export const homeLink: NavLinkData = {
  id: 'nav-link-001',
  text: 'Confy',
  href: '#',
};

export const speakersLink: NavLinkData = {
  id: 'nav-link-002',
  text: 'Speakers',
  href: '#speakers',
};

export const scheduleLink: NavLinkData = {
  id: 'nav-link-003',
  text: 'Schedule',
  href: '#schedule',
};

export const ticketLink: NavLinkData = {
  id: 'nav-link-004',
  text: 'Tickets',
  href: '#tickets',
};

export const MOCK_NAV_LINKS: NavLinkData[] = [speakersLink, scheduleLink, ticketLink];
