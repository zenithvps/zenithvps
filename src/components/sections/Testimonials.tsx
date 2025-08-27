import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '../ui/Card';
import { testimonials } from '../../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience with CloudHost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-primary-600 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warning-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-secondary-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-secondary-600 mb-8">Trusted by companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="h-12 w-32 bg-secondary-200 rounded flex items-center justify-center">
              <span className="text-secondary-500 font-medium">Company A</span>
            </div>
            <div className="h-12 w-32 bg-secondary-200 rounded flex items-center justify-center">
              <span className="text-secondary-500 font-medium">Company B</span>
            </div>
            <div className="h-12 w-32 bg-secondary-200 rounded flex items-center justify-center">
              <span className="text-secondary-500 font-medium">Company C</span>
            </div>
            <div className="h-12 w-32 bg-secondary-200 rounded flex items-center justify-center">
              <span className="text-secondary-500 font-medium">Company D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};