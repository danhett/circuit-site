# CIRCUIT: LOUISE BOURGEOIS
A javascript based audio player and web interface for Circuit in Cambridge. Built on Phaser.js.

## SETUP + TEST
To set up, just do `npm install` in the directory and wait.

To run in dev/watch mode, do `npm start` which will host the game on localhost:3000 and also watch for changes on save.

## EMBED
The app should fit to the container it's placed in, and currently doesn't specify a div, instead working where it's embedded. To do a simple embed, just pull in `application.js` and stick it in the page flow as demonstrated in `index.html`.

Alternatively, you can specify a div on your page as the embed location. To do this, go to `index.js` and find this line:
```
super(1600, 800, Phaser.AUTO, '');
```

The string parameter is the embed DIV, a blank string means the app just flows into the page at the point of embedding. However this parameter also accepts a div ID from the HTML holding the application - this div can then be sized up and down with CSS and the display should scale accordingly.

## DEPLOY
To build a full production app, do `npm run production`. This will build the full content set into `/build` which can then be put online.

## CONTACT
Developed by Dan Hett (hellodanhett@gmail.com)