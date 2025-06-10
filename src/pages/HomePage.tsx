import React from 'react';
import { Trophy, Target, Award, Calendar } from 'lucide-react';

const HomePage = () => {
  const achievements = [
    { icon: Trophy, title: '5x Золотой мяч', description: 'Лучший игрок мира' },
    { icon: Award, title: '5x Лига чемпионов', description: 'Рекордсмен турнира' },
    { icon: Target, title: '800+ голов', description: 'В официальных матчах' },
    { icon: Calendar, title: '20+ лет', description: 'На высшем уровне' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://editorial.uefa.com/resources/0250-0c5117b83a72-956867b9220c-1000/cristiano_ronaldo_celebrates_his_fifth_title.jpeg"
            alt="Cristiano Ronaldo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            CRISTIANO
            <span className="block text-yellow-400">RONALDO</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Легенда футбола. Икона поколения. Вдохновение для миллионов.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
              <span className="text-2xl font-bold">CR7</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
              <span className="text-2xl font-bold">#SIUU</span>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                От мальчика с Мадейры до <span className="text-yellow-600">легенды футбола</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Криштиану Роналду душ Сантуш Авейру родился 5 февраля 1985 года на португальском острове Мадейра. 
                Путь простого мальчика из рабочей семьи к вершинам мирового футбола — это история невероятного 
                таланта, железной дисциплины и безграничного стремления к совершенству.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                За свою карьеру он стал одним из величайших футболистов всех времён, установив множество рекордов 
                и завоевав все возможные трофеи как на клубном, так и на международном уровне.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">39</div>
                  <div className="text-gray-600">лет</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">7</div>
                  <div className="text-gray-600">номер</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://pbs.twimg.com/media/GXYK0jEW4AAE1E2.jpg:large"
                alt="Cristiano Ronaldo Portrait"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-4 rounded-xl font-bold text-lg shadow-lg">
                GOAT 🐐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Основные <span className="text-yellow-600">достижения</span>
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Timeline Preview */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Путь к <span className="text-yellow-400">величию</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">MU</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Манчестер Юнайтед</h3>
              <p className="text-gray-300">2003-2009 • Первые трофеи</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-purple-800">RM</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Реал Мадрид</h3>
              <p className="text-gray-300">2009-2018 • Эра рекордов</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-black">AN</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Аль-Наср</h3>
              <p className="text-gray-300">2023-... • Новая глава</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;