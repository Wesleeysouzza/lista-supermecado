import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Importante
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AddItemComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule // Necessário para usar formulários
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
