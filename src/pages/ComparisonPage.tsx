import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

// Player stats interface
interface PlayerStats {
  name: string;
  matches: number;
  goals: number;
  assists: number;
  trophies: number;
  ballonDOr: number;
}

// Initial vote data (to be replaced with backend data)
const initialVotes = { Ronaldo: 150, Messi: 200, Pele: 100, Mbappe: 50 };

const FootballLegendsComparison: React.FC = () => {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);

  // Fetch votes from backend on component mount
  useEffect(() => {
    // Simulated fetch from backend (replace with real API call)
    const fetchVotes = async () => {
      // Example: const response = await fetch('https://your-api.com/votes');
      // const data = await response.json();
      // setVotes(data);
    };
    fetchVotes();
  }, []);

  // Handle vote submission and update backend
  const handleVote = (player: string) => {
    if (!hasVoted) {
      // Simulated vote update (replace with real API call)
      const newVotes = { ...votes, [player]: votes[player] + 1 };
      setVotes(newVotes);
      setHasVoted(true);

      // Send vote to backend (e.g., POST request)
      // Example: fetch('https://your-api.com/vote', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ player }),
      // });
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