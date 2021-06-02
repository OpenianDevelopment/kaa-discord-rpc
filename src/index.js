const { app, BrowserWindow } = require("electron");
const { Client } = require("discord-rpc");

//Constructing RPC CLient
const client = new Client({ transport: "ipc" });
//Global Varibales for RPC
let name = "KickAssAnime",
	url = "https://www2.kickassanime.rs/",
	time = new Date().getTime();

//RPC Ready Event
client.on("ready", () => {
	//Interval to keep changing the status and button url
	setInterval(() => {
		client.setActivity({
			details: "Watching Anime",
			state: name,
			largeImageKey: "icon",
			largeImageText: "Kick Ass Anime",
			startTimestamp: time,
			buttons: [
				{
					label: "I want to watch it too",
					url: url,
				},
			],
		});
	}, 5000);
});
//Application Login
client.login({
	clientId: "",
	clientSecret: "",
});

//Creating a new Window
const createWindow = async () => {
	//Constructing a new window
	const mainWindow = new BrowserWindow({
		title: "KickAssAnime",
		useContentSize: true,
		darkTheme: true,
		simpleFullscreen: true,
		icon: __dirname + "/icon.ico",
	});

	//Interval for getting new Name and Link
	setInterval(() => {
		// setting a temp url constant for checking later
		const oldLink = url;
		//Getting current url and title data of the window
		url = mainWindow.getURL();
		name = mainWindow.getTitle();
		//checking if url changed or now for setting new timestamp
		if (oldLink !== url) {
			time = new Date().getTime();
		}
	}, 5000);

	//Load KAA URL
	mainWindow.loadURL("https://www2.kickassanime.rs/");

	//removing  Menu Bar
	mainWindow.removeMenu();
};

//create window on start
app.on("ready", createWindow);
