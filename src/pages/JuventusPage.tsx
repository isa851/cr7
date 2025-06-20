import React, { useState } from 'react';
import { Trophy, Star, ChevronDown, ChevronUp } from 'lucide-react';

const JuventusPage = () => {
  const [showStats, setShowStats] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  const juventusStats = [
    { label: 'Матчи', value: '134', detail: 'Сыграно матчей за Ювентус в Серии А, Лиге чемпионов и других турнирах' },
    { label: 'Голы', value: '101', detail: 'Забито голов во всех соревнованиях' },
    { label: 'Передачи', value: '22', detail: 'Голевые передачи для товарищей по команде' },
    { label: 'Трофеи', value: '5', detail: 'Выиграно трофеев, включая Серию А и Кубок Италии' },
    { label: 'Минуты на поле', value: '10,780', detail: 'Общее время на поле в минутах' },
    { label: 'Хет-трики', value: '8', detail: 'Количество матчей с тремя и более голами' },
  ];

  const trophies = [
    { year: 2019, title: 'Серия А', description: 'Чемпион Италии 2018/19' },
    { year: 2019, title: 'Суперкубок Италии', description: 'Победа над Лацио' },
    { year: 2020, title: 'Серия А', description: 'Чемпион Италии 2019/20' },
    { year: 2020, title: 'Суперкубок Италии', description: 'Победа над Наполи' },
    { year: 2021, title: 'Кубок Италии', description: 'Финал против Аталанты' },
  ];

  const galleryImages = [
    { src: 'https://photobooth.cdn.sports.ru/preset/post/9/3f/e90f647544367abdd2e25948c125e.jpeg?f=webp&q=90&s=2x&w=730', alt: 'Роналду забивает гол за Ювентус' },
    { src: 'https://sport.news.am/static/news/b/2018/07/91401.jpg', alt: 'Роналду на тренировке Ювентуса' },
    { src: 'https://img.championat.com/s/732x488/news/big/d/h/krishtianu-ronaldu-ustanovil-unikalnoe-dostizhenie-po-itogam-sezona-serii-a_1621838357989017268.jpg', alt: 'Роналду с трофеем Серии А' },
    { src: 'https://img.championat.com/c/900x900/news/big/w/z/juventus-s-ronaldu-vyigral-chempionstvo_15557966911150641442.jpg', alt: 'Роналду празднует с командой' },
  ];

  const timelineEvents = [
    { year: 2018, event: 'Переход в Ювентус за 100 млн евро', detail: 'Июль 2018: Роналду подписал контракт с Ювентусом' },
    { year: 2019, event: 'Первый титул Серии А', detail: 'Роналду помог Ювентусу выиграть чемпионат Италии' },
    { year: 2020, event: 'Второй титул Серии А', detail: 'Второй подряд титул чемпиона Италии' },
    { year: 2021, event: 'Кубок Италии', detail: 'Победа в финале Кубка Италии против Аталанты' },
  ];

  const handleImageChange = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-r from-black via-gray-800 to-yellow-600 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Ювентус: <span className="text-yellow-400">Эра Роналду</span>
        </h1>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-12">
          В июле 2018 года Криштиану Роналду перешёл в Ювентус за 100 миллионов евро. 
          Его цель — привести туринский клуб к триумфу в Лиге чемпионов и укрепить доминирование в Серии А.
        </p>
        <div className="bg-black rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-yellow-400">Статистика в Ювентусе</h3>
            <button
              onClick={() => setShowStats(!showStats)}
              className="text-yellow-400 hover:text-yellow-300 transition flex items-center"
            >
              {showStats ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              <span className="ml-2">{showStats ? 'Скрыть' : 'Показать'}</span>
            </button>
          </div>
          {showStats && (
            <div className="grid md:grid-cols-3 gap-8">
              {juventusStats.map((stat, index) => (
                <div key={index} className="text-center bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-lg text-white">{stat.label}</div>
                  <p className="text-sm text-gray-400 mt-2">{stat.detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trophies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Трофеи с Ювентусом</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trophies.map((trophy, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md">
                <Trophy className="w-8 h-8 text-yellow-600" />
                <div>
                  <span className="text-lg font-semibold text-gray-800">{trophy.year}: {trophy.title}</span>
                  <p className="text-gray-600">{trophy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Ключевые моменты</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-yellow-600">{event.year}</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">{event.event}</h3>
                  <p className="text-gray-600">{event.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Галерея</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
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
                  className={`p-2 rounded-lg ${activeImage === index ? 'bg-yellow-400' : 'bg-gray-200'} hover:bg-yellow-300 transition`}
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

      {/* Highlight Stats */}
      <section className="py-16 bg-gradient-to-r from-black via-gray-800 to-yellow-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Лучшие достижения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Золотой мяч 2018</h3>
              <p>Роналду получил награду благодаря выступлениям за Ювентус и Реал.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Лучший бомбардир Серии А</h3>
              <p>29 голов в сезоне 2020/21.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Рекорд Лиги чемпионов</h3>
              <p>Роналду забил 14 голов в ЛЧ за Ювентус.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JuventusPage;