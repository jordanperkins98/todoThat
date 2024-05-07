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

    
    console.log("Test");

    function createElementWithClass(tag, className) {
        const element = document.createElement(tag);
        if (className) {
            element.classList.add(className);
        }
        return element;
    }

    function createTodoElement(element, index) {
        const newDiv = createElementWithClass('div', 'todo');
        newDiv.dataset.index = index;

        const todoTitle = createElementWithClass('p');
        todoTitle.textContent = element.title;

        const priority = createElementWithClass('p');
        priority.textContent = `Priority - ${element.priority}`;

        const deleteButton = createElementWithClass('button', 'delete');
        deleteButton.textContent = 'Delete';

        const leftDiv = createElementWithClass('div');
        leftDiv.appendChild(todoTitle);

        const rightDiv = createElementWithClass('div', 'todo-rightDiv');
        rightDiv.appendChild(priority);
        rightDiv.appendChild(deleteButton);

        newDiv.appendChild(leftDiv);
        newDiv.appendChild(rightDiv);

        return newDiv;
    }

    function createTodoHeader(title) {
        const TodoHeader = createElementWithClass('div', 'TodoHeader');
        const TodoHeaderTitle = createElementWithClass('p');
        TodoHeaderTitle.textContent = title;
        TodoHeader.appendChild(TodoHeaderTitle);
        return TodoHeader;
    }

    function createTodoContainer(className) {
        const todoContainer = createElementWithClass('div', 'todoContainer');
        todoContainer.classList.add(className);
        return todoContainer;
    }

    function renderTodoList() {

        document.querySelector('.container').innerHTML = '';

        const container = document.querySelector('.container');

        let TodoHeader = createTodoHeader('Today');
        container.appendChild(TodoHeader);

        const todoContainer = createElementWithClass('div', 'todoContainer');
        container.appendChild(todoContainer);
        let notTodayTodos = [];

        Todo.todoList.forEach((element, index) => {
            if (element.dueDate !== new Date().toLocaleDateString('en-gb') && element.dueDate !== null) {
                notTodayTodos.push(element);
                return;
            }
            const todoElement = createTodoElement(element, index);
            todoContainer.appendChild(todoElement);
        });

        TodoHeader = createTodoHeader('Back log');
        container.appendChild(TodoHeader);

        const todoContainerNotToday = createTodoContainer('notToday');
        container.appendChild(todoContainerNotToday);

        notTodayTodos.forEach((element, index) => {
            const todoElement = createTodoElement(element, index);
            todoContainerNotToday.appendChild(todoElement);
        })

        addEventListener();
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
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
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

            document.querySelector('.newTodoSection').addEventListener('submit', function(e){
                e.preventDefault();
                const title = document.querySelector('#title').value;
                const description = document.querySelector('#description').value;
                let dueDate = document.querySelector('#dueDate').value;
                dueDate = new Date(dueDate).toLocaleDateString('en-gb');
                const priority = document.querySelector('#priority').value;
                console.log('Attempting to create todo...');
                const newTodo = Todo.new(title, description, priority, dueDate,null);
                renderTodoList();

            })
        })
    }
})();


  