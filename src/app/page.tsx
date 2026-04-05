import React from 'react';
import { ArrowRight, Globe2, Users, Lightbulb, Pickaxe, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#C02990]/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0E1B2B]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Subnets for Good" className="h-10 w-auto object-contain" />
          </div>
          <a href="#contact" className="text-sm font-medium text-[#E6EAED]/70 hover:text-[#E6EAED] transition-colors">
            Start the conversation
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden flex flex-col items-center text-center px-6">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C02990]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#22C55E]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
          <span className="text-xs font-medium uppercase tracking-widest text-[#E6EAED]/80">Building the Bridge</span>
        </div>

        <h1 className="max-w-5xl text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-[#E6EAED] leading-[1.1] relative z-10">
          The future of AI is being built right now.
        </h1>
        <p className="mt-8 text-2xl sm:text-3xl font-light text-[#E6EAED]/60 max-w-3xl relative z-10 leading-tight">
          We're making sure it's built <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C02990] to-[#22C55E] font-medium">for everyone.</span>
        </p>
        
        <p className="mt-8 max-w-2xl text-lg text-[#E6EAED]/50 leading-relaxed relative z-10">
          We bridge the decentralized AI revolution and the social impact world, connecting mission-driven organizations to the tools, networks, and capital reshaping what's possible.
        </p>

        <div className="mt-12 relative z-10 flex flex-col sm:flex-row gap-6">
          <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-[#C02990] border border-transparent rounded-full hover:bg-[#a6227b] shadow-[0_0_40px_-10px_#C02990]">
            Partner with us
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Belief Section - Split Layout */}
      <section className="py-32 px-6 border-y border-white/5 bg-gradient-to-b from-[#0E1B2B] to-black/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 lg:sticky top-32 self-start">
            <h2 className="text-[#C02990] font-semibold tracking-[0.2em] uppercase text-sm mb-4">Our Belief</h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-[#E6EAED] leading-tight">
              Human insight guiding decentralized innovation
            </h3>
          </div>
          <div className="lg:col-span-7 space-y-12 text-2xl sm:text-3xl font-light text-[#E6EAED]/70 leading-relaxed">
            <p>
              The organizations <strong className="font-medium text-[#E6EAED]">closest to the problems</strong> should have access to the most powerful tools. And the people building those tools should understand the problems worth solving.
            </p>
            <p>
              We work at the intersection of <strong className="font-medium text-[#E6EAED]">Bittensor</strong>, the world's largest open decentralized AI protocol, and the global network of nonprofits, foundations, social enterprises, and impact investors working on the world's hardest problems.
            </p>
            <blockquote className="pl-8 border-l-2 border-[#22C55E] text-[#22C55E] font-medium text-3xl italic">
              "Connection is not a byproduct of what we do. It is the work."
            </blockquote>
          </div>
        </div>
      </section>

      {/* What We Do - Bento Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[#C02990] font-semibold tracking-[0.2em] uppercase text-sm mb-4">What we do</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-[#E6EAED]">Four ways we build the bridge</h3>
          <p className="mt-6 text-xl text-[#E6EAED]/50 max-w-2xl">
            From strategic partnerships to technical training, every service we offer is designed to close the gap between decentralized AI and the mission-driven organizations that need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="group bg-white/[0.02] border border-white/5 rounded-3xl p-10 hover:bg-white/[0.04] transition-colors relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C02990]/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100"></div>
            <Users className="w-10 h-10 text-[#C02990] mb-6" />
            <h4 className="text-2xl font-bold text-[#E6EAED] mb-4">Strategic Partnerships</h4>
            <p className="text-[#E6EAED]/60 mb-8 flex-grow leading-relaxed">
              An active partnerships engine opening doors to funding, technology, and global networks that would take years to build independently.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-sm font-medium text-[#22C55E]">For: Mission-driven orgs ready to access rooms they haven't been in yet.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/[0.02] border border-white/5 rounded-3xl p-10 hover:bg-white/[0.04] transition-colors relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E]/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100"></div>
            <Pickaxe className="w-10 h-10 text-[#22C55E] mb-6" />
            <h4 className="text-2xl font-bold text-[#E6EAED] mb-4">Miner Onboarding Academy</h4>
            <p className="text-[#E6EAED]/60 mb-8 flex-grow leading-relaxed">
              Training women coders in Latin America, Africa, and the Global South to participate as miners in Bittensor subnets — economic inclusion by design.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-sm font-medium text-[#C02990]">For: Funders and partners invested in gender equity and economic inclusion.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/[0.02] border border-white/5 rounded-3xl p-10 hover:bg-white/[0.04] transition-colors relative overflow-hidden flex flex-col h-full">
            <Globe2 className="w-10 h-10 text-[#E6EAED]/80 mb-6" />
            <h4 className="text-2xl font-bold text-[#E6EAED] mb-4">Subnet Solutions</h4>
            <p className="text-[#E6EAED]/60 mb-8 flex-grow leading-relaxed">
              Connecting nonprofits and NGOs with decentralized compute, AI inference, and data services — at a fraction of the cost.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-sm font-medium text-[#22C55E]">For: Nonprofits looking to cut tech costs while scaling impact.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white/[0.02] border border-white/5 rounded-3xl p-10 hover:bg-white/[0.04] transition-colors relative overflow-hidden flex flex-col h-full">
            <Lightbulb className="w-10 h-10 text-[#E6EAED]/80 mb-6" />
            <h4 className="text-2xl font-bold text-[#E6EAED] mb-4">Social Impact Pre-Incubation</h4>
            <p className="text-[#E6EAED]/60 mb-8 flex-grow leading-relaxed">
              Supporting early-stage founders to embed social purpose into decentralized AI from day one, not as an afterthought.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-sm font-medium text-[#C02990]">For: Tech entrepreneurs with an idea worth building on decentralized AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dives Section */}
      <section className="py-32 px-6 bg-black/30 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto space-y-32">
          
          {/* Partnership Deep Dive */}
          <div>
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-[1px] bg-[#C02990]"></div>
              <h3 className="text-3xl font-bold text-[#E6EAED]">Strategic Partnerships</h3>
            </div>
            <div className="space-y-6 text-xl font-light leading-relaxed text-[#E6EAED]/70">
              <p>
                We serve as an active partnerships engine for a small number of mission-driven organizations — opening doors to funding, technology, and global networks that would take years to build independently. We show up in rooms around the world as your representative, bringing your work to the people who need to know about it, and bringing the right opportunities back to you.
              </p>
              <p>
                This is not a transactional service. It is an ongoing relationship — built on trust, deep knowledge of your mission, and a network developed over two decades across philanthropy, international development, and emerging technology.
              </p>
              <div className="mt-10 p-8 rounded-2xl bg-[#C02990]/5 border border-[#C02990]/20">
                <p className="font-medium text-[#E6EAED]">We work with a limited number of partners at a time.</p>
                <a href="mailto:andres@subnetsforgood.com" className="inline-flex items-center text-[#C02990] hover:text-[#E6EAED] transition-colors mt-4 font-medium group">
                  Contact andres@subnetsforgood.com <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Academy Deep Dive */}
          <div>
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-[1px] bg-[#22C55E]"></div>
              <h3 className="text-3xl font-bold text-[#E6EAED]">Miner Onboarding Academy</h3>
            </div>
            <div className="space-y-6 text-xl font-light leading-relaxed text-[#E6EAED]/70">
              <p>
                We train women coders and computer scientists in Latin America, Africa, and the Global South to participate as miners in Bittensor subnets — building technical skills, generating sustainable income, and expanding representation in decentralized AI.
              </p>
              <p className="text-2xl text-[#22C55E] font-medium py-6">
                This is not just technical training. It is economic inclusion by design.
              </p>
              <p>
                The decentralized AI revolution is generating enormous wealth and opportunity. We are making sure those opportunities reach the women and communities who have historically been left out of every previous technology wave.
              </p>
              <p>
                We are actively building partnerships with multilateral development organizations and foundations working to close the gender gap in technology and create meaningful employment pathways. If your institution is invested in that mission, we want to hear from you.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Who We Are */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <h2 className="text-[#C02990] font-semibold tracking-[0.2em] uppercase text-sm mb-4 text-center">Who we are</h2>
        <h3 className="text-4xl sm:text-5xl font-bold text-[#E6EAED] mb-20 text-center">Built by someone who kept seeing the same gap</h3>
        
        <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-[2.5rem] p-10 sm:p-16 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C02990]/20 to-transparent"></div>
          
          <div className="space-y-8 text-[#E6EAED]/70 text-xl leading-relaxed font-light">
            <p>
              <strong className="text-[#E6EAED] font-medium">Andrés Marquez-Lara</strong> is a social entrepreneur, facilitator, and connector with two decades of experience across philanthropy, international development, and organizational leadership. His work spans more than 40 countries and includes partnerships with the Gates Foundation, the Rockefeller Foundation, the World Food Program, and the Inter-American Development Bank.
            </p>
            <p>
              He is the Founder and CEO of UFacilitate, a global facilitation network of 200 vetted experts across 40 countries. He teaches leadership development at Georgetown University and is a Senior Fellow at the Center for Excellence in Public Leadership at George Washington University.
            </p>
            <p>
              He founded Subnets for Good because he kept seeing the same gap: mission-driven organizations starved for resources and access, and a decentralized AI ecosystem with enormous potential and almost no connection to the social impact world. He decided to build the bridge himself.
            </p>
          </div>
          <div className="mt-16 pt-10 border-t border-white/5">
            <p className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#E6EAED] to-[#E6EAED]/50 italic text-center">
              "When human purpose meets decentralized intelligence, new systems of good emerge."
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
        {/* Abstract Background for CTA */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E1B2B]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-t from-[#C02990]/20 to-transparent blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8">
            <Globe2 className="w-8 h-8 text-[#E6EAED]" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-bold text-[#E6EAED] mb-8 tracking-tight">Ready to explore what's possible?</h2>
          <p className="text-2xl text-[#E6EAED]/60 mb-12 font-light leading-relaxed">
            We work with a small number of partners at a time. If you are a mission-driven organization looking for a strategic partner, a connector, or a guide into the decentralized AI ecosystem, we would love to hear from you.
          </p>
          <a href="mailto:andres@subnetsforgood.com" className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-[#0E1B2B] transition-all duration-300 bg-[#E6EAED] hover:bg-white hover:scale-105 rounded-full shadow-[0_0_50px_-12px_#E6EAED]">
            Start the conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5 bg-black/40">
        <p className="text-[#E6EAED]/40 text-sm">
          &copy; {new Date().getFullYear()} Subnets for Good. All rights reserved.
        </p>
      </footer>
    </div>
  );
}