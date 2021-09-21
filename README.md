# New Tab Page

This is my personal new tab page extension for Firefox!

This will only work in Firefox developer edition (until I can figure out how to [sign](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#signing-your-addons) the stupid thing)

## Updating the addon

The extension uses the [bookmarks API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks), so new links can be added by adding bookmarks to the correct folders in bookmark manager. An update will be required to add new icons and set colors for new links added in the main links section. An update is also required to change content in the Reference section.

Requirements:

- Must install [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) `sudo npm install --global web-ext`
- Make any edits
- Update the version number in the manifest
- Run `web-ext build` from the root directory
- Manually remove the old version from firefox
- Add a new extension from file > select the .zip

To add color and icon for new primary links, update the switch statement in `ntp.js`, adding the icon svg to the assets/images folder.
