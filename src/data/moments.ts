// src/data/moments.ts
export type Moment = {
    id: string;
    title: string;
    date: string;
    place?: string;
    image: string;
    width: number;
    height: number;
    category: "trips" | "special" | "adventures" | "us";
    description?: string;
  };
  
  export const moments: Moment[] = [
    {
        id: '1',
        title: 'Jardin',
        date: '2026-09-19',
        place: 'Jardin, Colombia',
        image: '/images/2026-09-19-1.JPG',
        category: "adventures",
        width: 1524,
        height: 2032
    },
    {
        id: '2',
        title: 'Noche de cine',
        date: '2026-04-04',
        place: 'Medellin, Colombia',
        image: '/images/2026-04-04-1.JPG',
        category: "special",
        width: 1524,
        height: 2032
    },
    {
        id: '3',
        title: 'Reconciliación',
        date: '2026-10-01',
        place: 'Via Santa fe de antioquia',
        image: '/images/2026-10-01-1.JPG',
        category: "trips",
        width: 900,
        height: 1600
    }
  ];