// Add your javascript here
const button = document.getElementById("fileElem");
const dropImageBox = document.getElementById("drop-area");
const picContainer = document.getElementById("pic-container");
const dragEvents = ["dragenter", "dragover", "dragleave", "drop"];
const text = document.querySelector("#form-container p");

function eventListeners() {
	button.addEventListener("change", loadPic);

	//drag and drop events
	dragEvents.forEach((eventName) => {
		dropImageBox.addEventListener(eventName, preventDefaults);
		document.body.addEventListener(eventName, preventDefaults);
	});

	["dragenter", "dragover"].forEach((eventName) => {
		dropImageBox.addEventListener(eventName, highlight, false);
	});

	["dragleave", "drop"].forEach((eventName) => {
		dropImageBox.addEventListener(eventName, unhighlight, false);
	});

	dropImageBox.addEventListener("drop", dragDrop);
}

function preventDefaults(e) {
	e.preventDefault();
	e.stopPropagation();
}

function loadPic(event) {
	let image = document.createElement("img");

	text.classList.add("hide");
	image.src = URL.createObjectURL(event.target.files[0]);
	picContainer.appendChild(image);
}

function dragDrop(e) {
	const data = e.dataTransfer;
	const files = data.files;

	handleFiles(files);
}

function handleFiles(files) {
	files = [...files];
	files.forEach(previewFile);
}

function previewFile(file) {
	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onloadend = function () {
		let img = document.createElement("img");
		img.src = reader.result;
		picContainer.appendChild(img);
	};
	text.classList.add("hide");
}

function highlight(e) {
	dropImageBox.classList.add("highlight");
}

function unhighlight(e) {
	dropImageBox.classList.remove("active");
}

eventListeners();
