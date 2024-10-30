document.querySelector("#form").addEventListener("submit", addTodo);

function ThrowError(e) {
	const list = document.querySelector("#list");

	const Alert = document.createElement("h1");
	Alert.innerText = "Please Add a Task";
	Alert.style.color = "red";
	Alert.style.fontSize = "3rem";

	list.appendChild(Alert);
}

function addTodo(e) {
	e.preventDefault();

	const input = document.querySelector("#input");

	if (input.value.length < 1) return ThrowError();

	const list = document.querySelector("#list");

	const listItem = document.createElement("li");
	const TodoText = document.createElement("p");
	const RemoveButton = document.createElement("button");
	RemoveButton.innerText = "Delete";

	RemoveButton.addEventListener("click", (e) => {
		listItem.remove();
	});

	TodoText.innerText = input.value;

	listItem.appendChild(TodoText);
	listItem.appendChild(RemoveButton);

	list.appendChild(listItem);

	input.value = "";
}
