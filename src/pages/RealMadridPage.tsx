import React from 'react';
import { Crown, Trophy, Target, Zap } from 'lucide-react';

const RealMadridPage = () => {
  const records = [
    { title: 'Голы за Реал', value: '451', description: 'Лучший бомбардир в истории клуба' },
    { title: 'Лига чемпионов', value: '4', description: 'Подряд с 2014 по 2018 год' },
    { title: 'Золотые мячи', value: '4', description: 'В составе Реала (2013, 2014, 2016, 2017)' },
    { title: 'Голы в ЛЧ', value: '105', description: 'Рекорд турнира за Реал' },
  ];

  const seasons = [
    {
      year: '2009-10',
      goals: 33,
      highlights: 'Дебютный сезон, адаптация',
      trophy: 'none'
    },
    {
      year: '2013-14',
      goals: 51,
      highlights: 'Десятая Лига чемпионов, Золотой мяч',
      trophy: 'UCL'
    },
    {
      year: '2015-16',
      goals: 51,
      highlights: 'Одиннадцатая Лига чемпионов',
      trophy: 'UCL'
    },
    {
      year: '2016-17',
      goals: 42,
      highlights: 'Двенадцатая Лига чемпионов, Ла Лига',
      trophy: 'UCL + Liga'
    },
    {
      year: '2017-18',
      goals: 44,
      highlights: 'Тринадцатая Лига чемпионов, финальный сезон',
      trophy: 'UCL'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-white text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Реал <span className="text-yellow-400">Мадрид</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                2009-2018 • Эра абсолютного господства
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="text-2xl font-bold">#7</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="text-lg font-semibold">Los Blancos</span>
                </div>
                <div className="bg-yellow-400 text-purple-900 rounded-lg px-6 py-3">
                  <span className="text-lg font-bold">GOAT</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://i0.wp.com/www.fanzword.com/wp-content/uploads/2024/03/skysports-cristiano-ronaldo-real-madrid-football_4178227.jpg"
                alt="Cristiano Ronaldo Real Madrid"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-purple-900 p-4 rounded-xl font-bold shadow-lg">
                <Crown className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galactico Era */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Эра <span className="text-purple-600">Галактико</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              1 июля 2009 года Реал Мадрид объявил о подписании Криштиану Роналду за рекордную сумму 
              в 94 миллиона евро. Началась одна из самых успешных эр в истории футбола.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 text-center">
              <Crown className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Король Мадрида</h3>
              <p className="text-gray-700 text-sm">Абсолютный лидер команды</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6 text-center">
              <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Трофейная машина</h3>
              <p className="text-gray-700 text-sm">16 трофеев за 9 лет</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Клатч-игрок</h3>
              <p className="text-gray-700 text-sm">Решающие голы в финалах</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 text-center">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Скорость</h3>
              <p className="text-gray-700 text-sm">Эволюция стиля игры</p>
            </div>
          </div>
        </div>
      </section>

      {/* Records Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Невероятные <span className="text-yellow-400">рекорды</span>
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {records.map((record, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-yellow-400 mb-2">{record.value}</div>
                <div className="text-xl font-semibold mb-2">{record.title}</div>
                <div className="text-sm opacity-80">{record.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Champions League Legacy */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Мистер <span className="text-yellow-400">Лига чемпионов</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Четыре Лиги чемпионов подряд (2014, 2016, 2017, 2018) — беспрецедентное достижение
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">2014 - Ла Десима</h3>
                  <p className="opacity-90">Долгожданная десятая Лига чемпионов. Гол в овертайме финала против Атлетико.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">2016 - Одиннадцатая</h3>
                  <p className="opacity-90">Реализация решающего пенальти в серии против Атлетико в Милане.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">2017 - Двенадцатая</h3>
                  <p className="opacity-90">Дубль в финале против Ювентуса. Абсолютное господство.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">2018 - Тринадцатая</h3>
                  <p className="opacity-90">Фантастический гол ножницами против Ювентуса. Прощальный подарок.</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://external-preview.redd.it/cristiano-ronaldo-on-x-congratulations-for-these-122-years-v0-rAqg17BfnzLx1ar8HtThAn-F5ME7fQ3V2U3ao5juSCs.jpg?auto=webp&s=c95469730562c9ab778e2e0f1028e466544551f6"
                alt="Champions League Trophy"
                className="rounded-2xl shadow-2xl mb-6"
              />
              <div className="bg-yellow-400 text-purple-900 rounded-xl p-4 font-bold text-xl">
                4× Лига чемпионов
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Season by Season */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Сезон за <span className="text-purple-600">сезоном</span>
          </h2>
          <div className="space-y-6">
            {seasons.map((season, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{season.year}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-1">{season.goals}</div>
                    <div className="text-sm text-gray-600">голов</div>
                  </div>
                  <div>
                    <p className="text-gray-700">{season.highlights}</p>
                  </div>
                  <div className="text-center">
                    {season.trophy !== 'none' && (
                      <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        <Trophy className="w-4 h-4 mr-1" />
                        {season.trophy}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farewell */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Прощание с <span className="text-yellow-400">Мадридом</span>
          </h2>
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
            "Эти 9 лет в Реале были самыми удивительными из возможных. 
            Этот клуб навсегда останется в моём сердце, как и его болельщики."
          </blockquote>
          <div className="text-xl font-semibold mb-6">— Криштиану Роналду, июль 2018</div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="text-lg font-semibold mb-2">Наследие короля</div>
            <p className="opacity-90">
              451 гол в 438 матчах. 16 трофеев. 4 Золотых мяча. 
              Криштиану навсегда изменил историю Реал Мадрида.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealMadridPage;