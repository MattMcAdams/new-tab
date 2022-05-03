var libraryDebug = false;
var linksDebug = false;

var defaults = {
  color: "gray",
  iconSet: "fa-solid",
  icon: "fa-link",
  scheme: "https://",
  searchEngine: "https://duckduckgo.com/?q="
}


const PREFS = JSON.parse(localStorage.getItem("ntpPrefs"));


function iconHandler (item) {
  item.color = defaults.color;
  item.iconSet = defaults.iconSet;
  item.icon = defaults.icon;

  if (PREFS) {
    PREFS.forEach(rule => {
      if (rule.case == item.title) {
        if (rule.color) { item.color = rule.color }
        if (rule.iconSet) { item.iconSet = rule.iconSet }
        if (rule.icon) { item.icon = rule.icon }
      }
    });
  }
}



// Start NTP bookmark crawl
browser.bookmarks.search("NTP Links").then(function (bookmarkLibrary) {
  let library = bookmarkLibrary[0];
  if (linksDebug) { console.log(library.title, library.id); }

  // Find all folders inside the library
  browser.bookmarks.getChildren(library.id).then(function (folders) {

    // Generate list HTML
    let parent = document.getElementById("NTP");

    // Return an array of objects inside each folder
    folders.forEach((folder) => {

      let ul = document.createElement("ul");
      ul.classList = "ntp-links container";
      parent.appendChild(ul);

      browser.bookmarks.getChildren(folder.id).then(function (items) {
        if (linksDebug) { console.log(`%c${folder.title} ${folder.id}`, "font-weight: bold", items); }

        // List every bookmark item
        items.forEach((item) => {
          if (item.url) {
            if(linksDebug){console.log(item.title, item.url);}

            // Set icon and color
            iconHandler(item);

            // Generate HTML For Link
            let li = document.createElement("li");
            li.style = `--color: var(--${item.color})`;

            let a = document.createElement("a");
            a.setAttribute("href", item.url);

            let p = document.createElement("p");
            let text = document.createTextNode(item.title);
            p.appendChild(text);

            let icon = document.createElement("span");
            icon.classList.add(item.icon);
            if (item.iconSet) {
              icon.classList.add(item.iconSet);
            } else {
              icon.classList.add("fa-solid");
            }

            a.appendChild(icon);
            a.appendChild(p);
            li.appendChild(a);
            ul.appendChild(li);
          }
        });
      });
    });
  });
});



// Start browser bookmark crawl
// Find root folder by keyword "Library"
browser.bookmarks.search("Library").then(function(bookmarkLibrary) {
  let library = bookmarkLibrary[0];
  if(libraryDebug){console.log(library.title, library.id);}

  // Find all folders inside the library
  browser.bookmarks.getChildren(library.id).then(function(folders) {

    // Return an array of objects inside each folder
    folders.forEach((folder) => {
      if(libraryDebug){console.log(`%c${folder.title} ${folder.id}`, "font-weight: bold", items);}

      // Generate list HTML
      let parent = document.querySelector("#Resources .container");
      let container = document.createElement("div");
      let title = document.createElement("h3");
      let ul = document.createElement("ul");
      let titleText = document.createTextNode(folder.title);
      parent.appendChild(container);
      container.appendChild(title);
      container.appendChild(ul);
      title.appendChild(titleText);

      browser.bookmarks.getChildren(folder.id).then(function(items) {
        // List every bookmark item
        items.forEach((item) => {
          if(item.url) {
            if (libraryDebug) {console.log(item.title, item.url);}

            let li = document.createElement("li");
            let a = document.createElement("a");
            let text = document.createTextNode(item.title);
            a.setAttribute("href", item.url);
            a.appendChild(text);
            li.appendChild(a);
            ul.appendChild(li);
          }
        })
      })
    })
  });
});



// Handle Search Field

function searchRedirect() {
  let value = document.getElementById("search").value;

  // Pass URL through if it starts with a scheme
  if (value.startsWith("https://") | value.startsWith("http://")) {
    window.location.href = value;
  } else if (
    // Add a scheme if we detect it is supposed to be a URL
    value.includes(".com") |
    value.includes(".org") |
    value.includes(".edu") |
    value.includes(".net") |
    value.includes(".gov") |
    value.includes(".io") |
    value.includes(".dev") |
    value.includes(".us")
  ) {
    window.location.href = defaults.scheme + value;
  } else {
    // Otherwise send the query to search engine
    window.location.href = defaults.searchEngine + value;
  }
}

// Stop default form submit behavior, use our form handler instead
document.getElementById("searchForm").addEventListener("submit", handleForm);
function handleForm(event) {
  event.preventDefault();
  searchRedirect();
}
