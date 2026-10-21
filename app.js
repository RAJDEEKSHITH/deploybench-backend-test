import express from 'express';

const app = express();
const port = Number(process.env.PORT || 3000);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (_req, res) => {
  res.status(200).send('DeployBench Express smoke test is running.');
});

app.listen(port, '0.0.0.0', () => {
  console.log("testing ec2 image deployment")
  console.log(`Express smoke test listening on 0.0.0.0:${port}`);
});
