export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Явка
        </h1>
        <p className="text-2xl text-slate-300 mb-8">
          Собирайся с людьми в Ярославле прямо сейчас
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-medium transition">
            Войти анонимно
          </button>
          <button className="border border-slate-400 hover:bg-slate-800 px-8 py-4 rounded-xl text-lg font-medium transition">
            Посмотреть карту
          </button>
        </div>

        <p className="mt-12 text-sm text-slate-500">
          Только для Ярославля • Анонимно • Без GPS-трекинга
        </p>
      </div>
    </main>
  );
}
