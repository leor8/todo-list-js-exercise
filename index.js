// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  return task = {
    title: title,
    complete: false,
    description: description,
    completeTask: function() {
      this.complete = true;
    },
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const tasks =  [task1, task2];

task1.logTaskState();
task1.completeTask();
task1.logTaskState();

console.log(tasks);
