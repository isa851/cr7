import React from 'react';
import { Heart, Users, Camera, Shirt, Dumbbell, Home } from 'lucide-react';

const PersonalLifePage = () => {
  const familyMembers = [
    { name: 'Жоржина Родригес', role: 'Партнёр', since: '2016' },
    { name: 'Криштиану мл.', role: 'Сын', born: '2010' },
    { name: 'Ева и Матео', role: 'Близнецы', born: '2017' },
    { name: 'Алана Мартина', role: 'Дочь', born: '2017' },
    { name: 'Белла Эсмералда', role: 'Дочь', born: '2022' },
  ];

  const businessVentures = [
    { name: 'CR7', type: 'Модный бренд', description: 'Нижнее белье, одежда, обувь' },
    { name: 'CR7 Hotels', type: 'Гостиничный бизнес', description: 'Отели в Португалии и Мадриде' },
    { name: 'CR7 Fitness', type: 'Фитнес-центры', description: 'Сеть спортзалов' },
    { name: 'Fragrance Line', type: 'Парфюмерия', description: 'Линейка ароматов CR7' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Личная жизнь и <span className="text-yellow-400">стиль</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Семья • Бизнес • Мода • Социальные сети
            </p>
            <div className="flex justify-center items-center space-x-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-lg font-semibold">Father of 5</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-lg font-semibold">600M+ Followers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Семья — это <span className="text-blue-600">всё</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Для Роналду семья всегда была приоритетом. Он гордый отец пятерых детей 
              и преданный партнёр Жоржины Родригес.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://ss.sport-express.ru/userfiles/materials/177/1777434/volga.jpg"
                alt="Family Time"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              {familyMembers.map((member, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-gray-700">{member.role} • {member.since || member.born}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Отцовство</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              "Быть отцом — это лучшее чувство в мире. Мои дети дают мне энергию и мотивацию 
              продолжать бороться и достигать своих целей."
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Empire */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Король <span className="text-purple-600">социальных сетей</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Роналду — самая популярная личность в социальных сетях среди всех спортсменов
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Instagram</div>
              <p className="text-gray-600 text-sm">Самый популярный аккаунт</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">100M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Twitter/X</div>
              <p className="text-gray-600 text-sm">Огромная аудитория</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-800 mb-2">170M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Facebook</div>
              <p className="text-gray-600 text-sm">Глобальное присутствие</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">50M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">YouTube</div>
              <p className="text-gray-600 text-sm">Собственный канал</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Контент-стратегия</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Camera className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">За кулисами</h4>
                <p className="text-gray-700 text-sm">Тренировки, семейные моменты, путешествия</p>
              </div>
              <div className="text-center">
                <Dumbbell className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Фитнес и здоровье</h4>
                <p className="text-gray-700 text-sm">Тренировки, диета, мотивация</p>
              </div>
              <div className="text-center">
                <Shirt className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Мода и стиль</h4>
                <p className="text-gray-700 text-sm">Наряды, фотосессии, брендинг</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Empire */}
      <section className="py-16 bg-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Бизнес-<span className="text-yellow-400">империя</span>
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Роналду успешно развивает различные бизнес-направления под брендом CR7
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessVentures.map((business, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{business.name}</h3>
                <div className="text-lg font-semibold mb-4">{business.type}</div>
                <p className="opacity-90">{business.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Оценка состояния</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-2">$500M+</div>
              <p className="text-lg opacity-90">
                По данным Forbes, Роналду входит в список самых высокооплачиваемых спортсменов мира
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Style and Fashion */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Икона <span className="text-pink-600">стиля</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Роналду известен не только своей игрой, но и безупречным чувством стиля
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <Shirt className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Модные показы</h3>
              <p className="text-gray-700">
                Регулярно посещает модные недели в Милане, Париже и Нью-Йорке
              </p>
            </div>
            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <Camera className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Фотосессии</h3>
              <p className="text-gray-700">
                Сотрудничает с ведущими фотографами и модными журналами
              </p>
            </div>
            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Влияние на моду</h3>
              <p className="text-gray-700">
                Его стиль копируют миллионы фанатов по всему миру
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philanthropy */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Благотворительность и <span className="text-yellow-400">помощь</span>
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Роналду активно занимается благотворительностью и помогает нуждающимся
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Home className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Детские больницы</h3>
              <p className="opacity-90">
                Регулярно жертвует большие суммы на лечение детей и строительство медицинских центров
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Heart className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Помощь пострадавшим</h3>
              <p className="opacity-90">
                Оказывает поддержку жертвам стихийных бедствий и чрезвычайных ситуаций
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <blockquote className="text-2xl font-light italic mb-6">
              "Успех не измеряется только трофеями. Важно помогать тем, кому повезло меньше."
            </blockquote>
            <div className="text-lg font-semibold">— Криштиану Роналду</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalLifePage;