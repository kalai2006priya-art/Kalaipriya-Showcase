import React from 'react';
import { Terminal, Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="glass-card rounded-3xl p-10 sm:p-12 text-center max-w-lg mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto text-purple-400">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The page you are looking for doesn't exist or has been moved to another coordinate.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={Home}
            iconPosition="left"
          >
            Return Home
          </Button>
          <Button
            to="/projects"
            variant="secondary"
            size="md"
          >
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
