import Todo from './todo.js';
import Project from './todoProject.js';
import './styles.css';
import bellIcon from './Assets/bell-outline.png';
import sidebarIcon from './Assets/sidebar.png';
import addTaskIcon from './Assets/plus-circle-custom.png';


(function main(){

    const newTodo = Todo.new('Test task','Take the bins out for Mum & Dad','Normal',null,null)
    newTodo.addLabel('Chores')


    
    sidebar();

    //TODO refactor this whole function, need to seperate into a todo and just the header bar. initialRender() or something like that.
    renderTodoList();
    addEventListener();
    
    console.log("Test");
    
    function renderTodoList() {
        document.querySelector('.container').innerHTML = '';

        const container = document.querySelector('.container');

        const day = document.createElement('div');

        day.classList.add('day');
        day.classList.add('todo');

        const currentDay = document.createElement('p');
        currentDay.textContent = 'Today';

        day.appendChild(currentDay);

        container.appendChild(day);

        Todo.todoList.forEach((element, index) => {
            

            const newDiv = document.createElement('div');

            newDiv.classList.add('todo');

            newDiv.dataset.index = index;

            const todoTitle = document.createElement('p');
            const deleteButton = document.createElement('button');

            todoTitle.textContent = element.title;
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');

            newDiv.appendChild(todoTitle);
            newDiv.appendChild(deleteButton);
            container.appendChild(newDiv);

        });
    }

    function sidebar() {
        function iconToDiv(imgPath, divNameForicon) {
            const element = document.createElement('div');
            element.classList.add('iconDiv');
            const icon = new Image();
            icon.src = imgPath;
            icon.classList.add(divNameForicon);
            element.appendChild(icon);
            return element;
        }
    
        document.querySelector('.icons').appendChild(iconToDiv(bellIcon, 'notificationsIcon'));
        const toggleButton = iconToDiv(sidebarIcon, 'sidebarIcon');
        toggleButton.classList.add('toggleButton');
    
    
    
    
        document.querySelector('.icons').appendChild(toggleButton);
    
    
        const button = document.querySelector('.newTodo');
    
        const addIcon = new Image();
        addIcon.src = addTaskIcon;
        addIcon.classList.add('addTaskIcon');
        button.prepend(addIcon);
    }
    
    function addEventListener() {
        document.querySelector('.toggleButton').addEventListener('click', function () {
            document.querySelector('.sidebar').classList.toggle('hide');
            document.querySelector('.toggleButton').classList.toggle('show');

        });

        document.querySelector('.delete').addEventListener('click', function(e){
            //TODO delete todo
            const indexToDelete = e.target.parentElement.dataset.index;
           
            Todo.deleteTodo(indexToDelete);
            renderTodoList();

        })

        document.querySelector('.newTodo').addEventListener('click', function(e) {
            if (document.querySelector('.newTodoSection')) return;
            
            const container = document.querySelector('.container');
            
            const formContainer = document.createElement('div');

            formContainer.classList.add('formContainer');

            const form = document.createElement('form');
            form.classList.add('newTodoSection');
            form.innerHTML = `<div class="form-item">
            <input class="form-input" type="text" id="title" name="title" placeholder="Task name" required="">
          </div>
          <div class="form-item">
            <textarea class="form-input" id="description" name="description" placeholder="Description" required=""></textarea>
          </div>
          <div class="form-item item-3">
            <div class="left">
              <input class="form-input" type="date" id="dueDate" name="dueDate">
              <select class="form-select" id="priority" name="priority">
                <option value="" disabled hidden selected>Priority</option>
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
            </div>
            <div class="right">
              <button class="cancel-button" id="cancel">Cancel</button>
              <input type="submit" id="submit" value="Add Task">
            </div>
          </div>`;    


            formContainer.appendChild(form)
            container.appendChild(formContainer);

            document.querySelector('.cancel-button').addEventListener('click', function(e){
                e.preventDefault();
                formContainer.remove();
            })

        })

        

    }
})();


  