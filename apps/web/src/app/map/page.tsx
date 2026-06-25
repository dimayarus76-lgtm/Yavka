'use client';

import { useEffect, useRef } from 'react';

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("🚀 useEffect запущен");

    const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
    console.log("🔑 API Key из env:", apiKey ? "ПРИСУТСТВУЕТ" : "ОТСУТСТВУЕТ");

    if (!apiKey) {
      console.error("❌ Нет API ключа!");
      return;
    }

    console.log("📥 Начинаем загрузку скрипта Яндекс.Карт...");

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;

    script.onload = () => {
      console.log("✅ Скрипт успешно загружен!");
      
      if (window.ymaps && mapRef.current) {
        window.ymaps.ready(() => {
          console.log("✅ ymaps.ready — можно создавать карту");
          
          try {
            const map = new window.ymaps.Map(mapRef.current!, {
              center: [57.6261, 39.8845],
              zoom: 13,
            });
            console.log("🎉 Карта успешно создана!");
          } catch (e) {
            console.error("Ошибка создания карты:", e);
          }
        });
      }
    };

    script.onerror = () => console.error("❌ Ошибка загрузки скрипта");

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
        </div>
      </header>

      <div ref={mapRef} className="w-full h-[calc(100vh-73px)] bg-slate-900" />
    </div>
  );
}
