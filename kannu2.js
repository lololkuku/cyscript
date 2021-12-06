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
	let saalittavaltaBtn = document.createElement("button");
	let homoBtn = document.createElement("button");
	let antaaollaBtn = document.createElement("button");
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
		const time = localStorage.getItem("timelock27");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "ANTAA OLLA SITTE"});
			const audio = new Audio("https://v.ylilauta.org/9e/a5/9ea5c36d5bb7c656.mp4");
			audio.play();
			localStorage.setItem("timelock27", new Date().getTime());
		}
	});

	hattuBtn.className = "btn btn-sm btn-default";
    hattuBtn.style.float = "right";
	hattuBtn.textContent = "hattua nostaa";
	hattuBtn.addEventListener("click", () => {
		const time = localStorage.getItem("timelock23");
		if(!time || new Date().getTime() - +time >= 420000) {
			socket.emit("chatMsg", {msg: "Ei voi muuta sanoo kun hattua nostaa"});
			const audio = new Audio("https://v.ylilauta.org/49/8d/498d8f87186dc57b.mp4");
			audio.play();
			localStorage.setItem("timelock23", new Date().getTime());
		}
	});

	homoBtn.className = "btn btn-sm btn-default";
    homoBtn.style.float = "right";
	homoBtn.textContent = "homo";
	homoBtn.addEventListener("click", () => {
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
    		else if(msg.textContent == "Kyllä" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock22");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/47/09/4709187cf869b10c.mp4");
					audio.play();
					localStorage.setItem("timelock22", new Date().getTime());
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
    		else if(msg.textContent == "tajuatko miten säälittävältä sä kuulostat?" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock18");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/01/2b/012bfbc83b1d6e65.mp4");
					audio.play();
					localStorage.setItem("timelock18", new Date().getTime());
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
    		else if(msg.textContent == "Ei voi muuta sanoo kun hattua nostaa" && username != CLIENT.name) {
    			
				const time = localStorage.getItem("timelock24");
				if(!time || new Date().getTime() - +time > 400000) {
					const audio = new Audio("https://v.ylilauta.org/49/8d/498d8f87186dc57b.mp4");
					audio.play();
					localStorage.setItem("timelock24", new Date().getTime());
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

	SHOWOEKAKI	= getOrDefault('SP_showoekaki',		false);

	// Show oekaki directly on chat

	function showOekakiOnChat(elem) {
		elem.find('a[href$="?oekaki"]').each(function() {
			var link = this.href;
			var block = false;
			if (link.indexOf("//i.imgur.com") > -1) {
				if (window.location.href.indexOf("//cytu.be/") > -1) {
					this.href = DROPBOX + 'bfp7d9u3ep06qad/blocked.png';
					block = true;
				}
				var img = $('<img class="oekakiimg" title="Click to open in a new tab" />')
				  .attr('src', this.href)
				  .load(function() {
					if (SCROLLCHAT) scrollChat();
				  });
	  			$(this).html(img).attr('href', link);
				if (block) {
					$(this).html($(this).html() + ' [[blocked by imgur, click to see]]');
					img.addClass('imgurblock');
				}
			}
		});
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ---------- [SECTION 7] OEKAKI API ---------- */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// API functions
// source: drawingboard.js v0.4.6 - https://github.com/Leimi/drawingboard.js

// Copyright © 2015 Emmanuel Pelletier [Licensed MIT]

function uploadOekaki(pic) {
	upalert = $('<div id="upalert" class="profile-box text-center upalert">Oekaki drawing upload...</div>')
	  .appendTo("#chatwrap");
	upalert.css('top', ($chatwrap.height() - upalert.height()) / 2)
	  .css('left', ($chatwrap.width() - upalert.width()) / 2);
	$("#oeup-btn, #chat-f8").hide();
	if (ImgurClientID == "") ImgurClientID = 'a11c2b9fbdd104a';

	$.ajax({url:'https://api.imgur.com/3/image',
		type:'post',
		headers:{Authorization:'Client-ID ' + ImgurClientID},
		data:{image:pic.replace(/^data:image\/[a-z]+;base64,/,''), type:'base64'},
		dataType:'json',
		success:function(json) {
			socket.emit("chatMsg", {msg:json.data.link + '?oekaki'});
			upalert.remove();
			$("#oeup-btn, #chat-f8").show();
		},
		error:function(json) {
			alert('Error! Try again.');
			upalert.remove();
			$("#oeup-btn, #chat-f8").show();
		}
	});
}

function oekaki() {
	$.getScript(DROPBOX + "sbuj4e1z3dh87z1/oekaki.js", function() {
		OETSTAMP = 0;
		$("#spoekaki").html('');
		$('<link id="oekakicss" rel="stylesheet" type="text/css" />').appendTo("head")
		  .attr('href', DROPBOX + 'syendmytcl4rgzt/oekaki.css');
		var spoekaki = new DrawingBoard.Board('spoekaki', {
			controls:['Color', 'DrawingMode', 'Size', 'Navigation'],
			webStorage:"local",
			droppable:true,
			controlsPosition:"bottom center"
		});
		DrawingBoard.Control.Upload = DrawingBoard.Control.extend({
			name:'Upload',
			initialize:function() {
				$('<button id="oeup-btn" title="send to chat" />').appendTo(this.$el)
				  .html('Send <i class="glyphicon glyphicon-export"></i>')
				this.$el.on('click', '#oeup-btn', $.proxy(function(e) {
					e.preventDefault();
					var time = (new Date()).getTime();
					if ((time - OETSTAMP) > 30000) {
						OETSTAMP = time;
						uploadOekaki(this.board.getImg());
					} else alert('Warning! You can send 1 picture every 30 seconds.');
				}, this));
			}
		});
		spoekaki.addControl('Upload');
		$("#spoekaki .drawing-board-controls").after('<div id="oekaki-checkbox" class="centered" />');
		var html = '<label class="checkbox-inline"><input id="show-oekaki" type="checkbox"><span> '
			 +   'Show drawings directly on chat</span></label>';
		$("#oekaki-checkbox").html(html);
		$("#show-oekaki").on("click", function() {
			if (SHOWOEKAKI) {
				$messagebuffer.find('a[href$="?oekaki"]').each(function() {
  					$(this).html(this.href);
				});
			} else showOekakiOnChat($messagebuffer);
			setOpt('SP_showoekaki', SHOWOEKAKI = !SHOWOEKAKI);
			if (SCROLLCHAT) scrollChat();
		});
		if (SHOWOEKAKI) $("#show-oekaki").prop('checked', true);
		if (SHOWIMAGES) $("#oekaki-checkbox").hide();
		OEKAKILOAD = true;
	});
}


// API HTML elements

$oekakiwrap = $('<div id="oekakiwrap" class="col-lg-12 col-md-12 wells leftareas" />')
  .insertBefore("#notepadwrap").append('<div id="oekaki-well" class="well form-horizontal" />').hide();
$('<div id="spoekaki" class="centered">Loading drawing board...</div>').appendTo("#oekaki-well");
$('<button id="oekaki-btn" class="btn btn-sm btn-default btn-chatctrl" title="Oekaki - drawing board" />')
  .prependTo($chatcontrols).html('<span class="glyphicon glyphicon-picture"></span>')
  .on("click", function() {
	toggleElement($oekakiwrap);
	$(this).toggleClass('btn-success');
	if (typeof OEKAKILOAD === "undefined") OEKAKILOAD = false;
	if (!OEKAKILOAD) oekaki();
  });


})();