import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Player stats interface
interface PlayerStats {
  name: string;
  matches: number;
  goals: number;
  assists: number;
  trophies: number;
  ballonDOr: number;
}

// Data for comparisons
const cr7MessiStats: PlayerStats[] = [
  { name: 'Криштиану Роналду', matches: 1281, goals: 938, assists: 257, trophies: 34, ballonDOr: 5 },
  { name: 'Лионель Месси', matches: 1107, goals: 866, assists: 386, trophies: 44, ballonDOr: 8 },
];

const cr7PeleStats: PlayerStats[] = [
  { name: 'Криштиану Роналду', matches: 1281, goals: 938, assists: 257, trophies: 34, ballonDOr: 5 },
  { name: 'Пеле', matches: 1363, goals: 1279, assists: 283, trophies: 26, ballonDOr: 0 },
];

const cr7MbappeStats: PlayerStats[] = [
  { name: 'Криштиану Роналду', matches: 1281, goals: 938, assists: 257, trophies: 34, ballonDOr: 5 },
  { name: 'Килиан Мбаппе', matches: 451, goals: 355, assists: 132, trophies: 18, ballonDOr: 0 },
];

// Chart data for CR7 vs Messi
const cr7MessiGoalsChartData = {
  labels: ['Криштиану Роналду', 'Лионель Месси'],
  datasets: [
    {
      label: 'Голы',
      data: [938, 866],
      backgroundColor: ['#3B82F6', '#EF4444'],
    },
  ],
};

const cr7MessiTrophiesChartData = {
  labels: ['Криштиану Роналду', 'Лионель Месси'],
  datasets: [
    {
      data: [34, 44], // Corrected to reflect trophies
      backgroundColor: ['#3B82F6', '#EF4444'],
    },
  ],
};

// Chart data for CR7 vs Pele
const cr7PeleGoalsChartData = {
  labels: ['Криштиану Роналду', 'Пеле'],
  datasets: [
    {
      label: 'Голы',
      data: [938, 1279],
      backgroundColor: ['#3B82F6', '#10B981'],
    },
  ],
};

const cr7PeleTrophiesChartData = {
  labels: ['Криштиану Роналду', 'Пеле'],
  datasets: [
    {
      data: [34, 26],
      backgroundColor: ['#3B82F6', '#10B981'],
    },
  ],
};

// Chart data for CR7 vs Mbappe
const cr7MbappeGoalsChartData = {
  labels: ['Криштиану Роналду', 'Килиан Мбаппе'],
  datasets: [
    {
      label: 'Голы',
      data: [938, 355],
      backgroundColor: ['#3B82F6', '#F59E0B'],
    },
  ],
};

const cr7MbappeTrophiesChartData = {
  labels: ['Криштиану Роналду', 'Килиан Мбаппе'],
  datasets: [
    {
      data: [34, 18],
      backgroundColor: ['#3B82F6', '#F59E0B'],
    },
  ],
};

const initialVotes = { Ronaldo: 0, Messi: 0, Pele: 0, Mbappe: 0 };

const FootballLegendsComparison: React.FC = () => {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (player: string) => {
    if (!hasVoted) {
      setVotes((prev) => ({ ...prev, [player]: prev[player] + 1 }));
      setHasVoted(true);
    }
  };

  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);

  const voteChartData = {
    labels: ['Роналду', 'Месси', 'Пеле', 'Мбаппе'],
    datasets: [
      {
        data: [votes.Ronaldo, votes.Messi, votes.Pele, votes.Mbappe],
        backgroundColor: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B'],
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Сравнение футбольных легенд</h1>

        {/* CR7 vs Messi */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Роналду vs Месси</h2>
          <p className="text-gray-600 mb-4">
            Легендарное соперничество между Криштиану Роналду и Лионелем Месси, двумя величайшими футболистами всех времён.
            Ниже представлено сравнение их карьерной статистики по состоянию на 21 июня 2025 года.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="chart-container">
              <Bar data={cr7MessiGoalsChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Сравнение голов' } } }} />
            </div>
            <div className="chart-container">
              <Pie data={cr7MessiTrophiesChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Сравнение трофеев' } } }} />
            </div>
          </div>
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Игрок</th>
                <th className="p-2">Матчи</th>
                <th className="p-2">Голы</th>
                <th className="p-2">Передачи</th>
                <th className="p-2">Трофеи</th>
                <th className="p-2">Золотой мяч</th>
              </tr>
            </thead>
            <tbody>
              {cr7MessiStats.map((player) => (
                <tr key={player.name}>
                  <td className="p-2">{player.name}</td>
                  <td className="p-2">{player.matches}</td>
                  <td className="p-2">{player.goals}</td>
                  <td className="p-2">{player.assists}</td>
                  <td className="p-2">{player.trophies}</td>
                  <td className="p-2">{player.ballonDOr}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">Источник данных: посты на X и Transfermarkt</p>
        </section>

        {/* CR7 vs Pele */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Роналду vs Пеле</h2>
          <p className="text-gray-600 mb-4">
            Сравнение Криштиану Роналду с Пеле, бразильской иконой, считающейся одним из лучших в истории. Статистика отражает их эпохи.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="chart-container">
              <Bar data={cr7PeleGoalsChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Сравнение голов' } } }} />
            </div>
            <div className="chart-container">
              <Pie data={cr7PeleTrophiesChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Сравнение трофеев' } } }} />
            </div>
          </div>
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Игрок</th>
                <th className="p-2">Матчи</th>
                <th className="p-2">Голы</th>
                <th className="p-2">Передачи</th>
                <th className="p-2">Трофеи</th>
                <th className="p-2">Золотой мяч</th>
              </tr>
            </thead>
            <tbody>
              {cr7PeleStats.map((player) => (
                <tr key={player.name}>
                  <td className="p-2">{player.name}</td>
                  <td className="p-2">{player.matches}</td>
                  <td className="p-2">{player.goals}</td>
                  <td className="p-2">{player.assists}</td>
                  <td className="p-2">{player.trophies}</td>
                  <td className="p-2">{player.ballonDOr}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">Источник данных: официальные записи и оценки</p>
        </section>

        {/* CR7 vs Mbappe */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Роналду vs Мбаппе</h2>
          <p className="text-gray-600 mb-4">
            Криштиану Роналду против Килиана Мбаппе, молодой звезды, готовой доминировать в будущем футбола. Поколенческое сравнение.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="chart-container">
              <Bar data={cr7MbappeGoalsChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Сравнение голов' } } }} />
            </div>
            <div className="chart-container">
              <Pie data={cr7MbappeTrophiesChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Сравнение трофеев' } } }} />
            </div>
          </div>
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Игрок</th>
                <th className="p-2">Матчи</th>
                <th className="p-2">Голы</th>
                <th className="p-2">Передачи</th>
                <th className="p-2">Трофеи</th>
                <th className="p-2">Золотой мяч</th>
              </tr>
            </thead>
            <tbody>
              {cr7MbappeStats.map((player) => (
                <tr key={player.name}>
                  <td className="p-2">{player.name}</td>
                  <td className="p-2">{player.matches}</td>
                  <td className="p-2">{player.goals}</td>
                  <td className="p-2">{player.assists}</td>
                  <td className="p-2">{player.trophies}</td>
                  <td className="p-2">{player.ballonDOr}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">Источник данных: посты на X и Transfermarkt</p>
        </section>

        {/* Voting Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Кто величайший?</h2>
          <p className="text-gray-600 mb-4">Проголосуйте за лучшую футбольную легенду! (Один голос на человека)</p>
          <div className="flex flex-wrap gap-4 mb-6">
            {['Ronaldo', 'Messi', 'Pele', 'Mbappe'].map((player) => (
              <button
                key={player}
                onClick={() => handleVote(player)}
                disabled={hasVoted}
                className={`vote-button px-4 py-2 rounded transition-transform ${hasVoted ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              >
                Голосовать за {player === 'Ronaldo' ? 'Роналду' : player === 'Messi' ? 'Месси' : player === 'Pele' ? 'Пеле' : 'Мбаппе'}
              </button>
            ))}
          </div>
          {totalVotes > 0 && (
            <div className="chart-container max-w-md mx-auto">
              <Pie data={voteChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Результаты голосования' } } }} />
              <p className="text-center text-gray-600 mt-2">Всего голосов: {totalVotes}</p>
            </div>
          )}
          {hasVoted && <p className="text-center text-gray-500 mt-2">Спасибо за ваш голос! Вы можете видеть текущие результаты.</p>}
        </section>
      </div>

      <style jsx>{`
        .chart-container {
          width: 100%;
          max-width: 600px;
          margin: 1rem auto;
        }
        .vote-button {
          transition: transform 0.2s;
        }
        .vote-button:hover:not(:disabled) {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default FootballLegendsComparison;