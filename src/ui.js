import Todo from './todo.js';
import Project from './todoProject.js';
import './styles.css';
import bellIcon from './Assets/bell-outline.png';
import sidebarIcon from './Assets/sidebar.png';
import addTaskIcon from './Assets/plus-circle-custom.png';


const newTodo = Todo.new('Take the bins out','Take the bins out for Mum & Dad','Normal',null,null)

newTodo.addLabel('Chores')

console.log(newTodo)

sidebar();

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

document.querySelector('.toggleButton').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('hide');
    document.querySelector('.toggleButton').classList.toggle('show');
 
  });
  