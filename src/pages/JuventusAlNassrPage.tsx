import React from 'react';
import { Trophy, TrendingUp, Globe, Star } from 'lucide-react';

const JuventusAlNassrPage = () => {
  const juventusStats = [
    { label: 'Матчи', value: '134' },
    { label: 'Голы', value: '101' },
    { label: 'Передачи', value: '22' },
    { label: 'Трофеи', value: '5' },
  ];

  const alNassrStats = [
    { label: 'Матчи', value: '50+' },
    { label: 'Голы', value: '40+' },
    { label: 'Зарплата', value: '200M€' },
    { label: 'Followers', value: '600M+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black via-gray-800 to-yellow-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Новые <span className="text-yellow-400">горизонты</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Ювентус (2018-2021) • Аль-Наср (2023-...)
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
                <span className="text-sm">Juventus</span>
              </div>
              <div className="text-yellow-400 text-2xl">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-black font-bold text-xl">AN</span>
                </div>
                <span className="text-sm">Al-Nassr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Juventus Era */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ювентус: <span className="text-black">Новый вызов</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                В июле 2018 года Роналду перешёл в Ювентус за 100 миллионов евро. 
                Цель была ясна — привести туринский клуб к триумфу в Лиге чемпионов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                  <span className="text-gray-700">2 раза Серия А (2019, 2020)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                  <span className="text-gray-700">1 Кубок Италии (2021)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                  <span className="text-gray-700">2 Суперкубка Италии (2019, 2020)</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/ce/e3/d7a3493301b6ea96ff7a47e663c83bf15c14cfddbea66254989755.jpg"
                alt="Cristiano Ronaldo Juventus"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-black text-white p-4 rounded-xl font-bold shadow-lg">
                Juve #7
              </div>
            </div>
          </div>

          {/* Juventus Stats */}
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">Статистика в Ювентусе</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {juventusStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Al-Nassr Era */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Аль-Наср: <span className="text-white">Саудовская революция</span>
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              В декабре 2022 года Роналду подписал рекордный контракт с саудовским клубом Аль-Наср, 
              открыв новую эру в своей карьере и мировом футболе.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Статистика в Аль-Наср</h3>
              <div className="grid grid-cols-2 gap-6">
                {alNassrStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://assets.goal.com/images/v3/blt2f81617ac7f9e045/Cristiano%20Ronaldo%20Al%20Nassr%202025%20(3).jpg?auto=webp&format=pjpg&width=3840&quality=60"
                alt="Cristiano Ronaldo Al-Nassr"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact on Saudi Football */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Влияние на <span className="text-yellow-400">саудовский футбол</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Глобальное внимание</h3>
              <p className="text-gray-300">
                Переход Роналду привлёк мировое внимание к саудовской лиге и футболу региона
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Рост популярности</h3>
              <p className="text-gray-300">
                Посещаемость стадионов и телевизионные рейтинги выросли в разы
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Привлечение звёзд</h3>
              <p className="text-gray-300">
                За Роналду последовали другие мировые звёзды: Бензема, Неймар, Милинкович-Савич
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              На пике <span className="text-yellow-600">в 39 лет</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Даже в 39 лет Роналду продолжает показывать невероятную форму, 
              забивая голы и устанавливая новые рекорды.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">30+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Голов в сезоне</div>
              <p className="text-gray-700">Продолжает забивать на высоком уровне</p>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">850+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Карьерных голов</div>
              <p className="text-gray-700">Стремится к 1000 голам</p>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">600M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Подписчиков</div>
              <p className="text-gray-700">Самый популярный футболист в соцсетях</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
            "Я всё ещё голоден. Я хочу выиграть больше трофеев и продолжить делать историю. 
            Возраст — это просто число."
          </blockquote>
          <div className="text-xl font-semibold mb-8">— Криштиану Роналду, 2024</div>
          <div className="bg-yellow-400 text-black rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="text-lg font-semibold mb-2">Цели на будущее</div>
            <p className="text-sm">
              1000 карьерных голов • Чемпионат мира 2026 • Новые рекорды в Саудовской Аравии
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JuventusAlNassrPage;