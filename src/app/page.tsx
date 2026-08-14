import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Landmark,
  MapPin,
  Compass,
  ArrowRight,
  ShieldAlert,
  Search,
  BookOpen,
  Volume2,
  Users,
  Building2,
  Calendar,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Clock,
  Layers
} from 'lucide-react';
import { STREETS_DATA, HERO_IMAGE, PROJECTS_DATA } from '../lib/data/streets';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMapStreet, setActiveMapStreet] = useState<string>('olofa-way');

  const categories = ['All', 'Royal & Commercial Axis', 'Traditional Residential Compound', 'Historic Market Thoroughfare', 'Educational & Inter-Town Gateway', 'Cultural Memory & Sacred Landmark'];

  const filteredStreets = selectedCategory === 'All'
    ? STREETS_DATA
    : STREETS_DATA.filter(s => s.category === selectedCategory);

  const activeStreetObj = STREETS_DATA.find(s => s.slug === activeMapStreet) || STREETS_DATA[0];

  return (
    <div className="bg-stone-950 text-stone-100 font-sans min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-stone-800">
        {/* Background Hero Image with Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Offa Heritage Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-900/60" />
          <div className="absolute inset-0 bg-amber-950/20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center sm:text-left flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Kwara State Cultural Preservation Archive</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-stone-100 tracking-tight leading-[1.1]">
              Preserving the <span className="text-amber-400 underline decoration-amber-500/50 underline-offset-8">Historic Streets</span> of Offa
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-stone-300 font-normal leading-relaxed max-w-2xl">
              Explore the royal avenues, ancient weaving compounds, trade market routes, and sacred heritage sites of Offa through 3D mapping, oral tradition archives, and community preservation.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/streets"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-amber-500/20 group"
              >
                <Compass className="w-5 h-5 text-stone-950" />
                <span>Explore the 5 Historic Streets</span>
                <ArrowRight className="w-4 h-4 text-stone-950 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/report"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700 font-semibold text-sm transition-all"
              >
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                <span>Report Heritage Damage</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl pt-8 border-t border-stone-800/80">
            <div className="bg-stone-900/80 backdrop-blur-sm p-4 rounded-xl border border-stone-800">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">5</div>
              <div className="text-xs text-stone-400 font-mono mt-1 uppercase tracking-wider">Documented Streets</div>
            </div>
            <div className="bg-stone-900/80 backdrop-blur-sm p-4 rounded-xl border border-stone-800">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">18+</div>
              <div className="text-xs text-stone-400 font-mono mt-1 uppercase tracking-wider">Heritage Monuments</div>
            </div>
            <div className="bg-stone-900/80 backdrop-blur-sm p-4 rounded-xl border border-stone-800">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">150+ hrs</div>
              <div className="text-xs text-stone-400 font-mono mt-1 uppercase tracking-wider">Recorded Oral Histories</div>
            </div>
            <div className="bg-stone-900/80 backdrop-blur-sm p-4 rounded-xl border border-stone-800">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">130 yrs</div>
              <div className="text-xs text-stone-400 font-mono mt-1 uppercase tracking-wider">Market Trade Legacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Streets Catalog Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
              Catalog & Archive
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
              Offa's 5 Historic Streets
            </h2>
            <p className="text-sm text-stone-400 mt-2 max-w-xl">
              Each street represents a distinct chapter in Offa's urban evolution, from royal administrative thoroughfares to traditional craft wards.
            </p>
          </div>

          <Link
            to="/streets"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span>View Full Catalog & Map</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
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

        {/* Street Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStreets.map((street) => (
            <div
              key={street.slug}
              className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={street.image}
                  alt={street.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-mono text-amber-300 border border-stone-700">
                  {street.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-stone-900/90 px-2.5 py-1 rounded-md text-[10px] font-mono text-stone-300 flex items-center gap-1 border border-stone-800">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{street.neighborhood}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-stone-100 group-hover:text-amber-400 transition-colors">
                    {street.name}
                  </h3>
                  <p className="text-xs text-amber-300/90 font-mono">
                    {street.tagline}
                  </p>
                  <p className="text-xs text-stone-400 leading-relaxed line-clamp-3">
                    {street.overview}
                  </p>
                </div>

                {/* Key Landmarks list */}
                <div className="pt-3 border-t border-stone-800/80 space-y-2">
                  <div className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                    Key Landmarks ({street.landmarks.length})
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {street.landmarks.map((lm) => (
                      <span
                        key={lm.id}
                        className="text-[11px] bg-stone-950 px-2.5 py-1 rounded-md text-stone-300 border border-stone-800"
                      >
                        {lm.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link to detail */}
                <div className="pt-2">
                  <Link
                    to={`/streets/${street.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-950 hover:bg-amber-600 text-stone-200 hover:text-stone-950 font-semibold text-xs transition-all border border-stone-800 hover:border-amber-500"
                  >
                    <span>View Street Archive & History</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Offa Heritage Spatial Map Preview */}
      <section className="bg-stone-900 border-y border-stone-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="text-xs font-mono tracking-widest text-amber-400 uppercase">
              Spatial Heritage Navigator
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
              Interactive Offa Street Location Map
            </h2>
            <p className="text-sm text-stone-400">
              Click on any street hotspot to inspect coordinates, key landmarks, and cultural preservation status across Offa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Map Canvas Visualizer */}
            <div className="lg:col-span-2 bg-stone-950 rounded-2xl border border-stone-800 p-6 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
              
              {/* Map Graphic Lines & Hotspots */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Simulated Map Streets Layout SVG */}
              <svg className="absolute inset-0 w-full h-full stroke-amber-500/30 fill-none" strokeWidth="2">
                {/* Main Arterial Road */}
                <path d="M 50,200 Q 200,180 400,220 T 750,200" strokeWidth="6" stroke="#d97706" opacity="0.6" />
                {/* Secondary Cross Roads */}
                <path d="M 220,50 L 250,380" strokeWidth="3" stroke="#78350f" />
                <path d="M 500,60 L 480,390" strokeWidth="3" stroke="#78350f" />
                <path d="M 350,100 Q 420,250 620,350" strokeWidth="3" stroke="#78350f" />
              </svg>

              {/* Map Header */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-stone-400 bg-stone-900/80 p-3 rounded-xl border border-stone-800">
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Kwara State Grid • Offa Central Coordinates: 8.1492° N, 4.7206° E</span>
                </span>
                <span className="text-amber-400 font-semibold">Active Mode: Street GIS</span>
              </div>

              {/* Interactive Street Markers on Map */}
              <div className="relative z-10 my-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-8">
                {STREETS_DATA.map((st) => {
                  const isActive = st.slug === activeMapStreet;
                  return (
                    <button
                      key={st.slug}
                      onClick={() => setActiveMapStreet(st.slug)}
                      className={`p-3.5 rounded-xl text-left transition-all border ${
                        isActive
                          ? 'bg-amber-600 text-stone-950 border-amber-400 shadow-lg scale-105 font-bold'
                          : 'bg-stone-900/90 text-stone-300 border-stone-800 hover:border-amber-500/50 hover:bg-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-serif truncate">{st.name}</span>
                        <MapPin className={`w-4 h-4 shrink-0 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                      </div>
                      <div className={`text-[10px] font-mono mt-1 ${isActive ? 'text-stone-900' : 'text-stone-500'}`}>
                        {st.coordinates.formatted}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Map Footer status */}
              <div className="relative z-10 text-xs font-mono text-stone-400 flex items-center justify-between pt-2">
                <span>Selected: <strong className="text-amber-400">{activeStreetObj.name}</strong></span>
                <Link to={`/streets/${activeStreetObj.slug}`} className="text-amber-400 hover:underline flex items-center gap-1">
                  <span>Open Full Street Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Selected Map Street Detail Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-full h-44 rounded-xl overflow-hidden relative">
                  <img
                    src={activeStreetObj.image}
                    alt={activeStreetObj.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-amber-600 text-stone-950 font-bold font-mono text-[10px] px-2.5 py-1 rounded-md">
                    {activeStreetObj.preservationStatus}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-2xl text-stone-100">
                    {activeStreetObj.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">
                    {activeStreetObj.category}
                  </p>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    {activeStreetObj.overview}
                  </p>
                </div>

                <div className="space-y-2 border-t border-stone-800 pt-3">
                  <div className="text-xs font-mono text-stone-400 flex justify-between">
                    <span>Neighborhood:</span>
                    <span className="text-stone-200">{activeStreetObj.neighborhood}</span>
                  </div>
                  <div className="text-xs font-mono text-stone-400 flex justify-between">
                    <span>Era Established:</span>
                    <span className="text-stone-200">{activeStreetObj.era}</span>
                  </div>
                  <div className="text-xs font-mono text-stone-400 flex justify-between">
                    <span>GPS Coordinates:</span>
                    <span className="text-amber-400">{activeStreetObj.coordinates.formatted}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to={`/streets/${activeStreetObj.slug}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-all shadow-md"
                >
                  <span>Explore {activeStreetObj.name} Archive</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Preservation Projects Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
              Community Action
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
              Active Heritage Projects
            </h2>
            <p className="text-sm text-stone-400 mt-2 max-w-xl">
              Track real-time digital documentation, physical restoration, and UNESCO dossier preparation led by local historians and architects.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>View All Projects ({PROJECTS_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.slice(0, 2).map((proj) => (
            <div
              key={proj.id}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-mono">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Status: {proj.status}</span>
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-stone-100">
                  {proj.title}
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {proj.summary}
                </p>

                {/* Progress Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-stone-400">Progress Milestone</span>
                    <span className="text-amber-400 font-bold">{proj.completion}%</span>
                  </div>
                  <div className="w-full bg-stone-950 h-2.5 rounded-full overflow-hidden border border-stone-800">
                    <div
                      className="bg-gradient-to-r from-amber-600 to-amber-400 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${proj.completion}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-stone-500 pt-1">
                    <span>Funded: {proj.funded}</span>
                    <span>Target: {proj.budgetGoal}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-800/80 mt-6 flex items-center justify-between">
                <span className="text-xs text-stone-400 font-mono">
                  Lead: <strong className="text-stone-200">{proj.lead}</strong>
                </span>
                <Link
                  to="/projects"
                  className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Project Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Oral Tradition Spotlight */}
      <section className="bg-amber-950/20 border-y border-stone-800 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto mb-6">
            <Volume2 className="w-6 h-6" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100 mb-4">
            "Every street in Offa speaks through its elders."
          </h2>

          <blockquote className="text-lg sm:text-xl text-amber-200/90 font-serif italic max-w-3xl mx-auto leading-relaxed mb-6">
            "In Popo Street, every house is connected. We don't lock doors between compounds because our ancestors built these mud walls as a single protective family."
          </blockquote>

          <div className="text-xs font-mono text-stone-400">
            — <strong className="text-amber-400">Mama Alhaja Sadiat Popo</strong>, Master Weaver & Matriarch (Recorded 2022)
          </div>

          <div className="pt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-200 hover:border-amber-500 text-xs font-mono transition-all"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Read About Offa Heritage & The Olofa Kingdom</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 max-w-2xl relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
              Know a historic site or street in Offa requiring protection?
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Submit photos, stories, or reports of structural decay along Offa's streets to alert our archivist team and local council.
            </p>
          </div>

          <Link
            to="/report"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 relative z-10 flex items-center gap-2"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Submit Heritage Report</span>
          </Link>
        </div>
      </section>

    </div>
  );
};
