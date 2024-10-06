import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { Item } from '../../interfaces/item'; // Importar a interface Item

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule], // Adicionar CommonModule
})
export class AddItemComponent {
  novoItem: string = '';
  erro: string = '';

  @Output() adicionar = new EventEmitter<Item>();

  adicionarItem() {
    if (this.novoItem.trim() === '') {
      this.erro = 'O nome do item não pode ser vazio.';
      return;
    }
    this.erro = '';

    const item: Item = {
      id: new Date().getTime(),
      nome: this.novoItem,
      comprado: false,
    };

    this.adicionar.emit(item);
    this.novoItem = '';
  }
}
