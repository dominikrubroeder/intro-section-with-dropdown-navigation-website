export interface INavigationItem {
  title: string;
  subCategories: { title: string; icon: string }[];
}

export const navigationData = [
  {
    title: 'Features',
    subCategories: [
      {
        title: 'Todo List',
        icon: '/images/icon-todo.svg',
      },
      {
        title: 'Calendar',
        icon: '/images/icon-calendar.svg',
      },
      {
        title: 'Reminders',
        icon: '/images/icon-reminders.svg',
      },
      {
        title: 'Planning',
        icon: '/images/icon-planning.svg',
      },
    ],
  },
  {
    title: 'Company',
    subCategories: [
      {
        title: 'History',
        icon: '',
      },
      {
        title: 'Our team',
        icon: '',
      },
      {
        title: 'Blog',
        icon: '',
      },
    ],
  },
  {
    title: 'Careers',
    subCategories: [],
  },
  {
    title: 'About',
    subCategories: [],
  },
];

export const clientData = [
  {
    src: '/images/client-databiz.svg',
    name: 'databiz',
    width: 114,
    height: 20,
  },
  {
    src: '/images/client-audiophile.svg',
    name: 'audiofile',
    width: 73,
    height: 36,
  },
  {
    src: '/images/client-meet.svg',
    name: 'meet',
    width: 90,
    height: 20,
  },
  {
    src: '/images/client-maker.svg',
    name: 'maker',
    width: 83,
    height: 23,
  },
];
