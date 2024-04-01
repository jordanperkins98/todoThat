import Todo from './todo.js'

const newTodo = Todo.new('Take the bins out','Take the bins out for Mum & Dad','Normal',null,null)

newTodo.addLabel('Chores')

console.log(newTodo)