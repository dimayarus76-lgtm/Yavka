'use client';   // ← Это важно добавить в самом начале

export default function Home() {
  const openMap = () => {
    alert('Карта Ярославля пока в разработке.\nСкоро будет полноценная интерактивная карта!');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-950/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl font-black">Я</div>
            <h1 className="text-3xl font-bold tracking-tight">Явка</h1>
          </div>
          
          <nav className="hidden md:flex gap-8 text-slate-300">
            <a href="#" className="hover:text-white transition">Карта</a>
            <a href="#" className="hover:text-white transition">Сборы</a>
            <a href="#" className="hover:text-white transition">Квесты</a>
            <a href="#" className="hover:text-white transition">Игры</a>
          </nav>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2.5 rounded-xl font-semibold transition">
            Войти инкогнито
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center pt-16">
        <img 
          src="/images/hero.png" 
          alt="Явка — Ярославль"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-yellow-500/30">
            <span className="text-yellow-400">📍</span>
            <span className="font-medium">Ярославль • Только здесь</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6 leading-none text-yellow-400 drop-shadow-2xl">
            ЯВКА
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Собирайся с людьми рядом.<br />
            Прямо сейчас. Анонимно.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openMap}
              className="bg-yellow-500 hover:bg-yellow-400 text-black text-xl px-12 py-5 rounded-2xl font-bold transition flex items-center justify-center gap-3 shadow-lg"
            >
              🗺️ Открыть карту
            </button>
            
            <button className="border-2 border-white/80 hover:bg-white/10 text-xl px-10 py-5 rounded-2xl font-medium transition">
              Узнать больше
            </button>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none"></div>
      </div>
    </main>
  );
}
