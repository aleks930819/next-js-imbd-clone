import Results from './components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const movieGenre = genre === 'fetchTrending' ? 'movie/top_rated' : 'trending/all/week';
  const url = `https://api.themoviedb.org/3/${movieGenre}?api_key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 1000 } });
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const data = await res.json();

  const results = data.results;

  return <Results results={results} />;
}
