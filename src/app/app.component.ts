import { Component } from '@angular/core';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ShoppingListComponent],
})
export class AppComponent {}
