import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Clock, CheckCircle2, Heart, ArrowRight, ShieldCheck, DollarSign, Filter } from 'lucide-react';
import { PROJECTS_DATA, ProjectData } from '../../lib/data/streets';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [supportModalProject, setSupportModalProject] = useState<ProjectData | null>(null);
  const [donationAmount, setDonationAmount] = useState<string>('5000');
  const [donorName, setDonorName] = useState<string>('');
  const [pledgeSuccess, setPledgeSuccess] = useState<boolean>(false);

  const categories = ['All', 'Digital Archiving', 'Physical Restoration', 'Community Education', 'UNESCO Candidate'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPledgeSuccess(true);
  };

  return (
    <div className="bg-stone-950 text-stone-100 font-sans min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Active Conservation Initiatives</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-100">
            Offa Heritage Projects
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Monitor real-time progress, budgets, and milestones for 3D digital scanning, physical street restoration, and UNESCO candidate dossiers in Offa.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-stone-950 font-bold shadow-md'
                  : 'bg-stone-900 border border-stone-800 text-stone-300 hover:border-amber-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-stone-950/90 border border-stone-700 px-3 py-1 rounded-lg text-[11px] font-mono text-amber-300">
                    {proj.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-amber-600 text-stone-950 font-bold font-mono text-[10px] px-2.5 py-1 rounded-md">
                    {proj.status}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-serif font-bold text-xl text-stone-100">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {proj.details}
                  </p>

                  {/* Progress Milestone Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-400">Milestone Progress</span>
                      <span className="text-amber-400 font-bold">{proj.completion}% Completed</span>
                    </div>
                    <div className="w-full bg-stone-950 h-3 rounded-full overflow-hidden border border-stone-800">
                      <div
                        className="bg-gradient-to-r from-amber-600 to-amber-400 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${proj.completion}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono bg-stone-950/60 p-3 rounded-xl border border-stone-800">
                    <div>
                      <span className="text-stone-500 block text-[10px] uppercase">Raised So Far</span>
                      <span className="text-amber-400 font-bold">{proj.funded}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px] uppercase">Total Target</span>
                      <span className="text-stone-200 font-bold">{proj.budgetGoal}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-800/80 mt-4 flex items-center justify-between">
                <div className="text-xs font-mono text-stone-400">
                  Lead: <strong className="text-stone-200">{proj.lead}</strong>
                </div>
                <button
                  onClick={() => {
                    setSupportModalProject(proj);
                    setPledgeSuccess(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Heart className="w-3.5 h-3.5 fill-stone-950" />
                  <span>Support Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Support Project Modal */}
        {supportModalProject && (
          <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-stone-900 border border-stone-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl relative text-stone-100 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <h3 className="font-serif font-bold text-lg text-amber-400">
                  Support: {supportModalProject.title}
                </h3>
                <button
                  onClick={() => setSupportModalProject(null)}
                  className="text-stone-400 hover:text-stone-100 text-sm font-mono"
                >
                  ✕ Close
                </button>
              </div>

              {pledgeSuccess ? (
                <div className="p-6 bg-emerald-950/60 border border-emerald-800 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-emerald-200">
                    Pledge Registered Successfully!
                  </h4>
                  <p className="text-xs text-emerald-300 leading-relaxed">
                    Thank you, <strong>{donorName || 'Supporter'}</strong>, for contributing ₦{Number(donationAmount).toLocaleString()} towards {supportModalProject.title}. Our archival committee will email you receipt & progress updates.
                  </p>
                  <button
                    onClick={() => setSupportModalProject(null)}
                    className="mt-2 px-4 py-2 rounded-lg bg-emerald-600 text-stone-950 font-bold text-xs"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSupportSubmit} className="space-y-4">
                  <p className="text-xs text-stone-300">
                    Your contribution directly funds equipment rental, local field researcher stipends, and materials for street restoration in Offa.
                  </p>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-stone-400">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="e.g. Chief Adewale Olofa"
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-stone-400">Contribution Amount (NGN ₦)</label>
                    <select
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500 font-mono"
                    >
                      <option value="5000">₦5,000 — Patron Contribution</option>
                      <option value="15000">₦15,000 — Oral History Tape Sponsor</option>
                      <option value="50000">₦50,000 — Brass QR Signage Sponsor</option>
                      <option value="200000">₦200,000 — 3D Laser Scanning Day Sponsor</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs tracking-wide transition-all shadow-md"
                    >
                      Confirm Pledge & Receive Archival Badge
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
