import React from "react";
import { Trophy, Target, Award, Calendar } from "lucide-react";


const HomePage = () => {
  const achievements = [
    { icon: Trophy, title: "5x Золотой мяч", description: "Лучший игрок мира" },
    {
      icon: Award,
      title: "5x Лига чемпионов",
      description: "Рекордсмен турнира",
    },
    { icon: Target, title: "950+ голов", description: "В официальных матчах" },
    { icon: Calendar, title: "25+ лет", description: "На высшем уровне" },
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
                От мальчика с Мадейры до{" "}
                <span className="text-yellow-600">легенды футбола</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Криштиану Роналду душ Сантуш Авейру родился 5 февраля 1985 года
                на португальском острове Мадейра. Путь простого мальчика из
                рабочей семьи к вершинам мирового футбола — это история
                невероятного таланта, железной дисциплины и безграничного
                стремления к совершенству.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                За свою карьеру он стал одним из величайших футболистов всех
                времён, установив множество рекордов и завоевав все возможные
                трофеи как на клубном, так и на международном уровне.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">40</div>
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
                className="rounded-2xl shadow-2xl w-full h-auto"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80_%D0%AE%D0%BD%D0%B0%D0%B9%D1%82%D0%B5%D0%B4">
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    className="w-full h-full object-contain"
                    src="https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/2021px-Manchester_United_FC_crest.svg.png"
                    alt="Manchester United Logo"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Манчестер Юнайтед</h3>
                <p className="text-gray-300">2003-2009 • Первые трофеи</p>
              </div>
            </a>
            <a href="https://www.realmadrid.com/en-US">
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    className="w-full h-full object-contain"
                    src="https://upload.wikimedia.org/wikipedia/ru/thumb/8/8a/FC_Real_Madrid_Logo.svg/1200px-FC_Real_Madrid_Logo.svg.png"
                    alt="Real Madrid Logo"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Реал Мадрид</h3>
                <p className="text-gray-300">2009-2018 • Эра рекордов</p>
              </div>
            </a>
            <a href="https://ru.wikipedia.org/wiki/%D0%AE%D0%B2%D0%B5%D0%BD%D1%82%D1%83%D1%81">
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    className="w-full h-full object-contain rounded-full"
                    src="https://imageio.forbes.com/i-forbesimg/media/lists/teams/juventus_416x416.jpg?format=jpg"
                    alt="Juventus Logo"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Ювентус</h3>
                <p className="text-gray-300">2018-2021 • Новейшая слава</p>
              </div>
            </a>
            <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BD-%D0%9D%D0%B0%D1%81%D1%80_(%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D1%83%D0%B1,_%D0%AD%D1%80-%D0%A0%D0%B8%D1%8F%D0%B4)">
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    className="w-full h-full object-contain"
                    src="https://upload.wikimedia.org/wikipedia/ru/6/6b/Al_Nassr_FC_%28%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%29.png"
                    alt="Al-Nassr Logo"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Аль-Наср</h3>
                <p className="text-gray-300">2023-2025 • Новая глава</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
