import React, { useState } from 'react';
import { MapPin, Wifi, Zap, Globe } from 'lucide-react';

export const RegionList: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('us-east');

  const regions = [
    {
      id: 'us-east',
      name: 'New York',
      country: 'United States',
      flag: '🇺🇸',
      latency: '12ms',
      status: 'online',
      coordinates: { x: 25, y: 40 }
    },
    {
      id: 'us-west',
      name: 'San Francisco',
      country: 'United States',
      flag: '🇺🇸',
      latency: '8ms',
      status: 'online',
      coordinates: { x: 15, y: 45 }
    },
    {
      id: 'eu-west',
      name: 'London',
      country: 'United Kingdom',
      flag: '🇬🇧',
      latency: '15ms',
      status: 'online',
      coordinates: { x: 50, y: 35 }
    },
    {
      id: 'eu-central',
      name: 'Frankfurt',
      country: 'Germany',
      flag: '🇩🇪',
      latency: '18ms',
      status: 'online',
      coordinates: { x: 55, y: 38 }
    },
    {
      id: 'asia-southeast',
      name: 'Singapore',
      country: 'Singapore',
      flag: '🇸🇬',
      latency: '22ms',
      status: 'online',
      coordinates: { x: 75, y: 65 }
    },
    {
      id: 'asia-east',
      name: 'Tokyo',
      country: 'Japan',
      flag: '🇯🇵',
      latency: '25ms',
      status: 'online',
      coordinates: { x: 85, y: 45 }
    },
    {
      id: 'oceania',
      name: 'Sydney',
      country: 'Australia',
      flag: '🇦🇺',
      latency: '28ms',
      status: 'online',
      coordinates: { x: 85, y: 80 }
    },
    {
      id: 'asia-south',
      name: 'Mumbai',
      country: 'India',
      flag: '🇮🇳',
      latency: '30ms',
      status: 'online',
      coordinates: { x: 70, y: 55 }
    }
  ];

  const selectedRegionData = regions.find(r => r.id === selectedRegion);

  return (
    <section id="regions" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Global Infrastructure
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Deploy Anywhere in the World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our global network of data centers to deploy your VPS 
            closest to your users for optimal performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Global Network</h3>
              
              {/* World Map Representation */}
              <div className="relative w-full h-80 bg-blue-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 opacity-50"></div>
                
                {/* Region Dots */}
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`absolute w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-150 ${
                      selectedRegion === region.id
                        ? 'bg-blue-600 ring-4 ring-blue-200 scale-125'
                        : 'bg-white border-2 border-blue-600 hover:bg-blue-600'
                    }`}
                    style={{
                      left: `${region.coordinates.x}%`,
                      top: `${region.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ))}
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {regions.map((region, index) => (
                    <line
                      key={index}
                      x1={`${region.coordinates.x}%`}
                      y1={`${region.coordinates.y}%`}
                      x2="50%"
                      y2="50%"
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                  ))}
                </svg>
              </div>

              {/* Selected Region Info */}
              {selectedRegionData && (
                <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{selectedRegionData.flag}</span>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {selectedRegionData.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {selectedRegionData.country}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-green-600">
                          {selectedRegionData.latency}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">avg latency</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Region List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Regions</h3>
            
            <div className="space-y-3">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`w-full p-4 rounded-xl border transition-all duration-200 text-left ${
                    selectedRegion === region.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{region.flag}</span>
                      <div>
                        <div className="font-medium text-gray-900">
                          {region.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {region.country}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-gray-900">
                            {region.latency}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">latency</div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600 font-medium">
                          Online
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Performance Stats */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4">Network Performance</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10Gbps</div>
                  <div className="text-sm text-gray-600">Network Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-gray-600">Network Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};