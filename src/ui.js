import Todo from './todo.js';
import Project from './todoProject.js';
import './styles.css';
import bellIcon from './Assets/bell-outline.png';
import sidebarIcon from './Assets/sidebar.png';
import addTaskIcon from './Assets/plus-circle-custom.png';

(function main(){

    const newTodo = Todo.new('Take the bins out','Take the bins out for Mum & Dad','Normal',null,null)

    newTodo.addLabel('Chores')
    
    console.log(Todo.todoList)
    
    sidebar();
    addEventListener();


    Todo.todoList.forEach((element) =>{
        const content = document.querySelector('.content');

        const newDiv = document.createElement('div');

        newDiv.classList.add('todo');

        const todoTitle = document.createElement('p');

        todoTitle.textContent = element.title;

        newDiv.appendChild(todoTitle)
        content.appendChild(newDiv)

    })



    
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
    }
})();


  