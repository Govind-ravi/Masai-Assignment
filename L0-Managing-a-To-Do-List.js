let tasks = [
    "Brush teeth",
    "Have Breakfast",
    "Go to work",
    "Finish work",
    "Back to home"
]

tasks.unshift("Wake up");
tasks.pop();

for(let task of tasks){
  console.log(task);
}