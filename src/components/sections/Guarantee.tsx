import React from 'react';
import { Shield, Clock, DollarSign, Headphones, Zap, Lock } from 'lucide-react';

export const Guarantee: React.FC = () => {
  const guarantees = [
    {
      icon: Clock,
      title: '99.9% Uptime SLA',
      description: 'Guaranteed uptime with automatic failover and redundant infrastructure.',
      highlight: 'SLA-backed'
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Round-the-clock technical support from certified cloud engineers.',
      highlight: 'Always available'
    },
    {
      icon: DollarSign,
      title: 'Fixed Pricing',
      description: 'No hidden fees or surprise charges. Transparent pricing you can trust.',
      highlight: 'No surprises'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade encryption, DDoS protection, and regular security audits.',
      highlight: 'Bank-level security'
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Deploy your VPS in under 60 seconds with our automated provisioning.',
      highlight: '<60 seconds'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Automated backups, snapshot recovery, and GDPR compliance.',
      highlight: 'GDPR compliant'
    }
  ];

  return (
    <section id="guarantee" className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Our Guarantee to You
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Thousands Trust CloudVPS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand behind our service with industry-leading guarantees and commitments 
            that ensure your success in the cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                  <guarantee.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  {guarantee.highlight}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {guarantee.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers and businesses who trust CloudVPS for their 
              mission-critical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};