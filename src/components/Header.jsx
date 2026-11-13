import React from 'react';

const Header = ({ nama, nim }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 text-xl">
            🎓
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                TaskFlow Mahasiswa
              </h1>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                v2.0
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Workspace Manajemen Tugas Kuliah</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-100/80 hover:bg-slate-100 transition-colors py-1.5 px-3 sm:px-4 rounded-full border border-slate-200/80">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 text-white font-bold text-sm flex items-center justify-center shadow-sm">
            {nama.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-800 leading-tight">{nama}</p>
            <p className="text-xs text-slate-500 font-mono">NIM: {nim}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;