import React from 'react';
import { Server, HardDrive, Database, Globe } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { cloudServices } from '../../data/mockData';

const iconMap = {
  Server,
  HardDrive,
  Database,
  Globe,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900">
            Comprehensive Cloud Solutions
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            From compute power to storage solutions, we provide everything you need 
            to build, deploy, and scale your applications in the cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cloudServices.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card key={service.id} className="p-6 text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {service.name}
                </h3>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-secondary-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-secondary-100 pt-6">
                  <div className="text-2xl font-bold text-secondary-900 mb-2">
                    ${service.startingPrice}
                    <span className="text-sm font-normal text-secondary-600">/month</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};