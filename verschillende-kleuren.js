var container = document.querySelector("#container");

for (var i = 1; i <= 30; i++) {
	var buttonsContainer = document.createElement("button");
	buttonsContainer.innerText = i;
	container.appendChild(buttonsContainer);
	buttonsContainer.classList.add("buttonsContainer");
};

var colorChoice = ["red", "purple", "blue", "black"];
	colorIndex = 0;

document.querySelector("#container").addEventListener("click", function(e) {
	var selectedButton = e.target;
	selectedButton.style.backgroundColor = colorChoice[colorIndex];
	colorIndex = (colorIndex + 1) % colorChoice.length
	console.log(selectedButton);

	});	 



