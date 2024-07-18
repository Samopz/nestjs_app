import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  private todos: any[] = [];
  constructor() {
    this.todos = [];
  }

  create(task: CreateTodoDto) {
    const newTask = {
      ...task,
      id: Math.floor(Math.random() * 1000),
    };
    this.todos.push(newTask);
    return this.todos;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.findOne(id); // find todo by id and throw error if not found
    if (todo) {
      // if todo is found, update it
      const index = this.todos.indexOf(todo); // get index of todo
      this.todos[index] = { ...todo, ...updateTodoDto }; // update todo
      return this.todos[index]; // return updated todo
    }
  }

  remove(id: number) {
    const todo = this.findOne(id);
    if (todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      return this.todos;
    }
  }
}
