import React, { useState } from 'react';
import { X, Save, RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const PlaceholderEditorModal: React.FC = () => {
  const { profile, isEditModalOpen, closeEditModal, updateProfile, resetProfile } = usePortfolio();

  const [collegeName, setCollegeName] = useState(profile.collegeName);
  const [regNumber, setRegNumber] = useState(profile.regNumber);
  const [graduationYear, setGraduationYear] = useState(profile.graduationYear);
  const [email, setEmail] = useState(profile.email);
  const [linkedinUrl, setLinkedinUrl] = useState(profile.linkedinUrl);
  const [location, setLocation] = useState(profile.location);
  const [photoUrl, setPhotoUrl] = useState(profile.photoUrl || '/assets/aistudio/WhatsApp_Image_2026-11-12_at_2.11.11_PM_6df4f1e9.jpeg');

  if (!isEditModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      collegeName,
      regNumber,
      graduationYear,
      email,
      linkedinUrl,
      location,
      photoUrl,
    });
    closeEditModal();
  };

  const handleReset = () => {
    resetProfile();
    setCollegeName('[Your College / University Name]');
    setRegNumber('[Student ID / Reg. No.]');
    setGraduationYear('[Expected 2028]');
    setEmail('nithishpesaru7@gmail.com');
    setLinkedinUrl('https://linkedin.com/in/[your-linkedin-profile]');
    setLocation('[Your City / State, India]');
    setPhotoUrl('/assets/aistudio/WhatsApp_Image_2026-11-12_at_2.11.11_PM_6df4f1e9.jpeg');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel bg-[#0a0f22] rounded-2xl border border-slate-700 p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closeEditModal}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Honest Placeholder Management</span>
          </div>
          <h3 className="text-xl font-bold text-white">Customize Profile Placeholders</h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Fill in your actual university name, student registration number, or custom contact links.
            Changes save to your browser's local storage and instantly update the entire website.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              College / University Name
            </label>
            <input
              type="text"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              placeholder="e.g. National Institute of Technology / IIIT / University Name"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
            />
            <span className="text-[11px] text-slate-500 mt-0.5 block">
              Default is placeholder: <code className="text-blue-300">[Your College / University Name]</code>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Registration / Roll Number
              </label>
              <input
                type="text"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
                placeholder="e.g. 24BCSE104"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Expected Graduation
              </label>
              <input
                type="text"
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
                placeholder="e.g. Expected 2028"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nithishpesaru7@gmail.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              LinkedIn Profile URL
            </label>
            <input
              type="text"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://linkedin.com/in/nithish-pesaru"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              City / Campus Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Hyderabad, India"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-300">
                Profile Photo Path / URL (Optional)
              </label>
              {photoUrl && (
                <button
                  type="button"
                  onClick={() => setPhotoUrl('')}
                  className="text-[11px] text-rose-400 hover:text-rose-300 underline"
                >
                  Remove Photo
                </button>
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shrink-0 flex items-center justify-center">
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt="Profile Preview"
                    className="w-full h-full object-cover object-center"
                    onError={() => setPhotoUrl('')}
                  />
                ) : (
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/60 w-full h-full flex items-center justify-center">
                    NP
                  </span>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  placeholder="Paste image URL or leave blank for monogram..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                />
                <span className="text-[10px] text-slate-500 mt-0.5 block">
                  {photoUrl ? 'Custom photo active' : 'Photo removed — displaying clean developer monogram badge'}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={closeEditModal}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-medium hover:bg-slate-700 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save & Apply</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
