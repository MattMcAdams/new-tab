# New Tab Page

This is my personal new tab page extension for Firefox!

This will only work in Firefox developer edition (until I can figure out how to [sign](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#signing-your-addons) the stupid thing).

To use: clone the repo and open "about:debugging" in Firefox developer edition. Then select "load temporary addon" and navigate to manifest.json in this directory to load it. You'll need to repeat this process each time you restart firefox until I publish a proper signed release.

## Customization

You can customize the icons displayed in the top section by going to the customization page. Here you can add a new rule for each link you want to customize.

| Case | Color | Icon Set | Icon |
| ---- | ----- | -------- | ---- |
| This should match the bookmark's name | This selects the background color | This sets the icon set to use | This should be a font awesome icon class that matches the desired icon |

Please refer to [font awesome](https://fontawesome.com/search?m=free) for a list of all available icons and class names.

## Updating the addon

The extension uses the [bookmarks API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks), so new links can be added by adding bookmarks to the correct folders in bookmark manager. The top section pulls links from folders inside a folder called "NTP Links" located in the bookmarks menu section. The bottom section uses a folder called "Library" in the bookmarks menu, creates a section for each sub folder, and displays each bookmark in a section. If you do not have these folders, you will need to create them.

In the future, I may add some preferences to configure the bookmark locations along with some other defaults. For now, if you would like to use a different organization, or if you want to make updates to the reference section in the middle, you'll need to fork this repo and make the changes yourself.
