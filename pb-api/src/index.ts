import express from 'express';
const app = express();
const port = 3000;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;