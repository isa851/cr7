import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const FootballLegendsComparison: React.FC = () => {
  const [votes, setVotes] = useState({ Ronaldo: 0, Messi: 0, Pele: 0, Mbappe: 0 });
  const [hasVoted, setHasVoted] = useState(false);

  // Fetch votes from backend on component mount
  useEffect(() => {
    const fetchVotes = async () => {
      try {
        // Replace with your API endpoint to get votes
        // const response = await fetch('https://your-api.com/votes');
        // const data = await response.json();
        // setVotes(data);
      } catch (error) {
        console.error('Error fetching votes:', error);
      }
    };
    fetchVotes();

    // Optional: Set up polling or WebSocket to update votes in real-time
    // const interval = setInterval(fetchVotes, 5000); // Poll every 5 seconds
    // return () => clearInterval(interval);
  }, []);

  // Handle vote submission and update backend
  const handleVote = async (player: string) => {
    if (!hasVoted) {
      try {
        // Send vote to backend
        // const response = await fetch('https://your-api.com/vote', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ player }),
        // });
        // const updatedVotes = await response.json();
        // setVotes(updatedVotes);

        // For now, simulate local update
        setVotes((prev) => ({ ...prev, [player]: prev[player] + 1 }));
        setHasVoted(true);
      } catch (error) {
        console.error('Error submitting vote:', error);
      }
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
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Кто величайший?</h1>
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
        {hasVoted && <p className="text-center text-gray-500 mt-2">Спасибо за ваш голос! Результаты обновляются для всех.</p>}
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