(() => {
	const input = document.getElementById("chatline");
	const controls = document.getElementById("leftcontrols");
	const messageCont = document.getElementById("messagebuffer");
	
	let spamlock = false;
	let enabled = false;
	let tabActive = true;
	let disableBtns = false;

	const kasBtn = document.createElement("button");
	const emoBtn = document.createElement("button");
	const soundNotifBtn = document.createElement("button");
	const disableBtn = document.createElement("button");

	const tadaa = new Audio("https://v.ylilauta.org/fe/13/fe13e32d5f50131a.m4a");

	const cyEmoBtn = document.getElementById("emotelistbtn");
	cyEmoBtn.style.float = "left";

	controls.appendChild(cyEmoBtn);
	controls.appendChild(disableBtn);
	controls.appendChild(kasBtn);
	controls.appendChild(soundNotifBtn);
	controls.appendChild(emoBtn);


	const soundBtns = {
		hatakokou: {
			btnText: "hälytys",
			msg: "ISMOJEN HÄTÄKOKOU",
			sound: new Audio("https://v.ylilauta.org/22/47/2247757306bb9c10.mp4"),
		},
		hiljaa: {
			btnText: "OLE HILJAA :D",
			msg: "OLE HILJAA",
			sound: new Audio("https://v.ylilauta.org/c2/d6/c2d61a29e7987290.m4a"),
		},	
		voissaakeli: {
			btnText: "ELÄMÄÄ",
			msg: "VOI SAAKELI TÄTÄ ELÄMÄÄ",
			sound: new Audio("https://v.ylilauta.org/5e/97/5e97fc96f52dfcfa.m4a"),
		},
		usko: {
			btnText: "USKOSEJO",
			msg: "USKOSEJO",
			sound: new Audio("https://v.ylilauta.org/50/1e/501e48f6f86ce645.m4a"),
		},
		dulla: {
			btnText: "men dulla",
			msg: "Men dulla edläge bäeväd",
			sound: new Audio("https://v.ylilauta.org/eb/23/eb23f53e4a0e4b8a.m4a"),
		},
		jass: {
			btnText: "NEEKER JÄSS",
			msg: "NEEKER JÄSS :D",
			sound: new Audio("https://v.ylilauta.org/9f/e8/9fe891b3618fca20.m4a"),
		},
		turpa: {
			btnText: "turpa kiinni sönkkö",
			msg: "si-si-si-si-si-sitte ka-ka-ka-ka-ka-kannattaa pitää turpa kiinni sönkkö",
			sound: new Audio("https://v.ylilauta.org/15/5c/155c85fd8f03ea3a.mp4"),
		},
		housut: {
			btnText: "housut pois",
			msg: "HOUSUT JA KENGÄT POIS",
			sound: new Audio("https://v.ylilauta.org/ca/41/ca41516da801c6a6.mp4"),
		},
		saalittavalta: {
			btnText: "säälittävältä kuulostat",
			msg: "tajuatko miten säälittävältä sä kuulostat?",
			sound: new Audio("https://v.ylilauta.org/01/2b/012bfbc83b1d6e65.mp4"),
		},
		niinko: {
			btnText: "ai niinkö",
			msg: "ai niinko?",
			sound: new Audio("https://v.ylilauta.org/62/28/62285fed7c663a94.mp4"),
		},
		kylla: {
			btnText: "kyllä",
			msg: "Kyllä",
			sound: new Audio("https://v.ylilauta.org/47/09/4709187cf869b10c.mp4"),
		},
		hattu: {
			btnText: "hattua nostaa",
			msg: "Ei voi muuta sanoo kun hattua nostaa",
			sound: new Audio("https://v.ylilauta.org/49/8d/498d8f87186dc57b.mp4"),
		},
		homo: {
			btnText: "homo",
			msg: "Homo",
			sound: new Audio("https://v.ylilauta.org/24/b5/24b5f6c98b44d186.mp4"),
		},
		antaaolla: {
			btnText: "ANTAA OLLA SITTE",
			msg: "ANTAA OLLA SITTE",
			sound: new Audio("https://v.ylilauta.org/9e/a5/9ea5c36d5bb7c656.mp4"),
		},
		ini: {
			btnText: "INISEMISENJA",
			msg: "NYTSÄLOPETATTONINISEMISENJA",
			sound: new Audio("https://v.ylilauta.org/39/69/39694c0de186b64e.mp4"),
		},
		niinpa: {
			btnText: "niinpä niin",
			msg: "niinpä niin, niinhän ne kaikki sanoo",
			sound: new Audio("https://v.ylilauta.org/8e/88/8e884f33e8b6893c.mp4"),
		},
		eikiinnosta: {
			btnText: "EI KIINNOSTA",
			msg: "EI KIINNOSTA",
			sound: new Audio("https://v.ylilauta.org/6b/47/6b47203b71b0002d.mp4"),
		},
		kasniin: {
			btnText: "Kas niiiin",
			msg: "Kas niiiin",
			sound: new Audio("https://v.ylilauta.org/d9/ae/d9ae7868a420ac0d.m4a"),
		},
		aivanaivan: {
			btnText: "AIVAN AIVAN",
			msg: "NO AIVAN AIVAN AIVAN AIVAN",
			sound: new Audio("https://v.ylilauta.org/11/ba/11ba9fd59d74c92b.m4a"),
		},
		lassehuuts: {
			btnText: "lassepihinä",
			msg: "/lasse  ",
			sound: new Audio("https://v.ylilauta.org/2e/08/2e08fb9e5b0109f7.m4a"),
		},
		enoonahny: {
			btnText: "EN OO NÄHNY TISSIÄ",
			msg: "EN OO NÄHNY PILLUA EN OO NÄHNY TISSIÄ",
			sound: new Audio("https://v.ylilauta.org/4d/d9/4dd94d6ee9a12983.m4a"),
		},
		kivapeppu: {
			btnText: "kiva peppu",
			msg: "kiva peppu!",
			sound: new Audio("https://v.ylilauta.org/17/f3/17f3fb4400f58785.m4a"),
		},
		transu: {
			btnText: "transu hiljaa",
			msg: "vitun transu hiljaa",
			sound: new Audio("https://v.ylilauta.org/5a/7c/5a7c778952168501.mp4"),
		},
		valehtele: {
			btnText: "ÄLÄ VALEHTELE",
			msg: "ÄLÄ VALEHTELE",
			sound: new Audio("https://v.ylilauta.org/8a/ea/8aea348ac92ebe3b.mp4"),
		},
		hyihelvetti: {
			btnText: "hyi helveTTI",
			msg: "hyi helveTTI",
			sound: new Audio("https://v.ylilauta.org/46/15/46155f0b545e6112.mp4"),
		},
		jes: {
			btnText: "JES",
			msg: ":jes:  ",
			sound: new Audio("https://v.ylilauta.org/6b/1f/6b1f29a03f331cbc.mp4"),
		},
		loppu: {
			btnText: "nyt loppu",
			msg: "nyt loppu.",
			sound: new Audio("https://v.ylilauta.org/e4/9c/e49c03d5763fa418.mp4"),
		},
		pillu: {
			btnText: "pillu mielessä",
			msg: "pillu mielessä SLRSPLPSRLSPRLSSPRLSPRLURPS",
			sound: new Audio("https://v.ylilauta.org/70/4b/704b56cacaf9858b.m4a"),
		},
		panemisiin: {
			btnText: "panemisiin",
			msg: "panemisiin",
			sound: new Audio("https://v.ylilauta.org/dc/65/dc65be05f5ed1a5d.m4a"),
		},
		asiaselva: {
			btnText: "asia selvä",
			msg: "asiahan on sitten sillä selvä senioriittaaa",
			sound: new Audio("https://v.ylilauta.org/9d/74/9d743762a26039fc.m4a"),
		},
		kutenhaluatte: {
			btnText: "aivan kuten haluatte",
			msg: "aivan kuten haluatte ylhäisyys",
			sound: new Audio("https://v.ylilauta.org/c3/a4/c3a460b3dfa6e1a0.m4a"),
		},
		viisaspaatos: {
			btnText: "viisas päätös",
			msg: "todella viisas päätös teidän ylhäisyys",
			sound: new Audio("https://v.ylilauta.org/33/66/336643ca0f44fc92.m4a"),
		},
		turpaas: {
			btnText: "HALUUTSÄ TURPAAS",
			msg: "HALUUT SÄ TURPAAS",
			sound: new Audio("https://v.ylilauta.org/c9/8a/c98af08255fd8d68.mp4"),
		},
		laski: {
			btnText: "iida",
			msg: "vittu että oot läski :D",
			sound: new Audio("https://v.ylilauta.org/2b/df/2bdfec2f6966828e.mp4"),
		},
		sesmonauroi: {
			btnText: "sesmo vaan nauroi",
			msg: "/sesmo vaan nauroi  ",
			sound: new Audio("https://v.ylilauta.org/f0/5a/f05a88d710ae770f.mp4"),
		},
		homoasia: {
			btnText: "se sun homoasia",
			msg: "se sun homoasiaski, se menee ajan myötä ohi",
			sound: new Audio("https://v.ylilauta.org/fc/6e/fc6e60315ccec868.mp4"),
		},
		seisominen: {
			btnText: "jysähti",
			msg: "no nyt se mulkun seisominen taas alkaa",
			sound: new Audio("https://v.ylilauta.org/3e/bb/3ebb0e8ccf847689.mp4"),
		},
		mita: {
			btnText: "mitä?",
			msg: "mitä?",
			sound: new Audio("https://v.ylilauta.org/5d/f1/5df1f7f1548beb5a.mp4"),
		},
		tytina: {
			btnText: "hyvä tytinä",
			msg: "mulla on nyt aika hyvä tytinä tästä",
			sound: new Audio("https://v.ylilauta.org/bb/0d/bb0d4fe807297e92.mp4"),
		},
		rakastansua: {
			btnText: "rakastan sinua",
			msg: "musta tuntuu että mä taidan rakastaa sua",
			sound: new Audio("https://v.ylilauta.org/f2/e8/f2e85c12aa20ebcd.mp4"),
		},
		alapelleile: {
			btnText: "älä pelleile",
			msg: "älä pelleile mun kanssa",
			sound: new Audio("https://v.ylilauta.org/66/61/6661584fb4319d12.mp4"),
		},
		fever: {
			btnText: "nightfever :D",
			msg: "/ismofever  ",
			sound: new Audio("https://v.ylilauta.org/f1/61/f16116d1e54f4c84.mp4"),
		},
		aijasettia: {
			btnText: "ÄIJÄSETTIÄ",
			msg: "/äijäsetti  ",
			sound: new Audio("https://v.ylilauta.org/ba/76/ba7603c5f65eeaf1.mp4"),
		},
		arvasin: {
			btnText: "arvasin",
			msg: "/arvasin  ",
			sound: new Audio("https://v.ylilauta.org/78/ee/78ee2923ee53c365.mp4"),
		},
		kahvi: {
			btnText: "kahvi",
			msg: ":kahvi:  ",
			sound: new Audio("https://v.ylilauta.org/f0/95/f095c349c3b22633.m4a"),
		},
		sorirumasti: {
			btnText: "okei rumasti sanottu",
			msg: "okei okei okei se oli rumasti sanottu",
			sound: new Audio("https://v.ylilauta.org/9a/ee/9aeefc0cc59ac5d6.mp4"),
		},
		alalonksuta: {
			btnText: "älä lonksuta",
			msg: "älä nyt lonksuta niitä leukojas vaan häivy",
			sound: new Audio("https://v.ylilauta.org/2e/3a/2e3ac0fa44400c3a.mp4"),
		},
		kyllapassaa: {
			btnText: "mulle passaa",
			msg: "kyllä se mulle vaan passaa :)",
			sound: new Audio("https://v.ylilauta.org/0b/8c/0b8cb5aaea7a907c.mp4"),
		},
		pilalla: {
			btnText: "pilalla",
			msg: "/pilalla  ",
			sound: new Audio("https://v.ylilauta.org/d1/df/d1df4b8be4a7f0f7.m4a"),
		},
		leikkiin: {
			btnText: "leikkiin ryhtyy",
			msg: "KEN LEIKKIIN RYHTYY SE LEIKIN KESTÄKÖÖN",
			sound: new Audio("https://v.ylilauta.org/c3/2c/c32cbd8c1316baa2.mp4"),
		},
		MITA: {
			btnText: "MITÄ",
			msg: "MITÄ?",
			sound: new Audio("https://v.ylilauta.org/f7/8c/f78c996b7b8eab69.mp4"),
		},
		TUKUTUKU: {
			btnText: "TUKU TUKU",
			msg: "/pap  ",
			sound: new Audio("https://v.ylilauta.org/3b/b0/3bb056114a7b2e90.m4a"),
		},
		karamba: {
			btnText: "karamba",
			msg: "/karamba  ",
			sound: new Audio("https://v.ylilauta.org/90/a8/90a85d6d703bdb43.m4a"),
		},
		kukku: {
			btnText: "cuckku",
			msg: ":cuckka:  ",
			sound: new Audio("https://v.ylilauta.org/8f/d7/8fd7183bb671cbe6.m4a"),
		},
		kaljatanne: {
			btnText: "kalja tänne",
			msg: "kalja tänne ja heTI",
			sound: new Audio("https://v.ylilauta.org/68/69/6869aace33c53a90.mp4"),
		},
		huora: {
			btnText: "huora",
			msg: "HUORA",
			sound: new Audio("https://v.ylilauta.org/47/cb/47cbe6b0e2a5ac2e.mp4"),
		},
		turpakiitoihin: {
			btnText: "turpa kiinni töihin",
			msg: "MEE KUNNON TÖIHIN JA PIDÄ TURPAS KIINNI",
			sound: new Audio("https://v.ylilauta.org/24/2d/242dc7f40ce14d75.mp4"),
		},
		tosipahakommentti: {
			btnText: "paha kommentti :(",
			msg: "ei noin saa sanoo kellekään :(",
			sound: new Audio("https://v.ylilauta.org/38/be/38be496f0b30d634.mp4"),
		},
		cuckki: {
			btnText: "cuckki",
			msg: ":cucku:  ",
			sound: new Audio("https://v.ylilauta.org/26/80/26807c30da5a781e.m4a"),
		},
		niilokalja: {
			btnText: "ei kai kaljaa",
			msg: "et kai sää ala nyt kaljaa ottaan",
			sound: new Audio("https://v.ylilauta.org/56/2a/562a434c6f99156e.mp4"),
		},
		saalittavalappa: {
			btnText: "säälittävä läppä",
			msg: "ähhähä säälittävä läppä",
			sound: new Audio("https://v.ylilauta.org/7f/8f/7f8f8ff4fd7e88b4.m4a"),
		},
		niinii: {
			btnText: "niinii",
			msg: "/niinnii  ",
			sound: new Audio("https://v.ylilauta.org/c9/b4/c9b4fa100d5758d5.mp4"),
		},
		mustamies: {
			btnText: "nigrolin",
			msg: "musta mies",
			sound: new Audio("https://v.ylilauta.org/4e/65/4e655aaa0fbb27b4.mp4"),
		},
		olipasse: {
			btnText: "olipas hauskaa",
			msg: "olipas se hauskaa",
			sound: new Audio("https://v.ylilauta.org/38/e0/38e057be6725290e.m4a"),
		},
		niinvarmaanjoo: {
			btnText: "niinvarmaanjoo",
			msg: "joo niin varmaan joo niin varmaa",
			sound: new Audio("https://v.ylilauta.org/17/d9/17d969f7c5dd88f2.mp4"),
		},
		heitavoltti: {
			btnText: "heitä voltti",
			msg: "heitä homo voltti",
			sound: new Audio("https://v.ylilauta.org/01/e4/01e4c828b6926517.m4a"),
		},
		humpuukia: {
			btnText: "humpuukia",
			msg: "vai että semmosta humpuukia",
			sound: new Audio("https://v.ylilauta.org/2e/d9/2ed9c4a94a50d8bc.m4a"),
		},
		enikina: {
			btnText: "en ikinä",
			msg: "en ikiNÄ",
			sound: new Audio("https://v.ylilauta.org/86/ce/86ce82ebf432511b.mp4"),
		},
		hyvaayota: {
			btnText: "hyvää yötä",
			msg: "hyvää yötä, jatketaan sitte joskus toiste",
			sound: new Audio("https://v.ylilauta.org/3b/22/3b22bbcf5ae109ec.m4a"),
		},
		mehukestit: {
			btnText: "mitkäs mehukestit",
			msg: "mitkäs lasten mehukestit täällä on",
			sound: new Audio("https://v.ylilauta.org/63/88/63888de66362e15f.m4a"),
		},
		turpalutka: {
			btnText: "turpa kii lutka",
			msg: "turpa kiinni lutka",
			sound: new Audio("https://v.ylilauta.org/e2/7e/e27e63b1de1ae33a.mp4"),
		},
		seppotulee: {
			btnText: "tässä tulee seppo",
			msg: "tässä tulee seppo taalasmaa sula hopsula hei sula hopsansaa :D",
			sound: new Audio("https://v.ylilauta.org/24/9b/249bf84572255665.m4a"),
		},
		mmsupra: {
			btnText: "supra",
			msg: "mmmmmmmmmmmmmm supra",
			sound: new Audio("https://v.ylilauta.org/fa/2c/fa2c191a7a4ec5a9.m4a"),
		},
		epasensitiivinen: {
			btnText: "epäsensitiivinen tila",
			msg: "tää on musta ensinnäkin todella epämukava, todella epäsensitiivinen turvaton tila tällä hetkellä, et on tosi ikävää et mä oon tässä tilassa joudun tähän keskusteluun tällä tavalla",
			sound: new Audio("https://v.ylilauta.org/36/58/365841f2a46b3187.mp4"),
		},
		
	}

	const soundMsgs = [];

	window.addEventListener("focus", () => { tabActive = true; })
	window.addEventListener("blur", () => { tabActive = false; })

	for(let i = 0, keys = Object.keys(soundBtns); i < keys.length; i++) {
		const btn = soundBtns[keys[i]];
		const text = btn.btnText;
		const msg = btn.msg;
		const sound = btn.sound;

		soundMsgs.push(msg);
		CHANNEL.emotes.push({name: msg});

		const btnEl = document.createElement("button");

		btnEl.textContent = text;
		btnEl.className = "btn btn-sm btn-default aaninappi";
    	btnEl.style.float = "right";

		btnEl.addEventListener("click", () => {

			if(disableBtns)
				return;

			const time = localStorage.getItem(keys[i] + "_timelock");

			if(!time || new Date().getTime() - +time >= 420000) {

				if(spamlock)
					return;

				spamlock = true;
				setTimeout(() => {spamlock = false}, 3000)

				socket.emit("chatMsg", {msg: msg});
				
			}

		});

		controls.appendChild(btnEl);
		
	}

	disableBtn.className = "btn btn-sm btn-default";
    disableBtn.style.float = "left";
	disableBtn.textContent = "muteta ääninapit";
	disableBtn.addEventListener("click", () => {
		if(disableBtns) {
			disableBtns = false;
			disableBtn.textContent = "muteta ääninapit";
		}
		else {
			for(let i = 0, keys = Object.keys(soundBtns); i < keys.length; i++) {
				const sound = soundBtns[keys[i]].sound;
				sound.load();
			}
			disableBtns = true;
			disableBtn.textContent = "unmuteta ääninapit";
		}

		const btns = document.getElementsByClassName("aaninappi");
		for(let i = 0; i < btns.length; i++)
			btns[i].style.display = disableBtns ? "none" : "inline-block";
	});

	emoBtn.className = "btn btn-sm btn-default";
    emoBtn.style.float = "right";
	emoBtn.textContent = "Random emo";
	emoBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		socket.emit("chatMsg", {msg: CHANNEL.emotes[Math.floor(Math.random() * CHANNEL.emotes.length)].name})
	});

	kasBtn.className = "btn btn-sm btn-default";
    kasBtn.style.float = "right";
	kasBtn.textContent = "kass :D";
	kasBtn.addEventListener("click", () => {
		let extra = 0;
		let kass = ["-", ":pitkäkisu1:", ":pitkäkisu2:", ":pitkäkisu3:"];

		(async () => {
			if(spamlock)
				return;

			spamlock = true;
			setTimeout(() => {spamlock = false}, 3000)
			for(let i = 0; i < 4; i++) {
				socket.emit("chatMsg", {msg: kass[i]});
				await time(30);
				if(i == 2) {
					for(let j = 0; j < extra; j++) {
						socket.emit("chatMsg", {msg: kass[i]});
						await time(30);
					}
				}
			}
		})();
	})

	soundNotifBtn.className = "btn btn-sm btn-default";
    soundNotifBtn.style.float = "right";
	soundNotifBtn.textContent = "Äänimerkki kun tab epäaktiivinen: off";
	soundNotifBtn.addEventListener("click", () => {
		
		if(!enabled) {
			enabled = true;
			soundNotifBtn.textContent = "Äänimerkki kun tab epäaktiivinen: on";

		}
		else {
			enabled = false;
			soundNotifBtn.textContent = "Äänimerkki kun tab epäaktiivinen: off";

		}
	})

    const observer = new MutationObserver(
        mutationsList => {
        	const msgs = messageCont.getElementsByTagName("div");
 
        	if(!(mutationsList[0].addedNodes && mutationsList[0].addedNodes[0] && mutationsList[0].addedNodes[0].className.indexOf("chat-msg") > -1))
        		return;

    		let msg = msgs[msgs.length - 1].querySelector("span:last-of-type");

    		if(messageCont.scrollHeight - messageCont.scrollTop === messageCont.clientHeight) {
    			setTimeout(() => { messageCont.scrollTo(0, messageCont.scrollHeight) }, 300);
    		}


    		const username = msg.parentElement.className.split(" ")[0].split("-")[2];

    		let soundIndex = soundMsgs.indexOf(msg.textContent);

    		if(msg.childNodes.length === 2 && msg.childNodes[0].nodeType === 1 && msg.childNodes[1].nodeType === 3 && (msg.childNodes[1].textContent === "  " || msg.childNodes[1].textContent === "   ")) {
    			const emoTitle = msg.childNodes[0].getAttribute("title");
    			soundIndex = soundMsgs.indexOf(emoTitle + "  ");
    		}

    		if(soundIndex == -1 && msg.textContent[msg.textContent.length - 1] == " ") 
    			soundIndex = soundMsgs.indexOf(msg.textContent.slice(0, msg.textContent.length - 1));

    		if(soundIndex > -1 && username) {
    			const btnKey = Object.keys(soundBtns)[soundIndex];
    			const soundBtn = soundBtns[btnKey];
				const text = soundBtn.btnText;
				const sound = soundBtn.sound;
				const time = localStorage.getItem(btnKey + "_timelock2");
				const myTime = localStorage.getItem(btnKey + "_timelock");

				if(username == CLIENT.name || (!disableBtns && (!time || new Date().getTime() - +time > 400000))) {
					
					if(username != CLIENT.name) {
						localStorage.setItem(btnKey + "_timelock2", new Date().getTime());
						sound.play();
					}
					else if(!disableBtns && (!myTime || new Date().getTime() - +myTime > 420000)) {
						localStorage.setItem(btnKey + "_timelock", new Date().getTime());
						sound.play();
					}
				}
    		}
    		else if(enabled && (!tabActive || document.hidden)) {
    			tadaa.play();
    		}

    		if(msg.textContent === "!roll" && username === CLIENT.name) {
    			const rnd = Math.floor((Math.random() * 100)+1);
    			socket.emit("chatMsg", {msg: "/me rolled " + rnd});
    		}
 
    		if(msg.innerHTML.split(" <").length == 2 && msg.innerHTML.split(" <")[0] == "pipe") {
    			const msgParentClassname = msg.parentElement.className;
    			msg.remove();
    			if(msgParentClassname == "chat-msg-" + CLIENT.name) {
	    			socket.emit("chatMsg", {msg: msg.getElementsByTagName("img")[0].getAttribute("title")});
	    			socket.emit("chatMsg", {msg: "/pippeli"});
    			}
    		}

    		else {
    			const links = msg.getElementsByTagName("a");
    			for(let i = 0; i < links.length; i++) {
    				const link = links[i];
    				handleLink(link);
    			}
    		}
        }
    );

    observer.observe(messageCont, { childList: true});

	setTimeout(() => {
		const msgs = messageCont.getElementsByTagName("div");

		for(let i = 0; i < msgs.length; i++) {
			const msg = msgs[i].querySelector("span:last-of-type");
			if(!msg)
				continue;
			const links = msg.getElementsByTagName("a");
			for(let i = 0; i < links.length; i++) {
				const link = links[i];
				handleLink(link);
			}
		}
	}, 200)

	const userlist = document.getElementById("userlist");

	function handleLink(link) {
		if(isImgUrl(link.href)) {
			link.innerHTML = "<img style='max-width:330px;max-height:330px' src='" + link.href + "'>";
		}
		else if(isVideoUrl(link.href)) {
			const video = document.createElement("video");
			video.style.maxWidth = "330px";
			video.style.maxHeight = "330px"
			video.controls = true;
			video.style.verticalAlign = "middle";
			video.innerHTML = `<source src="${link.href}" type="video/mp4">`;
			link.parentElement.replaceChild(video, link);
		}
		else if(isAudioUrl(link.href)) {
			const audio = document.createElement("audio");
			audio.controls = true;
			audio.style.verticalAlign = "middle";
			audio.innerHTML = `<source src="${link.href}" type="audio/mpeg">`;
			link.parentElement.replaceChild(audio, link);
		}
		else if(isTubeUrl(link.href)) {
			const video = document.createElement("iframe");
			video.width = 450;
			video.height = 315;
			video.style.verticalAlign = "middle";
			video.src = "https://www.youtube.com/embed/" + link.href.split("?v=")[1].split("&t=")[0];
			video.setAttribute("frameborder", 0);
			video.setAttribute("allowfullscreen", true);

			video.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
			link.parentElement.replaceChild(video, link);
		}
	}

	function isImgUrl(str) {
		const regex = new RegExp(/(https?:\/\/.*\.(?:png|jpg|gif|jpeg|PNG|JPG|GIF|JPEG))/);
		return str.match(regex) ? true : false;
	}
	function isVideoUrl(str) {
		const regex = new RegExp(/(https?:\/\/.*\.(?:mp4|MP4))/);
		return str.match(regex) ? true : false;
	}
	function isAudioUrl(str) {
		const regex = new RegExp(/(https?:\/\/.*\.(?:mp3|MP3|m4a|M4A))/);
		return str.match(regex) ? true : false;
	}
	function isTubeUrl(str) {
		return str.substring(0,32) == "https://www.youtube.com/watch?v=" ? true : false;
	}
	function time(ms) {
		return new Promise(resolve => { setTimeout(resolve, ms) });
	}
})();