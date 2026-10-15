import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Eye, ChevronDown, ChevronUp, Sparkles, Smile, RefreshCw } from 'lucide-react';

export const DemoToolbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const isDental = location.pathname.startsWith('/dental-clinic');
  const isSkin = location.pathname.startsWith('/skin-clinic');
  const isHub = location.pathname === '/' || (!isDental && !isSkin);

  return (
    <aside aria-label="Demo Presentation Switcher" className="fixed top-2 right-2 sm:right-4 z-50">
      <div className="bg-slate-900/90 text-white backdrop-blur-md rounded-2xl shadow-xl border border-slate-700/60 p-1.5 sm:p-2 text-xs transition-all">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-800/80 rounded-xl font-medium text-slate-300">
            <Eye className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden sm:inline">Client Preview:</span>
            <span className="font-semibold text-white">
              {isDental ? 'Dental Studio' : isSkin ? 'Skin & Laser' : 'Platform Hub'}
            </span>
          </div>

          {isExpanded && (
            <div className="flex items-center gap-1">
              <Link
                to="/dental-clinic"
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
                  isDental
                    ? 'bg-teal-500 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
                title="Switch to SmileCare Dental Studio"
              >
                <Smile className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Dental Demo</span>
              </Link>

              <Link
                to="/skin-clinic"
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
                  isSkin
                    ? 'bg-amber-600/90 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
                title="Switch to DermaGlow Skin & Laser Clinic"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Skin Demo</span>
              </Link>

              <Link
                to="/"
                className={`px-2 py-1.5 rounded-lg font-medium transition-all text-slate-400 hover:text-white hover:bg-slate-800 ${
                  isHub ? 'text-white bg-slate-800' : ''
                }`}
                title="View Both Demos in Platform Overview"
              >
                <RefreshCw className="w-3 h-3" />
                <span className="hidden lg:inline ml-1">Hub</span>
              </Link>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title={isExpanded ? 'Minimize demo toolbar' : 'Expand demo switcher'}
            aria-label="Toggle switcher"
          >
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DemoToolbar;
