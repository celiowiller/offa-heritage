import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Landmark, MapPin, Mail, Phone, Heart, CheckCircle2, Send, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
  const [pledgeEmail, setPledgeEmail] = useState('');

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (pledgeEmail.trim()) {
      setPledgeSubmitted(true);
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-xl text-stone-100">
                Offa Heritage Initiative
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              A community-driven digital archiving project dedicated to documenting, mapping, and conserving the historical streets, oral traditions, and royal architecture of Offa, Kwara State.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-900/60 px-3 py-2 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Preserving Indigenous Yoruba Memory for Future Generations</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-stone-100 text-sm tracking-wider uppercase text-amber-400">
              Explore Heritage
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/streets" className="hover:text-amber-400 transition-colors">
                  5 Historic Streets Catalog
                </Link>
              </li>
              <li>
                <Link to="/streets/olofa-way" className="hover:text-amber-400 transition-colors">
                  Olofa Way Royal Corridor
                </Link>
              </li>
              <li>
                <Link to="/streets/popo-street" className="hover:text-amber-400 transition-colors">
                  Popo Street Weaving Ward
                </Link>
              </li>
              <li>
                <Link to="/streets/moremi-street" className="hover:text-amber-400 transition-colors">
                  Moremi Heritage Precinct
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions & Legal */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-stone-100 text-sm tracking-wider uppercase text-amber-400">
              Community Action
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">
                  Active Conservation Projects
                </Link>
              </li>
              <li>
                <Link to="/report" className="hover:text-amber-400 transition-colors">
                  Report Endangered Heritage
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  History of Olofa Kingdom
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-amber-400 transition-colors">
                  Meet the Archivists
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Archival Secretariat
                </Link>
              </li>
            </ul>
          </div>

          {/* Heritage Guardian Pledge */}
          <div className="space-y-3 bg-stone-900/60 p-5 rounded-2xl border border-stone-800">
            <h4 className="font-serif font-semibold text-stone-100 text-sm flex items-center gap-1.5 text-amber-400">
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500/20" />
              <span>Heritage Guardian Pledge</span>
            </h4>
            <p className="text-xs text-stone-400 leading-normal">
              Join 1,200+ Offa descendants and cultural enthusiasts pledging to protect indigenous architecture and oral histories.
            </p>
            {pledgeSubmitted ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/80 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are now a registered Offa Heritage Guardian.</span>
              </div>
            ) : (
              <form onSubmit={handlePledge} className="space-y-2">
                <input
                  type="email"
                  required
                  value={pledgeEmail}
                  onChange={(e) => setPledgeEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold py-2 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Take Guardian Pledge</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-stone-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Offa Royal Precinct, Kwara State, Nigeria</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>secretariat@offaheritage.org</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+234 (0) 803 000 OFFA</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-stone-500">
            <span>© {new Date().getFullYear()} Offa Heritage Initiative. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
