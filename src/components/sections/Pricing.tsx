import React, { useState } from 'react';
import { Check, Cpu, HardDrive, Wifi, Star } from 'lucide-react';
import { Button } from '../ui/Button';

export const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium-intel');

  const plans = [
    {
      id: 'regular',
      name: 'Regular',
      subtitle: 'Standard Performance',
      processor: 'Regular CPU',
      popular: false,
      configs: [
        {
          cpu: '1 vCPU',
          ram: '1GB RAM',
          storage: '25GB NVMe',
          bandwidth: '1TB',
          price: 5,
          originalPrice: 8
        },
        {
          cpu: '2 vCPU',
          ram: '2GB RAM',
          storage: '50GB NVMe',
          bandwidth: '2TB',
          price: 10,
          originalPrice: 15
        },
        {
          cpu: '4 vCPU',
          ram: '4GB RAM',
          storage: '80GB NVMe',
          bandwidth: '4TB',
          price: 20,
          originalPrice: 30
        }
      ]
    },
    {
      id: 'premium-intel',
      name: 'Premium Intel',
      subtitle: 'High Performance',
      processor: 'Intel Xeon',
      popular: true,
      configs: [
        {
          cpu: '1 vCPU',
          ram: '2GB RAM',
          storage: '50GB NVMe',
          bandwidth: '2TB',
          price: 12,
          originalPrice: 18
        },
        {
          cpu: '2 vCPU',
          ram: '4GB RAM',
          storage: '80GB NVMe',
          bandwidth: '4TB',
          price: 24,
          originalPrice: 35
        },
        {
          cpu: '4 vCPU',
          ram: '8GB RAM',
          storage: '160GB NVMe',
          bandwidth: '8TB',
          price: 48,
          originalPrice: 70
        }
      ]
    },
    {
      id: 'premium-amd',
      name: 'Premium AMD',
      subtitle: 'Ultimate Performance',
      processor: 'AMD EPYC',
      popular: false,
      configs: [
        {
          cpu: '1 vCPU',
          ram: '2GB RAM',
          storage: '50GB NVMe',
          bandwidth: '2TB',
          price: 10,
          originalPrice: 16
        },
        {
          cpu: '2 vCPU',
          ram: '4GB RAM',
          storage: '80GB NVMe',
          bandwidth: '4TB',
          price: 20,
          originalPrice: 32
        },
        {
          cpu: '4 vCPU',
          ram: '8GB RAM',
          storage: '160GB NVMe',
          bandwidth: '8TB',
          price: 40,
          originalPrice: 64
        }
      ]
    }
  ];

  const features = [
    'Full Root Access',
    'DDoS Protection',
    'Free SSL Certificate',
    '24/7 Support',
    'Automated Backups',
    '99.9% Uptime SLA',
    'IPv4 & IPv6',
    'Instant Deployment'
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect VPS configuration for your needs. All plans include 
            our core features with no hidden fees.
          </p>
        </div>

        {/* Plan Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedPlan === plan.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4" />
                <span>{plan.name}</span>
                {plan.popular && (
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Plan Details */}
        {plans.map((plan) => (
          selectedPlan === plan.id && (
            <div key={plan.id} className="space-y-8">
              {/* Plan Header */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Cpu className="w-4 h-4 mr-2" />
                  {plan.processor}
                </div>
              </div>

              {/* Configuration Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plan.configs.map((config, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        ${config.price}
                        <span className="text-lg font-normal text-gray-600">/mo</span>
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        ${config.originalPrice}/mo
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        Save ${config.originalPrice - config.price}/mo
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Cpu className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-700">CPU</span>
                        </div>
                        <span className="font-medium text-gray-900">{config.cpu}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                          <span className="text-sm text-gray-700">RAM</span>
                        </div>
                        <span className="font-medium text-gray-900">{config.ram}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <HardDrive className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-700">Storage</span>
                        </div>
                        <span className="font-medium text-gray-900">{config.storage}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Wifi className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-700">Bandwidth</span>
                        </div>
                        <span className="font-medium text-gray-900">{config.bandwidth}</span>
                      </div>
                    </div>

                    <Button variant="primary" size="lg" className="w-full">
                      Deploy Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}

        {/* Features Comparison */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              All Plans Include
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitor Comparison */}
        <div className="mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Why Choose CloudVPS over Ultahost?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">Lower Pricing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2x</div>
                <div className="text-sm text-gray-600">Faster Deployment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};