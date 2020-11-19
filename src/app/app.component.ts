import {Component} from '@angular/core';

import {LayoutDOM} from '@bokeh/models/layouts/layout_dom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bokeh-angular-app-to-recreate-bokeh-import-issue';

  constructor() {
    console.log('was able to load:', LayoutDOM);
  }
}
