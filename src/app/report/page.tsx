import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, Upload, MapPin, Send, FileText, Clock } from 'lucide-react';
import { STREETS_DATA } from '../../lib/data/streets';

interface SubmittedReport {
  id: string;
  reporterName: string;
  streetName: string;
  category: string;
  description: string;
  date: string;
  status: 'Under Review' | 'Inspection Scheduled' | 'Action Taken';
}

export const ReportPage: React.FC = () => {
  const [reporterName, setReporterName] = useState('');
  const [reporterContact, setReporterContact] = useState('');
  const [selectedStreet, setSelectedStreet] = useState('olofa-way');
  const [reportCategory, setReportCategory] = useState('Structural Erosion');
  const [description, setDescription] = useState('');
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initial community reports history
  const [reports, setReports] = useState<SubmittedReport[]>([
    {
      id: 'rep-101',
      reporterName: 'Chief S. Adedoyin',
      streetName: 'Olofa Way',
      category: 'Structural Erosion',
      description: 'Monsoon drainage overflow causing wall foundation erosion near the historic postal exchange building.',
      date: 'Aug 8, 2026',
      status: 'Inspection Scheduled'
    },
    {
      id: 'rep-102',
      reporterName: 'Alhaja M. Popo',
      streetName: 'Popo Street',
      category: 'Thatch Roof Damage',
      description: 'Heavy rain damaged the thatch timber truss over the traditional weaving workshop.',
      date: 'Aug 4, 2026',
      status: 'Under Review'
    },
    {
      id: 'rep-103',
      reporterName: 'Engr. T. Oloyede',
      streetName: 'Owode Market Road',
      category: 'Illegal Modification',
      description: 'Commercial shop sign installation obscuring historic 1950s masonry archway.',
      date: 'Jul 28, 2026',
      status: 'Action Taken'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const streetObj = STREETS_DATA.find((s) => s.slug === selectedStreet);
    const newReport: SubmittedReport = {
      id: `rep-${Date.now().toString().slice(-3)}`,
      reporterName: reporterName.trim() || 'Anonymous Resident',
      streetName: streetObj ? streetObj.name : 'Offa General Sector',
      category: reportCategory,
      description: description,
      date: 'Just now',
      status: 'Under Review'
    };

    setReports([newReport, ...reports]);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setDescription('');
    setPhotoUploaded(false);
  };

  return (
    <div className="bg-stone-950 text-stone-100 font-sans min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Community Preservation Alert Network</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-100">
            Report Heritage Damage or Risk
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Protect Offa's architectural legacy. Submit reports of structural decay, monsoon damage, or illegal modification along Offa's historic streets.
          </p>
        </div>

        {/* Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <h2 className="font-serif text-2xl font-bold text-stone-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <span>Heritage Issue Submission Form</span>
              </h2>
              <span className="text-xs font-mono text-amber-400">Offa Municipal Alert</span>
            </div>

            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-800 p-8 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-emerald-200">
                  Report Received by Archival Secretariat
                </h3>
                <p className="text-xs text-emerald-300 leading-relaxed max-w-md mx-auto">
                  Thank you for serving as a Heritage Guardian of Offa. Your report has been dispatched to our conservation architects and local ward councilors.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs"
                  >
                    Submit Another Report
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-stone-400">Your Full Name / Title</label>
                    <input
                      type="text"
                      required
                      value={reporterName}
                      onChange={(e) => setReporterName(e.target.value)}
                      placeholder="e.g. Chief B. Adesoye"
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-stone-400">Phone or Email Contact</label>
                    <input
                      type="text"
                      required
                      value={reporterContact}
                      onChange={(e) => setReporterContact(e.target.value)}
                      placeholder="0803... or user@domain.com"
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-stone-400">Affected Historic Street / Ward</label>
                    <select
                      value={selectedStreet}
                      onChange={(e) => setSelectedStreet(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500 font-mono"
                    >
                      {STREETS_DATA.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name} ({s.neighborhood})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-stone-400">Issue Category</label>
                    <select
                      value={reportCategory}
                      onChange={(e) => setReportCategory(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500 font-mono"
                    >
                      <option value="Structural Erosion">Structural Erosion / Monsoon Damage</option>
                      <option value="Thatch & Timber Failure">Thatch & Roof Timber Failure</option>
                      <option value="Illegal Alteration">Illegal Wall Demolition / Modification</option>
                      <option value="Oral History Contribution">Oral History / Elder Story Contribution</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-stone-400">Detailed Description & Location Details</label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what happened, exact landmark proximity, and urgency level..."
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Photo uploader mock */}
                <div className="p-4 bg-stone-950 border border-dashed border-stone-800 rounded-2xl flex flex-col items-center justify-center text-center space-y-2">
                  <Upload className="w-6 h-6 text-amber-400" />
                  <div className="text-xs font-mono text-stone-300">
                    {photoUploaded ? 'Photo attached: street_site_inspection.jpg' : 'Attach Photo Evidence (Optional)'}
                  </div>
                  <button
                    type="button"
                    onClick={() => setPhotoUploaded(!photoUploaded)}
                    className="px-3 py-1 rounded-lg bg-stone-900 border border-stone-700 text-amber-400 text-[11px] font-mono hover:bg-stone-800"
                  >
                    {photoUploaded ? 'Remove Attached Photo' : 'Simulate Photo Attachment'}
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs tracking-wide transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Report to Archival Secretariat</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Recent Reports Log Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-900 border border-stone-800 p-6 rounded-3xl space-y-4">
              <h3 className="font-serif font-bold text-lg text-stone-100 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Recent Community Action Log</span>
              </h3>
              <p className="text-xs text-stone-400">
                Live status of reports submitted by Offa residents and inspected by conservation officers.
              </p>

              <div className="space-y-3 pt-2">
                {reports.map((rep) => (
                  <div key={rep.id} className="bg-stone-950 border border-stone-800 p-4 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-amber-400 font-bold">{rep.streetName}</span>
                      <span className="text-[10px] bg-stone-900 border border-stone-700 px-2 py-0.5 rounded text-stone-300">
                        {rep.status}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-stone-400">{rep.category} • {rep.date}</div>
                    <p className="text-xs text-stone-300 line-clamp-2">{rep.description}</p>
                    <div className="text-[10px] font-mono text-stone-500">Submitted by {rep.reporterName}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
