import Todo from './todo.js';
import Project from './todoProject.js';
import './styles.css';


const newTodo = Todo.new('Take the bins out','Take the bins out for Mum & Dad','Normal',null,null)

newTodo.addLabel('Chores')

console.log(newTodo)