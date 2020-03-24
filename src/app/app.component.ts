import { Component } from '@angular/core';
import { Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  dataSource: any;

  constructor(service: Service) {
      this.dataSource = {
          store: service.generateData(1000)
      };
  }

  customizeColumns(columns) {
      columns[1].width = 100;
  }

  onContentReady(e) {
      e.component.option("loadPanel.enabled", false);
  }
}
