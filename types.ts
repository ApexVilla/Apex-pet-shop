
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  name: string;
  text: string;
  stars: number;
  avatar: string;
}

export enum AppSection {
  Home = 'Home',
  Services = 'Services',
  About = 'About',
  Reviews = 'Reviews',
  Veo = 'Veo',
  Contact = 'Contact'
}
