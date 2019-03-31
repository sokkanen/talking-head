### Twitch-chat talking head -bot

#### How to

* Make sure you have latest version of npm and node.js installed on your computer
* Download .zip
* Front: run 'npm install' in ppfront -folder.
* Back: .env -file must be placed in ppback-folder root. Modify example with your credentials.
* To make things more user friendly, it is recommended to create a build from the front and place it in ppback-folder...
* To change the talking head: static image is named 'nottalking.png' and the animation 'talking.gif'. These can be replaced with your preferred images.

And why is there a button, which does nothing but print to the console? The button is the user input needed by Chrome, to activate text to speech.

