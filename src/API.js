import axios from 'axios';
axios.defaults.baseURL = 'https://cinema-api-test.y-media.io/v1';

const optionAxios = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

export class getAPI {
    getList() {
        return axios.get('/movies ').then(data => data);
    }
    searchForMovie(id, name, genres) {
        return axios.get(`/movies?movie_id=${ id }&name=${ name }&genres=${ genres }`)
            .then(data => data);
    }
    getMoviesSessions(id) {
        return axios.get(`/movieShows?movie_id=${ id }`).then(data => data);
    }
    сheckFreePlaces(id, daytime, showdate) {
        return axios.get(`/showPlaces?movie_id=${ id }&daytime=${ showdate }&showdate=${ daytime }`)
            .then(data => data);
    }
    toBook(obj) {
        return axios.post('/bookPlace', { ...obj }, optionAxios).then(data => data);
    }
}