let tasks = [
    "Morning Routine",
    "Go to work",
    "Complete High Prior works",
    "Have some break",
    "Go to home"
  ]
  
// Remove the first task from the list
  
let newTasks = [];
for(let i=0; i<tasks.length; i++){
  if(i==0) continue;
  newTasks.push(tasks[i]);
}
tasks = newTasks;

// Add two new high-priority tasks to the beginning of the list.
newTasks = [];
let highPriorTasks = [1,2];
for(let i=0; i<tasks.length; i++){
  for(let j=0; j<2; j++){
    if(i==highPriorTasks[j]){
      newTasks.push(tasks[i])
    }
  }
}
for(let i=0; i<tasks.length; i++){
  let flag = false;
  for(let j=0; j<2; j++){
    if(i==highPriorTasks[j]){
      flag = true;
    }
  }
  if(flag) continue;
  newTasks.push(tasks[i])
}
tasks = newTasks;

// Replace the last task in the list with a new task.
tasks[tasks.length-1]="Sleep on time";

for(let i=0; i<tasks.length; i++){
  console.log(tasks[i]);
}