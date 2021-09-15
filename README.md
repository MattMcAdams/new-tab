# New Tab Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/265ffc23-9376-42ec-951f-a255b8679fb0/deploy-status)](https://app.netlify.com/sites/ntp-mattmcadams/deploys)

This is my personal new tab page, served from ntp.mattmcadams.com! This is supposed to be unindexed and private, so if you've found your way here, congrats on finding this little project. Please let me know how you found it by sending me an email at mattmcadams@outlook.com.

## Updating the addon

Alright so Firefox is extremely difficult to deal with. Security and privacy are great, but holy shit is it difficult to make a simple addon.

Requirements:

- Will only work in Firefox developer edition (until I can figure out how to sign the stupid thing)
- Must install web-ext `sudo npm install --global web-ext`
- Make any edits
- IMPORTANT: Update the version number in the manifest
- Run `web-ext build` from the root directory
- Manually remove the old version from firefox
- Add a new extension from file > select the .zip

Again, this is **extremely** annoying and makes adding a new link overly difficult. This is a piece of cake to do in chrome because it allows you to load an unpacked, unsigned extension. Which means there's no build, no manual updating, etc.

All of this to say, the only solid way forward is to figure out a way to load the lists of links by either 1.) accessing the browser's bookmarks, or 2.) implementing some kind of cloud database ala Firebase and fetching the data every time, or 3.) making use of the browser local storage in a way that can be synced across browsers.

By forcing the addon to be packaged, versioned, (and preferably signed) they have elimated the practical use of flat file data because it effectively becomes read-only at the moment it is built.
