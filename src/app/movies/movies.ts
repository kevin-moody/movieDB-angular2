export class Movies {
    constructor(public page:number,
                public results:Array<any>,
                public total_pages:number,
                public total_results:number) {
    }
}