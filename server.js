import express, { json } from 'express';

const app = express();
const PORT = 3003;

app.use(json());

// Mock user data
const users = {
  1: { id: '1', name: 'John Doe', age: 10 },
  2: { id: '2', name: 'Jane Smith' },
};

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users[userId];

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: `User with ID ${userId} not found` });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
