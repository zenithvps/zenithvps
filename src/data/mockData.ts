import { PricingPlan, Feature, Testimonial, CloudService } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 9,
    period: 'month',
    description: 'Perfect for small projects and personal websites',
    features: [
      '1 vCPU, 1GB RAM',
      '25GB SSD Storage',
      '1TB Bandwidth',
      '24/7 Support',
      'Free SSL Certificate',
      '99.9% Uptime SLA'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 29,
    period: 'month',
    description: 'Ideal for growing businesses and applications',
    features: [
      '2 vCPU, 4GB RAM',
      '100GB SSD Storage',
      '5TB Bandwidth',
      'Priority Support',
      'Free SSL Certificate',
      '99.95% Uptime SLA',
      'Daily Backups',
      'Load Balancer'
    ],
    popular: true,
    buttonText: 'Start Free Trial',
    buttonVariant: 'primary'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    period: 'month',
    description: 'For large-scale applications and enterprises',
    features: [
      '8 vCPU, 16GB RAM',
      '500GB SSD Storage',
      'Unlimited Bandwidth',
      'Dedicated Support',
      'Advanced Security',
      '99.99% Uptime SLA',
      'Hourly Backups',
      'Auto Scaling',
      'Custom Integrations'
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'secondary'
  }
];

export const features: Feature[] = [
  {
    id: 'performance',
    title: 'Lightning Fast Performance',
    description: 'Experience blazing-fast load times with our optimized infrastructure and global CDN network.',
    icon: 'Zap'
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Your data is protected with military-grade encryption, DDoS protection, and regular security audits.',
    icon: 'Shield'
  },
  {
    id: 'scalability',
    title: 'Auto Scaling',
    description: 'Automatically scale your resources up or down based on demand without any downtime.',
    icon: 'TrendingUp'
  },
  {
    id: 'support',
    title: '24/7 Expert Support',
    description: 'Get help from our cloud experts anytime, anywhere. We\'re here to ensure your success.',
    icon: 'Headphones'
  },
  {
    id: 'monitoring',
    title: 'Real-time Monitoring',
    description: 'Monitor your applications with detailed analytics, alerts, and performance insights.',
    icon: 'Activity'
  },
  {
    id: 'backup',
    title: 'Automated Backups',
    description: 'Never lose your data with automated daily backups and point-in-time recovery options.',
    icon: 'Database'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechStart Inc.',
    content: 'CloudHost has transformed our infrastructure. The performance improvements and cost savings have been incredible.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Lead Developer',
    company: 'Digital Solutions',
    content: 'The auto-scaling feature saved us during our product launch. We handled 10x traffic without any issues.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'DevOps Engineer',
    company: 'Growth Labs',
    content: 'Best cloud hosting service we\'ve used. The support team is incredibly knowledgeable and responsive.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  }
];

export const cloudServices: CloudService[] = [
  {
    id: 'compute',
    name: 'Cloud Compute',
    description: 'Scalable virtual machines with high-performance processors',
    icon: 'Server',
    features: ['Auto Scaling', 'Load Balancing', 'Multiple OS Options', 'SSD Storage'],
    startingPrice: 9
  },
  {
    id: 'storage',
    name: 'Cloud Storage',
    description: 'Secure, scalable object storage for your applications',
    icon: 'HardDrive',
    features: ['99.999% Durability', 'Global CDN', 'Encryption', 'API Access'],
    startingPrice: 5
  },
  {
    id: 'database',
    name: 'Managed Database',
    description: 'Fully managed database services with automatic backups',
    icon: 'Database',
    features: ['Auto Backups', 'High Availability', 'Monitoring', 'Scaling'],
    startingPrice: 15
  },
  {
    id: 'networking',
    name: 'Cloud Networking',
    description: 'Secure, high-performance networking solutions',
    icon: 'Globe',
    features: ['VPC', 'Load Balancers', 'DDoS Protection', 'SSL Certificates'],
    startingPrice: 12
  }
];