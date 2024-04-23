import Todo from './todo.js';
import Project from './todoProject.js';
import './styles.css';
import bellIcon from './Assets/bell-outline.png';
import sidebarIcon from './Assets/sidebar.png';
import addTaskIcon from './Assets/plus-circle-custom.png';

(function main(){

    const newTodo = Todo.new('Take the bins out','Take the bins out for Mum & Dad','Normal',null,null)
    newTodo.addLabel('Chores')
    
    sidebar();

    //TODO refactor this whole function, need to seperate into a todo and just the header bar. initialRender() or something like that.
    renderTodoList();
    addEventListener();
    
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
        const toggleButton = iconToDiv(sidebarIcon, 'siderbarIcon');
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
            const formContainer = document.querySelector('.form-container');
            formContainer.classList.toggle('hidden');
        })
    }
})();


  