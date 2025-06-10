import React from 'react';
import { Trophy, TrendingUp, Users, Star } from 'lucide-react';

const ManchesterPage = () => {
  const achievements = [
    { title: 'Премьер-лига', count: '3', years: '2007, 2008, 2009' },
    { title: 'Лига чемпионов', count: '1', years: '2008' },
    { title: 'Кубок Англии', count: '1', years: '2004' },
    { title: 'Золотой мяч', count: '1', years: '2008' },
  ];

  const stats = [
    { label: 'Матчи', value: '292' },
    { label: 'Голы', value: '118' },
    { label: 'Передачи', value: '69' },
    { label: 'Трофеи', value: '9' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-800 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Манчестер <span className="text-yellow-400">Юнайтед</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                2003-2009 • Где родилась легenda
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="text-2xl font-bold">#7</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="text-lg font-semibold">Red Devils</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="data:image/jpeg;base64,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"
                alt="Cristiano Ronaldo Manchester United"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Arrival Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Прибытие в <span className="text-red-600">Театр Мечты</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              12 августа 2003 года 18-летний Криштиану Роналду подписал контракт с Манчестер Юнайтед 
              за 12,24 миллиона фунтов, став самым дорогим подростком в истории футбола на тот момент.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Быстрый рост</h3>
              <p className="text-gray-700">
                Под руководством сэра Алекса Фергюсона молодой талант быстро развивался
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Поддержка команды</h3>
              <p className="text-gray-700">
                Игроки вроде Райана Гиггза и Пола Скоулза помогали ему адаптироваться
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 text-center">
              <Star className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Номер 7</h3>
              <p className="text-gray-700">
                Получил легендарную семёрку, которую до него носили великие игроки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Статистика в <span className="text-yellow-400">Юнайтед</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Трофеи и <span className="text-red-600">достижения</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Trophy className="w-12 h-12 text-yellow-500 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{achievement.title}</h3>
                    <div className="text-3xl font-bold text-red-600">{achievement.count}×</div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg">{achievement.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Эволюция <span className="text-red-600">игрока</span>
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2003-2005: Обучение</h3>
                  <p className="text-gray-700">
                    Первые годы были сложными. Молодой Роналду учился играть в английском футболе, 
                    адаптировался к физической игре и высокому темпу.
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2006-2007: Прорыв</h3>
                  <p className="text-gray-700">
                    Сезон, когда всё изменилось. 23 гола во всех турнирах, первый титул в Премьер-лиге 
                    и выход в финал Лиги чемпионов.
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2007-2009: Вершина</h3>
                  <p className="text-gray-700">
                    42 гола в сезоне 2007/08, победа в Лиге чемпионов, первый Золотой мяч. 
                    Роналду стал лучшим игроком мира.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://m.media-amazon.com/images/I/51PQsQVgPmL._AC_UF894,1000_QL80_.jpg"
                alt="Cristiano Ronaldo Evolution"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-4 rounded-xl font-bold shadow-lg">
                Ballon d'Or 2008
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Quote */}
      <section className="py-16 bg-gradient-to-r from-red-800 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
            "Манчестер Юнайтед сделал меня тем игроком, которым я являюсь сегодня. 
            Этот клуб и эти болельщики навсегда останутся в моём сердце."
          </blockquote>
          <div className="text-xl font-semibold">— Криштиану Роналду</div>
        </div>
      </section>
    </div>
  );
};

export default ManchesterPage;