import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, Compass, ChevronRight, ShieldCheck, Landmark, Filter, Layers } from 'lucide-react';
import { STREETS_DATA } from '../../lib/data/streets';

export const StreetsListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Royal & Commercial Axis', 'Traditional Residential Compound', 'Historic Market Thoroughfare', 'Educational & Inter-Town Gateway', 'Cultural Memory & Sacred Landmark'];

  const filtered = STREETS_DATA.filter((st) => {
    const matchesSearch =
      st.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.neighborhood.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.overview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || st.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-stone-950 text-stone-100 font-sans min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>5 Documented Historic Corridors</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-100">
            Historic Streets of Offa
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Browse through Offa's mapped street corridors, architectural landmarks, oral histories, and ongoing heritage preservation needs.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-stone-900 border border-stone-800 p-4 sm:p-6 rounded-2xl space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search street by name, landmark, or neighborhood (e.g. Popo, Olofa)..."
                className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-10 pr-4 py-3 text-stone-100 text-sm placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div className="text-xs font-mono text-stone-400 shrink-0">
              Showing <strong className="text-amber-400">{filtered.length}</strong> of 5 Streets
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar">
            <span className="text-xs font-mono text-stone-500 shrink-0 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" /> Filter Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-stone-950 font-bold'
                    : 'bg-stone-950 border border-stone-800 text-stone-300 hover:border-amber-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Streets Grid */}
        <div className="space-y-8">
          {filtered.map((street, idx) => (
            <div
              key={street.slug}
              className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Street Image */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden">
                <img
                  src={street.image}
                  alt={street.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-stone-900" />
                <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md border border-stone-700 px-3 py-1 rounded-lg text-xs font-mono text-amber-300">
                  {street.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-amber-600 text-stone-950 font-bold font-mono text-[10px] px-2.5 py-1 rounded-md">
                  {street.preservationStatus}
                </div>
              </div>

              {/* Street Info & Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-400 border-b border-stone-800/80 pb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{street.neighborhood}</span>
                    </span>
                    <span className="text-amber-400 font-semibold">{street.coordinates.formatted}</span>
                    <span>Era: {street.era}</span>
                  </div>

                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-100">
                    {street.name}
                  </h2>
                  <p className="text-xs font-mono text-amber-300/90">
                    "{street.tagline}"
                  </p>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {street.overview}
                  </p>

                  {/* Landmarks List */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-2">
                      Featured Landmarks along {street.name}:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {street.landmarks.slice(0, 2).map((lm) => (
                        <div key={lm.id} className="bg-stone-950 p-2.5 rounded-xl border border-stone-800 text-xs">
                          <div className="font-semibold text-stone-200">{lm.name}</div>
                          <div className="text-[10px] text-stone-400 truncate">{lm.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-400">
                    Oral Histories: <strong className="text-amber-400">{street.oralHistories.length} Recorded</strong>
                  </span>
                  <Link
                    to={`/streets/${street.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs tracking-wide transition-all shadow-md"
                  >
                    <span>View Street Archive</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
