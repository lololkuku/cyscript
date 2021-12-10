(() => {
	let input = document.getElementById("chatline");
	let controls = document.getElementById("leftcontrols");
	let notifBtn = document.createElement("button");
	let emoBtn = document.createElement("button");
	let hiljaaBtn = document.createElement("button");
	let voissaakeliBtn = document.createElement("button");
	let dullaBtn = document.createElement("button");
	let uskoBtn = document.createElement("button");
	let jassBtn = document.createElement("button");
	let turpaBtn = document.createElement("button");
	let housutBtn = document.createElement("button");
	let niinkoBtn = document.createElement("button");
	let kyllaBtn = document.createElement("button");
	let hattuBtn = document.createElement("button");
	let niinpaBtn = document.createElement("button");
	let eikiinnostaBtn = document.createElement("button");
	let saalittavaltaBtn = document.createElement("button");
	let homoBtn = document.createElement("button");
	let antaaollaBtn = document.createElement("button");
	let kasniinBtn = document.createElement("button");
	let aivanaivanBtn = document.createElement("button");
	let jesBtn = document.createElement("button");
	let hyihelvettiBtn = document.createElement("button");
	let transuBtn = document.createElement("button");
	let lassehuutsBtn = document.createElement("button");
	let pilluBtn = document.createElement("button");
	let panemisiinBtn = document.createElement("button");
	let asiaselvaBtn = document.createElement("button");
	let loppuBtn = document.createElement("button");
	let valehteleBtn = document.createElement("button");
	let kutenhaluatteBtn = document.createElement("button");
	let enoonahnyBtn = document.createElement("button");
	let kivapeppuBtn = document.createElement("button");
	let viisaspaatosBtn = document.createElement("button");
	let iniBtn = document.createElement("button");
	let messageCont = document.getElementById("messagebuffer");
	const tadaa = new Audio("https://v.ylilauta.org/fe/13/fe13e32d5f50131a.m4a");
	let spamlock = false;

	let tabActive = true;

	window.addEventListener("focus", () => { tabActive = true; })
	window.addEventListener("blur", () => { tabActive = false; })

	notifBtn.className = "btn btn-sm btn-default";
    notifBtn.style.float = "right";
	notifBtn.textContent = "hälytys";
	notifBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock");
		if(!time || new Date().getTime() - +time >= 420000) {
			myHatakokou = true;
			socket.emit("chatMsg", {msg: "ISMOJEN HÄTÄKOKOU"});
			const audio = new Audio("https://v.ylilauta.org/22/47/2247757306bb9c10.mp4");
			audio.play();
			localStorage.setItem("timelock", new Date().getTime());
		}
	});

	hiljaaBtn.className = "btn btn-sm btn-default";
    hiljaaBtn.style.float = "right";
	hiljaaBtn.textContent = "OLE HILJAA :D";
	hiljaaBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock3");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "OLE HILJAA"});
			const audio = new Audio("https://v.ylilauta.org/c2/d6/c2d61a29e7987290.m4a");
			audio.play();
			localStorage.setItem("timelock3", new Date().getTime());
		}
	});

	antaaollaBtn.className = "btn btn-sm btn-default";
    antaaollaBtn.style.float = "right";
	antaaollaBtn.textContent = "ANTAA OLLA SITTE";
	antaaollaBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock27");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "ANTAA OLLA SITTE"});
			const audio = new Audio("https://v.ylilauta.org/9e/a5/9ea5c36d5bb7c656.mp4");
			audio.play();
			localStorage.setItem("timelock27", new Date().getTime());
		}
	});

	pilluBtn.className = "btn btn-sm btn-default";
    pilluBtn.style.float = "right";
	pilluBtn.textContent = "pillu mielessä";
	pilluBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock55");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "pillu mielessä SLRSPLPSRLSPRLSSPRLSPRLURPS"});
			const audio = new Audio("https://v.ylilauta.org/70/4b/704b56cacaf9858b.m4a");
			audio.play();
			localStorage.setItem("timelock55", new Date().getTime());
		}
	});

	panemisiinBtn.className = "btn btn-sm btn-default";
    panemisiinBtn.style.float = "right";
	panemisiinBtn.textContent = "panemisiin";
	panemisiinBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock57");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "panemisiin"});
			const audio = new Audio("https://v.ylilauta.org/dc/65/dc65be05f5ed1a5d.m4a");
			audio.play();
			localStorage.setItem("timelock57", new Date().getTime());
		}
	});

	asiaselvaBtn.className = "btn btn-sm btn-default";
    asiaselvaBtn.style.float = "right";
	asiaselvaBtn.textContent = "asia selvä";
	asiaselvaBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock59");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "asiahan on sitten sillä selvä senioriittaaa"});
			const audio = new Audio("https://v.ylilauta.org/9d/74/9d743762a26039fc.m4a");
			audio.play();
			localStorage.setItem("timelock59", new Date().getTime());
		}
	});

	kutenhaluatteBtn.className = "btn btn-sm btn-default";
    kutenhaluatteBtn.style.float = "right";
	kutenhaluatteBtn.textContent = "aivan kuten haluatte ylhäisyys";
	kutenhaluatteBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock61");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "aivan kuten haluatte ylhäisyys"});
			const audio = new Audio("https://v.ylilauta.org/c3/a4/c3a460b3dfa6e1a0.m4a");
			audio.play();
			localStorage.setItem("timelock61", new Date().getTime());
		}
	});

	viisaspaatosBtn.className = "btn btn-sm btn-default";
    viisaspaatosBtn.style.float = "right";
	viisaspaatosBtn.textContent = "viisas päätös";
	viisaspaatosBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock63");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "todella viisas päätös teidän ylhäisyys"});
			const audio = new Audio("https://v.ylilauta.org/33/66/336643ca0f44fc92.m4a");
			audio.play();
			localStorage.setItem("timelock63", new Date().getTime());
		}
	});

	hattuBtn.className = "btn btn-sm btn-default";
    hattuBtn.style.float = "right";
	hattuBtn.textContent = "hattua nostaa";
	hattuBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock23");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "Ei voi muuta sanoo kun hattua nostaa"});
			const audio = new Audio("https://v.ylilauta.org/49/8d/498d8f87186dc57b.mp4");
			audio.play();
			localStorage.setItem("timelock23", new Date().getTime());
		}
	});

	aivanaivanBtn.className = "btn btn-sm btn-default";
    aivanaivanBtn.style.float = "right";
	aivanaivanBtn.textContent = "AIVAN AIVAN";
	aivanaivanBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock37");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "NO AIVAN AIVAN AIVAN AIVAN"});
			const audio = new Audio("https://v.ylilauta.org/11/ba/11ba9fd59d74c92b.m4a");
			audio.play();
			localStorage.setItem("timelock37", new Date().getTime());
		}
	});

	hyihelvettiBtn.className = "btn btn-sm btn-default";
    hyihelvettiBtn.style.float = "right";
	hyihelvettiBtn.textContent = "hyi helveTTI";
	hyihelvettiBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock49");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "hyi helveTTI"});
			const audio = new Audio("https://v.ylilauta.org/46/15/46155f0b545e6112.mp4");
			audio.play();
			localStorage.setItem("timelock49", new Date().getTime());
		}
	});

	kivapeppuBtn.className = "btn btn-sm btn-default";
    kivapeppuBtn.style.float = "right";
	kivapeppuBtn.textContent = "kiva peppu";
	kivapeppuBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock43");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "kiva peppu!"});
			const audio = new Audio("https://v.ylilauta.org/17/f3/17f3fb4400f58785.m4a");
			audio.play();
			localStorage.setItem("timelock43", new Date().getTime());
		}
	});

	loppuBtn.className = "btn btn-sm btn-default";
    loppuBtn.style.float = "right";
	loppuBtn.textContent = "nyt loppu";
	loppuBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock53");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "nyt loppu."});
			const audio = new Audio("https://v.ylilauta.org/e4/9c/e49c03d5763fa418.mp4");
			audio.play();
			localStorage.setItem("timelock53", new Date().getTime());
		}
	});

	valehteleBtn.className = "btn btn-sm btn-default";
    valehteleBtn.style.float = "right";
	valehteleBtn.textContent = "ÄLÄ VALEHTELE";
	valehteleBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock47");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "ÄLÄ VALEHTELE"});
			const audio = new Audio("https://v.ylilauta.org/8a/ea/8aea348ac92ebe3b.mp4");
			audio.play();
			localStorage.setItem("timelock47", new Date().getTime());
		}
	});

	transuBtn.className = "btn btn-sm btn-default";
    transuBtn.style.float = "right";
	transuBtn.textContent = "transu hiljaa";
	transuBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock45");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "vitun transu hiljaa"});
			const audio = new Audio("https://v.ylilauta.org/5a/7c/5a7c778952168501.mp4");
			audio.play();
			localStorage.setItem("timelock45", new Date().getTime());
		}
	});

	lassehuutsBtn.className = "btn btn-sm btn-default";
    lassehuutsBtn.style.float = "right";
	lassehuutsBtn.textContent = "lassepihinä";
	lassehuutsBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock39");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "/lasse  "});
			const audio = new Audio("https://v.ylilauta.org/2e/08/2e08fb9e5b0109f7.m4a");
			audio.play();
			localStorage.setItem("timelock39", new Date().getTime());
		}
	});

	jesBtn.className = "btn btn-sm btn-default";
    jesBtn.style.float = "right";
	jesBtn.textContent = "JES";
	jesBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock51");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: ":jes:  "});
			const audio = new Audio("https://v.ylilauta.org/6b/1f/6b1f29a03f331cbc.mp4");
			audio.play();
			localStorage.setItem("timelock51", new Date().getTime());
		}
	});

	eikiinnostaBtn.className = "btn btn-sm btn-default";
    eikiinnostaBtn.style.float = "right";
	eikiinnostaBtn.textContent = "EI KIINNOSTA";
	eikiinnostaBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock33");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "EI KIINNOSTA"});
			const audio = new Audio("https://v.ylilauta.org/6b/47/6b47203b71b0002d.mp4");
			audio.play();
			localStorage.setItem("timelock33", new Date().getTime());
		}
	});

	kasniinBtn.className = "btn btn-sm btn-default";
    kasniinBtn.style.float = "right";
	kasniinBtn.textContent = "Kas niiiin";
	kasniinBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock35");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "Kas niiiin"});
			const audio = new Audio("https://v.ylilauta.org/d9/ae/d9ae7868a420ac0d.m4a");
			audio.play();
			localStorage.setItem("timelock35", new Date().getTime());
		}
	});

	enoonahnyBtn.className = "btn btn-sm btn-default";
    enoonahnyBtn.style.float = "right";
	enoonahnyBtn.textContent = "EN OO NÄHNY TISSIÄ";
	enoonahnyBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock41");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "EN OO NÄHNY PILLUA EN OO NÄHNY TISSIÄ"});
			const audio = new Audio("https://v.ylilauta.org/4d/d9/4dd94d6ee9a12983.m4a");
			audio.play();
			localStorage.setItem("timelock41", new Date().getTime());
		}
	});

	niinpaBtn.className = "btn btn-sm btn-default";
    niinpaBtn.style.float = "right";
	niinpaBtn.textContent = "niinpä niin";
	niinpaBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock31");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "niinpä niin, niinhän ne kaikki sanoo"});
			const audio = new Audio("https://v.ylilauta.org/8e/88/8e884f33e8b6893c.mp4");
			audio.play();
			localStorage.setItem("timelock31", new Date().getTime());
		}
	});

	homoBtn.className = "btn btn-sm btn-default";
    homoBtn.style.float = "right";
	homoBtn.textContent = "homo";
	homoBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock25");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "Homo"});
			const audio = new Audio("https://v.ylilauta.org/24/b5/24b5f6c98b44d186.mp4");
			audio.play();
			localStorage.setItem("timelock25", new Date().getTime());
		}
	});

	iniBtn.className = "btn btn-sm btn-default";
    iniBtn.style.float = "right";
	iniBtn.textContent = "INISEMISENJA";
	iniBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock29");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "NYTSÄLOPETATTONINISEMISENJA"});
			const audio = new Audio("https://v.ylilauta.org/39/69/39694c0de186b64e.mp4");
			audio.play();
			localStorage.setItem("timelock29", new Date().getTime());
		}
	});

	uskoBtn.className = "btn btn-sm btn-default";
    uskoBtn.style.float = "right";
	uskoBtn.textContent = "USKOSEJO";
	uskoBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock7");
