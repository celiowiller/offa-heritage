import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Landmark, MapPin, AlertTriangle, Menu, X, Search, ShieldCheck } from 'lucide-react';
import { STREETS_DATA } from '../lib/data/streets';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/streets', label: 'Historic Streets' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About Offa' },
    { path: '/team', label: 'Team' },
    { path: '/report', label: 'Report Issue' },
    { path: '/contact', label: 'Contact' },
  ];

  const filteredStreets = searchQuery.trim()
    ? STREETS_DATA.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.neighborhood.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-amber-950 text-amber-200 text-xs px-4 py-1.5 flex items-center justify-between border-b border-amber-900/50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-medium tracking-wide">
              Offa Heritage Initiative — Preserving Kwara Cultural Memory
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-amber-300/80">
            <span>Location: Offa, Kwara State, Nigeria</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">5 Historic Streets Documented</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:bg-amber-600/30 transition-all shadow-inner">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif font-bold text-xl sm:text-2xl text-stone-100 tracking-tight leading-none group-hover:text-amber-400 transition-colors">
                Offa Heritage
              </div>
              <div className="text-[11px] font-mono tracking-widest text-stone-400 uppercase mt-1">
                Digital Archiving & Preservation
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                      : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700/80 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-2 text-xs font-mono"
              title="Search Historic Streets"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search Streets</span>
            </button>

            {/* Quick Report Issue Link */}
            <Link
              to="/report"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-amber-600/20"
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Report Issue</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-stone-200 hover:text-amber-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                      : 'text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                to="/report"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-amber-600 text-stone-950 font-semibold text-sm"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Report Heritage Issue</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-stone-900 border border-stone-800 w-full max-w-xl rounded-2xl p-6 shadow-2xl relative text-stone-100">
            <button
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery('');
              }}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-lg font-semibold text-stone-100 mb-3 flex items-center gap-2">
              <Search className="w-5 h-5 text-amber-400" />
              <span>Search Offa Historic Streets Catalog</span>
            </h3>

            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by street name (e.g., Olofa Way, Popo, Moremi)..."
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 text-sm"
            />

            <div className="mt-4 max-h-80 overflow-y-auto space-y-2">
              {searchQuery.trim() === '' ? (
                <div className="text-xs text-stone-500 font-mono py-4 text-center">
                  Type a name or keyword above to search the 5 recorded streets.
                </div>
              ) : filteredStreets.length === 0 ? (
                <div className="text-sm text-stone-400 py-6 text-center">
                  No historic streets matched "{searchQuery}". Try searching "Olofa", "Popo", "Market", or "Moremi".
                </div>
              ) : (
                filteredStreets.map((st) => (
                  <Link
                    key={st.slug}
                    to={`/streets/${st.slug}`}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/50 hover:bg-stone-800/60 transition-all group"
                  >
                    <img
                      src={st.image}
                      alt={st.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-stone-200 group-hover:text-amber-400 transition-colors text-sm">
                        {st.name}
                      </div>
                      <div className="text-xs text-stone-400 truncate">
                        {st.category} • {st.neighborhood}
                      </div>
                    </div>
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
