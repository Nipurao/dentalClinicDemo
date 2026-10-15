import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Smile, Sparkles, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
      <SEOHead
        title="Page Not Found (404)"
        description="The requested page could not be located."
        clinicName="Clinic Platform"
      />

      <div className="max-w-md w-full space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto text-teal-400 text-3xl font-mono font-bold shadow-2xl">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The treatment or clinic page you are attempting to access does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/dental-clinic"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold shadow-md transition-all"
          >
            <Smile className="w-4 h-4" />
            <span>SmileCare Dental Studio</span>
          </Link>

          <Link
            to="/skin-clinic"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#4a6b53] hover:bg-[#3b5743] text-white text-xs font-semibold shadow-md transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>DermaGlow Skin & Laser</span>
          </Link>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Platform Overview Hub</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