// 900000
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "USKO SE JO"});
			const audio = new Audio("https://v.ylilauta.org/50/1e/501e48f6f86ce645.m4a");
			audio.play();
			localStorage.setItem("timelock7", new Date().getTime());
		}
	});

	turpaBtn.className = "btn btn-sm btn-default";
    turpaBtn.style.float = "right";
	turpaBtn.textContent = "turpa kiinni sönkkö";
	turpaBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock13");
// 900000
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "si-si-si-si-si-sitte ka-ka-ka-ka-ka-kannattaa pitää turpa kiinni sönkkö"});
			const audio = new Audio("https://v.ylilauta.org/15/5c/155c85fd8f03ea3a.mp4");
			audio.play();
			localStorage.setItem("timelock13", new Date().getTime());
		}
	});

	kyllaBtn.className = "btn btn-sm btn-default";
    kyllaBtn.style.float = "right";
	kyllaBtn.textContent = "kyllä";
	kyllaBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock21");
// 900000
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "Kyllä"});
			const audio = new Audio("https://v.ylilauta.org/47/09/4709187cf869b10c.mp4");
			audio.play();
			localStorage.setItem("timelock21", new Date().getTime());
		}
	});

	niinkoBtn.className = "btn btn-sm btn-default";
    niinkoBtn.style.float = "right";
	niinkoBtn.textContent = "ai niinkö";
	niinkoBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock19");
