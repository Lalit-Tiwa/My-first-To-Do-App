var res = document.getElementById("res");
    var text = document.getElementById("text");

    function loadTasks() {
      res.innerHTML = localStorage.getItem("tasks") || "";
    }

    function saveTasks() {
      localStorage.setItem("tasks", res.innerHTML);
    }

    function store() {
      var input = text.value.trim();
      if (input === "") {
        alert("Please enter input");
        return;
      }

      var li = document.createElement("li");
      var span = document.createElement("span");
      span.innerText = input;

      span.addEventListener("click", function () {
        li.classList.toggle("completed");
        saveTasks();
      });

      const delBtn = document.createElement("button");
      delBtn.innerText = "Delete";
      delBtn.onclick = function () {
        li.remove();
        saveTasks();
      };

      li.appendChild(span);
      li.appendChild(delBtn);
      res.appendChild(li);

      saveTasks();
      text.value = "";
    }

    // Load tasks when page opens
    loadTasks();