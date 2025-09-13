import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp, Shield, AlertTriangle, Users } from 'lucide-react';
import { Button } from '../ui/Button';

export const Rules: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const rulesSections = [
    {
      id: 'acceptable-use',
      icon: Shield,
      title: 'Acceptable Use Policy',
      summary: 'Guidelines for proper use of our VPS services and prohibited activities.',
      content: [
        'No illegal activities or content hosting',
        'No spam, phishing, or malicious software distribution',
        'Respect intellectual property rights',
        'No resource abuse or excessive bandwidth usage',
        'Comply with all applicable laws and regulations'
      ]
    },
    {
      id: 'service-terms',
      icon: FileText,
      title: 'Service Terms',
      summary: 'Terms and conditions governing your use of CloudVPS services.',
      content: [
        'Service availability and uptime commitments',
        'Payment terms and billing cycles',
        'Account suspension and termination policies',
        'Data backup and recovery responsibilities',
        'Service modification and update procedures'
      ]
    },
    {
      id: 'privacy-security',
      icon: AlertTriangle,
      title: 'Privacy & Security',
      summary: 'How we protect your data and maintain service security.',
      content: [
        'Data encryption and protection measures',
        'Privacy policy and data handling practices',
        'Security incident response procedures',
        'Compliance with GDPR and other regulations',
        'User responsibility for account security'
      ]
    },
    {
      id: 'support-sla',
      icon: Users,
      title: 'Support & SLA',
      summary: 'Service level agreements and support commitments.',
      content: [
        '99.9% uptime guarantee with SLA credits',
        '24/7 technical support availability',
        'Response time commitments by priority level',
        'Escalation procedures for critical issues',
        'Maintenance window notifications'
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section id="rules" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Terms & Policies
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Service Rules & Guidelines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clear, transparent policies that govern our services and protect both 
            our customers and our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {rulesSections.map((section, index) => (
              <div 
                key={section.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {section.title}
                      </h3>
                      <p className="text-gray-600">
                        {section.summary}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedSection === section.id ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedSection === section.id && (
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <ul className="space-y-3">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Full Terms CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need Complete Terms & Conditions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                For detailed legal terms, privacy policy, and complete service agreements, 
                please review our comprehensive documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary">
                  Read Full Terms
                </Button>
                <Button variant="secondary">
                  Privacy Policy
                </Button>
                <Button variant="secondary">
                  SLA Details
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
              <div className="text-2xl font-bold text-green-600 mb-2">Fair Use</div>
              <div className="text-sm text-green-700">
                Reasonable resource usage for all customers
              </div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">24/7 Support</div>
              <div className="text-sm text-blue-700">
                Always available when you need help
              </div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
              <div className="text-2xl font-bold text-purple-600 mb-2">Data Safe</div>
              <div className="text-sm text-purple-700">
                Your data is protected and secure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};