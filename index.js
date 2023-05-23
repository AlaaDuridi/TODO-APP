function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
  function TodoList() {
    this.tasks = [];
    this.addTask = function (description, dueDate, priority) {
      const newTask = new Task(description, dueDate, priority);
      this.tasks.push(newTask);
      console.log('Task added successfully!');
    };
    this.listAllTasks = function () {
      console.log('All Tasks:');
      this.printTasks(this.tasks);
    };
    this.listCompletedTasks = function () {
      const completedTasks = this.tasks.filter(task => task.completed);
      console.log('Completed Tasks:');
      this.printTasks(completedTasks);
    };
    this.markTaskAsDone = function (index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].completed = true;
        console.log('Task marked as completed!');
      } else {
        console.log('Invalid task index.');
      }
    };
    this.deleteTask = function (index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks.splice(index, 1);
        console.log('Task deleted successfully!');
      } else {
        console.log('Invalid task index.');
      }
    };
    this.sortTasksByDueDate = function () {
      const sortedTasks = this.tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      console.log('Tasks sorted by due date:');
      this.printTasks(sortedTasks);
    };
    this.sortTasksByPriority = function () {
      const sortedTasks = this.tasks.slice().sort((a, b) => a.priority - b.priority);
      console.log('Tasks sorted by priority:');
      this.printTasks(sortedTasks);
    };
    this.clearAllTasks = function () {
      this.tasks = [];
      console.log('All tasks cleared!');
    };
    this.printTasks = function (tasks) {
      tasks.forEach((task, index) => {
        const status = task.completed ? 'Completed' : 'Incomplete';
        console.log(`${index + 1}. ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority}, Status: ${status})`);
      });
    };
  }
const todoList = new TodoList();
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
  entry = () =>{
  console.log('***************************');
  console.log('Welcome to JS TODO-APP');
  console.log('***************************');
  console.log('Select an action:');
  console.log('1) Add a new task');
  console.log('2) List all tasks');
  console.log('3) List completed tasks');
  console.log('4) Mark the task as done');
  console.log('5) Delete a task');
  console.log('6) Sort tasks by the due date');
  console.log('7) Sort tasks by priority');
  console.log('8) Clear all tasks');
  console.log('9) Exit');
  console.log('***************************');
  rl.question("What's your choice? ", function (choice) {
    switch (choice) {
      case '1': // Add a new task
        rl.question('Enter task description: ', function (description) {
          rl.question('Enter due date (YYYY-MM-DD): ', function (dueDate) {
            rl.question('Enter priority level: ', function (priority) {
              todoList.addTask(description, dueDate, priority);
              entry() ;
           });
          });
        });
        break;
      case '2': // List all tasks
        todoList.listAllTasks();
        entry() ; 
        break;
      case '3': // List completed tasks
        todoList.listCompletedTasks();
        entry() ; 
        break;
      case '4': // Mark task as done
        rl.question('Enter task index to mark as done: ', function (index) {
          todoList.markTaskAsDone(index - 1); // Subtract 1 to match array index
          entry()
        });
        break;
      case '5': // Delete a task
        rl.question('Enter task index to delete: ', function (index) {
          todoList.deleteTask(index - 1); // Subtract 1 to match array index
          entry() ; 
        });
        break;
      case '6': // Sort tasks by due date
        todoList.sortTasksByDueDate();
        entry() ; 
        break;
      case '7': // Sort tasks by priority
        todoList.sortTasksByPriority();
        entry() ; 
        break;
      case '8': // Clear all tasks
        todoList.clearAllTasks();
        entry() ; 
        break;
        case '9': // Exit App
            console.log('Thank You!');
            rl.close() ;
            break ; 
      default:
        console.log('Invalid choice.');
        return entry() ;
    }
  });
};
entry() ;
