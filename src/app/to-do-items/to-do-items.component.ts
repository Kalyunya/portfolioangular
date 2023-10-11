import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-items';
import { ITEMS } from '../mock-todo-items';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {
  items = ITEMS;

  selectedItem: ToDoItem ;
  
  title = "ToDoItemsComponent";

  toDoItems: ToDoItem[] = [];

  constructor() {
    this.selectedItem = { id: 0, name: '', isComplete: false };
  }

  ngOnInit() {
    this.toDoItems = [
      { id: 1, name: "тут щось написано?", isComplete: false },
    ];
  }
  onSelect(item:ToDoItem):void{
    this.selectedItem = item;

  }
}
