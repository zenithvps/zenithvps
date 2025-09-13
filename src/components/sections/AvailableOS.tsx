import React, { useState } from 'react';
import { Monitor, Download, Star, Filter } from 'lucide-react';

export const AvailableOS: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const operatingSystems = [
    {
      id: 'ubuntu-22',
      name: 'Ubuntu 22.04 LTS',
      category: 'linux',
      icon: '🐧',
      version: '22.04',
      description: 'Most popular Linux distribution for servers',
      features: ['Long Term Support', 'APT Package Manager', 'Snap Support'],
      popularity: 95,
      recommended: true
    },
    {
      id: 'ubuntu-20',
      name: 'Ubuntu 20.04 LTS',
      category: 'linux',
      icon: '🐧',
      version: '20.04',
      description: 'Stable LTS version with extended support',
      features: ['Long Term Support', 'APT Package Manager', 'Docker Ready'],
      popularity: 88,
      recommended: false
    },
    {
      id: 'debian-11',
      name: 'Debian 11',
      category: 'linux',
      icon: '🌀',
      version: '11',
      description: 'Rock-solid stability and security',
      features: ['Stable Release', 'APT Package Manager', 'Minimal Install'],
      popularity: 75,
      recommended: false
    },
    {
      id: 'centos-8',
      name: 'CentOS Stream 8',
      category: 'linux',
      icon: '🔴',
      version: '8',
      description: 'Enterprise-grade Linux distribution',
      features: ['YUM Package Manager', 'SELinux', 'Enterprise Ready'],
      popularity: 70,
      recommended: false
    },
    {
      id: 'rocky-8',
      name: 'Rocky Linux 8',
      category: 'linux',
      icon: '⛰️',
      version: '8',
      description: 'CentOS replacement with enterprise focus',
      features: ['RHEL Compatible', 'YUM Package Manager', 'Enterprise Support'],
      popularity: 65,
      recommended: false
    },
    {
      id: 'fedora-37',
      name: 'Fedora 37',
      category: 'linux',
      icon: '🎩',
      version: '37',
      description: 'Cutting-edge features and latest packages',
      features: ['Latest Packages', 'DNF Package Manager', 'Developer Friendly'],
      popularity: 60,
      recommended: false
    },
    {
      id: 'windows-2022',
      name: 'Windows Server 2022',
      category: 'windows',
      icon: '🪟',
      version: '2022',
      description: 'Latest Windows Server with enhanced security',
      features: ['GUI Interface', 'Active Directory', 'IIS Web Server'],
      popularity: 80,
      recommended: true
    },
    {
      id: 'windows-2019',
      name: 'Windows Server 2019',
      category: 'windows',
      icon: '🪟',
      version: '2019',
      description: 'Stable Windows Server for production',
      features: ['GUI Interface', 'Active Directory', 'Hyper-V'],
      popularity: 75,
      recommended: false
    },
    {
      id: 'freebsd-13',
      name: 'FreeBSD 13',
      category: 'bsd',
      icon: '👹',
      version: '13',
      description: 'Advanced Unix-like operating system',
      features: ['ZFS Support', 'Jails', 'High Performance'],
      popularity: 45,
      recommended: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All OS', count: operatingSystems.length },
    { id: 'linux', name: 'Linux', count: operatingSystems.filter(os => os.category === 'linux').length },
    { id: 'windows', name: 'Windows', count: operatingSystems.filter(os => os.category === 'windows').length },
    { id: 'bsd', name: 'BSD', count: operatingSystems.filter(os => os.category === 'bsd').length }
  ];

  const filteredOS = selectedCategory === 'all' 
    ? operatingSystems 
    : operatingSystems.filter(os => os.category === selectedCategory);

  return (
    <section id="os" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Monitor className="w-4 h-4 mr-2" />
            Operating Systems
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Choose Your Perfect OS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deploy with your preferred operating system. All images are optimized 
            for cloud deployment with the latest security updates.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* OS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOS.map((os, index) => (
            <div 
              key={os.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{os.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{os.name}</h3>
                    <div className="text-sm text-gray-600">Version {os.version}</div>
                  </div>
                </div>
                {os.recommended && (
                  <div className="flex items-center space-x-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Recommended</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {os.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {os.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Popularity Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Popularity</span>
                  <span className="text-sm font-medium text-gray-900">{os.popularity}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${os.popularity}%` }}
                  ></div>
                </div>
              </div>

              {/* Deploy Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg">
                <Download className="w-4 h-4" />
                <span>Deploy {os.name}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Custom OS Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need a Custom OS?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't see your preferred operating system? We can help you deploy 
              custom images or provide additional OS options upon request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Request Custom OS
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Upload ISO
              </button>
            </div>
          </div>
        </div>

        {/* Quick Deploy Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
            <div className="text-2xl font-bold text-green-600 mb-2">&lt;60s</div>
            <div className="text-sm text-green-700">Average Deploy Time</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
            <div className="text-2xl font-bold text-blue-600 mb-2">Auto</div>
            <div className="text-sm text-blue-700">Security Updates</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
            <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-purple-700">OS Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};