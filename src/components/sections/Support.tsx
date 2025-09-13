import React, { useState } from 'react';
import { MessageCircle, Mail, Book, Phone, Clock, Users, Zap, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('live-chat');

  const supportChannels = [
    {
      id: 'live-chat',
      name: 'Live Chat',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 2 minutes',
      description: 'Get instant help from our technical experts',
      color: 'blue'
    },
    {
      id: 'email',
      name: 'Email Support',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 1 hour',
      description: 'Detailed technical assistance via email',
      color: 'green'
    },
    {
      id: 'knowledge-base',
      name: 'Knowledge Base',
      icon: Book,
      availability: 'Always',
      responseTime: 'Instant',
      description: 'Self-service documentation and tutorials',
      color: 'purple'
    },
    {
      id: 'phone',
      name: 'Phone Support',
      icon: Phone,
      availability: 'Business Hours',
      responseTime: '< 5 minutes',
      description: 'Direct phone support for urgent issues',
      color: 'orange'
    }
  ];

  const supportStats = [
    { icon: Clock, value: '< 2min', label: 'Avg Response Time' },
    { icon: Users, value: '50+', label: 'Support Engineers' },
    { icon: Zap, value: '99.5%', label: 'Resolution Rate' },
    { icon: CheckCircle, value: '24/7', label: 'Availability' }
  ];

  const knowledgeBaseCategories = [
    {
      title: 'Getting Started',
      articles: 25,
      topics: ['VPS Deployment', 'Initial Setup', 'SSH Access', 'Control Panel']
    },
    {
      title: 'Server Management',
      articles: 40,
      topics: ['Resource Monitoring', 'Scaling', 'Backups', 'Security']
    },
    {
      title: 'Networking',
      articles: 18,
      topics: ['Firewall Setup', 'Load Balancing', 'DNS Configuration', 'SSL Certificates']
    },
    {
      title: 'Troubleshooting',
      articles: 35,
      topics: ['Common Issues', 'Performance Optimization', 'Error Codes', 'Recovery']
    }
  ];

  const activeChannel = supportChannels.find(channel => channel.id === activeTab);

  return (
    <section id="support" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Expert Support
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            We're Here to Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the support you need, when you need it. Our team of cloud experts 
            is available 24/7 to ensure your success.
          </p>
        </div>

        {/* Support Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {supportStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Channel Selector */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Choose Support Channel</h3>
            <div className="space-y-3">
              {supportChannels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveTab(channel.id)}
                  className={`w-full p-4 rounded-xl border transition-all duration-200 text-left ${
                    activeTab === channel.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                      activeTab === channel.id ? 'bg-blue-600' : 'bg-gray-100'
                    }`}>
                      <channel.icon className={`w-5 h-5 ${
                        activeTab === channel.id ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{channel.name}</div>
                      <div className="text-sm text-gray-600">{channel.availability}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-600">
                        {channel.responseTime}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Channel Details */}
          <div className="lg:col-span-2">
            {activeChannel && (
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`flex items-center justify-center w-16 h-16 bg-${activeChannel.color}-100 rounded-xl`}>
                    <activeChannel.icon className={`w-8 h-8 text-${activeChannel.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activeChannel.name}</h3>
                    <p className="text-gray-600">{activeChannel.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {activeChannel.availability}
                    </div>
                    <div className="text-sm text-gray-600">Availability</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {activeChannel.responseTime}
                    </div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                </div>

                {/* Channel-specific content */}
                {activeTab === 'live-chat' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-semibold text-blue-900 mb-2">Start Live Chat</h4>
                      <p className="text-blue-700 text-sm mb-4">
                        Connect instantly with our technical support team for real-time assistance.
                      </p>
                      <Button variant="primary" className="w-full">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start Chat Now
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Available for:</strong> Technical issues, billing questions, general inquiries
                    </div>
                  </div>
                )}

                {activeTab === 'email' && (
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h4 className="font-semibold text-green-900 mb-2">Email Support</h4>
                      <p className="text-green-700 text-sm mb-4">
                        Send us detailed information about your issue for comprehensive assistance.
                      </p>
                      <Button variant="primary" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Email:</strong> support@cloudvps.com<br />
                      <strong>Best for:</strong> Complex technical issues, feature requests, detailed troubleshooting
                    </div>
                  </div>
                )}

                {activeTab === 'knowledge-base' && (
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h4 className="font-semibold text-purple-900 mb-2">Knowledge Base</h4>
                      <p className="text-purple-700 text-sm mb-4">
                        Browse our comprehensive documentation and tutorials.
                      </p>
                      <Button variant="primary" className="w-full">
                        <Book className="w-4 h-4 mr-2" />
                        Browse Documentation
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {knowledgeBaseCategories.map((category, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="font-medium text-gray-900 mb-1">{category.title}</div>
                          <div className="text-sm text-gray-600 mb-2">{category.articles} articles</div>
                          <div className="text-xs text-gray-500">
                            {category.topics.join(', ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'phone' && (
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h4 className="font-semibold text-orange-900 mb-2">Phone Support</h4>
                      <p className="text-orange-700 text-sm mb-4">
                        Call us directly for urgent issues requiring immediate attention.
                      </p>
                      <Button variant="primary" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Phone:</strong> +1 (555) 123-CLOUD<br />
                      <strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST<br />
                      <strong>For:</strong> Critical issues, urgent technical problems
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Support Promise */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Support Promise</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              We're committed to providing exceptional support that helps you succeed. 
              Our team of certified cloud engineers is here to ensure your VPS runs smoothly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">No outsourced support</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Certified engineers</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Proactive monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};