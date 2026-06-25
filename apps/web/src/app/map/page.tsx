'use client';

export default function MapPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => window.history.back()}
          className="text-4xl mb-8 hover:text-yellow-400"
        >
          ← Назад
        </button>

        <h1 className="text-5xl font-bold mb-8">🗺️ Карта Ярославля</h1>
        
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-12 text-center h-[70vh] flex items-center justify-center">
          <div>
            <div className="text-8xl mb-6">📍</div>
            <h2 className="text-4xl font-semibold mb-4">Интерактивная карта</h2>
            <p className="text-xl text-slate-400 max-w-md mx-auto">
              Здесь будут отображаться точки людей, которые сейчас "в явке" в Ярославле
            </p>
            <div className="mt-10 text-sm text-yellow-400">
              Яндекс.Карты будут подключены в ближайшее время
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
