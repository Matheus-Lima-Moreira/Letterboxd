import 'vite/client';

declare global {
  type movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    tagline: string;
    budget: number;
    revenue: number;
    runtime: number;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
}