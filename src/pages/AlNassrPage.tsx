import React, { useState } from 'react';
import { Globe, TrendingUp, Star, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const AlNassrPage = () => {
  const [showStats, setShowStats] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  const alNassrStats = [
    { label: 'Матчи', value: '50+', detail: 'Сыграно матчей в Саудовской Про-лиге и других турнирах' },
    { label: 'Голы', value: '40+', detail: 'Забито голов во всех соревнованиях' },
    { label: 'Передачи', value: '10+', detail: 'Голевые передачи для товарищей по команде' },
    { label: 'Зарплата', value: '200M€', detail: 'Рекордный контракт в год' },
    { label: 'Followers', value: '600M+', detail: 'Суммарное количество подписчиков в соцсетях' },
    { label: 'Хет-трики', value: '4', detail: 'Количество матчей с тремя и более голами' },
  ];

  const achievements = [
    { year: 2023, title: 'Арабская Лига чемпионов', description: 'Победа в турнире с решающими голами Роналду' },
    { year: 2023, title: 'Лучший бомбардир лиги', description: '20+ голов в Саудовской Про-лиге' },
    { year: 2024, title: 'Суперкубок Саудовской Аравии', description: 'Победа над Аль-Хилал' },
  ];

  const galleryImages = [
    { src: 'https://cdnn21.img.ria.ru/images/07e7/07/1d/1887100172_79:422:1957:1479_1920x0_80_0_0_c6aa448edc7b19670fe0d969a1cdd588.jpg', alt: 'Роналду забивает гол за Аль-Наср' },
    { src: 'https://cdn.sovsport.prod.plat.agency/Krishtianu_Ronaldu_Foto_Getty_Images_00001_335229149e.webp', alt: 'Роналду празднует с болельщиками Аль-Наср' },
    { src: 'https://img.championat.com/i/m/h/1708789378816383204.jpg', alt: 'Роналду на тренировке Аль-Наср' },
    { src: 'https://static.tengrinews.kz/userdata/news/2023/news_507391/thumb_m/photo_440390.jpeg', alt: 'Роналду с трофеем Арабской Лиги чемпионов' },
  ];

  const timelineEvents = [
    { year: 2022, event: 'Подписание контракта', detail: 'Декабрь 2022: Роналду подписал контракт с Аль-Наср на 200 млн евро в год' },
    { year: 2023, event: 'Дебют за Аль-Наср', detail: 'Январь 2023: Первый матч в Саудовской Про-лиге' },
    { year: 2023, event: 'Победа в Арабской Лиге чемпионов', detail: 'Август 2023: Роналду привёл команду к титулу' },
    { year: 2024, event: 'Рекорд голов в лиге', detail: 'Установил рекорд по количеству голов за сезон' },
  ];

  const handleImageChange = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-600 to-yellow-400 text-black">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Аль-Наср: <span className="text-white">Саудовская революция</span>
        </h1>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-12">
          В декабре 2022 года Криштиану Роналду подписал рекордный контракт с Аль-Наср, 
          открыв новую эру в своей карьере и подняв саудовский футбол на мировой уровень.
        </p>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white">Статистика в Аль-Наср</h3>
            <button
              onClick={() => setShowStats(!showStats)}
              className="text-white hover:text-yellow-200 transition flex items-center"
            >
              {showStats ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              <span className="ml-2">{showStats ? 'Скрыть' : 'Показать'}</span>
            </button>
          </div>
          {showStats && (
            <div className="grid md:grid-cols-3 gap-6">
              {alNassrStats.map((stat, index) => (
                <div key={index} className="text-center bg-black/30 p-6 rounded-lg hover:bg-black/40 transition">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg text-white">{stat.label}</div>
                  <p className="text-sm text-gray-200 mt-2">{stat.detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Достижения с Аль-Наср</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <div>
                  <span className="text-lg font-semibold">{achievement.year}: {achievement.title}</span>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ключевые моменты</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-yellow-400">{event.year}</span>
                </div>
                <div className="flex-1 bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{event.event}</h3>
                  <p className="text-gray-300">{event.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Галерея</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="bg-gray-700 h-96 rounded-lg flex items-center justify-center">
                <img
                  src={galleryImages[activeImage].src}
                  alt={galleryImages[activeImage].alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`p-2 rounded-lg ${activeImage === index ? 'bg-yellow-400' : 'bg-gray-600'} hover:bg-yellow-300 transition`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-600 to-yellow-400 text-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Влияние на <span className="text-black">саудовский футбол</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/30 transition-all duration-300">
              <Globe className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Глобальное внимание</h3>
              <p className="text-gray-200">
                Переход Роналду привлёк мировое внимание к саудовской лиге, увеличив её популярность.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/30 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Рост популярности</h3>
              <p className="text-gray-200">
                Посещаемость матчей выросла на 40%, а телерейтинги удвоились.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/30 transition-all duration-300">
              <Star className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Привлечение звёзд</h3>
              <p className="text-gray-200">
                За Роналду последовали Бензема, Неймар и другие мировые звёзды.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlNassrPage;