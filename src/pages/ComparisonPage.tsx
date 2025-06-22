import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface PlayerStats {
  name: string;
  matches: number;
  goals: number;
  assists: number;
  trophies: number;
  ballonDOr: number;
}

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

const voteOptions = ['Ronaldo', 'Messi', 'Pele', 'Mbappe'];

const getChartData = (labels: string[], data: number[], colors: string[]) => ({
  labels,
  datasets: [
    {
      data,
      backgroundColor: colors,
    },
  ],
});

const FootballLegendsComparison: React.FC = () => {
  const [votes, setVotes] = useState<{ [key: string]: number }>({
    Ronaldo: 0,
    Messi: 0,
    Pele: 0,
    Mbappe: 0,
  });

  useEffect(() => {
    axios.get('http://localhost:3001/').then((res) => setVotes(res.data));
  }, []);

  const handleVote = (player: string) => {
    axios.post('http://localhost:3001/', { player }).then(() => {
      axios.get('http://localhost:3001/').then((res) => setVotes(res.data));
    });
  };

  const totalVotes = Object.values(votes).reduce((sum, val) => sum + val, 0);

  const voteChartData = getChartData(
    ['Роналду', 'Месси', 'Пеле', 'Мбаппе'],
    [votes.Ronaldo, votes.Messi, votes.Pele, votes.Mbappe],
    ['#3B82F6', '#EF4444', '#10B981', '#F59E0B']
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Сравнение футбольных легенд</h1>

        {/* Раздел голосования */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Кто величайший?</h2>
          <p className="text-gray-600 mb-4">Проголосуйте за лучшую футбольную легенду!</p>
          <div className="flex flex-wrap gap-4 mb-6">
            {voteOptions.map((player) => (
              <button
                key={player}
                onClick={() => handleVote(player)}
                className="vote-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform"
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
        </section>

        {/* Здесь можешь вставить блоки сравнения (CR7 vs Messi, Pele, Mbappe) как у тебя уже были */}

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
        .vote-button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default FootballLegendsComparison;
