// function saveOptions(e) {
//   e.preventDefault();
//   browser.storage.sync.set({
//     json: document.querySelector("#color").value,
//   });
// }


// save text entered into the text field as a json string in local storage
function saveOptions(e) {
  e.preventDefault();
  let data = document.querySelector("#color").value;
  localStorage.setItem("ntpPrefs", data);
}



function restoreOptions() {
  document.querySelector("#color").value = localStorage.getItem("ntpPrefs") || "";
}

// function restoreOptions() {
//   function setCurrentChoice(result) {
//     document.querySelector("#color").value = result.json || "";
//   }

//   function onError(error) {
//     console.log(`Error: ${error}`);
//   }

//   let getting = browser.storage.sync.get("json");
//   getting.then(setCurrentChoice, onError);
// }

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
