'use client';

export default function MapPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-900 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.history.back()} 
              className="text-4xl hover:text-yellow-400"
            >
              ←
            </button>
            <h1 className="text-3xl font-bold">Карта Ярославля — Явка</h1>
          </div>
          <div className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-medium">
            Онлайн: 27 человек
          </div>
        </div>
      </header>

      <div className="h-[calc(100vh-73px)] bg-[#0f172a] flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <div className="text-[180px] mb-4 opacity-20">🗺️</div>
          <h2 className="text-5xl font-bold mb-6">Карта Ярославля</h2>
          <p className="text-2xl text-slate-300 mb-8">
            Скоро здесь будут<br />реальные точки людей
          </p>
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-6 py-3 rounded-2xl text-lg">
            Яндекс.Карты подключены на следующем шаге
          </div>
        </div>
      </div>
    </div>
  );
}
