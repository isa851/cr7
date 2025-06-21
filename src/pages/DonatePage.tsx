import React, { useState } from "react";
// import mbank from "../img/photo_2025-06-21_15-49-26.jpg";
import mbank from "../img/mbank.jpg";
const DonatePage: React.FC = () => {
  const accountDetails = {
    name: "ИСЛАМБЕК А.",
    phone: "+996 (501) 155 095",
  };
  const [donationProgress] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white font-sans">
      <section className="py-16 px-4 text-center bg-green-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Поддержите наш проект
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Ваше пожертвование помогает нам менять мир к лучшему. Каждая сумма
          важна!
        </p>
      </section>

      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="mt-6 text-center text-gray-600">
            <p>Реквизиты для перевода:</p>
            <p>Имя: {accountDetails.name}</p>
            <p>Телефон: {accountDetails.phone}</p>
            <p>Используйте QR-код для быстрого перевода.</p>
            <img
              src={mbank}
              alt="QR-код для пожертвований"
              className="mx-auto mt-4 max-w-xs"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          Наша цель сбора для нового проекта: 200,000 сомов
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-6">
          <div
            className="bg-green-600 h-6 rounded-full"
            style={{ width: `${donationProgress}%` }}
          ></div>
        </div>
        <p className="text-center mt-4 text-gray-600">
          {donationProgress}% от нашей цели достигнуто! Спасибо за поддержку.  
        </p>
      </section>

      <section className="py-12 px-4 bg-green-50 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Спасибо!</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ваша поддержка имеет огромное значение. Вместе мы можем больше!
        </p>
      </section>
    </div>
  );
};

export default DonatePage;