export interface MovieType {
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  title: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
}

export interface MovieDetailsType extends MovieType {
  runtime: number;
  genres: { id: number; name: string }[];
}
