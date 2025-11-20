const bodyElement = document.getElementById("body-element");
const checkBox = document.getElementById("checkbox-btn");

checkBox.addEventListener("click", (e) => {
  console.log("help");
  bodyElement.classList.toggle("darkmode");
});
