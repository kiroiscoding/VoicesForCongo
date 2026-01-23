"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Linkedin, Github, ExternalLink, ArrowUp } from "lucide-react";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
  >
    <span className="group-hover:translate-x-1 transition-transform">{children}</span>
  </Link>
);

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
    aria-label={label}
  >
    <Icon size={18} className="group-hover:scale-110 transition-transform" />
  </a>
);

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-congo-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-congo-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Voices for <span className="text-congo-blue">Congo</span>
              </h3>
            </Link>
            <p className="text-white/60 leading-relaxed text-sm max-w-xs">
              A Global Scholar Capstone Project exploring the intersection of resource exploitation, colonial history, and human rights in the Democratic Republic of Congo.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={Instagram} label="Instagram" />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="/">Overview</FooterLink></li>
              <li><FooterLink href="/context">Context & Research</FooterLink></li>
              <li><FooterLink href="/podcast">Podcast</FooterLink></li>
              <li><FooterLink href="/action">Take Action</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://monusco.unmissions.org/en" target="_blank" className="text-white/60 hover:text-congo-blue transition-colors flex items-center gap-2">
                  MONUSCO <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-congo-yellow transition-colors flex items-center gap-2">
                  Focus Congo <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-congo-red transition-colors flex items-center gap-2">
                  Amnesty International <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="mailto:abigail.r.mckoy@student158.org" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail size={14} />
                  </div>
                  <span>abigail.r.mckoy@student158.org</span>
                </a>
              </li>
              <li className="text-white/40 text-xs mt-4">
                Huntley High School<br />
                Global Academy Class of 2026
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 Abigail McKoy. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors group"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
