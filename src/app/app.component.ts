import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  whatever = true;
  private _items = [
    {
      url: 'https://angular.io/tutorial',
      title: 'Tour of Heroes'
    },
    {
      url: 'https://github.com/angular/angular-cli/wiki',
      title: 'CLI Documentation'
    },
    {
      url: 'https://blog.angular.io/',
      title: 'Angular blog'
    }
  ];
  public items = [];

  constructor() {
    this.items = this._items.slice();
  }

  public toggleWhatever(event: Event) {
    console.log(event);
    console.log(event.target);
    this.whatever = !this.whatever;
  }
  public removeItem(event: Event) {
    this.items.pop();
  }
  public restoreItems() {
    this.items = this._items.slice();
  }
}
