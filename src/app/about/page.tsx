import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, ShieldCheck, BookOpen, Crown, Flame, Award, ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '../../lib/data/streets';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-stone-950 text-stone-100 font-sans min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Kingdom History & Archival Mission</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-100">
            About Offa & The Heritage Initiative
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Discover the origins of Offa, the legacy of Olalomi Olofa-gangan, the heroic spirit of Moremi Ajasoro, and our digital mission to preserve Kwara's historic urban footprint.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative rounded-3xl overflow-hidden border border-stone-800 h-80 sm:h-96 shadow-2xl">
          <img
            src={HERO_IMAGE}
            alt="Offa Heritage Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Historic Royal Capital</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">Offa, Kwara State, Nigeria</h2>
            </div>
            <div className="bg-stone-900/90 border border-stone-800 px-4 py-2 rounded-xl text-xs font-mono text-stone-300">
              Founded c. 1392 AD • Olalomi Dynasty
            </div>
          </div>
        </div>

        {/* Historical Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Origins & Olofa Kingdom */}
          <div className="space-y-6 bg-stone-900 border border-stone-800 p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Crown className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-100">
              1. The Founding of Offa & Olofa Royal Lineage
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              Offa was founded around the late 14th century by Olalomi Olofa-gangan, a direct prince of the Oyo Kingdom renowned for his archery and leadership. The name "Offa" originates from the Yoruba word for arrow (<em>Ọ̀fà</em>), symbolizing precision, defense, and noble ambition.
            </p>
            <p className="text-stone-300 text-sm leading-relaxed">
              Over the centuries, the Olofa Kingdom grew into a vital strategic fortress and commercial center in Yoruba land. The monarch, titled <strong>The Olofa of Offa</strong>, reigns as the supreme traditional custodian of culture, harmony, and land stewardship across the kingdom's ancient wards.
            </p>
          </div>

          {/* Moremi Ajasoro & Heroic Legacy */}
          <div className="space-y-6 bg-stone-900 border border-stone-800 p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Flame className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-100">
              2. Moremi Ajasoro & The Spirit of Sacrifice
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              Offa is proudly recognized as the ancestral homeland of <strong>Queen Moremi Ajasoro</strong>, one of the most revered heroines in African history. Her legendary sacrifice and courage saved Ile-Ife from hostile raiders, making her name synonymous with female bravery, patriotism, and intelligence across West Africa.
            </p>
            <p className="text-stone-300 text-sm leading-relaxed">
              The precinct around <strong>Moremi Street & Ile-Monu</strong> in Offa remains a sacred site of memory where scholars and tourists gather to celebrate Yoruba oral history and gender history.
            </p>
          </div>

          {/* Self-Help Culture */}
          <div className="space-y-6 bg-stone-900 border border-stone-800 p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-100">
              3. "Ijakadi Loro Offa" & Self-Reliance Culture
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              The famous motto <em>"Ijakadi Loro Offa"</em> ("Wrestling is Offa's heritage") reflects both the traditional wrestling festival celebrated annually and the community's relentless determination to overcome adversity through hard work.
            </p>
            <p className="text-stone-300 text-sm leading-relaxed">
              In the early 20th century, when colonial authorities delayed building secondary schools, the people of Offa established <strong>Offa Grammar School in 1943</strong> through community donations alone — pioneering community-funded education across Nigeria.
            </p>
          </div>

          {/* Digital Initiative Mission */}
          <div className="space-y-6 bg-stone-900 border border-stone-800 p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-100">
              4. The Offa Heritage Digital Initiative
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              Rapid urbanization, weather erosion, and modern construction pose risks to centuries-old earthen compounds and wooden carvings. The Offa Heritage Initiative was formed to digitize, map, and catalog the 5 historic street corridors.
            </p>
            <ul className="space-y-2 text-xs text-stone-300 font-mono">
              <li className="flex items-center gap-2 text-amber-400">
                <span>✓</span> High-Resolution 3D LiDAR & Photogrammetry Mapping
              </li>
              <li className="flex items-center gap-2 text-amber-400">
                <span>✓</span> Audio Oral History Recordings with Family Elders
              </li>
              <li className="flex items-center gap-2 text-amber-400">
                <span>✓</span> On-Site Brass QR Plaques for Cultural Tourism
              </li>
            </ul>
          </div>

        </div>

        {/* CTA to Streets */}
        <div className="bg-amber-950/40 border border-amber-900/60 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
            Explore the Living History Along Offa's Streets
          </h3>
          <p className="text-sm text-stone-300 max-w-xl mx-auto">
            Step through Olofa Way, Popo Street, Owode Market Road, Ojoku Road, and Moremi Street to see where history lives today.
          </p>
          <div className="pt-2">
            <Link
              to="/streets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-all"
            >
              <span>Explore Historic Streets Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
