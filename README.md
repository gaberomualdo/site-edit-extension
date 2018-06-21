# Site Edit

## Description

Edit website page text with the click of a button!

Site Edit is a simple Chrome extension that allows a user to enable webpage editing, so that they can edit any text on a webpage.

## Download

Unfortunately, Site Edit is not available on the Chrome Web Store, and the only way to download it is by downloading this repository, and loading it in the Chrome extensions developer mode.

## How it Works

The main concept behind Site Edit is done within two lines of code:

```
document.body.contentEditable = 'true';
document.designMode = 'on';
```

This allows all HTML elements within the document body to be treated similar to (text) input type elements, in which any elements text can be edited by the users.

## Credits

Site Edit was developed by [xtrp](https://github.com/xtrp).