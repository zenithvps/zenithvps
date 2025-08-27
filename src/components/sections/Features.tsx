import React from 'react';
import { Zap, Shield, TrendingUp, Headphones, Activity, Database } from 'lucide-react';
import { Card } from '../ui/Card';
import { features } from '../../data/mockData';

const iconMap = {
  Zap,
  Shield,
  TrendingUp,
  Headphones,
  Activity,
  Database,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900">
            Why Choose CloudHost?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Built for modern applications with enterprise-grade features that scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <Card 
                key={feature.id} 
                className="p-8 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16">
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust CloudHost for their mission-critical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};