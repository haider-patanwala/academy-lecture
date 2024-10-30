async function addTodo(event) {
	event.preventDefault();

	const todoInput = document.querySelector("#input");

	if (!todoInput.value) return alert("Please enter a task");

	const list = document.querySelector("#list");

	const li = document.createElement("li");

	const p = document.createElement("p");
	p.innerText = todoInput.value;
	li.appendChild(p);

	const button = document.createElement("button");
	button.innerText = "Delete";
	button.addEventListener("click", () => {
		li.remove();
	});
	li.appendChild(button);

	list.appendChild(li);

	todoInput.value = "";
}

document.querySelector("#form").addEventListener("submit", addTodo);
