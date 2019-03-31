### Twitch-chat talking head -bot

#### Features

* A simple twitch-bot using socket.io to push command messages to talking head running on webclient.
* Made with Node.js and React
* One (1) built-in command (!paa <yourmessagetobeplayed>)

#### How to

* Make sure you have latest version of npm and node.js installed on your computer
* Download .zip
* Front: run 'npm install' in ppfront -folder.
* Back: Same as front. run 'npm install' in the folder.
* Back: .env -file must be placed in ppback-folder root. Modify example with your credentials.
* To make things more user friendly, it is recommended to create a build from the ppfront.
	* 1. run 'npm run build' in ppfront -folder
	* 2. move created /build -folder into the ppback-folder
	* 3. Start program by typing 'node server.js'
	* x. You can also just run ppback and ppfront separately in dev-mode (type: 'npm run start' in ppfront-folder and 'node server.js' in ppback-folder)

* To change the talking head: static image is named 'nottalking.png' and the animation 'talking.gif'. These can be replaced with your preferred images.

* Web-interface will run by default on http://localhost:3000 (Socket uses port 3003 by default)

#### Misc

If no sound is playing, the most obvious reason is that there is a problem with your browser's text-to-speech -plugin.  

And why is there a button, which does nothing but print to the console? The button is the user input needed by Chrome to activate text to speech.
