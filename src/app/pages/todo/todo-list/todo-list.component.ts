import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];
  todo: Todo = {
    id: 0,
    title: '',
    done: false,
  }
  constructor() { }

  ngOnInit(): void {
    // voltando a tornar o meu array de string em array de objetos
    let items: any = localStorage.getItem('todos')
    let todos = JSON.parse(items)
    if (!todos) {
      this.todos = [];
    } else {
      this.todos = todos;
    }
  }

  addTodo(title: string) {
    const id = this.todos.length + 1;
    this.todos.push({
      id: id,
      title: title,
      done: false,
    });
    // salvando no armazenamento local 
    // tornando meu array de objetos em array de string
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todo: any) {
    console.log('O elemento pai recebeu', todo);
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
