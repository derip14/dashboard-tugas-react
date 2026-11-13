import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('Pemrograman Web');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Sedang');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask({
      title: title.trim(),
      course,
      deadline: deadline || 'Tanpa Tenggat',
      priority
    });
    setTitle('');
    setDeadline('');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sticky top-28">
      <div className="flex items-center gap-2.5 mb-1">
        <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">
          +
        </div>
        <h2 className="text-lg font-bold text-slate-800">Tambah Tugas Baru</h2>
      </div>
      <p className="text-xs text-slate-500 mb-5">Catat detail tugas kuliahmu agar terorganisir.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Judul Tugas <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Contoh: Implementasi Hooks React..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Mata Kuliah
          </label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          >
            <option value="Pemrograman Web">Pemrograman Aplikasi Web</option>
            <option value="Basis Data">Manajemen Basis Data</option>
            <option value="Algoritma">Algoritma & Struktur Data</option>
            <option value="Jaringan Komputer">Jaringan Komputer</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Prioritas
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            >
              <option value="Tinggi">Tinggi</option>
              <option value="Sedang">Sedang</option>
              <option value="Rendah">Rendah</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Tenggat Waktu
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md shadow-indigo-500/20 active:scale-[0.99] transition-all cursor-pointer"
        >
          + Simpan ke Daftar
        </button>
      </form>
    </div>
  );
};

export default TaskForm;