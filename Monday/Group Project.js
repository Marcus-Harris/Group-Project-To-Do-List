function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById("myInput").value;
    li.appendChild(document.createTextNode(inputValue));
    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("list").appendChild(li);
      }
    
    // creating check boxes
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = 1;
    li.appendChild(checkbox);
    checkbox.addEventListener('change', function(e){
        if(this.checked){
        e.currentTarget.parentNode.style.textDecoration = "line-through";
    }
        else {e.currentTarget.parentNode.style.textDecoration ="none"};
});
    document.getElementById("myInput").value = "";
    // creating button to remove stuff
    var rmvButton = document.createElement("button");
    rmvButton.innerHTML = "Remove";
    li.appendChild(rmvButton);
    rmvButton.className = "removebutton";
    rmvButton.addEventListener('click', function(e) {
        e.currentTarget.parentNode.remove();
    });
}

// allows adding tasks to list by hitting enter.
document.getElementById("myInput").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      newElement();
    }
  });
