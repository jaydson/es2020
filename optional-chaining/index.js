import { data } from './data.js';

const genre = data?.users[0].favorite_artists[0].info?.genre ?? 'Sem gênero';

if (genre) {
  console.log(genre);
} else {
  console.log('genre not found!');
}