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
                src="https://e0.365dm.com/16/09/2048x1152/cristiano-ronaldo-manchester-united-man-utd_3785639.jpg?20160913172236"
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