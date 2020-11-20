import {Component} from '@angular/core';

import {add_document_standalone} from '@bokeh/embed';
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
    console.log('was able to load:', add_document_standalone);
  }
}
