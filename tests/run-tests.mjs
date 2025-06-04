import assert from 'node:assert/strict';
import Todo from '../src/todo.js';
import Project from '../src/todoProject.js';

// Test creating a todo
assert.equal(Todo.todoList.length, 0);
const todo = Todo.new('Test','Desc','Normal','2024-01-01',[]);
assert.equal(Todo.todoList.length, 1);
assert.equal(todo.title, 'Test');
Todo.deleteTodo(0);
assert.equal(Todo.todoList.length, 0);

// Test creating a project
assert.equal(Project.projectList.length, 0);
const project = Project.new('Project','Description','2024-01-01',[]);
assert.equal(Project.projectList.length, 1);
assert.equal(project.name, 'Project');

console.log('All tests passed');
