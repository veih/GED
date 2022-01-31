let input = document.querySelector(".inputEmail");
let button = document.querySelector(".buttonLogin");
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector(".inputEmail").value === "") {
    button.disabled = true; 
  } else {
    button.disabled = false;
  }
}