const {app, BrowserWindow} = require('electron');

var screen;

function setScreen() {
	var dimensions = {
		height: 800,
		width: 450
	};

	screen = new BrowserWindow(dimensions);

	screen.loadURL('http://youtube.com');
	screen.webContents.openDevTools();
	screen.on('closed', function () {
		screen = null;
	});
}

app.on('ready', setScreen);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	if (screen === null) {
		setScreen();
	}
});

console.log(screen);