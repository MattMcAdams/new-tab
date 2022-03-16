var libraryDebug = false;
var linksDebug = false;

var defaults = {
  "color": "gray",
  "iconSet": "fa-solid",
  "icon": "fa-link"
}

var iconRules = [
  {
    "case": "MyBama",
    "color": "red",
    "icon": "fa-building-columns"
  },
  {
    "case": "Box",
    "color": "blue",
    "icon": "fa-box"
  },
  {
    "case": "Outlook",
    "color": "indego",
    "icon": "fa-envelope"
  },
  {
    "case": "VoIP Mailbox",
    "color": "gray"
  },
  {
    "case": "Trello",
    "color": "light-blue"
  },
  {
    "case": "Slack",
    "color": "light-green",
    "iconSet": "fa-brands",
    "icon": "fa-slack"
  },
  {
    "case": "Analytics",
    "color": "yellow"
  },
  {
    "case": "BitBucket",
    "color": "cyan"
  },
  {
    "case": "Beanstalk",
    "color": "green"
  }
]


let test = JSON.parse(localStorage.getItem("ntpPrefs"));


function iconHandler (item) {
  item.color = defaults.color;
  item.iconSet = defaults.iconSet;
  item.icon = defaults.icon;

  test.forEach(rule => {
    if (rule.case == item.title) {
      if (rule.color) { item.color = rule.color }
      if (rule.iconSet) { item.iconSet = rule.iconSet }
      if (rule.icon) { item.icon = rule.icon }
    }
  });
}

// Handle primary links color and icons if bookmark name matches the test case
/*function iconHandler(link) {
  switch (link.title) {
    case "AMP":
      link.color = "teal";
      link.icon = "assets/images/shield.svg";
      break;
    case "DynoMapper":
      link.color = "deep-orange";
      link.icon = "assets/images/map.svg";
      break;
    case "BaseCamp":
      link.color = "yellow";
      link.icon = "assets/images/basecamp.svg";
      break;
    case "Payroll":
      link.color = "red";
      link.icon = "assets/images/link.svg";
      break;
    case "Whimsical":
      link.color = "indego";
      link.icon = "assets/images/whimsical.svg";
      break;
    case "PhotoShelter":
      link.color = "brown";
      link.icon = "assets/images/image.svg";
      break;
    case "browserStack":
      link.color = "gray";
      link.icon = "assets/images/link.svg";
      break;
    case "Website":
      link.color = "cyan";
      link.icon = "assets/images/website.svg";
      break;
    case "GitHub":
      link.color = "slate";
      link.icon = "assets/images/github.svg";
      break;
    case "Netlify":
      link.color = "teal";
      link.icon = "assets/images/netlify.svg";
      break;
    case "Hover":
      link.color = "light-green";
      link.icon = "assets/images/hover.svg";
      break;
    case "Stripe":
      link.color = "indego";
      link.icon = "assets/images/stripe.svg";
      break;
    case "Drive":
      link.color = "red";
      link.icon = "assets/images/drive.svg";
      break;
    case "Search Console":
      link.color = "orange";
      link.icon = "assets/images/google.svg";
      break;
    case "Plausible":
      link.color = "blue";
      link.icon = "assets/images/plausible.svg";
      break;
    case "Cloud Storage":
      link.color = "brown";
      link.icon = "assets/images/gcloud.svg";
      break;
    case "Leave Request":
      link.color = "orange";
      link.icon = "assets/images/airplane.svg";
      break;
    case "Resources Request":
      link.color = "brown";
      link.icon = "assets/images/clipboard.svg";
      break;
    case "Ghost":
      link.color = "blue";
      link.icon = "assets/images/ghost.svg";
      break;
    case "Wilson Playground":
      link.color = "cyan";
      link.icon = "assets/images/warning-circle.svg";
      break;
    case "GB Sandbox":
      link.color = "light-blue";
      link.icon = "assets/images/warning-triangle.svg";
      break;
    default:
      link.color = "gray";
      link.icon = "assets/images/link.svg";
  }
}*/

function faviconHandler(link) {
  let domain = new URL(link.url);
  //return link.icon = `https://www.google.com/s2/favicons?domain=${domain})&sz=128`;
  domain = domain.hostname //.replace("www.", "");
  return link.icon = `https://icons.duckduckgo.com/ip3/${domain}.ico`
  //return link.icon = `https://${domain}/favicon.ico`
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
// Set default URL scheme and default search engine
var scheme = "https://";
var searchEngine = "https://duckduckgo.com/?q=";

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
    window.location.href = scheme + value;
  } else {
    // Otherwise send the query to search engine
    window.location.href = searchEngine + value;
  }
}

// Stop default form submit behavior, use our form handler instead
document.getElementById("searchForm").addEventListener("submit", handleForm);
function handleForm(event) {
  event.preventDefault();
  searchRedirect();
}
