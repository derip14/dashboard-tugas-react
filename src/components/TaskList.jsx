import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleStatus, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-14 px-4 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50">
        <div className="text-4xl mb-3">📂</div>
        <h3 className="text-base font-semibold text-slate-700">Tidak ada tugas ditemukan</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
          Belum ada tugas yang sesuai dengan filter pencarianmu, atau semua tugas sudah selesai.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleStatus={onToggleStatus} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default TaskList;