document.querySelectorAll(".todo-list li").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("completed");
    });
  });
  