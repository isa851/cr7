import React from 'react';
import { Flag, Trophy, Heart, Star, Target } from 'lucide-react';

const PortugalPage = () => {
  const majorTournaments = [
    {
      year: '2004',
      tournament: 'Евро-2004',
      result: 'Финал',
      description: 'Дебют на родной земле',
      goals: 2
    },
    {
      year: '2016',
      tournament: 'Евро-2016',
      result: 'Победа',
      description: 'Долгожданный трофей',
      goals: 3
    },
    {
      year: '2018',
      tournament: 'ЧМ-2018',
      result: '1/8 финала',
      description: 'Хет-трик против Испании',
      goals: 4
    },
    {
      year: '2019',
      tournament: 'Лига наций',
      result: 'Победа',
      description: 'Второй трофей',
      goals: 3
    },
    {
      year: '2021',
      tournament: 'Евро-2020',
      result: '1/8 финала',
      description: 'Золотая бутса',
      goals: 5
    },
    {
      year: '2022',
      tournament: 'ЧМ-2022',
      result: '1/4 финала',
      description: 'Последний ЧМ?',
      goals: 1
    }
  ];

  const portugalStats = [
    { label: 'Матчи', value: '200+' },
    { label: 'Голы', value: '130+' },
    { label: 'Капитан с', value: '2008' },
    { label: 'Турниры', value: '11' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-700 via-green-700 to-red-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              <img className="w-20 h-20 rounded-full  text-red-600" src="https://cdn.vectorstock.com/i/500p/42/57/portugal-flag-vector-39124257.jpg" alt="" />
              
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Сборная <span className="text-yellow-400">Португалии</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              2003-... • Капитан и легенда
            </p>
            <div className="flex justify-center items-center space-x-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">#7</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-lg font-semibold">Capitão</span>
              </div>
              <div className="bg-yellow-400 text-red-700 rounded-lg px-6 py-3">
                <span className="text-lg font-bold">130+ голов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portugal Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Статистика за <span className="text-red-600">сборную</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {portugalStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Рекордсмен сборной Португалии</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Роналду является лучшим бомбардиром в истории сборной Португалии и одним из немногих игроков, 
              которые забили более 100 голов за национальную команду.
            </p>
          </div>
        </div>
      </section>

      {/* Euro 2016 - The Glory */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Евро-2016: <span className="text-yellow-400">Триумф</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">Групповой этап</h3>
                  <p className="opacity-90">3 ничьи, но команда прошла дальше</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">1/8 и 1/4 финала</h3>
                  <p className="opacity-90">Победы над Хорватией (1:0) и Польшей (пен.)</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">Полуфинал</h3>
                  <p className="opacity-90">2:0 против Уэльса, два гола от Роналду</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">Финал</h3>
                  <p className="opacity-90">Травма в начале матча, но команда выиграла 1:0</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/64/3c/2234582007c3966ee68c720e46ab02c95782cafbdf7ef226064337.jpg"
                alt="Euro 2016 Trophy"
                className="rounded-2xl shadow-2xl mb-6"
              />
              <div className="bg-yellow-400 text-red-700 rounded-xl p-4 font-bold text-xl">
                Первый трофей
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            История <span className="text-red-600">турниров</span>
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {majorTournaments.map((tournament, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-red-600">{tournament.year}</div>
                  <div className="text-lg font-semibold text-gray-900">{tournament.goals} ⚽</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tournament.tournament}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                  tournament.result === 'Победа' 
                    ? 'bg-green-100 text-green-800' 
                    : tournament.result === 'Финал'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {tournament.result}
                </div>
                <p className="text-gray-700">{tournament.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Лидерство и <span className="text-yellow-400">патриотизм</span>
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Роналду стал капитаном сборной в 2008 году и с тех пор ведёт команду своим примером
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Heart className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Любовь к стране</h3>
              <p className="opacity-90">
                Роналду всегда подчёркивает, как гордится тем, что представляет Португалию
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Пример для молодых</h3>
              <p className="opacity-90">
                Его профессионализм и самоотдача вдохновляют новое поколение игроков
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Стремление к победе</h3> 
              <p className="opacity-90">
                В каждом матче за сборную он выкладывается на все 100%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Moments */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Эмоциональные <span className="text-red-600">моменты</span>
          </h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Слёзы поражения (2004, 2012)</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Проигранные финалы Евро-2004 и Евро-2012 показали, насколько важны для Роналду 
                  успехи сборной. Слёзы разочарования только усилили его мотивацию.
                </p>
              </div>
              <img
                src="https://s.scr365.net/s1/images/25_4_16/img_tdXO5.jpg"
                alt="Emotional Ronaldo"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="https://img.gazeta.ru/files3/781/12405781/RTX6YNNV-pic4_zoom-1500x1500-37622.jpg"
                alt="Victory Celebration"
                className="rounded-2xl shadow-lg order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Слёзы радости (2016, 2019)</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Победы на Евро-2016 и в Лиге наций 2019 стали кульминацией его карьеры в сборной. 
                  Эти трофеи доказали, что Португалия может побеждать на самом высоком уровне.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Quote */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
            "Играть за сборную Португалии — это величайшая честь в моей жизни. 
            Каждый раз, надевая эту форму, я чувствую огромную ответственность перед своей страной."
          </blockquote>
          <div className="text-xl font-semibold mb-8">— Криштиану Роналду</div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="text-lg font-semibold mb-2">Наследие капитана</div>
            <p className="opacity-90">
              Более 200 матчей, 130+ голов, 2 трофея. 
              Роналду навсегда изменил историю португальского футбола.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortugalPage;