// Validate Contact Form
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
  
    if (!name || !email.includes('@') || !email.includes('.')) {
      alert('❌ Please fill out all fields with a valid email.');
      return false;
    }
  
    alert('✅ Form submitted successfully!');
    return true;
  }
  
  // Add Task to To-Do List
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
  
    if (taskValue === '') {
      alert('⚠️ Enter a valid task!');
      return;
    }
  
    const task = document.createElement('div');
    task.className = 'todo-item';
    task.innerText = taskValue;
    task.onclick = () => task.remove();
  
    document.getElementById('taskList').appendChild(task);
    taskInput.value = '';
  }
  