// src/app/components/item/item.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'], // Se tiver estilos
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() atualizar = new EventEmitter<Item>();
  @Output() remover = new EventEmitter<number>();

  editando: boolean = false;

  marcarComprado() {
    this.item.comprado = !this.item.comprado;
    this.atualizar.emit(this.item);
  }

  editarItem() {
    this.editando = true;
  }

  salvarEdicao() {
    this.editando = false;
    this.atualizar.emit(this.item);
  }

  removerItem() {
    this.remover.emit(this.item.id);
  }
}
