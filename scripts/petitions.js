const API_URL = "https://my-json-server.typicode.com/edteamlat/simplescrum/tasks"

axios.get(API_URL)
 .then( resp => fillTasks(resp.data))
 .catch( err => console.log(err))

function fillTasks(data) {
  data.map(d => createTask(d))
}

function createTask(d) {
  let newTask = document.createElement("article")
    newTask.classList.add("task")

    let taskTitle = document.createElement("h3")
    taskTitle.innerText = d.title

    let taskPerson = document.createElement("p")
    taskPerson.innerHTML = `<span>Responsable:</span> ${d.person}`
    
    let taskDeadline = document.createElement("p")
    taskDeadline.innerHTML = `<span>Plazo:</span> ${unixToDate(d.deadline)}`

    newTask.appendChild(taskTitle)
    newTask.appendChild(taskPerson)
    newTask.appendChild(taskDeadline)

    let columnToDo = document.getElementById("todoTasks")
    let columnInProgress = document.getElementById("inProgressTasks")
    let columnDone = document.getElementById("doneTasks")

    if (d.state === "to-do") {
      columnToDo.appendChild(newTask)
    }
    if (d.state === "in-progress") {
      columnInProgress.appendChild(newTask)
    }
    if (d.state === "done") {
      columnDone.appendChild(newTask)
    }
}