import { IActor } from './actor';

export class IMovie {
  id: string;
  title: string;
  year: number;
  rating: string;
  synopsis: string;
  duration: number;
  actors: IActor[];
  genres: string[];
  image: string;
}
