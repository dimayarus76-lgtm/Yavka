'use client';

import { useEffect, useRef } from 'react';

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("✅ useEffect запустился");
    console.log("API Key:", process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY);

    const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
    if (!apiKey) {
      console.error("❌ Нет API ключа!");
      return;
    }

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;
    script.onload = () => {
      console.log("✅ Скрипт Яндекс.Карт загружен");
      if (window.ymaps && mapRef.current) {
        window.ymaps.ready(() => {
          console.log("✅ ymaps.ready");
          const map = new window.ymaps.Map(mapRef.current!, {
            center: [57.6261, 39.8845],
            zoom: 13,
          });
          console.log("✅ Карта создана!");
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-900 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => window.history.back()} className="text-4xl hover:text-yellow-400">←</button>
            <h1 className="text-3xl font-bold">Карта Ярославля — Явка</h1>
          </div>
          <div className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-medium">
            Онлайн: 27 человек
          </div>
        </div>
      </header>

      <div ref={mapRef} className="w-full h-[calc(100vh-73px)] bg-slate-800" />
    </div>
  );
}