// 900000 
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "ai niinkö?"});
			const audio = new Audio("https://v.ylilauta.org/62/28/62285fed7c663a94.mp4");
			audio.play();

			localStorage.setItem("timelock19", new Date().getTime());
		}
	});

	housutBtn.className = "btn btn-sm btn-default";
    housutBtn.style.float = "right";
	housutBtn.textContent = "housut pois";
	housutBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock15");
// 900000
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "HOUSUT JA KENGÄT POIS"});
			const audio = new Audio("https://v.ylilauta.org/ca/41/ca41516da801c6a6.mp4");
			audio.play();
			localStorage.setItem("timelock15", new Date().getTime());
		}
	});

	saalittavaltaBtn.className = "btn btn-sm btn-default";
    saalittavaltaBtn.style.float = "right";
	saalittavaltaBtn.textContent = "säälittävältä kuulostat";
	saalittavaltaBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock17");
// 900000
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "tajuatko miten säälittävältä sä kuulostat?"});
			const audio = new Audio("https://v.ylilauta.org/01/2b/012bfbc83b1d6e65.mp4");
			audio.play();
			localStorage.setItem("timelock17", new Date().getTime());
		}
	});

	jassBtn.className = "btn btn-sm btn-default";
    jassBtn.style.float = "right";
	jassBtn.textContent = "NEEKER JÄSS";
	jassBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock11");
