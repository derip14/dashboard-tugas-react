import React from 'react';

const TaskItem = ({ task, onToggleStatus, onDelete }) => {
  const courseColors = {
    'Pemrograman Web': 'bg-indigo-50 text-indigo-700 border-indigo-200/70',
    'Basis Data': 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
    'Algoritma': 'bg-amber-50 text-amber-700 border-amber-200/70',
    'Jaringan Komputer': 'bg-sky-50 text-sky-700 border-sky-200/70',
  };

  const priorityColors = {
    'Tinggi': 'text-rose-600 bg-rose-50 border-rose-200/70',
    'Sedang': 'text-amber-600 bg-amber-50 border-amber-200/70',
    'Rendah': 'text-slate-600 bg-slate-100 border-slate-200/70',
  };

  return (
    <div 
      className={`group p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
        task.completed 
          ? 'bg-slate-50/80 border-slate-200/60' 
          : 'bg-white border-slate-200/90 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5'
      }`}
    >
      <div className="space-y-2 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border ${courseColors[task.course] || 'bg-slate-100 text-slate-700'}`}>
            {task.course}
          </span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-md border ${priorityColors[task.priority]}`}>
            Prioritas {task.priority}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1 bg-slate-100/80 px-2.5 py-0.5 rounded-md">
            📅 {task.deadline}
          </span>
        </div>

        <h3 className={`text-base font-semibold transition-all ${
          task.completed ? 'line-through text-slate-400' : 'text-slate-800'
        }`}>
          {task.title}
        </h3>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center">
        <button
          onClick={() => onToggleStatus(task.id)}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            task.completed
              ? 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'
              : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-600/20'
          }`}
        >
          {task.completed ? '↩ Batal' : '✓ Selesai'}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200/70 transition-all cursor-pointer"
          title="Hapus Tugas"
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default TaskItem;