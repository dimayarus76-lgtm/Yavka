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
        </div>
      </header>

      <div className="h-[calc(100vh-73px)] bg-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <div className="text-[120px] mb-6">🗺️</div>
          <h2 className="text-4xl font-bold mb-4">Карта Ярославля</h2>
          <p className="text-xl text-slate-400 max-w-lg mx-auto">
            Здесь будут отображаться все люди, которые сейчас в "Явке"<br />
            (функция в разработке)
          </p>
          <div className="mt-12 text-yellow-400 text-sm">
            Скоро подключим настоящую Яндекс.Карту
          </div>
        </div>
      </div>
    </div>
  );
}
