import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                99.99% Uptime Guarantee
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                Scale Your Business with
                <span className="text-gradient block">Cloud Excellence</span>
              </h1>
              <p className="text-xl text-secondary-600 leading-relaxed max-w-2xl">
                Experience lightning-fast performance, enterprise-grade security, and seamless scalability 
                with our cutting-edge cloud hosting platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-secondary-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-900">99.99%</div>
                <div className="text-sm text-secondary-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-900">50k+</div>
                <div className="text-sm text-secondary-600">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-900">24/7</div>
                <div className="text-sm text-secondary-600">Support</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cloud Infrastructure"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-gentle">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                  <span className="text-sm font-medium text-secondary-900">All Systems Operational</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">2.3s</div>
                  <div className="text-xs text-secondary-600">Avg Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};