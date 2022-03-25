# New Tab Page

This is my personal new tab page extension for Firefox! I wanted a way to have more control over the content on the new tab page, including creating sections of links and quick reference.

![screenshot](screenshot.png)

## Usage

This will only work in [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) (until I can figure out how to [sign](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#signing-your-addons) the stupid thing).

1. Clone the repo and open "about:debugging" in Firefox Developer Edition.
2. Then select "load temporary addon" and navigate to manifest.json in this directory to load it.
3. You'll need to repeat this process each time you restart firefox until I publish a proper signed release.

## Customization

You can customize the icons displayed in the top section by going to the customization page. Here you can add a new rule for each link you want to customize.

| Field    | Description                                                            | Default    |
| -------- | ---------------------------------------------------------------------- | ---------- |
| Case     | This should match the bookmark's name and is case sensitive            | N/A        |
| Color    | This selects the bookmark icon's background color                      | `slate`    |
| Icon Set | This selects the font awesome icon set to use                          | `fa-solid` |
| Icon     | This should be a font awesome icon class that matches the desired icon | `fa-link`  |

Please refer to [font awesome](https://fontawesome.com/search?m=free) for a list of all available icons and class names. This extension currently only supports free icons in the "solid" and "brands" icon sets.

## Updating the addon

The extension uses the [bookmarks API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks), so new links can be added by adding bookmarks to the correct folders in bookmark manager.

The bookmarks should be organized in this foldr structure using the Bookmark Manager:

```txt
All Bookmarks
└── Bookmarks Menu
    ├── NTP Links
    │   ├── Section
    │   └── Section
    └── Library
        ├── Section
        └── Section
```

The top area of the new tab page will create a new section for each folder inside the one named "NTP Links". Each section will display all bookamrks inside those child folders.

> **NOTE** that these sub folders are currently required. I plan to modify the script in the future to display links at the root of "NTP Links" at the very top so that the child folders are no longer necessary. This will help people who do not wish to have multiple sections in the top area.

The middle section is currently hard coded. I will be adding more to this area as needed for my own preference. I'm not sure how to open that area up for end user customization since I designed it to accept an arbitrary amount of content as needed. If you would like to modify this section, please make a fork of this project and customize it as desired. One day I may find a way to solve this in a reliable and secure way.

The bottom section will create sections for every child folder in the one named "Library" and can be used to list bookmarks under a given topic or group. For example, you may want to create a section for a reading list and another for inspiration. The titles for each section is copied directly from the name of the bookmark folder the section is generated from.

> **NOTE** that the "Library" folder requires sub folders to display links in that area. Also note that the folders "NTP Links" and "Library" are REQUIRED for the extension to work. I'll consider adding error handling in the future to make the extension a little more resiliant.
