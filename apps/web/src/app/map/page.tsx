'use client';

import { useEffect } from 'react';

export default function MapPage() {
  useEffect(() => {
    // Здесь позже будет полноценная карта
    console.log('Карта Ярославля загружена');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.history.back()}
              className="text-2xl hover:text-yellow-400"
            >
              ←
            </button>
            <h1 className="text-2xl font-bold">Карта Ярославля</h1>
          </div>
          <div className="text-sm text-slate-400">Онлайн: 12 человек</div>
        </div>
      </header>

      {/* Карта */}
      <div className="relative h-[calc(100vh-70px)] bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">🗺️</div>
          <h2 className="text-3xl font-semibold mb-4">Интерактивная карта</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Здесь скоро появятся точки пользователей, сборы и места встреч в Ярославле
          </p>
          <div className="mt-10 text-sm text-slate-500">
            Яндекс.Карты API будет подключён на следующем шаге
          </div>
        </div>
      </div>
    </div>
  );
}
