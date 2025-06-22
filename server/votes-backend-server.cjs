// server/votes-backend-server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const votesFile = path.join(__dirname, 'votes.json');

app.use(cors());
app.use(express.json());

// Создание файла голосов, если его нет
const readVotes = () => {
  if (!fs.existsSync(votesFile)) {
    fs.writeFileSync(
      votesFile,
      JSON.stringify({ Ronaldo: 0, Messi: 0, Pele: 0, Mbappe: 0 }, null, 2)
    );
  }
  return JSON.parse(fs.readFileSync(votesFile));
};

const saveVotes = (votes) => {
  fs.writeFileSync(votesFile, JSON.stringify(votes, null, 2));
};

// Получить текущие голоса
app.get('/votes', (req, res) => {
  const votes = readVotes();
  res.json(votes);
});

// Отправить голос
app.post('/vote', (req, res) => {
  const { player } = req.body;

  if (!player || !['Ronaldo', 'Messi', 'Pele', 'Mbappe'].includes(player)) {
    return res.status(400).json({ error: 'Недопустимый игрок' });
  }

  const votes = readVotes();
  votes[player]++;
  saveVotes(votes);

  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});
