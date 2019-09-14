import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedPage: string = 'recipes';

  onNavigate(selectedPage: string) {
    this.loadedPage = selectedPage;
  }

}
