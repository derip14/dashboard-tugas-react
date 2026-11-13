import React from 'react';

const StatsCard = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Total Tugas</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{total}</p>
          <p className="text-xs text-slate-400 mt-1">Semester Ganjil 2026</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl">
          📚
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Tugas Selesai</p>
          <p className="text-3xl font-bold text-emerald-600 mt-1">{completed}</p>
          <p className="text-xs text-emerald-600/80 mt-1 font-medium">Sudah dikumpulkan</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl">
          ✅
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Belum Selesai</p>
          <p className="text-3xl font-bold text-amber-500 mt-1">{pending}</p>
          <p className="text-xs text-amber-600/80 mt-1 font-medium">Perlu dikerjakan</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-2xl">
          ⏳
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 rounded-2xl p-5 text-white shadow-lg shadow-indigo-500/20 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-indigo-100">Progres Belajar</p>
            <p className="text-3xl font-bold mt-1">{percentage}%</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-xl">
            ✨
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-black/20 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-emerald-300 to-teal-200 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCard;