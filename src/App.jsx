import React, { useState } from 'react';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Membuat Aplikasi Component-Based UI dengan React & Vite',
      course: 'Pemrograman Web',
      deadline: '2026-11-16',
      priority: 'Tinggi',
      completed: false,
    },
    {
      id: 2,
      title: 'Normalisasi Database & ERD Pertemuan 11',
      course: 'Basis Data',
      deadline: '2026-11-12',
      priority: 'Sedang',
      completed: true,
    },
    {
      id: 3,
      title: 'Praktikum Routing & State Management PAW Pertemuan 9',
      course: 'Pemrograman Web',
      deadline: '2026-11-19',
      priority: 'Sedang',
      completed: false,
    },
    {
      id: 4,
      title: 'Analisis Kompleksitas Algoritma Sorting',
      course: 'Algoritma',
      deadline: '2026-11-21',
      priority: 'Rendah',
      completed: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const addTask = (newTaskData) => {
    const newTask = {
      id: Date.now(),
      ...newTaskData,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.course.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === 'all' ? true : filterStatus === 'completed' ? task.completed : !task.completed;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <Header nama="Derip Abdul Rohman" nim="1247050101" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsCard tasks={tasks} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-4">
            <TaskForm onAddTask={addTask} />
          </aside>

          <section className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-800">Daftar Tugas Kuliah</h2>
                <p className="text-xs text-slate-500">Kelola status pengerjaan dan pantau tenggat waktu</p>
              </div>
              <span className="self-start sm:self-auto text-xs font-semibold bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-100">
                Menampilkan {filteredTasks.length} dari {tasks.length} Tugas
              </span>
            </div>

            <FilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filterStatus={filterStatus}
              onFilterChange={setFilterStatus}
            />

            <TaskList
              tasks={filteredTasks}
              onToggleStatus={toggleTaskStatus}
              onDelete={deleteTask}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;