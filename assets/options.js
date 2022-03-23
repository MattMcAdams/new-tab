/** -----------------------------------------------------------------
  * SECTION Handle raw form input
------------------------------------------------------------------ */

// save text entered into the text field as a json string in local storage
function saveRaw(e) {
  e.preventDefault();
  let data = document.querySelector("#raw").value;
  localStorage.setItem("ntpPrefs", data);
}

function restoreRaw() {
  document.querySelector("#raw").value = localStorage.getItem("ntpPrefs") || "";
}

document.addEventListener("DOMContentLoaded", restoreRaw);
document.querySelector("#rawForm").addEventListener("submit", saveRaw);

/** -----------------------------------------------------------------
  * SECTION Build new row
------------------------------------------------------------------ */

function deleteRow(e) {
  e.preventDefault();
  this.parentNode.remove()
}

var colors = ["slate", "red", "pink", "purple", "deep-purple", "indego", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "orange", "deep-orange", "brown", "gray"]

function addRow (name = "", color = "slate", iconSet = "fa-solid", icon = "fa-link") {

  let form = document.querySelector("#liveRows");
  let fieldset = document.createElement("fieldset");


  let caseField = document.createElement("label");
  caseField.innerHTML = `Case <input type="text" name="case" value="${name}"></label>`;


  let colorField = document.createElement("label");
  colorField.innerHTML = "Color"
  let colorSelect = document.createElement("select");
  colorSelect.name = "color"
  colors.forEach(value => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    if (value == color) { option.selected = true }
    colorSelect.appendChild(option);
  });
  colorField.appendChild(colorSelect);


  let iconsetField = document.createElement("label");
  iconsetField.innerHTML = "Icon Set"
  let iconSelect = document.createElement("select");
  iconSelect.name = "iconset"
  let option1 = document.createElement("option");
  option1.innerHTML = "fa-solid";
  option1.value = "fa-solid";
  if (iconSet == "fa-solid") { option1.selected = true }
  let option2 = document.createElement("option");
  option2.innerHTML = "fa-brands";
  option2.value = "fa-brands";
  if (iconSet == "fa-brands") {option2.selected = true }
  iconSelect.appendChild(option1);
  iconSelect.appendChild(option2);
  iconsetField.appendChild(iconSelect);


  let iconField = document.createElement("label");
  iconField.innerHTML = `Icon <input type="text" name="icon" value="${icon}" placeholder="fa-icon">`;

  fieldset.appendChild(caseField);
  fieldset.appendChild(colorField);
  fieldset.appendChild(iconsetField);
  fieldset.appendChild(iconField);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  deleteBtn.addEventListener("click", deleteRow)
  fieldset.appendChild(deleteBtn);
  form.appendChild(fieldset);
}

function addRowHandler(e) {
  e.preventDefault();
  addRow();
}
document.querySelector("#addRow").addEventListener("click", addRowHandler);

/** -----------------------------------------------------------------
  * SECTION Build table from prefs
------------------------------------------------------------------ */

function buildForm() {
  let data = JSON.parse(localStorage.getItem("ntpPrefs"));

  data.forEach(rule => {
    addRow(rule.case, rule.color, rule.iconSet, rule.icon);
  })
}

document.addEventListener("DOMContentLoaded", buildForm);

/** -----------------------------------------------------------------
  * SECTION Save Form contents
------------------------------------------------------------------ */

function saveOpts (e) {
  e.preventDefault();
  let data = []
  let sets = document.querySelectorAll("fieldset");
  sets.forEach(set => {
    let name = set.querySelector("input[name='case']");
    let color = set.querySelector("select[name='color']");
    let iconset = set.querySelector("select[name='iconset']");
    let icon = set.querySelector("input[name='icon']");
    if (name.value) {
      item = {};
      item.case = name.value;
      item.color = color.value;
      item.iconSet = iconset.value;
      item.icon = icon.value;
      data.push(item);
    }
  });
  console.log(data);
  localStorage.setItem("ntpPrefs", JSON.stringify(data));
}

document.querySelector("#optForm").addEventListener("submit", saveOpts);
