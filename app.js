window.addEventListener('load', () => {
    const form = document.querySelector('.form');
    const input = document.querySelector('.input');
    const addTask = document.querySelector('.addTask');
    let today = document.querySelector("#num-today");
    const tasks = document.querySelector('.tasks');
    let updateDeleted = document.querySelector('#num-scheduled');
    let all = document.querySelector('#num-all');
    let counter = 0;
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.minutes');
    let arrTask = JSON.parse(localStorage.getItem('task')) || [];
    // FOR EACH ELEMENT

    console.log({arrTask})

    arrTask.forEach((el, i) => {
        addTaskToDOM(el, i);
    });

    //the function after the button to add is clicked 
    let todayDate = document.querySelector('.calender');


    form.addEventListener('submit', (e) => {
       
        
        //the getting the inputvalue from the  value     
        const inputValue = input.value;
        if (!inputValue) {
            alert('please enter something');
            return;
        }
        //creating the the div 
        //  let name = "justin is the king ";

        arrTask.push(inputValue);
        console.table(arrTask, inputValue)
        localStorage.setItem("task", JSON.stringify(arrTask));
        addTaskToDOM(inputValue, arrTask.length);


    });

    /**
     * A function to count time using setTimeout
     * @param {number} e 
     */
  

    /**
     * A function to add one task to the DOM
     * @param {string} task 
     * @param {number} index 
     */
    function addTaskToDOM(taskname, index) {
        // 1. Receive task
        // 2. Add task to list
        // 
        console.log("Received task: ", taskname)
        var task = document.createElement('div');
        task.classList.add('task');
        task.setAttribute('data-index', index.toString())
        const content = document.createElement('div');
        content.classList.add('content');
        task.appendChild(content);
        tasks.appendChild(task);
        //creating the value input
        inputTask = document.createElement('input');
        inputTask.classList.add('textOnList');
        inputTask.type = 'text';
        inputTask.value = taskname;
        inputTask.setAttribute('readonly', 'readonly');

        content.appendChild(inputTask);





        //actions delete and ediyt button

        const actions = document.createElement('div')
        actions.classList.add('actions');
        const deleteTask = document.createElement('button');
        deleteTask.classList.add('deleteTask');
        deleteTask.innerText = 'Delete';
        const editTask = document.createElement('button');
        editTask.classList.add('editTask');
        editTask.innerText = 'Edit';
        actions.appendChild(deleteTask)
        actions.appendChild(editTask);
        content.appendChild(actions);


        // pushing tasks into array






        // deleting a task and updating the deleted dash
        deleteTask.addEventListener('click', (e) => {
            const parent = e.target.parentElement.parentElement.parentElement;
            const curElIndex = Number(parent.getAttribute('data-index'));
            // console.log("before: arrTask =", arrTask);
            arrTask = [...arrTask.slice(0, curElIndex), ...arrTask.slice(curElIndex+1)]
            localStorage.setItem("task", JSON.stringify(arrTask));
            tasks.removeChild(task) 
            all.innerText = --counter;
            today.innerText = all.innerText;
            updateDeleted.innerText++;


        });
        editTask.addEventListener('click', (e) => {
            if (editTask.innerText == 'Edit') {
                editTask.innerText = 'Save';
                inputTask.removeAttribute('readonly');
                // inputTask.focus();
                inputTask.style.color = 'pink';
                
                
            }

            else {
                editTask.innerText = 'Edit';
                inputTask.setAttribute('readonly', 'readonly');
                const parent = e.target.parentElement.parentElement.parentElement;
                const curElIndex = Number(parent.getAttribute('data-index'));
                // console.log(curElIndex);
                arrTask[curElIndex] = inputTask.value;
                localStorage.setItem("task", JSON.stringify(arrTask));
            }
        })
        //incremmenting the all numbers

        all.innerText = ++counter;


        today.innerText = all.innerText;
    }
});
// exitReminder.addEventListener('click', () => {
//     reminderPopup.style.display = 'none';
// })