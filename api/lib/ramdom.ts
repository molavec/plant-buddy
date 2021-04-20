import { plantDataFormat } from './plantDataFormat';

const getRamdomData = (): plantDataFormat => ({
  date: new Date(),
  temp: randomInt(18, 25),
  h: randomInt(40, 90),
  ph: randomInt(5, 8),
});

const randomInt = (min: number, max: number): number => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { getRamdomData };
