# New Tab Page

This is my personal new tab page extension for Firefox!

## Updating the addon

Alright so Firefox is extremely difficult to deal with. Security and privacy are great, but holy shit is it difficult to make a simple addon.

Requirements:

- Will only work in Firefox developer edition (until I can figure out how to sign the stupid thing)
- Must install [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) `sudo npm install --global web-ext`
- Make any edits
- IMPORTANT: Update the version number in the manifest
- Run `web-ext build` from the root directory
- Manually remove the old version from firefox
- Add a new extension from file > select the .zip

Again, this is **extremely** annoying and makes adding a new link overly difficult. This is a piece of cake to do in chrome because it allows you to load an unpacked, unsigned extension. Which means there's no build, no manual updating, etc.

All of this to say, the only solid way forward is to figure out a way to load the lists of links by either 1.) accessing the browser's bookmarks, or 2.) implementing some kind of cloud database ala [Firebase](https://firebase.google.com/?authuser=1) and fetching the data every time, or 3.) making use of the browser local storage in a way that can be synced across browsers.

By forcing the addon to be packaged, versioned, (and [preferably signed](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#signing-your-addons)) they have elimated the practical use of flat file data because it effectively becomes read-only at the moment it is built.

## Update

I've managed to make updating the resources area significantly easier by leveraging the [bookmarks API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks). This will allow dynamic organization of resource links and folders through the bookmark management UI built into the browser, and bookmarks can now be added with the bookmark button in the addrss bar instead of them having to be manually added in the code. This also comes with better sync since the bookmarks are synced to your firefox account.

The primary links at the top are a more difficult problem. Ideally, they would be handled in the bookmarks API as well, but it is not easy to handle the image or color fields this way. One option would be to add a switch statement for each one to add the color and image based on bookmark title, and set a default if it does not match a link supported by the addon. This would enable basic functionality cross browser, allow for easy reorganization of links, removal of links, and temporary addition of new links. Then, to add the color and icon, an update would need to be made to the addon itself to support it.

This would be arguably easier than adding the link to the code itself, and would allow links to be quickly added as needed with a default icon until I have time to make one for it.

Regardless of path forward, I don't see any way the reference section can be loaded dynamically. The content and layout are far too custom for it to work. So some part of the extension will always require a version update and new package to update.
