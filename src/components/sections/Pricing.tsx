import React from 'react';
import { Check, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { pricingPlans } from '../../data/mockData';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features 
            with no hidden fees or surprise charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`p-8 relative ${
                plan.popular 
                  ? 'ring-2 ring-primary-600 scale-105 shadow-2xl' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-secondary-900">
                    ${plan.price}
                  </span>
                  <span className="text-secondary-600 ml-2">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-success-600 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.buttonVariant} 
                size="lg" 
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Enterprise Contact */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-secondary-50">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              For enterprise customers with specific requirements, we offer custom pricing 
              and dedicated support. Contact our sales team to discuss your needs.
            </p>
            <Button variant="primary">
              Contact Sales Team
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};