import React from 'react';
import { Server, Globe, Users, Award } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: Server, value: '50,000+', label: 'VPS Deployed' },
    { icon: Globe, value: '15+', label: 'Global Regions' },
    { icon: Users, value: '10,000+', label: 'Happy Customers' },
    { icon: Award, value: '99.9%', label: 'Uptime SLA' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Choose CloudVPS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for developers, trusted by enterprises. Our cloud infrastructure 
            delivers unmatched performance, reliability, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Enterprise-Grade Infrastructure
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our cloud platform is built on cutting-edge hardware with redundant systems 
              across multiple data centers. We ensure your applications run smoothly with 
              minimal latency and maximum availability.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Premium Intel & AMD processors</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">NVMe SSD storage for ultra-fast I/O</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">10Gbps network connectivity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">DDoS protection included</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Data Center Infrastructure"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};