export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface CloudService {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  startingPrice: number;
}