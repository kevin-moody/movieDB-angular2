import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Movies }           from './movies';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class MovieService {
    private moviesUrl = 'http://api.themoviedb.org/3/search/movie';
    private apiKey = '42b3e60b6636f50062f6d3579100d83f';
    constructor (private http: Http) {}
    getMovies (term: string): Observable<Movies[]> {
        return this.http.get(`${this.moviesUrl}?api_key=${this.apiKey}&query=${term}`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        let results = body.results.filter((item)=> item.poster_path !== null);
        return results || { };
    }
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
