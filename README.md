# RocketChat Zoom Linker

This an [App](https://www.rocket.chat/marketplace) for [RocketChat](https://www.rocket.chat) that
replaces Zoom meeting URLs in messages with nicely formatted direct links to the web and native app.

Instead of seeing something like this:

> Hey John, here's the meeting link https://us02web.zoom.us/j/12345678901?pwd=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef

This app will automatically reformat any message containing a link to a Zoom meeting into:

> Hey John, here's the meeting link [*Zoom Meeting 12345678901* - [Web](https://us02web.zoom.us/j/12345678901?pwd=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef) | [App](zoomus://zoom.us/join?action=join&confno=12345678901&pwd=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef)]
