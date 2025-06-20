import React, { useState } from 'react';
import { Calendar, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  const [currentSection, setCurrentSection] = useState<'young' | 'modern'>('young');

  const youngRonaldoImages = [
    {
      url: 'https://www.rusfootball.info/uploads/posts/2020-12/1608960562_krishtianu-ronaldu-v-myu_x2.webp',
      title: 'Юный талант',
      year: '2003-2009',
      description: 'Начало карьеры в Манчестер Юнайтед'
    },
    {
      url: 'https://c8.alamy.com/comp/GBMWRD/soccer-barclays-premier-league-manchester-united-v-arsenal-old-trafford-GBMWRD.jpg',
      title: 'Первые трофеи',
      year: '2004-2008',
      description: 'Становление в Англии'
    },
    {
      url: 'https://pbs.twimg.com/media/GdzeECuXEAAJ4aW.jpg:large',
      title: 'Молодой король',
      year: '2008-2009',
      description: 'Первый Золотой мяч'
    },
    {
      url: 'https://sport.photosota.club/uploads/posts/2024-03/1709297190_sport-photosota-club-p-gol-ronaldu-cherez-sebya-yuventusu-7.jpg',
      title: 'Переход в Реал',
      year: '2009',
      description: 'Начало эры Галактико'
    },
    {
      url: 'https://i.pinimg.com/736x/07/a3/19/07a3192be6b31af8ba1e03fcec1b420e.jpg',
      title: 'Молодость',
      year: '2003-2010',
      description: 'Энергия и амбиции'
    },
    {
      url: 'https://i.pinimg.com/736x/37/75/ad/3775ad270cfbb9b9f8a632954e0c563b.jpg',
      title: 'Ранние годы',
      year: '2004-2007',
      description: 'Обучение мастерству'
    }
  ];

  const modernRonaldoImages = [
    {
      url: 'https://ss.sport-express.ru/userfiles/materials/199/1996389/large.jpg',
      title: 'Современная легенда',
      year: '2018-2024',
      description: 'Зрелость и мастерство'
    },
    {
      url: 'https://img.tsn.ua/cached/033/tsn-29fc5e29fb78c95723c9978c03736a3d/thumbs/x/4d/05/213d5f383c2cebed3ffb0ce9a883054d.jpg',
      title: 'Икона стиля',
      year: '2020-2024',
      description: 'Модный и успешный'
    },
    {
      url: 'https://sun9-74.userapi.com/impg/c622324/v622324768/44bce/HIiwmhjQC8Y.jpg?size=604x604&quality=96&sign=153daa8fa223f27789b6c4e69bb1a914&type=album',
      title: 'Семейный человек',
      year: '2016-2024',
      description: 'Отец и партнёр'
    },
    {
      url: 'https://ministryofsport.com/wp-content/uploads/2024/08/Cristiano-Ronaldo-YouTube-08-24-at-18.55.02-e1724523501616.png',
      title: 'Король соцсетей',
      year: '2015-2024',
      description: '600М+ подписчиков'
    },
    {
      url: 'https://ru.hotel.report/assets/cache/images/assets/pages/29324/article_image/2023-03-20-ronaldu-1200x850-887.png',
      title: 'Бизнесмен',
      year: '2010-2024',
      description: 'Империя CR7'
    },
    {
      url: 'https://cdn.sovsport.prod.plat.agency/1_c6c24e4817.webp',
      title: 'Вечная молодость',
      year: '2020-2024',
      description: 'В 39 всё ещё на пике'
    }
  ];

  const currentImages = currentSection === 'young' ? youngRonaldoImages : modernRonaldoImages;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <Camera className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Галерея <span className="text-yellow-400">CR7</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Эволюция легенды: от молодого таланта до иконы
            </p>
          </div>
        </div>
      </section>

      {/* Section Toggle */}
      <section className="py-8 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 flex">
              <button
                onClick={() => setCurrentSection('young')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  currentSection === 'young'
                    ? 'bg-yellow-400 text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Молодой Роналду
              </button>
              <button
                onClick={() => setCurrentSection('modern')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  currentSection === 'modern'
                    ? 'bg-yellow-400 text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Современный Роналду
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              {currentSection === 'young' ? (
                <span>Молодой Роналду <span className="text-yellow-400">(2003-2012)</span></span>
              ) : (
                <span>Современный Роналду <span className="text-yellow-400">(2013-2025)</span></span>
              )}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {currentSection === 'young' 
                ? 'Начало карьеры, первые трофеи, становление звезды мирового футбола'
                : 'Зрелый мастер, семейный человек, бизнесмен и икона современности'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-semibold text-yellow-400">{image.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-black font-bold text-sm">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Сравнение <span className="text-yellow-400">эпох</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">2003-2012</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Возраст:</span>
                  <span className="text-yellow-400 font-semibold">18-27 лет</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Стиль игры:</span>
                  <span className="text-yellow-400 font-semibold">Винг, трюки</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Физика:</span>
                  <span className="text-yellow-400 font-semibold">Худощавый, быстрый</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Причёска:</span>
                  <span className="text-yellow-400 font-semibold">Гель, эксперименты</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Характер:</span>
                  <span className="text-yellow-400 font-semibold">Эмоциональный</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">2013-2025</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Возраст:</span>
                  <span className="text-yellow-400 font-semibold">28-40 лет</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Стиль игры:</span>
                  <span className="text-yellow-400 font-semibold">Форвард, голы</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Физика:</span>
                  <span className="text-yellow-400 font-semibold">Мускулистый, мощный</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Причёска:</span>
                  <span className="text-yellow-400 font-semibold">Классика, стиль</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Характер:</span>
                  <span className="text-yellow-400 font-semibold">Зрелый лидер</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 text-black max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Неизменное</h3>
              <p className="text-lg">
                Несмотря на все изменения, одно остаётся постоянным — невероятная самоотдача, 
                стремление к совершенству и любовь к футболу. Роналду продолжает эволюционировать, 
                оставаясь при этом верным себе.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;