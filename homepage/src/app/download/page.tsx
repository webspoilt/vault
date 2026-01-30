'use client'

import { useState } from 'react'
import { Download, Apple, Smartphone, Globe, Monitor, Shield, Server, Cloud, Database, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function DownloadPage() {
  const [activeTab, setActiveTab] = useState('cloud')

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1a] text-gray-100 font-sans">



      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-900/10 mb-8">
              <Server className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium tracking-wide text-blue-400 uppercase">Deployment Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Deployment Options
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Whether you need air-gapped sovereignty or FedRAMP-authorized cloud, VAULT adapts to your infrastructure requirements.
            </p>
          </div>
        </section>

        {/* Deployment Tabs */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12 border-b border-white/10">
              <button
                onClick={() => setActiveTab('cloud')}
                className={`px-8 py-4 font-semibold text-lg border-b-2 transition-colors ${activeTab === 'cloud' ? 'border-blue-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                Government Cloud
              </button>
              <button
                onClick={() => setActiveTab('prem')}
                className={`px-8 py-4 font-semibold text-lg border-b-2 transition-colors ${activeTab === 'prem' ? 'border-blue-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                On-Premise / Air-Gapped
              </button>
              <button
                onClick={() => setActiveTab('client')}
                className={`px-8 py-4 font-semibold text-lg border-b-2 transition-colors ${activeTab === 'client' ? 'border-blue-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                Client Apps
              </button>
            </div>

            {/* Content Areas */}
            <div className="min-h-[400px]">
              {activeTab === 'cloud' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">FedRAMP High Authorization</h2>
                    <p className="text-gray-400 text-lg">
                      Our government cloud environment is physically isolated and staffed by U.S. citizens on U.S. soil. Designed for Impact Level 5 (IL5) workloads.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-gray-300">
                        <Shield className="w-5 h-5 text-green-500" /> FIPS 140-2 Validated Cryptography
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <Server className="w-5 h-5 text-green-500" /> AWS GovCloud (US) Region
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <Cloud className="w-5 h-5 text-green-500" /> Seamless Scaling & Redundancy
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Link href="/contact-sales" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                        Request GovCloud Access <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 flex items-center justify-center">
                    {/* Placeholder for architecture diagram or badge */}
                    <div className="text-center">
                      <Cloud className="w-24 h-24 text-blue-500/20 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-white">US-East-Gov</div>
                      <div className="text-green-400 font-mono mt-2">● Systems Operational</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'prem' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">Total Sovereign Control</h2>
                    <p className="text-gray-400 text-lg">
                      Deploy VAULT inside your secure perimeter. Compatible with Kubernetes, Docker Swarm, and bare metal Linux environments. Support for completely disconnected (air-gapped) networks.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-gray-300">
                        <Database className="w-5 h-5 text-amber-500" /> Full Database Sovereignty
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <Shield className="w-5 h-5 text-amber-500" /> Custom CA / PKI Integration
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <Server className="w-5 h-5 text-amber-500" /> Helm Charts & Docker Compose
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Link href="/contact-sales" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors">
                        Get Deployment Guide <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
                    <div className="font-mono text-sm text-gray-400">
                      <div className="text-green-400">$ helm install vault-enterprise ./charts</div>
                      <div className="mt-2">Deploying VAULT Controller... Done</div>
                      <div className="mt-1">Deploying Key Server... Done</div>
                      <div className="mt-1">Deploying Message Store... Done</div>
                      <div className="mt-4 text-white">Status: <span className="text-green-400">Running</span></div>
                      <div className="mt-1 text-white">Mode: <span className="text-amber-400">Air-Gapped</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'client' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-8 bg-[#111827] border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors group">
                      <Monitor className="w-12 h-12 text-blue-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Desktop Workstation</h3>
                      <p className="text-gray-400 text-sm mb-6">Windows 10/11 (MSI), macOS (PKG), Linux (DEB/RPM). Smart card support included.</p>
                      <button className="w-full py-2 bg-white/5 group-hover:bg-blue-600 group-hover:text-white text-gray-300 rounded-lg transition-colors font-medium">Download v3.4.0</button>
                    </div>
                    <div className="p-8 bg-[#111827] border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors group">
                      <Apple className="w-12 h-12 text-gray-100 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">iOS / iPadOS</h3>
                      <p className="text-gray-400 text-sm mb-6">Optimized for agency-managed devices (MDM). FIPS mode toggle available.</p>
                      <button className="w-full py-2 bg-white/5 group-hover:bg-blue-600 group-hover:text-white text-gray-300 rounded-lg transition-colors font-medium">App Store (Business)</button>
                    </div>
                    <div className="p-8 bg-[#111827] border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors group">
                      <Smartphone className="w-12 h-12 text-green-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Android Enterprise</h3>
                      <p className="text-gray-400 text-sm mb-6">Compatible with Samsung Knox and Android for Work profiles.</p>
                      <button className="w-full py-2 bg-white/5 group-hover:bg-blue-600 group-hover:text-white text-gray-300 rounded-lg transition-colors font-medium">Play Store (Managed)</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#05080f] py-8 text-center text-sm text-gray-500">
        <p>© 2024 VAULT Enterprise. FIPS 140-2 Validated Module #4092.</p>
      </footer>
    </div>
  )
}
