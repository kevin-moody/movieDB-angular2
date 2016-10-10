export class Movies {
    constructor(public adult:boolean,
                public backdrop_path:string,
                public id:number,
                public original_title:string,
                public release_date:string,
                public poster_path:string,
                public popularity:number,
                public title:string,
                public vote_average:number,
                public vote_count:number) {
    }
}