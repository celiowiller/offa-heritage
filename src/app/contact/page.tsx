import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, HelpCircle, ChevronDown } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Academic Research');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How can I access raw 3D scan files and audio archives for academic research?',
      a: 'Scholars and researchers can request access by selecting "Academic Research Inquiry" on the contact form. We provide high-density OBJ/PLY files and transcribed audio interviews upon academic verification.'
    },
    {
      q: 'Can tourists visit the 5 historic streets with a local guide in Offa?',
      a: 'Yes! The Offa Heritage Initiative coordinates guided cultural walking tours covering Olofa Way, Popo Weaving Sheds, and Moremi Street. Reach out at least 48 hours in advance.'
    },
    {
      q: 'How do I contribute my family\'s ancestral compound history to the digital archive?',
      a: 'You can use our Report & Contribution page or contact us directly. Our field team regularly visits family compounds in Offa to conduct high-resolution audio interviews and photo scanning.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-stone-950 text-stone-100 font-sans min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Archival Secretariat & Press Contacts</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-100">
            Contact Offa Heritage Secretariat
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Have questions about digital archives, guided walking tours, academic research partnerships, or media inquiries? Reach out to our team in Offa.
          </p>
        </div>

        {/* Form and Office Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-900 border border-stone-800 p-8 rounded-3xl space-y-6">
              <h2 className="font-serif text-2xl font-bold text-stone-100">
                Secretariat Location
              </h2>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-200 block text-sm font-sans font-semibold">Physical Secretariat</strong>
                    <span className="text-stone-400 leading-relaxed block mt-1">
                      Offa Heritage Center, Olofa Palace Precinct, Olofa Way, Offa, Kwara State, Nigeria
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-800">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-200 block text-sm font-sans font-semibold">Email Enquiries</strong>
                    <span className="text-stone-400 block mt-1">secretariat@offaheritage.org</span>
                    <span className="text-stone-400 block">archives@offaheritage.org</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-800">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-200 block text-sm font-sans font-semibold">Telephone / WhatsApp</strong>
                    <span className="text-stone-400 block mt-1">+234 (0) 803 123 OFFA</span>
                    <span className="text-stone-400 block">+234 (0) 812 987 6543</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-950/40 border border-amber-900/60 rounded-2xl text-xs text-amber-300">
                <strong>Office Visiting Hours:</strong> Monday – Friday: 9:00 AM – 4:30 PM (WAT). Closed on public holidays and royal ceremonial days.
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-3xl space-y-6">
            <h2 className="font-serif text-2xl font-bold text-stone-100 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              <span>Send an Official Inquiry</span>
            </h2>

            {sent ? (
              <div className="p-8 bg-emerald-950/60 border border-emerald-800 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="font-serif text-xl font-bold text-emerald-200">
                  Message Transmitted Successfully!
                </h3>
                <p className="text-xs text-emerald-300">
                  Thank you, <strong>{name}</strong>. Our Secretariat will respond to <strong>{email}</strong> within 24 business hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 px-4 py-2 rounded-xl bg-emerald-600 text-stone-950 font-bold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-stone-400">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. K. Adewale"
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-stone-400">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="user@example.com"
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-stone-400">Inquiry Classification</label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500 font-mono"
                  >
                    <option value="Academic Research">Academic & Archival Research Request</option>
                    <option value="Guided Tour">Cultural Tour Booking (Offa Walking Tour)</option>
                    <option value="Family Oral History">Family Ancestral Compound Registration</option>
                    <option value="Donation & Funding">Project Sponsorship & Philanthropy</option>
                    <option value="Press & Media">Press, Media & Documentary Inquiries</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-stone-400">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details regarding your inquiry or visit schedule..."
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Official Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Section */}
        <div className="bg-stone-900 border border-stone-800 p-8 rounded-3xl space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl font-bold text-stone-100 flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-xs text-stone-400">
              Quick answers regarding archival requests, guided walking tours, and community contributions.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 text-left font-serif font-semibold text-sm text-stone-200 flex items-center justify-between hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-xs text-stone-300 leading-relaxed border-t border-stone-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
