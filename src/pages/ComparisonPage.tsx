import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

interface PlayerStats {
  name: string;
  matches: number;
  goals: number;
  assists: number;
  trophies: number;
  ballonDOr: number;
}

const cr7MessiStats: PlayerStats[] = [
  {
    name: "Криштиану Роналду",
    matches: 1281,
    goals: 938,
    assists: 257,
    trophies: 34,
    ballonDOr: 5,
  },
  {
    name: "Лионель Месси",
    matches: 1107,
    goals: 866,
    assists: 386,
    trophies: 44,
    ballonDOr: 8,
  },
];

const cr7PeleStats: PlayerStats[] = [
  {
    name: "Криштиану Роналду",
    matches: 1281,
    goals: 938,
    assists: 257,
    trophies: 34,
    ballonDOr: 5,
  },
  {
    name: "Пеле",
    matches: 1363,
    goals: 1279,
    assists: 283,
    trophies: 26,
    ballonDOr: 0,
  },
];

const cr7MbappeStats: PlayerStats[] = [
  {
    name: "Криштиану Роналду",
    matches: 1281,
    goals: 938,
    assists: 257,
    trophies: 34,
    ballonDOr: 5,
  },
  {
    name: "Килиан Мбаппе",
    matches: 451,
    goals: 355,
    assists: 132,
    trophies: 18,
    ballonDOr: 0,
  },
];

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

  // Функция получения голосов с сервера
  const fetchVotes = () => {
    axios
      .get("http://localhost:3001/votes")
      .then((res) => setVotes(res.data))
      .catch((err) => {
        console.error("Ошибка загрузки голосов:", err);
      });
  };

  // Загрузка голосов сразу и запуск интервала опроса каждые 5 секунд
  useEffect(() => {
    fetchVotes();

    const intervalId = setInterval(fetchVotes, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Отправка голоса на сервер
  const handleVote = (player: string) => {
    axios
      .post("http://localhost:3001/vote", { player })
      .then(() => fetchVotes())
      .catch((err) => {
        console.error("Ошибка отправки голоса:", err);
      });
  };

  const totalVotes = Object.values(votes).reduce((sum, val) => sum + val, 0);

  const voteChartData = getChartData(
    ["Роналду", "Месси", "Пеле", "Мбаппе"],
    [votes.Ronaldo, votes.Messi, votes.Pele, votes.Mbappe],
    ["#3B82F6", "#EF4444", "#10B981", "#F59E0B"]
  );

  const charts = [
    {
      title: "Роналду vs Месси",
      stats: cr7MessiStats,
      goals: [938, 866],
      trophies: [938, 866],
      labels: ["Криштиану Роналду", "Лионель Месси"],
      colors: ["#3B82F6", "#EF4444"],
    },
    {
      title: "Роналду vs Пеле",
      stats: cr7PeleStats,
      goals: [938, 1279],
      trophies: [34, 26],
      labels: ["Криштиану Роналду", "Пеле"],
      colors: ["#3B82F6", "#10B981"],
    },
    {
      title: "Роналду vs Мбаппе",
      stats: cr7MbappeStats,
      goals: [938, 355],
      trophies: [34, 18],
      labels: ["Криштиану Роналду", "Килиан Мбаппе"],
      colors: ["#3B82F6", "#F59E0B"],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Сравнение футбольных легенд
        </h1>

        {charts.map(({ title, stats, goals, trophies, labels, colors }) => (
          <section className="mb-12" key={title}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="chart-container">
                <Bar
                  data={getChartData(labels, goals, colors)}
                  options={{
                    responsive: true,
                    plugins: {
                      title: { display: true, text: "Сравнение голов" },
                    },
                  }}
                />
              </div>
              <div className="chart-container">
                <Pie
                  data={getChartData(labels, trophies, colors)}
                  options={{
                    responsive: true,
                    plugins: {
                      title: { display: true, text: "Сравнение трофеев" },
                    },
                  }}
                />
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
                {stats.map((player) => (
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
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Кто величайший?
          </h2>
          <p className="text-gray-600 mb-4">
            Проголосуйте за лучшую футбольную легенду!
          </p>
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            {["Ronaldo", "Messi", "Pele", "Mbappe"].map((player) => (
              <button
                key={player}
                onClick={() => handleVote(player)}
                className="vote-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform min-w-[120px] flex-1 max-w-xs text-center"
              >
                Голосовать за{" "}
                {player === "Ronaldo"
                  ? "Роналду"
                  : player === "Messi"
                  ? "Месси"
                  : player === "Pele"
                  ? "Пеле"
                  : "Мбаппе"}
              </button>
            ))}
          </div>
          {totalVotes > 0 && (
            <div className="chart-container max-w-md mx-auto">
              <Pie
                data={voteChartData}
                options={{
                  responsive: true,
                  plugins: {
                    title: { display: true, text: "Результаты голосования" },
                  },
                }}
              />
              <p className="text-center text-gray-600 mt-2">
                Всего голосов: {totalVotes}
              </p>
            </div>
          )}
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
        .vote-button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default FootballLegendsComparison;
