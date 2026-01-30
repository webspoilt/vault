'use client'

import { useState } from 'react'
import { Shield, Lock, Server, Smartphone, Users, Globe2, Check, X, ArrowRight, ShieldCheck, Cpu, LayoutGrid } from 'lucide-react'
import Link from 'next/link'

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState('encryption')

  const features = {
    encryption: [
      { title: 'Signal Protocol', description: 'Proven, audited Double Ratchet algorithm', status: 'active' },
      { title: 'MLS Protocol', description: 'RFC 9420 compliant group messaging', status: 'active' },
      { title: 'Post-Quantum Ready', description: 'ML-KEM (CRYSTALS-Kyber) integration', status: 'active' },
      { title: 'Zero Knowledge', description: 'Servers cannot read any message content', status: 'active' },
      { title: 'Perfect Forward Secrecy', description: 'Compromised keys don\'t expose past messages', status: 'active' },
      { title: 'Client-Side Encryption', description: 'All crypto operations on your device', status: 'active' },
    ],
    architecture: [
      { title: 'Zero Server Storage', description: 'Messages relayed, never stored', status: 'active' },
      { title: 'Client-First Design', description: 'User owns their data and keys', status: 'active' },
      { title: 'User-Controlled Backups', description: 'Encrypted backups to your cloud', status: 'active' },
      { title: 'WebAssembly Crypto', description: 'WASM-isolated encryption engine', status: 'active' },
      { title: 'Federated Network', description: 'Based on Matrix open standards', status: 'active' },
      { title: 'Minimal Attack Surface', description: 'Ephemeral relay servers only', status: 'active' },
    ],
    deployment: [
      { title: 'Self-Hosted', description: 'Full control over your infrastructure', status: 'active' },
      { title: 'Docker Ready', description: 'One-command deployment', status: 'active' },
      { title: 'Kubernetes', description: 'Helm charts for scalable deployments', status: 'active' },
      { title: 'Air-Gapped', description: 'Fully offline deployment option', status: 'active' },
      { title: 'Multi-Cloud', description: 'Deploy anywhere - AWS, GCP, Azure, on-prem', status: 'active' },
      { title: 'Open Source', description: 'MIT licensed core protocol', status: 'active' },
    ],
  }

  const comparisons = [
    { feature: 'End-to-End Encryption', vault: true, whatsapp: true, slack: false, signal: true },
    { feature: 'Zero Server Storage', vault: true, whatsapp: false, slack: false, signal: true },
    { feature: 'Auto-Delete Default', vault: true, whatsapp: false, slack: false, signal: false },
    { feature: 'Audit Ready Logs', vault: true, whatsapp: false, slack: true, signal: false },
    { feature: 'Organization Controls', vault: true, whatsapp: false, slack: true, signal: false },
    { feature: 'Open Source Core', vault: true, whatsapp: false, slack: false, signal: true },
    { feature: 'Self-Hosted Option', vault: true, whatsapp: false, slack: true, signal: false },
    { feature: 'FIPS 140-2 Validated', vault: true, whatsapp: false, slack: false, signal: false },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1a] text-gray-100 font-sans">

      {/* Navigation */}


      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-[#0a0f1a]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-900/10 mb-8">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium tracking-wide text-blue-400 uppercase">Platform Overview</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              A Complete Secure<br />
              Communications Platform.
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Designed for sovereignty. Engineered for silence. Bypassing the pitfalls of consumer messaging apps to deliver true enterprise control.
            </p>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#111827] border border-white/10 rounded-2xl">
              <ShieldCheck className="w-10 h-10 text-green-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Sovereign Security</h3>
              <p className="text-gray-400">Your data, your keys, your infrastructure. No third-party trust required.</p>
            </div>
            <div className="p-8 bg-[#111827] border border-white/10 rounded-2xl">
              <LayoutGrid className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Scale</h3>
              <p className="text-gray-400">Manage 100,000+ users with granular policies, SCIM provisioning, and SSO.</p>
            </div>
            <div className="p-8 bg-[#111827] border border-white/10 rounded-2xl">
              <Users className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Cross-Agency Trust</h3>
              <p className="text-gray-400">Federate securely with other agencies while maintaining strict boundaries.</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 px-6 bg-[#0d121f] border-y border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-16">The Enterprise Difference</h2>
            <div className="overflow-x-auto bg-[#111827] border border-white/10 rounded-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-6 text-white font-bold">Feature</th>
                    <th className="p-6 text-blue-400 font-bold text-center bg-blue-900/10 border-x border-white/10">VAULT Enterprise</th>
                    <th className="p-6 text-gray-400 font-medium text-center">WhatsApp</th>
                    <th className="p-6 text-gray-400 font-medium text-center">Slack</th>
                    <th className="p-6 text-gray-400 font-medium text-center">Signal Consumer</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-6 text-gray-200 font-medium">{row.feature}</td>
                      <td className="p-6 text-center bg-blue-900/5 border-x border-white/10">
                        {row.vault ? <Check className="w-6 h-6 text-blue-500 mx-auto" /> : <X className="w-6 h-6 text-gray-600 mx-auto" />}
                      </td>
                      <td className="p-6 text-center">
                        {row.whatsapp ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-gray-600 mx-auto" />}
                      </td>
                      <td className="p-6 text-center">
                        {row.slack ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-gray-600 mx-auto" />}
                      </td>
                      <td className="p-6 text-center">
                        {row.signal ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-gray-600 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Deploy VAULT Today</h2>
            <div className="flex gap-4 justify-center">
              <Link href="/contact-sales" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
                Contact Sales
              </Link>
              <Link href="/download" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors">
                View Deployment Options
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#05080f] py-8 text-center text-sm text-gray-500">
        <p>© 2024 VAULT Enterprise. Verifiable Operations Integrity Defense.</p>
      </footer>
    </div>
  )
}
