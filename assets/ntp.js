var debug = true;

var resources = [
  {
    title: "Stock Imagery",
    items: [
      { title: "UnSplash", link: "https://unsplash.com/" },
      { title: "UnDraw", link: "https://undraw.co/" },
      { title: "Picsum", link: "https://picsum.photos/" },
      { title: "SVG Backgrounds", link: "https://bgjar.com/" },
    ],
  },
  {
    title: "Typography",
    items: [
      {title: "Good Fonts", link: "https://drive.google.com/drive/folders/1CuweD8Rpp21GBOpHsXtri3tEY7XIyLnz?usp=sharing"},
      { title: "Type Scale", link: "https://type-scale.com/" },
      { title: "Grid Lover", link: "https://www.gridlover.net/try" },
      { title: "Wordmark.it", link: "https://wordmark.it/" },
      { title: "Google Fonts", link: "https://fonts.google.com/" },
      { title: "Lorem Ipsom", link: "https://loremipsum.io/" },
    ],
  },
  {
    title: "Color",
    items: [
      {
        title: "Color Scale",
        link: "https://hihayk.github.io/scale/#4/6/50/80/-51/67/20/14/1D9A6C/29/154/108/white",
      },
      { title: "Color Converter", link: "https://colouris.surge.sh/" },
      { title: "Grabient", link: "https://www.grabient.com/" },
      { title: "Color x Color", link: "https://colorcolor.in/" },
      { title: "Color Palette Generator", link: "https://coolors.co/" },
      {
        title: "Leonardo Color",
        Link: "https://leonardocolor.io/?colorKeys=%236fa7ff&base=ffffff&ratios=3%2C4.5&mode=CAM02",
      },
      {
        title: "Tailwind Colors",
        link: "https://tailwindcss.com/docs/customizing-colors#color-palette-reference",
      },
      { title: "Color Codes", link: "https://htmlcolorcodes.com/" },
      { title: "Color Review", link: "https://color.review/" },
    ],
  },
  {
    title: "CSS",
    items: [
      { title: "Animista", link: "https://animista.net/" },
      { title: "Box Shadow", link: "https://box-shadow.dev/" },
      {
        title: "CSS Backgrounds",
        Link: "https://www.magicpattern.design/tools/css-backgrounds",
      },
      { title: "Pure CSS Strpies", link: "https://stripesgenerator.com/" },
      {
        title: "CSS Effects",
        link: "https://emilkowalski.github.io/css-effects-snippets/",
      },
      { title: "CSS Shape Dividers", link: "https://www.shapedivider.app/" },
      { title: "Keyframes App", link: "https://keyframes.app/animate/" },
      {
        title: "3D Transforms",
        link: "https://polypane.app/blog/beautiful-css-3-d-transform-examples/",
      },
      { title: "RTL Styling", link: "https://rtlstyling.com/" },
    ],
  },
  {
    title: "Icons",
    items: [
      { title: "IcoMoon", link: "https://icomoon.io/" },
      { title: "Hero Icons", link: "https://heroicons.dev/" },
      { title: "Radix Icons", link: "https://icons.modulz.app/" },
      { title: "Eva Icons", link: "https://akveo.github.io/eva-icons/#/" },
      { title: "Box Icons", link: "https://boxicons.com/" },
      {
        title: "HTML Arrows",
        Link: "https://www.toptal.com/designers/htmlarrows/",
      },
    ],
  },
  {
    title: "Readings",
    items: [
      { title: "Laws of UX", link: "https://lawsofux.com/" },
      { title: "Nielsen Norman Group", link: "https://www.nngroup.com/" },
      { title: "Degreeless Design", link: "https://www.degreeless.design/" },
      {
        title: "ARIA Examples",
        link: "https://www.w3.org/TR/wai-aria-practices-1.1/examples/",
      },
      { title: "A11y Resources", link: "http://a11yresources.webflow.io/" },
      { title: "Write the Docs", link: "https://www.writethedocs.org/" },
      {
        title: "How to Write a Git Commit",
        link: "https://chris.beams.io/posts/git-commit/",
      },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "MDN Web Docs", link: "https://developer.mozilla.org/en-US/" },
      { title: "Javascript Utilities", link: "https://1loc.dev/" },
      { title: "Can I Use?", link: "https://caniuse.com/" },
      { title: "Can I Include?", link: "https://caninclude.glitch.me/" },
      { title: "HTTP Statuses", link: "https://httpstatuses.com/" },
      {
        title: "Operator Lookup",
        link: "https://www.joshwcomeau.com/operator-lookup/",
      },
      { title: "Oh Shit Git", link: "https://ohshitgit.com/" },
      {
        title: "Useful Git Commands",
        link: "https://www.danielvonrhein.nl/shell/git-commandline/",
      },
      { title: "Humans.fyi", link: "https://humans.fyi/" },
    ],
  },
  {
    title: "Tools",
    items: [
      { title: "Support Ally", link: "https://supportally.com/" },
      { title: "Vis Bug", link: "https://visbug.web.app/" },
      { title: "Meta Tag Preview", link: "https://metatags.io/" },
      { title: "Shields", link: "https://shields.io/" },
      { title: "UNPKG", link: "https://unpkg.com/" },
      {
        title: "QR Code Generator",
        link: "https://www.the-qrcode-generator.com/",
      },
      { title: "Squoosh", link: "https://squoosh.app/" },
      { title: "More Tiny Helpers", link: "https://tiny-helpers.dev/" },
      {
        title: "VS Code Snippet Generator",
        link: "https://snippet-generator.app/",
      },
      { title: "Website Thumbnail Generator", link: "https://screen.guru/" },
    ],
  },
];

function renderResourceLists(data) {
  data.forEach((list) => {
    let parent = document.querySelector("#Resources .container");
    let container = document.createElement("div");
    let title = document.createElement("h3");
    let ul = document.createElement("ul");

    parent.appendChild(container);
    container.appendChild(title);
    container.appendChild(ul);

    title.innerHTML = list.title;

    list.items.forEach((item) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      let text = document.createTextNode(item.title);
      a.setAttribute("href", item.link);
      a.appendChild(text);
      li.appendChild(a);
      ul.appendChild(li);
    });
  });
}

//renderResourceLists(resources);



var scheme = "https://";

function searchRedirect() {
  let value = document.getElementById("search").value;

  if (value.startsWith("https://") | value.startsWith("http://")) {
    window.location.href = value;
  } else if (
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
    window.location.href = "https://duckduckgo.com/?q=" + value;
  }
}

document.getElementById("searchForm").addEventListener("submit", handleForm);
function handleForm(event) {
  event.preventDefault();
  searchRedirect();
}

// Start browser bookmark crawl
// Find root folder by keyword "Library"
browser.bookmarks.search("Library").then(function(bookmarkLibrary) {
  let library = bookmarkLibrary[0];
  if(debug){console.log(library.title, library.id);}

  // Find all folders inside the library
  browser.bookmarks.getChildren(library.id).then(function(folders) {
    //console.log("Folders:", folders);

    // Return an array of objects inside each folder
    folders.forEach((folder) => {
      browser.bookmarks.getChildren(folder.id).then(function(items) {
        if(debug){console.log(`%c${folder.title} ${folder.id}`, "font-weight: bold", items);}

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

        // List every bookmark item
        items.forEach((item) => {
          if(item.url) {
            if (debug) {console.log(item.title, item.url);}

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
