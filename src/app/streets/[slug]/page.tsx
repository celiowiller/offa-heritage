import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Compass,
  Volume2,
  CheckCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Landmark as LandmarkIcon,
  Quote,
  ShieldAlert,
  Share2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { STREETS_DATA, StreetData } from '../../../lib/data/streets';

export const StreetDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const street = STREETS_DATA.find((s) => s.slug === slug);

  // Fallback if street slug not found
  if (!street) {
    return (
      <div className="bg-stone-950 text-stone-100 min-h-screen flex items-center justify-center p-6 text-center">
        <div className="space-y-4 max-w-md">
          <AlertTriangle className="w-12 h-12 text-amber-400 mx-auto" />
          <h2 className="font-serif text-2xl font-bold">Street Archive Not Found</h2>
          <p className="text-sm text-stone-400">
            The requested street slug "{slug}" does not match our documented 5 historic streets of Offa.
          </p>
          <Link
            to="/streets"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 text-stone-950 font-bold text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Streets Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(street.image);
  const [copiedShare, setCopiedShare] = useState(false);

  // Find next and previous street for quick navigation
  const currentIndex = STREETS_DATA.findIndex((s) => s.slug === street.slug);
  const prevStreet = STREETS_DATA[(currentIndex - 1 + STREETS_DATA.length) % STREETS_DATA.length];
  const nextStreet = STREETS_DATA[(currentIndex + 1) % STREETS_DATA.length];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <div className="bg-stone-950 text-stone-100 font-sans min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-400">
          <div className="flex items-center gap-2">
            <Link to="/streets" className="hover:text-amber-400 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Streets Catalog</span>
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold">{street.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-400 text-xs flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedShare ? 'URL Copied!' : 'Share Archive'}</span>
            </button>
            <Link
              to="/report"
              className="px-3 py-1.5 rounded-lg bg-amber-600/20 text-amber-400 border border-amber-500/30 hover:bg-amber-600 hover:text-stone-950 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Report Damage</span>
            </Link>
          </div>
        </div>

        {/* Hero Banner Header */}
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3.5 py-1 rounded-full text-xs font-mono">
              {street.category}
            </span>
            <span className="bg-amber-600 text-stone-950 font-bold font-mono text-xs px-3 py-1 rounded-md">
              Status: {street.preservationStatus}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-100">
              {street.name}
            </h1>
            <p className="text-sm sm:text-base text-amber-300/90 font-mono">
              "{street.tagline}"
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-stone-800 text-xs font-mono">
            <div>
              <span className="text-stone-500 block">Neighborhood</span>
              <span className="text-stone-200 font-bold flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{street.neighborhood}</span>
              </span>
            </div>
            <div>
              <span className="text-stone-500 block">Era Established</span>
              <span className="text-stone-200 font-bold flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{street.era}</span>
              </span>
            </div>
            <div>
              <span className="text-stone-500 block">GPS Location</span>
              <span className="text-amber-400 font-bold flex items-center gap-1 mt-0.5">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>{street.coordinates.formatted}</span>
              </span>
            </div>
            <div>
              <span className="text-stone-500 block">Landmarks Recorded</span>
              <span className="text-stone-200 font-bold flex items-center gap-1 mt-0.5">
                <LandmarkIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>{street.landmarks.length} Key Sites</span>
              </span>
            </div>
          </div>
        </div>

        {/* Gallery & Main History Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Gallery Viewer (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-stone-800 shadow-xl">
              <img
                src={activeImage}
                alt={street.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-stone-400">Street Photo Archive ({street.gallery.length} Images)</div>
              <div className="grid grid-cols-4 gap-2">
                {street.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === imgUrl ? 'border-amber-400 scale-105 shadow-md' : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Gallery thumbnail ${i}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Key Facts Box */}
            <div className="bg-stone-900 border border-stone-800 p-5 rounded-2xl space-y-3">
              <h3 className="font-serif font-bold text-sm text-amber-400 uppercase tracking-wider">
                Key Corridor Metrics
              </h3>
              <div className="space-y-2 text-xs font-mono">
                {street.keyFacts.map((fact, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-stone-800/80 last:border-0">
                    <span className="text-stone-400">{fact.label}:</span>
                    <span className="text-stone-100 font-bold">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* History & Oral Archive Content (Right) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Detailed History */}
            <div className="bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-2xl space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-100 flex items-center gap-2">
                <LandmarkIcon className="w-5 h-5 text-amber-400" />
                <span>Historical Evolution & Significance</span>
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed whitespace-pre-line">
                {street.history}
              </p>
            </div>

            {/* Key Monuments & Landmarks */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-bold text-stone-100 flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-400" />
                <span>Documented Landmarks along {street.name}</span>
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {street.landmarks.map((lm) => (
                  <div key={lm.id} className="bg-stone-900 border border-stone-800 p-5 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-bold text-stone-100">{lm.name}</h3>
                      {lm.yearBuilt && (
                        <span className="text-[10px] font-mono bg-stone-950 px-2.5 py-1 rounded-md text-amber-400 border border-stone-800">
                          {lm.yearBuilt}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-amber-300/80">{lm.type}</div>
                    <p className="text-xs text-stone-300 leading-relaxed">{lm.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Oral History Audio Quotes */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-bold text-stone-100 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-amber-400" />
                <span>Oral Traditions & Elder Testimonies</span>
              </h2>

              <div className="space-y-4">
                {street.oralHistories.map((oh, idx) => (
                  <div key={idx} className="bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl relative space-y-3">
                    <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4" />
                    <p className="font-serif italic text-sm text-stone-200 leading-relaxed">
                      "{oh.quote}"
                    </p>
                    <div className="text-xs font-mono text-amber-400">
                      — <strong>{oh.speaker}</strong> • {oh.role} ({oh.yearRecorded})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preservation Needs Checklist */}
            <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-4">
              <h2 className="font-serif text-lg font-bold text-stone-100 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                <span>Urgent Preservation Action Items</span>
              </h2>
              <ul className="space-y-2.5 text-xs text-stone-300">
                {street.preservationNeeds.map((need, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-stone-950 p-3 rounded-xl border border-stone-800">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Prev / Next Street Navigation */}
        <div className="pt-8 border-t border-stone-800 flex items-center justify-between gap-4 text-xs font-mono">
          <Link
            to={`/streets/${prevStreet.slug}`}
            className="flex items-center gap-2 p-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: {prevStreet.name}</span>
          </Link>

          <Link
            to={`/streets/${nextStreet.slug}`}
            className="flex items-center gap-2 p-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
          >
            <span>Next: {nextStreet.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