// 900000
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "NEEKER JÄSS :D"});
			const audio = new Audio("https://v.ylilauta.org/9f/e8/9fe891b3618fca20.m4a");
			audio.play();
			localStorage.setItem("timelock11", new Date().getTime());
		}
	});

	dullaBtn.className = "btn btn-sm btn-default";
    dullaBtn.style.float = "right";
	dullaBtn.textContent = "men dulla";
	dullaBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock9");
// 900000
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "Men dulla edläge bäeväd"});
			const audio = new Audio("https://v.ylilauta.org/eb/23/eb23f53e4a0e4b8a.m4a");
			audio.play();
			localStorage.setItem("timelock9", new Date().getTime());
		}
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

	voissaakeliBtn.className = "btn btn-sm btn-default";
    voissaakeliBtn.style.float = "right";
	voissaakeliBtn.textContent = "ELÄMÄÄ";
	voissaakeliBtn.addEventListener("click", () => {
		if(spamlock)
			return;

		spamlock = true;
		setTimeout(() => {spamlock = false}, 3000)
		const time = localStorage.getItem("timelock5");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "VOI SAAKELI TÄTÄ ELÄMÄÄ"});
	const voissaakeli = new Audio("https://v.ylilauta.org/5e/97/5e97fc96f52dfcfa.m4a"); 
			voissaakeli.play()
			localStorage.setItem("timelock5", new Date().getTime());
		}
	});

	let kasBtn = document.createElement("button");
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

	let enabled = false;

	let soundBtn = document.createElement("button");
	soundBtn.className = "btn btn-sm btn-default";
    soundBtn.style.float = "right";
	soundBtn.textContent = "Äänimerkki kun tab epäaktiivinen: off";
	soundBtn.addEventListener("click", () => {
		
		if(!enabled) {
			enabled = true;
			soundBtn.textContent = "Äänimerkki kun tab epäaktiivinen: on";

		}
		else {
			enabled = false;
			soundBtn.textContent = "Äänimerkki kun tab epäaktiivinen: off";

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

    		if(msg.textContent == "ISMOJEN HÄTÄKOKOU" && username != CLIENT.name) {
    		
				const time = localStorage.getItem("timelock2");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/22/47/2247757306bb9c10.mp4");
					audio.play();
					localStorage.setItem("timelock2", new Date().getTime());
				}

    
    		}
    		else if(msg.textContent == "VOI SAAKELI TÄTÄ ELÄMÄÄ" && username != CLIENT.name) {
    			
    		
				const time = localStorage.getItem("timelock6");
				if(!time || new Date().getTime() - +time > 400000) {
	const voissaakeli = new Audio("https://v.ylilauta.org/5e/97/5e97fc96f52dfcfa.m4a"); 

					voissaakeli.play();
					localStorage.setItem("timelock6", new Date().getTime());
				}

    
    		}
    		else if(msg.textContent == "OLE HILJAA" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock4");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/c2/d6/c2d61a29e7987290.m4a");
					audio.play();
					localStorage.setItem("timelock4", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "USKO SE JO" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock8");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/50/1e/501e48f6f86ce645.m4a");
					audio.play();
					localStorage.setItem("timelock8", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "pillu mielessä SLRSPLPSRLSPRLSSPRLSPRLURPS" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock56");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/70/4b/704b56cacaf9858b.m4a");
					audio.play();
					localStorage.setItem("timelock56", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "si-si-si-si-si-sitte ka-ka-ka-ka-ka-kannattaa pitää turpa kiinni sönkkö" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock14");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/15/5c/155c85fd8f03ea3a.mp4");
					audio.play();
					localStorage.setItem("timelock14", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "HOUSUT JA KENGÄT POIS" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock16");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/ca/41/ca41516da801c6a6.mp4");
					audio.play();
					localStorage.setItem("timelock16", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "asiahan on sitten sillä selvä senioriittaaa" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock60");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/9d/74/9d743762a26039fc.m4a");
					audio.play();
					localStorage.setItem("timelock60", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "Kyllä" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock22");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/47/09/4709187cf869b10c.mp4");
					audio.play();
					localStorage.setItem("timelock22", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "panemisiin" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock58");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/dc/65/dc65be05f5ed1a5d.m4a");
					audio.play();
					localStorage.setItem("timelock58", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "hyi helveTTI" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock50");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/46/15/46155f0b545e6112.mp4");
					audio.play();
					localStorage.setItem("timelock50", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "todella viisas päätös teidän ylhäisyys" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock64");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/33/66/336643ca0f44fc92.m4a");
					audio.play();
					localStorage.setItem("timelock64", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "aivan kuten haluatte ylhäisyys" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock62");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/c3/a4/c3a460b3dfa6e1a0.m4a");
					audio.play();
					localStorage.setItem("timelock62", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "ANTAA OLLA SITTE" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock28");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/9e/a5/9ea5c36d5bb7c656.mp4");
					audio.play();
					localStorage.setItem("timelock28", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "nyt loppu." && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock54");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/e4/9c/e49c03d5763fa418.mp4");
					audio.play();
					localStorage.setItem("timelock54", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "EN OO NÄHNY PILLUA EN OO NÄHNY TISSIÄ" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock42");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/4d/d9/4dd94d6ee9a12983.m4a");
					audio.play();
					localStorage.setItem("timelock42", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "NYTSÄLOPETATTONINISEMISENJA" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock30");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/39/69/39694c0de186b64e.mp4");
					audio.play();
					localStorage.setItem("timelock30", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "Homo" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock26");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/24/b5/24b5f6c98b44d186.mp4");
					audio.play();
					localStorage.setItem("timelock26", new Date().getTime());
				}
    		}
    		else if(msg.childNodes.length === 2 && msg.childNodes[0].nodeType === 1 && msg.childNodes[0].getAttribute("title") === "/lasse" && msg.childNodes[1].textContent === "  " && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock40");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/2e/08/2e08fb9e5b0109f7.m4a");
					audio.play();
					localStorage.setItem("timelock40", new Date().getTime());
				}
    		}
    		else if(msg.childNodes.length === 2 && msg.childNodes[0].nodeType === 1 && msg.childNodes[0].getAttribute("title") === ":jes:" && msg.childNodes[1].textContent === "  " && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock52");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/6b/1f/6b1f29a03f331cbc.mp4");
					audio.play();
					localStorage.setItem("timelock52", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "tajuatko miten säälittävältä sä kuulostat?" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock18");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/01/2b/012bfbc83b1d6e65.mp4");
					audio.play();
					localStorage.setItem("timelock18", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "vitun transu hiljaa" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock46");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/5a/7c/5a7c778952168501.mp4");
					audio.play();
					localStorage.setItem("timelock46", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "kiva peppu!" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock44");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/17/f3/17f3fb4400f58785.m4a");
					audio.play();
					localStorage.setItem("timelock44", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "ai niinkö?" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock20");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/62/28/62285fed7c663a94.mp4");
					audio.play();
					localStorage.setItem("timelock20", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "ÄLÄ VALEHTELE" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock48");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/8a/ea/8aea348ac92ebe3b.mp4");
					audio.play();
					localStorage.setItem("timelock48", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "NO AIVAN AIVAN AIVAN AIVAN" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock38");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/11/ba/11ba9fd59d74c92b.m4a");
					audio.play();
					localStorage.setItem("timelock38", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "Ei voi muuta sanoo kun hattua nostaa" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock24");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/49/8d/498d8f87186dc57b.mp4");
					audio.play();
					localStorage.setItem("timelock24", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "niinpä niin, niinhän ne kaikki sanoo" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock32");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/8e/88/8e884f33e8b6893c.mp4");
					audio.play();
					localStorage.setItem("timelock32", new Date().getTime());
				}
    		}
    		
    		else if(msg.textContent == "NEEKER JÄSS :D" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock12");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/9f/e8/9fe891b3618fca20.m4a");
					audio.play();
					localStorage.setItem("timelock12", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "Kas niiiin" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock36");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/d9/ae/d9ae7868a420ac0d.m4a");
					audio.play();
					localStorage.setItem("timelock36", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "EI KIINNOSTA" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock34");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/6b/47/6b47203b71b0002d.mp4");
					audio.play();
					localStorage.setItem("timelock34", new Date().getTime());
				}
    		}
    		else if(msg.textContent == "Men dulla edläge bäeväd" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock10");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/eb/23/eb23f53e4a0e4b8a.m4a");
					audio.play();
					localStorage.setItem("timelock10", new Date().getTime());
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
    		}
        }
    );

    observer.observe(messageCont, { childList: true});

	controls.appendChild(kasBtn);
	controls.appendChild(notifBtn);
	controls.appendChild(soundBtn);
	controls.appendChild(emoBtn);
	controls.appendChild(hiljaaBtn);
	controls.appendChild(voissaakeliBtn);
	controls.appendChild(uskoBtn);
	controls.appendChild(dullaBtn);
	controls.appendChild(jassBtn);
	controls.appendChild(turpaBtn);
	controls.appendChild(housutBtn);
	controls.appendChild(saalittavaltaBtn);
	controls.appendChild(niinkoBtn);
	controls.appendChild(kyllaBtn);
	controls.appendChild(hattuBtn);
	controls.appendChild(homoBtn);
	controls.appendChild(antaaollaBtn);
	controls.appendChild(iniBtn);
	controls.appendChild(niinpaBtn);
	controls.appendChild(eikiinnostaBtn);
	controls.appendChild(kasniinBtn);
	controls.appendChild(aivanaivanBtn);
	controls.appendChild(lassehuutsBtn);
	controls.appendChild(enoonahnyBtn);
	controls.appendChild(kivapeppuBtn);
	controls.appendChild(transuBtn);
	controls.appendChild(valehteleBtn);
	controls.appendChild(hyihelvettiBtn);
	controls.appendChild(jesBtn);
	controls.appendChild(loppuBtn);
	controls.appendChild(pilluBtn);
	controls.appendChild(panemisiinBtn);
	controls.appendChild(asiaselvaBtn);
	controls.appendChild(kutenhaluatteBtn);
	controls.appendChild(viisaspaatosBtn);

	setTimeout(() => {
		const msgs = messageCont.getElementsByTagName("div");

		for(let i = 0; i < msgs.length; i++) {
			const msg = msgs[i].querySelector("span:last-of-type");
			if(!msg)
				continue;
			const links = msg.getElementsByTagName("a");
			for(let i = 0; i < links.length; i++) {
				const link = links[i];
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
		}
	}, 200)

	const userlist = document.getElementById("userlist");

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