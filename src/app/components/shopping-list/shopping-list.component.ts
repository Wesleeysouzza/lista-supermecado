import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { Item } from '../../interfaces/item'; // Importar a interface Item
import { AddItemComponent } from '../add-item/add-item.component';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  standalone: true,
  imports: [CommonModule, AddItemComponent, ItemComponent],
})
export class ShoppingListComponent implements OnInit {
  itens: Item[] = [];

  ngOnInit() {
    const itensSalvos = localStorage.getItem('itens');
    if (itensSalvos) {
      this.itens = JSON.parse(itensSalvos);
    }
  }

  get itensNaoComprados(): Item[] {
    return this.itens.filter((item) => !item.comprado);
  }

  get itensComprados(): Item[] {
    return this.itens.filter((item) => item.comprado);
  }

  salvarItens() {
    localStorage.setItem('itens', JSON.stringify(this.itens));
  }

  adicionarItem(item: Item) {
    this.itens.push(item);
    this.salvarItens();
  }

  atualizarItem(itemAtualizado: Item) {
    const index = this.itens.findIndex((item) => item.id === itemAtualizado.id);
    if (index > -1) {
      this.itens[index] = itemAtualizado;
      this.salvarItens();
    }
  }

  removerItem(id: number) {
    this.itens = this.itens.filter((item) => item.id !== id);
    this.salvarItens();
  }
}
