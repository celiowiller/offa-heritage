import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, MapPin, Shield, UserPlus, HeartHandshake } from 'lucide-react';
import { TEAM_MEMBERS } from '../../lib/data/streets';

export const TeamPage: React.FC = () => {
  return (
    <div className="bg-stone-950 text-stone-100 font-sans min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Archival Secretariat & Researchers</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-100">
            Meet the Offa Heritage Team
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Our interdisciplinary team unites traditional custodians, academic historians, conservation architects, and digital software engineers working in Offa, Kwara State.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row gap-6 items-start"
            >
              <img
                src={member.image}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-24 h-24 rounded-2xl object-cover shrink-0 border border-stone-700"
              />
              <div className="space-y-3 flex-1">
                <div>
                  <h3 className="font-serif font-bold text-xl text-stone-100">{member.name}</h3>
                  <div className="text-xs text-amber-400 font-mono font-medium">{member.role}</div>
                </div>
                
                <p className="text-xs text-stone-300 leading-relaxed">
                  {member.bio}
                </p>

                <div className="pt-2 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{member.location}</span>
                  </div>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-1.5 text-amber-400 hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{member.email}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer / Join Us Banner */}
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400">
              <HeartHandshake className="w-4 h-4" />
              <span>Community Participation</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
              Become a Volunteer Field Archivist or Translator
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              We welcome native Yoruba speakers, photography students, and local elders in Offa to help record interviews, translate family histories, or photograph historic compound architecture.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>Join Archival Team</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
