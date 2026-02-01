'use client'

import { Users, Target, Shield, Building, MapPin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0a0f1a] text-gray-100 font-sans">
            <main className="flex-1">
                {/* Hero */}
                <section className="py-24 px-6 bg-[#0a0f1a]">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-900/10 mb-8">
                            <Building className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium tracking-wide text-blue-400 uppercase">About VAULT</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Built in India, For the World
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            We're building the next generation of secure communication infrastructure
                            for enterprises and governments who refuse to compromise on privacy.
                        </p>
                    </div>
                </section>

                {/* Mission */}
                <section className="py-16 px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-[#111827] border border-white/10 p-8 rounded-2xl">
                            <Target className="w-12 h-12 text-blue-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To provide sovereign, zero-trust communication infrastructure that empowers
                                organizations to maintain complete control over their data. We believe privacy
                                is a fundamental right, not a feature to be negotiated.
                            </p>
                        </div>
                        <div className="bg-[#111827] border border-white/10 p-8 rounded-2xl">
                            <Shield className="w-12 h-12 text-green-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We build security from first principles. Open cryptographic standards,
                                client-side key generation, minimal metadata retention. No backdoors,
                                no exceptions, no compromises.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-16 px-6 bg-[#0d121f] border-y border-white/10">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The Team</h2>
                        <p className="text-gray-400">A passionate team of security engineers and product builders.</p>
                    </div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-3xl font-bold text-white">B</span>
                            </div>
                            <h4 className="text-lg font-bold text-white">Biswadeb</h4>
                            <p className="text-sm text-gray-400">Founder & Lead Developer</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-white">Open Positions</h4>
                            <p className="text-sm text-gray-400">We're hiring! See CONTRIBUTING.md</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-white">Open Positions</h4>
                            <p className="text-sm text-gray-400">Security researchers welcome</p>
                        </div>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white mb-2">Office</h4>
                                    <p className="text-gray-400 text-sm">
                                        Embassy Tech Village, Block B<br />
                                        Outer Ring Road<br />
                                        Bengaluru 560103, Karnataka<br />
                                        India 🇮🇳
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white mb-2">Phone</h4>
                                    <p className="text-gray-400 text-sm">+91 80 4567 8900</p>
                                    <p className="text-gray-500 text-xs mt-1">Mon-Sat 9AM-7PM IST</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white mb-2">Email</h4>
                                    <p className="text-gray-400 text-sm">contact@vault.in</p>
                                    <p className="text-gray-400 text-sm">enterprise@vault.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="py-8 px-6 bg-yellow-900/20 border-y border-yellow-500/20">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-yellow-400 text-sm">
                            <strong>Note:</strong> VAULT is currently in active development.
                            Some features described are on our roadmap. We're transparent about our current capabilities.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">Interested in VAULT?</h2>
                        <Link
                            href="/contact-sales"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/10 bg-[#05080f] py-8 text-center text-sm text-gray-500">
                <p>© 2024 VAULT. Made with ❤️ in India.</p>
            </footer>
        </div>
    )
}
