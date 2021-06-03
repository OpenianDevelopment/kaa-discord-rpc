const { app, BrowserWindow, session } = require("electron");
const { Client } = require("discord-rpc");

//Constructing RPC CLient
const client = new Client({ transport: "ipc" });
//Global Varibales for RPC
let name = "Browsing Anime",
	shortName = "Free Anime on KAA";
(url = "https://www2.kickassanime.rs/"), (time = new Date().getTime());

//RPC Ready Event
client.on("ready", () => {
	//Interval to keep changing the status and button url
	setInterval(() => {
		client.setActivity({
			details: name,
			state: shortName,
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
});
//To stop app staring multiple times during installation
if (require("electron-squirrel-startup")) return app.quit();

//Creating a new Window
const createWindow = async () => {
	//Constructing a new window
	const mainWindow = new BrowserWindow({
		title: "KickAssAnime",
		useContentSize: true,
		icon: __dirname + "/icon.ico",
	});

	//loading extension
	await session.defaultSession
		.loadExtension(__dirname + "/extension")
		.catch((err) => {
			console.log(err);
		});
	//Interval for getting new Name and Link
	setInterval(() => {
		// setting a temp url constant for checking later
		const oldLink = url;
		//Getting current url and title data of the window
		url = mainWindow.getURL();
		name = mainWindow.getTitle();

		//setting presence to watching/Browsing/Searching
		if (name.toLowerCase().includes("episode")) {
			const newName = name.split(" ");
			const index = newName.indexOf("Episode");
			name = `Watching ${newName.slice(0, index).join(" ")}`;
			shortName = newName.slice(index, index + 2).join(" ");
		} else {
			if (url.includes("search")) name = "Searching Anime";
			else name = "Browsing Anime";
			shortName = "Watch Free Anime on KAA";
		}

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
