import { Component }         from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
    <my-movies></my-movies>
  `
})
export class AppComponent { }