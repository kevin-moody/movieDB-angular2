import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { MovieService } from './movies.service';
import { Movies }           from './movies';
@Component({
    selector: 'my-movies',
    template: `
    <div class="main row">
        <div class="col-xs-12">
            <h1>Movie Database App</h1>
            <p><i>Fetches after each keystroke</i></p>
            <div class="col-md-offset-3 col-md-6 col-sm-12">
                <input type="text" class="form-control" #term (keyup)="search(term.value)" placeholder="Enter movie name:"/>
            </div>
        </div>
    </div>
    <div *ngFor="let item of items | async" class="entry col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="poster-container">
            <div class="poster-overlay">
                <div class="release-date">Release Date:<br>{{item.release_date}}</div>
                <div class="vote-average">Avg Rating:<br>{{item.vote_average}}</div>
            </div>
            <img src="http://image.tmdb.org/t/p/w154{{item.poster_path}}" class="poster"/>
        </div>
        <div class="title">{{item.title}}</div>
    </div>
  `,
    providers: [MovieService]
})
export class MovieComponent {
    items:Observable<Movies[]>;

    constructor(private MovieService:MovieService) {
    }

    search(term:string) {
        this.items = this.MovieService.getMovies(term);
    }
}
