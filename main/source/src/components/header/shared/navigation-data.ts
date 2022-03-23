export interface NavigationItem {
  title: string;
  link: string;
  active?: string[];
  subMenu?: { title: string; link: string }[];
}

const data: NavigationItem[] = [
  {
    title: 'Home',
    link: '/',
    active: ['/homepages/'],
    subMenu: [
      { title: 'Home', link: '/' },
      { title: 'Blog Page', link: '/homepages/homepage2' },
      { title: 'About Page', link: '/homepages/homepage3' },
      { title: 'Contact Page', link: '/homepages/homepage4' },
    ],
  },
  {
    title: 'Blogs',
    link: '/blog/blog-category-grid',
    active: ['/blog/', '/post/'],
    subMenu: [
      { title: 'Blogs', link: '/blog/blog-category-grid' },
    ],
  },  
  { title: 'About', link: '/others/about', active: [] },
  { title: 'Contact Info', link: '/others/contact', active: [] },
];

export default data;
