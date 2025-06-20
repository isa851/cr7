import React from 'react';
import { Trophy, Target, Award, Star, TrendingUp, Globe } from 'lucide-react';

const FactsRecordsPage = () => {
  const majorRecords = [
    {
      icon: Target,
      title: 'Голы в карьере',
      value: '900+',
      description: 'Официальные матчи за клуб и сборную',
      color: 'text-red-600'
    },
    {
      icon: Trophy,
      title: 'Лига чемпионов',
      value: '140+',
      description: 'Голов в главном турнире Европы',
      color: 'text-blue-600'
    },
    {
      icon: Award,
      title: 'Золотые мячи',
      value: '5',
      description: 'Лучший игрок мира (2008, 2013, 2014, 2016, 2017)',
      color: 'text-yellow-600'
    },
    {
      icon: Star,
      title: 'Хет-трики',
      value: '60+',
      description: 'Три и более голов в одном матче',
      color: 'text-purple-600'
    }
  ];

  const clubRecords = [
    { club: 'Манчестер Юнайтед', goals: 118, matches: 292, years: '2003-2009' },
    { club: 'Реал Мадрид', goals: 451, matches: 438, years: '2009-2018' },
    { club: 'Ювентус', goals: 101, matches: 134, years: '2018-2021' },
    { club: 'Аль-Наср', goals: '40+', matches: '50+', years: '2023-...' }
  ];

  const uniqueRecords = [
    'Единственный игрок, забивший в 5 чемпионатах мира',
    'Единственный игрок, забивший в 5 Евро',
    'Рекордсмен по голам в Лиге чемпионов (140+)',
    'Рекордсмен по голам за сборную (130+)',
    'Единственный игрок с 50+ голами в 11 сезонах подряд',
    'Самый возрастной игрок, забивший хет-трик на ЧМ',
    'Первый игрок, забивший 100+ голов за 3 разных клуба',
    'Рекордсмен по подписчикам в социальных сетях среди спортсменов'
  ];

  const trophyCount = [
    { category: 'Лига чемпионов', count: 5, teams: 'МЮ (1), Реал (4)' },
    { category: 'Чемпионаты', count: 7, teams: 'АПЛ (3), Ла Лига (2), Серия А (2)' },
    { category: 'Кубки', count: 4, teams: 'Англия (1), Испания (2), Италия (1)' },
    { category: 'Сборная', count: 2, teams: 'Евро-2016, Лига наций-2019' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <Award className="w-16 h-16 text-yellow-200 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Факты и <span className="text-yellow-200">рекорды</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Невероятные достижения легенды футбола
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="text-4xl font-bold text-yellow-200 mb-2">900+</div>
              <div className="text-lg">голов в официальных матчах</div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Records */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Основные <span className="text-orange-600">рекорды</span>
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {majorRecords.map((record, index) => {
              const IconComponent = record.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${record.color.replace('text-', 'bg-')}/10`}>
                    <IconComponent className={`w-8 h-8 ${record.color}`} />
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${record.color}`}>{record.value}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{record.title}</h3>
                  <p className="text-gray-600 text-sm">{record.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Club Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Статистика по <span className="text-orange-600">клубам</span>
          </h2>
          <div className="space-y-6">
            {clubRecords.map((club, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-5 gap-6 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900">{club.club}</h3>
                    <p className="text-gray-600">{club.years}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{club.goals}</div>
                    <div className="text-sm text-gray-600">голов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{club.matches}</div>
                    <div className="text-sm text-gray-600">матчей</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {typeof club.goals === 'number' && typeof club.matches === 'number' 
                        ? (club.goals / club.matches).toFixed(2)
                        : 'N/A'
                      }
                    </div>
                    <div className="text-sm text-gray-600">гол/матч</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trophy Cabinet */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Трофейная <span className="text-yellow-200">комната</span>
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {trophyCount.map((trophy, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <Trophy className="w-12 h-12 text-yellow-200 mx-auto mb-4" />
                <div className="text-4xl font-bold text-yellow-200 mb-2">{trophy.count}</div>
                <h3 className="text-xl font-bold mb-2">{trophy.category}</h3>
                <p className="text-sm opacity-80">{trophy.teams}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Общий счёт</h3>
              <div className="text-5xl font-bold text-yellow-200 mb-2">35+</div>
              <p className="text-lg opacity-90">
                Трофеев на клубном и международном уровне
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Records */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Уникальные <span className="text-red-600">достижения</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {uniqueRecords.map((record, index) => (
              <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-600">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-800 font-medium">{record}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Milestones */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Карьерные <span className="text-yellow-400">вехи</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Голевая прогрессия</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>100 голов:</span>
                  <span className="text-yellow-400">2009 (24 года)</span>
                </div>
                <div className="flex justify-between">
                  <span>300 голов:</span>
                  <span className="text-yellow-400">2014 (29 лет)</span>
                </div>
                <div className="flex justify-between">
                  <span>500 голов:</span>
                  <span className="text-yellow-400">2017 (32 года)</span>
                </div>
                <div className="flex justify-between">
                  <span>700 голов:</span>
                  <span className="text-yellow-400">2021 (36 лет)</span>
                </div>
                <div className="flex justify-between">
                  <span>900+ голов:</span>
                  <span className="text-yellow-400">2025 (40 лет)</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Международные рекорды</h3>
              <div className="space-y-3">
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-400">130+</div>
                  <div className="text-sm">Голов за сборную</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-400">200+</div>
                  <div className="text-sm">Матчей за сборную</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-400">11</div>
                  <div className="text-sm">Крупных турниров</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Индивидуальные награды</h3>
              <div className="space-y-3">
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-xl font-bold text-yellow-400">5×</div>
                  <div className="text-sm">Золотой мяч</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-xl font-bold text-yellow-400">4×</div>
                  <div className="text-sm">Золотая бутса</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-xl font-bold text-yellow-400">15×</div>
                  <div className="text-sm">Игрок года ФИФА</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Интересные <span className="text-yellow-400">факты</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Физическая форма</h3>
              <p className="text-sm opacity-90">
                В 40 лет имеет физические показатели 20-летнего спортсмена. 
                Процент жира в организме — всего 7%.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Социальные сети</h3>
              <p className="text-sm opacity-90">
                Первый человек, набравший 600+ миллионов подписчиков 
                во всех социальных сетях.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Благотворительность</h3>
              <p className="text-sm opacity-90">
                Пожертвовал более 100 миллионов долларов на благотворительность 
                за свою карьеру.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Бизнес</h3>
              <p className="text-sm opacity-90">
                Стоимость бренда CR7 оценивается более чем в 1 миллиард долларов.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactsRecordsPage;