const inputBox = document.getElementById('input_box')
const listContainer = document.getElementById('list-container');

const btn = document.getElementById('ebtn')

btn.addEventListener("click" ,()=>{
    const input = inputBox.value.trim();
    const task  = document.createElement("li");

    if(input === ''){
      alert("Your task is Empty")
    }
    else{
      task.innerHTML = input;
      listContainer.appendChild(task)
      inputBox.value = '';
      const span = document.createElement('span');
      span.innerHTML = "\u00d7";
      task.appendChild(span)
      saveData();
    }  

})

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
      e.target.classList.toggle("checked");
      saveData();
    }
    else if(e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      saveData();
    }
},false)

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();