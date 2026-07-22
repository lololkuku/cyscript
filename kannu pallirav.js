(() => {
    const input = document.getElementById("chatline");
    const controls = document.getElementById("leftcontrols");
    const messageCont = document.getElementById("messagebuffer");
    const rightpane = document.getElementById("rightpane-inner");

    rightpane.classList.add("marginfix");

    let spamlock = false;
    let spamlock2 = false;
    let enabled = false;
    let tabActive = true;
    let disableBtns = false;
    let btnPressed = false;

    const kasBtn = document.createElement("button");
    const emoBtn = document.createElement("button");
    const soundNotifBtn = document.createElement("button");
    const disableBtn = document.createElement("button");
    const randomEmosBtn = document.createElement("button");
    const randomPipeBtn = document.createElement("button");
    const randomUserBtn = document.createElement("button");

    const tadaa = new Audio("https://i.ylilauta.org/fe/13/fe13e32d5f50131a.m4a");

    const cyPollBtn = document.querySelector("#newpollbtn")    
    const cyEmoBtn = document.getElementById("emotelistbtn");
    cyEmoBtn.style.float = "left";

    const topBtnCont = document.createElement("div")
    topBtnCont.style.overflow = "hidden"

    controls.prepend(topBtnCont)

    topBtnCont.appendChild(cyEmoBtn);
    topBtnCont.appendChild(cyPollBtn);
    topBtnCont.appendChild(disableBtn);
    topBtnCont.appendChild(kasBtn);
    topBtnCont.appendChild(soundNotifBtn);
    topBtnCont.appendChild(emoBtn);
    topBtnCont.appendChild(randomEmosBtn);
    topBtnCont.appendChild(randomPipeBtn)
    topBtnCont.appendChild(randomUserBtn)


        const soundBtns = [
        {
            btnText: "hälytys",
            msg: "ISMOJEN HÄTÄKOKOU",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2247757306bb9c10.mp3"),
        },
        {
            btnText: "OLE HILJAA :D",
            msg: "OLE HILJAA",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c2d61a29e7987290.mp3"),
        },  
        {
            btnText: "ELÄMÄÄ",
            msg: "VOI SAAKELI TÄTÄ ELÄMÄÄ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/5e97fc96f52dfcfa.mp3"),
        },
        {
            btnText: "USKOSEJO",
            msg: "USKOSEJO",
            sound: new Audio("https://lololkuku.github.io/cyaanet/501e48f6f86ce645.mp3"),
        },
        {
            btnText: "men dulla",
            msg: "Men dulla edläge bäeväd",
            sound: new Audio("https://lololkuku.github.io/cyaanet/eb23f53e4a0e4b8a.mp3"),
        },
        {
            btnText: "NEEKER JÄSS",
            msg: "NEEKER JÄSS :D",
            sound: new Audio("https://lololkuku.github.io/cyaanet/9fe891b3618fca20.mp3"),
        },
        {
            btnText: "turpa kiinni sönkkö",
            msg: "si-si-si-si-si-sitte ka-ka-ka-ka-ka-kannattaa pitää turpa kiinni sönkkö",
            sound: new Audio("https://lololkuku.github.io/cyaanet/155c85fd8f03ea3a.mp3"),
        },
        {
            btnText: "housut pois",
            msg: "HOUSUT JA KENGÄT POIS",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ca41516da801c6a6.mp3"),
        },
        {
            btnText: "säälittävältä kuulostat",
            msg: "tajuatko miten säälittävältä sä kuulostat?",
            sound: new Audio("https://lololkuku.github.io/cyaanet/012bfbc83b1d6e65.mp3"),
        },
        {
            btnText: "ai niinkö",
            msg: "ai niinko?",
            sound: new Audio("https://lololkuku.github.io/cyaanet/62285fed7c663a94.mp3"),
        },
        {
            btnText: "kyllä",
            msg: "Kyllä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/4709187cf869b10c.mp3"),
        },
        {
            btnText: "hattua nostaa",
            msg: "Ei voi muuta sanoo kun hattua nostaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/498d8f87186dc57b.mp3"),
        },
        {
            btnText: "homo",
            msg: "Homo",
            sound: new Audio("https://lololkuku.github.io/cyaanet/24b5f6c98b44d186.mp3"),
        },
        {
            btnText: "ANTAA OLLA SITTE",
            msg: "ANTAA OLLA SITTE",
            sound: new Audio("https://lololkuku.github.io/cyaanet/9ea5c36d5bb7c656.mp3"),
        },
        {
            btnText: "INISEMISENJA",
            msg: "NYTSÄLOPETATTONINISEMISENJA",
            sound: new Audio("https://lololkuku.github.io/cyaanet/39694c0de186b64e.mp3"),
        },
        {
            btnText: "niinpä niin",
            msg: "niinpä niin, niinhän ne kaikki sanoo",
            sound: new Audio("https://lololkuku.github.io/cyaanet/8e884f33e8b6893c.mp3"),
        },
        {
            btnText: "EI KIINNOSTA",
            msg: "EI KIINNOSTA",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6b47203b71b0002d.mp3"),
        },
        {
            btnText: "Kas niiiin",
            msg: "Kas niiiin",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d9ae7868a420ac0d.mp3"),
        },
        {
            btnText: "AIVAN AIVAN",
            msg: "NO AIVAN AIVAN AIVAN AIVAN",
            sound: new Audio("https://lololkuku.github.io/cyaanet/11ba9fd59d74c92b.mp3"),
        },
        {
            btnText: "lassepihinä",
            msg: ":lasse  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2e08fb9e5b0109f7.mp3"),
        },
        {
            btnText: "EN OO NÄHNY TISSIÄ",
            msg: "EN OO NÄHNY PILLUA EN OO NÄHNY TISSIÄ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/4dd94d6ee9a12983.mp3"),
        },
        {
            btnText: "kiva peppu",
            msg: "kiva peppu!",
            sound: new Audio("https://lololkuku.github.io/cyaanet/17f3fb4400f58785.mp3"),
        },
        {
            btnText: "transu hiljaa",
            msg: "vitun transu hiljaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/5a7c778952168501.mp3"),
        },
        {
            btnText: "ÄLÄ VALEHTELE",
            msg: "ÄLÄ VALEHTELE",
            sound: new Audio("https://lololkuku.github.io/cyaanet/8aea348ac92ebe3b.mp3"),
        },
        {
            btnText: "hyi helveTTI",
            msg: "hyi helvetti",
            sound: new Audio("https://lololkuku.github.io/cyaanet/46155f0b545e6112.mp3"),
        },
        {
            btnText: "JES",
            msg: ":jes  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6b1f29a03f331cbc.mp3"),
        },
        {
            btnText: "nyt loppu",
            msg: "nyt loppu.",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e49c03d5763fa418.mp3"),
        },
        {
            btnText: "pillu mielessä",
            msg: "pillu mielessä SLRSPLPSRLSPRLSSPRLSPRLURPS",
            sound: new Audio("https://lololkuku.github.io/cyaanet/704b56cacaf9858b.mp3"),
        },
        {
            btnText: "panemisiin",
            msg: "panemisiin",
            sound: new Audio("https://lololkuku.github.io/cyaanet/dc65be05f5ed1a5d.mp3"),
        },
        {
            btnText: "asia selvä",
            msg: "asiahan on sitten sillä selvä senioriittaaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/9d743762a26039fc.mp3"),
        },
        {
            btnText: "aivan kuten haluatte",
            msg: "aivan kuten haluatte ylhäisyys",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c3a460b3dfa6e1a0.mp3"),
        },
        {
            btnText: "viisas päätös",
            msg: "todella viisas päätös teidän ylhäisyys",
            sound: new Audio("https://lololkuku.github.io/cyaanet/336643ca0f44fc92.mp3"),
        },
        {
            btnText: "HALUUTSÄ TURPAAS",
            msg: "HALUUT SÄ TURPAAS",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c98af08255fd8d68.mp3"),
        },
        {
            btnText: "iida",
            msg: "vittu että oot läski :D",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2bdfec2f6966828e.mp3"),
        },
        {
            btnText: "sesmo vaan nauroi",
            msg: ":sesmo vaan nauroi  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/f05a88d710ae770f.mp3"),
        },
        {
            btnText: "se sun homoasia",
            msg: "se sun homoasiaski, se menee ajan myötä ohi",
            sound: new Audio("https://lololkuku.github.io/cyaanet/fc6e60315ccec868.mp3"),
        },
        {
            btnText: "jysähti",
            msg: "no nyt se mulkun seisominen taas alkaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/3ebb0e8ccf847689.mp3"),
        },
        {
            btnText: "mitä?",
            msg: "mitä?",
            sound: new Audio("https://lololkuku.github.io/cyaanet/5df1f7f1548beb5a.mp3"),
        },
        {
            btnText: "hyvä tytinä",
            msg: "mulla on nyt aika hyvä tytinä tästä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/bb0d4fe807297e92.mp3"),
        },
        {
            btnText: "rakastan sinua",
            msg: "musta tuntuu että mä taidan rakastaa sua",
            sound: new Audio("https://lololkuku.github.io/cyaanet/f2e85c12aa20ebcd.mp3"),
        },
        {
            btnText: "älä pelleile",
            msg: "älä pelleile mun kanssa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6661584fb4319d12.mp3"),
        },
        {
            btnText: "nightfever :D",
            msg: ":ismofever  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/f16116d1e54f4c84.mp3"),
        },
        {
            btnText: "ÄIJÄSETTIÄ",
            msg: ":äijäsetti  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ba7603c5f65eeaf1.mp3"),
        },
        {
            btnText: "arvasin",
            msg: ":arvasin  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/78ee2923ee53c365.mp3"),
        },
        {
            btnText: "kahvi",
            msg: ":kahvi  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/f095c349c3b22633.mp3"),
        },
        {
            btnText: "okei rumasti sanottu",
            msg: "okei okei okei se oli rumasti sanottu",
            sound: new Audio("https://lololkuku.github.io/cyaanet/9aeefc0cc59ac5d6.mp3"),
        },
        {
            btnText: "älä lonksuta",
            msg: "älä nyt lonksuta niitä leukojas vaan häivy",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2e3ac0fa44400c3a.mp3"),
        },
        {
            btnText: "mulle passaa",
            msg: "kyllä se mulle vaan passaa :)",
            sound: new Audio("https://lololkuku.github.io/cyaanet/0b8cb5aaea7a907c.mp3"),
        },
        {
            btnText: "pilalla",
            msg: ":pilalla  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d1df4b8be4a7f0f7.mp3"),
        },
        {
            btnText: "leikkiin ryhtyy",
            msg: "KEN LEIKKIIN RYHTYY SE LEIKIN KESTÄKÖÖN",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c32cbd8c1316baa2.mp3"),
        },
        {
            btnText: "MITÄ",
            msg: "MITÄ?",
            sound: new Audio("https://lololkuku.github.io/cyaanet/f78c996b7b8eab69.mp3"),
        },
        {
            btnText: "TUKU TUKU",
            msg: ":pap  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/3bb056114a7b2e90.mp3"),
        },
        {
            btnText: "karamba",
            msg: ":karamba  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/90a85d6d703bdb43.mp3"),
        },
        {
            btnText: "cuckku",
            msg: ":cuckka  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/8fd7183bb671cbe6.mp3"),
        },
        {
            btnText: "kalja tänne",
            msg: "kalja tänne ja heTI",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6869aace33c53a90.mp3"),
        },
        {
            btnText: "huora",
            msg: "HUORA",
            sound: new Audio("https://lololkuku.github.io/cyaanet/47cbe6b0e2a5ac2e.mp3"),
        },
        {
            btnText: "turpa kiinni töihin",
            msg: "MEE KUNNON TÖIHIN JA PIDÄ TURPAS KIINNI",
            sound: new Audio("https://lololkuku.github.io/cyaanet/242dc7f40ce14d75.mp3"),
        },
        {
            btnText: "paha kommentti :(",
            msg: "ei noin saa sanoo kellekään :(",
            sound: new Audio("https://lololkuku.github.io/cyaanet/38be496f0b30d634.mp3"),
        },
        {
            btnText: "cuckki",
            msg: ":cucku  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/26807c30da5a781e.mp3"),
        },
        {
            btnText: "ei kai kaljaa",
            msg: "et kai sää ala nyt kaljaa ottaan",
            sound: new Audio("https://lololkuku.github.io/cyaanet/562a434c6f99156e.mp3"),
        },
        {
            btnText: "säälittävä läppä",
            msg: "ähhähä säälittävä läppä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/7f8f8ff4fd7e88b4.mp3"),
        },
        {
            btnText: "niinii",
            msg: ":niinnii  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c9b4fa100d5758d5.mp3"),
        },
        {
            btnText: "nigrolin",
            msg: "musta mies",
            sound: new Audio("https://lololkuku.github.io/cyaanet/4e655aaa0fbb27b4.mp3"),
        },
        {
            btnText: "olipas hauskaa",
            msg: "olipas se hauskaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/38e057be6725290e.mp3"),
        },
        {
            btnText: "niinvarmaanjoo",
            msg: "joo niin varmaan joo niin varmaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/17d969f7c5dd88f2.mp3"),
        },
        {
            btnText: "heitä voltti",
            msg: "heitä homo voltti",
            sound: new Audio("https://lololkuku.github.io/cyaanet/01e4c828b6926517.mp3"),
        },
        {
            btnText: "humpuukia",
            msg: "vai että semmosta humpuukia",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2ed9c4a94a50d8bc.mp3"),
        },
        {
            btnText: "en ikinä",
            msg: "en ikiNÄ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/86ce82ebf432511b.mp3"),
        },
        {
            btnText: "hyvää yötä",
            msg: "hyvää yötä, jatketaan sitte joskus toiste",
            sound: new Audio("https://lololkuku.github.io/cyaanet/3b22bbcf5ae109ec.mp3"),
        },
        {
            btnText: "mitkäs mehukestit",
            msg: "mitkäs lasten mehukestit täällä on",
            sound: new Audio("https://lololkuku.github.io/cyaanet/63888de66362e15f.mp3"),
        },
        {
            btnText: "turpa kii lutka",
            msg: "turpa kiinni lutka",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e27e63b1de1ae33a.mp3"),
        },
        {
            btnText: "tässä tulee seppo",
            msg: "tässä tulee seppo taalasmaa sula hopsula hei sula hopsansaa :D",
            sound: new Audio("https://lololkuku.github.io/cyaanet/249bf84572255665.mp3"),
        },
        {
            btnText: "supra",
            msg: "mmmmmmmmmmmmmm supra",
            sound: new Audio("https://lololkuku.github.io/cyaanet/fa2c191a7a4ec5a9.mp3"),
        },
        {
            btnText: "epäsensitiivinen tila",
            msg: "tää on musta ensinnäkin todella epämukava, todella epäsensitiivinen turvaton tila tällä hetkellä, et on tosi ikävää et mä oon tässä tilassa joudun tähän keskusteluun tällä tavalla",
            sound: new Audio("https://lololkuku.github.io/cyaanet/365841f2a46b3187.mp3"),
        },
        {
            btnText: "kiitos tiedosta",
            msg: "ahaa okei kiitos vittu tiedosta",
            sound: new Audio("https://lololkuku.github.io/cyaanet/9a58c44564f6cddb.mp3"),
        },
        {
            btnText: "mitä sä kuulustelet",
            msg: "MITÄ SÄ SIINÄ KOKO AJAN KUULUSTELET",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b025ac0c6bb93814.mp3"),
        },
        {
            btnText: "sä helvetin nulkki",
            msg: "sä helvetin nulkki tiedät sen varsin hyvin",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a93b2b4c4d650caf.mp3"),
        },
        {
            btnText: "hyvin oot viihtynyt",
            msg: "hyvin sää siellä netissä oot viihtynyt",
            sound: new Audio("https://lololkuku.github.io/cyaanet/051506a7e2b1ffea.mp3"),
        },
        {
            btnText: "MUA EI MÄÄRÄTÄ",
            msg: "MÄ OON AIKUINEN SÄ ET VOI MUA MÄÄRÄTÄ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/35ec430f7510a342.mp3"),
        },
        {
            btnText: "voisitko painua vittuun",
            msg: "voisitko painua vittuun täältä saatanan hökäle :D",
            sound: new Audio("https://lololkuku.github.io/cyaanet/99e0985a46ca3425.mp3"),
        },
        {
            btnText: "no ei sitte",
            msg: ":jukkakerava  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/84bc5f9e3186e281.mp3"),
        },
        {
            btnText: "olet paskapää",
            msg: "sää oot oikeen paska pää",
            sound: new Audio("https://lololkuku.github.io/cyaanet/82eee9119390691a.mp3"),
        },
        {
            btnText: "niin olinkin",
            msg: "niin olinkin",
            sound: new Audio("https://lololkuku.github.io/cyaanet/814cf7b19bfd770e.mp3"),
        },
        {
            btnText: "ruffnek",
            msg: "DONGGDONGGDONGGDONGG",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d471722670572ddb.mp3"),
        },
        {
            btnText: "ei aina viinaa",
            msg: "ei aina kannata viinaa ottaa mut välillä kannattaa mei",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2d0568e2a465cb0b.mp3"),
        },
        {
            btnText: "DONG DONG DONG",
            msg: ":mäenpystykeskittyy  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6a9fc4c123863d1a.mp3"),
        },
        {
            btnText: "älä kullittele",
            msg: "hei hei älä yhtään kullittele siinä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/0bded1db98ee6a7b.mp3"),
        },
        {
            btnText: "OON ISOSISKO",
            msg: "miten niin, mä oon ISO SISKO",
            sound: new Audio("https://lololkuku.github.io/cyaanet/27f9a8fc9d70e3f3.mp3"),
        },
        {
            btnText: "kauniita unia",
            msg: "kauniita unia beibi",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a1584e56836cb0d7.mp3"),
        },
        {
            btnText: "en tietenkään",
            msg: "eeennn en tietenkään",
            sound: new Audio("https://lololkuku.github.io/cyaanet/09391fb6fed40dc6.mp3"),
        },
        {
            btnText: "skippaappaduuppa",
            msg: ":ami  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ffee75ceee8a3e6b.mp3"),
        },
        {
            btnText: "millos koulu alkaa",
            msg: "mihis aikaan sun koulu alkaa?",
            sound: new Audio("https://lololkuku.github.io/cyaanet/724952f0404cfc7c.mp3"),
        },
        {
            btnText: "puli MITÄ",
            msg: ":pulimitä  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a290514f18880e2d.mp3"),
        },
        {
            btnText: "mikä mättää",
            msg: "mikä vittu tässä nyt mättää",
            sound: new Audio("https://lololkuku.github.io/cyaanet/658167f5fd41a1a5.mp3"),
        },
        {
            btnText: "naurettava pelle",
            msg: "naurettava pelle :D",
            sound: new Audio("https://lololkuku.github.io/cyaanet/cfbdd6d9c6e492b9.mp3"),
        },
        {
            btnText: "tekisit töitä",
            msg: "sä täällä dokaat ja luet lehtiä, tekisit töitä saatanan huuhkaja",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2bce336a9e9ca2af.mp3"),
        },
        {
            btnText: "älä puhu paskaa",
            msg: "älä puhu paskaa saatana",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a61f54f6b689a35b.mp3"),
        },
        {
            btnText: "ala mennä siitä",
            msg: "ala mennä siitä, JA TAKAS EI OO TULEMISTA ENNEN KUN ON DUUNIA",
            sound: new Audio("https://lololkuku.github.io/cyaanet/f9938835e2fa0454.mp3"),
        },
        {
            btnText: "SEKUNTI POIS",
            msg: "SEKUNTI POIS",
            sound: new Audio("https://lololkuku.github.io/cyaanet/eafc6515147c3441.mp3"),
        },
        {
            btnText: "ryyppäämääään",
            msg: ":ryyppäämään  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b46f2b8083f031fd.mp3"),
        },
        {
            btnText: "HILJAA",
            msg: "HILJAA",
            sound: new Audio("https://lololkuku.github.io/cyaanet/abda965b19e12b47.mp3"),
        },
        {
            btnText: "oletettavasti huumeissa",
            msg: "oletettavasti huumeissa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/9669e17b8ddcdea3.mp3"),
        },
        {
            btnText: "ULOS",
            msg: "eikö sana kuulu vai eikö se tehoa?",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2bbb9eae3094aa94.mp3"),
        },
        {
            btnText: "kylläpä imas",
            msg: "kylläpä іmas",
            sound: new Audio("https://lololkuku.github.io/cyaanet/1853f01e58dbbe93.mp3"),
        },
        {
            btnText: "mikä toi on",
            msg: "mikä toi on",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c1523277b9d55369.mp3"),
        },
        {
            btnText: "ei aikaa",
            msg: "kun mulla nyt ei vaan kertakaikkiaan ole aikaa mihinkään sosiaaliseen kanssakäymiseen",
            sound: new Audio("https://lololkuku.github.io/cyaanet/bea44e1c09d64a99.mp3"),
        },
        {
            btnText: "homolta kuulostaa",
            msg: ":artolauri  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/bfb709214b3fb498.mp3"),
        },
        {
            btnText: "haista paska",
            msg: "haista paska",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a4b521265cc5b0a5.mp3"),
        },
        {
            btnText: "en keskustele",
            msg: "minä en keskustele anonyymien kanssa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/717ac543c533bd02.mp3"),
        },
        {
            btnText: "voi tsiisus",
            msg: "voi tsiisus",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6c7bb9a52ff26d45.mp3"),
        },
        {
            btnText: "öitä seppo",
            msg: "lepää rauhassa seppo",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e34e15e2b00aa739.mp3"),
        },
        {
            btnText: "onks tää paskaa",
            msg: "onks tää paskaa mitä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/f37d4f641a462ff5.mp3"),
        },
        {
            btnText: "suu suppuun",
            msg: "suu suppuun eikö sana kuulu",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c51e99b84639690a.mp3"),
        },
        {
            btnText: "kauanko pelleily jatkuu",
            msg: "kuinka kauan tää pelleily jatkuu?",
            sound: new Audio("https://lololkuku.github.io/cyaanet/038d2c1ba508cef0.mp3"),
        },
        {
            btnText: "HÄ",
            msg: "HÄ ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a078b164bc1dbb9c.mp3"),
        },
        {
            btnText: "kannu",
            msg: "täältähän löytyy aika paljonkin vammasten kirjotuksia",
            sound: new Audio("https://lololkuku.github.io/cyaanet/562d76a0efd67605.mp3"),
        },
        {
            btnText: "mene siitä mammanpoika",
            msg: "MENE SENKIN SENKIN MAMMANPOIKA",
            sound: new Audio("https://lololkuku.github.io/cyaanet/fcd90bd0c97fea6d.mp3"),
        },
        {
            btnText: "niin menenkin",
            msg: "NIIN MENENKIN",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ac00559a7b34b5e5.mp3"),
        },
        {
            btnText: "töihin siitä",
            msg: "töihin siitä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ef41b5804e8780ae.mp3"),
        },
        {
            btnText: "teteem :D",
            msg: ":teteem  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/1c5432bd08cb928e.mp3"),
        },
        {
            btnText: "pulihuutis",
            msg: ":pulihuutis  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/76653a6bd18461df.mp3"),
        },
        {
            btnText: "pulihuutis2",
            msg: "/pulihuutis2  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/42a7cfaec5cd7d72.mp3"),
        },
        {
            btnText: "gutvana",
            msg: "sehän teki kutvanaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2bbad01445a881b1.mp3"),
        },
        {
            btnText: "voiks antaa anteeks",
            msg: "voiksä antaa mulle anteeks, voitko",
            sound: new Audio("https://lololkuku.github.io/cyaanet/3882576176deb140.mp3"),
        },
        {
            btnText: "mans gotta do",
            msg: "mans gotta do what a mans gotta do",
            sound: new Audio("https://lololkuku.github.io/cyaanet/64422e04bd9e94b5.mp3"),
        },   
        {
            btnText: "sinä turpa kiinni",
            msg: "sinä turpa kiinni nYT",
            sound: new Audio("https://lololkuku.github.io/cyaanet/37c2407dc9de2073.mp3"),
        }, 
        {
            btnText: "nyt turpa kiinni",
            msg: "ja nyt turpa kiiNNI",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6ac69ee3364212fd.mp3"),
        },
        {
            btnText: "onks pakko mökätä",
            msg: "no onks pakko olla täällä mökäämässä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/7abf0ef4f30c95ee.mp3"),
        },
        {
            btnText: "tosi hauskaa",
            msg: "joo joo on tosi hauskaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/7aa9f1b14c2eb12d.mp3"),
        },
        {
            btnText: "yhen voi ottaa",
            msg: "kyllähän sitä nyt yhen voi ottaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c187beccd9e0c224.mp3"),
        },
        {
            btnText: "tän takia koneen hankin",
            msg: "tän takia mä tän koneen hankin",
            sound: new Audio("https://lololkuku.github.io/cyaanet/dbd6862b5f2ea77d.mp3"),
        },
        {
            btnText: "oot humalas",
            msg: "sä oot humalas",
            sound: new Audio("https://lololkuku.github.io/cyaanet/735ae60f612ea15f.mp3"),
        },
        {
            btnText: "höpöhöpö",
            msg: "höpö höpö höpö höpö höpö",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a924dbe464755111.mp3"),
        },
        {
            btnText: "joojoojojojoj",
            msg: "no joojoojoojoojoojoojoojoo",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c0cdeaf5ac85ba1a.mp3"),
        },
        {
            btnText: "KUOPIJOOOO",
            msg: ":KUOPIIJJOOO  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/3e1f5cf794afa50d.mp3"),
        },
        {
            btnText: "KERRO",
            msg: "KERRO ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/9d9f57a2cfa55f14.mp3"),
        },
        {
            btnText: "idioottien touhua",
            msg: "ihan idioottien touhua se koko tsätti ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/35fed50eb7917309.mp3"),
        },
        {
            btnText: "tsajajajajajai",
            msg: "tsajajajajajai",
            sound: new Audio("https://lololkuku.github.io/cyaanet/180296bca3ffcac6.mp3"),
        },
        {
            btnText: "mut tsajai ismo",
            msg: "mut tsajajajajai ismo",
            sound: new Audio("https://lololkuku.github.io/cyaanet/167e61a9517830d4.mp3"),
        },
        {
            btnText: "hyvä syy dokata",
            msg: "siinähän sulla onki hyvä syy alkaa dokata",
            sound: new Audio("https://lololkuku.github.io/cyaanet/605a83eec2c0ecc7.mp3"),
        },
        {
            btnText: "olutta ON",
            msg: "JA OLUTTA ON",
            sound: new Audio("https://lololkuku.github.io/cyaanet/4e256518c760366f.mp3"),
        },
        {
            btnText: "glögi maistunu",
            msg: "SULLE ON GLÖGI MAISTUNU GINIÄ ON MENNY JUOPPO",
            sound: new Audio("https://lololkuku.github.io/cyaanet/294187eab6a472f1.mp3"),
        },
        {
            btnText: "OSTERI OSSI",
            msg: "sinne meni osteri-ossi joka naisen lossi",
            sound: new Audio("https://lololkuku.github.io/cyaanet/0159ae196f265d74.mp3"),
        },
        {
            btnText: "hoho ei kiinnost",
            msg: "HOHHOHO ei kiinnosta",
            sound: new Audio("https://lololkuku.github.io/cyaanet/069c294c391c1010.mp3"),
        },
        {
            btnText: "mitä iniset",
            msg: "mitä sä oikein iniset mies",
            sound: new Audio("https://lololkuku.github.io/cyaanet/1f002091b1e4756e.mp3"),
        },
        {
            btnText: "kutos jässi",
            msg: "kutos jatsi :D",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e9bd49c80346a896.mp3"),
        },
        {
            btnText: "mä mitään ryyp",
            msg: "mä mitään ryyppää, kuhan vaan huuhdon kaikki huolet ja murheet pois",
            sound: new Audio("https://lololkuku.github.io/cyaanet/4317514f41946b5b.mp3"),
        },
        {
            btnText: "ei",
            msg: ":ismoei  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/97234ae6b76f6535.mp3"),
        },
        {
            btnText: "älä puhu p*skaa",
            msg: "älä puhu pasKAA",
            sound: new Audio("https://lololkuku.github.io/cyaanet/85a900093d06dd02.mp3"),
        },
        {
            btnText: "totuus tekee kipeetä",
            msg: "mä olen todella pahoillani joskus totuus tekee kipeetä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e51c319428ebfb2c.mp3"),
        },  
        {
            btnText: "mitä uhoot",
            msg: "mitä sä oikein uhoot poika",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e450466f61fe2e67.mp3"),
        },
        {
            btnText: "homoja",
            msg: "homoja",
            sound: new Audio("https://lololkuku.github.io/cyaanet/bae1c3766a732cc4.mp3"),
        },
        {
            btnText: "kuka pelleilee",
            msg: "kuka täällä oikein pelleilee",
            sound: new Audio("https://lololkuku.github.io/cyaanet/40f192dae5a69d5f.mp3"),
        },
        {
            btnText: "ullahuutis",
            msg: ":ulla  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/cfc9038156f331af.mp3"),
        },
        {
            btnText: "ja nyt sinä pidät turpas kii",
            msg: ":ismolyö3  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ed1667c100390ac7.mp3"),
        },
        {
            btnText: "en usko",
            msg: "mä en usko sua",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e47562526e074d55.mp3"),
        },
        {
            btnText: "miten voi olla mahollista",
            msg: "miten helkkarissa tämmönen voi olla ees mahdollista",
            sound: new Audio("https://lololkuku.github.io/cyaanet/42375f90ee4c5ee2.mp3"),
        },
        {
            btnText: "takalisto",
            msg: "avaas toi takalisto",
            sound: new Audio("https://lololkuku.github.io/cyaanet/7930d4c1e10fc2aa.mp3"),
        },
        {
            btnText: "kiitoksia",
            msg: "kiitoksia vaan",
            sound: new Audio("https://lololkuku.github.io/cyaanet/0083fcc15aeb8bbc.mp3"),
        },
        {
            btnText: "pitäskö ryyppäämään",
            msg: "pitäskö tässä ruveta ryyppäämään",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b8dca225d06df6c3.mp3"),
        },
        {
            btnText: "hyvää olutta",
            msg: "hyvää olutta",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6136ce7ab90a5c33.mp3"),
        },
        {
            btnText: "eieieiei",
            msg: "eieieieiei nyt sä käsitit ihan väärin",
            sound: new Audio("https://lololkuku.github.io/cyaanet/3973ff2359b8ed80.mp3"),
        },
        {
            btnText: "no ei kai",
            msg: "no ei kai",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6ece1e4f0bf491a1.mp3"),
        },
        {
            btnText: "otaotaotata",
            msg: ":ismosepporyys  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/099a16516976140b.mp3"),
        },
        {
            btnText: "juttus on tyhmiä",
            msg: "onko kukaan kertonut että noi sun juttus on saatanan tyhmiä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/7373ec0a0e970f23.mp3"),
        },
        {
            btnText: "häähä",
            msg: "häähä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a6227939d1d3fc65.mp3"),
        },
        {
            btnText: "kys yourself",
            msg: "tapa ittes",
            sound: new Audio("https://lololkuku.github.io/cyaanet/94a34409062dbbd9.mp3"),
        },
        {
            btnText: "mustalaisia",
            msg: "mustalaisia neekeri",
            sound: new Audio("https://lololkuku.github.io/cyaanet/98bc2b3982b48e6d.mp3"),
        },
        {
            btnText: "jumala töihin",
            msg: "jumala haulaa että sä meet töihin",
            sound: new Audio("https://lololkuku.github.io/cyaanet/96de3353955d4cbc.mp3"),
        },
        {
            btnText: "aattelin ryypätä",
            msg: "/gunnarryys  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/60b10a10a1e6b8f9.mp3"),
        },
        {
            btnText: "älä koske muhun",
            msg: "älä koske muhun, mä oon vammanen",
            sound: new Audio("https://lololkuku.github.io/cyaanet/df3fc86ab15a5a46.mp3"),
        },
        {
            btnText: "monimutkanen kysymys",
            msg: "hohhoijaa olipa monimutkanen kysymys",
            sound: new Audio("https://lololkuku.github.io/cyaanet/88b0b807fbb49395.mp3"),
        },
        {
            btnText: "kirottua",
            msg: "kirottua",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b2e24b53a3221565.mp3"),
        },
        {
            btnText: "hemmettiä",
            msg: "hemmeTTIä oikeesti",
            sound: new Audio("https://lololkuku.github.io/cyaanet/0ea948aa96a20348.mp3"),
        },
        {
            btnText: "sinne meni",
            msg: "ahh sinne meni",
            sound: new Audio("https://lololkuku.github.io/cyaanet/10b87e938a9d0bee.mp3"),
        },
        {
            btnText: "pysähdy pent",
            msg: "pysähdy penteLE",
            sound: new Audio("https://lololkuku.github.io/cyaanet/06994b75d51f5f7c.mp3"),
        },
        {
            btnText: "maahanmuuttajat",
            msg: "kaikki maahanmuuttajat on väkivaltasia rikollisia",
            sound: new Audio("https://lololkuku.github.io/cyaanet/0a5f4eb2a48dedf8.mp3"),
        },
        {
            btnText: "oot oikeessa",
            msg: "sä oot harvinaisen oikeessa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c5fae1f7e4e76904.mp3"),
        },
        {
            btnText: "m molopää",
            msg: "äm niinkun molopää",
            sound: new Audio("https://lololkuku.github.io/cyaanet/504b916c1508f984.mp3"),
        },
        {
            btnText: "piipin",
            msg: "piipin piipin",
            sound: new Audio("https://lololkuku.github.io/cyaanet/185445d3ac9a2901.mp3"),
        },
        {
            btnText: "höpön löpö",
            msg: "ja höpön löpön löppö",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2c1e3c77bce1bfa3.mp3"),
        },
        {
            btnText: "mitä helvettiä",
            msg: "mitä helveTTIä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e54223fffa4ee4d8.mp3"),
        },
        {
            btnText: "varmuudella",
            msg: "n*ekeri melkoisella varmuudella",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ec961e364fcc758a.mp3"),
        },
        {
            btnText: "lohkare",
            msg: "kohta lentää lohkare",
            sound: new Audio("https://lololkuku.github.io/cyaanet/995ced935f253065.mp3"),
        },
        {
            btnText: "tästä se lähtee",
            msg: "joo joo, tästä se lähtee",
            sound: new Audio("https://lololkuku.github.io/cyaanet/797c22009f8de567.mp3"),
        },
        {
            btnText: "sä kuolet",
            msg: "sä kuolet",
            sound: new Audio("https://lololkuku.github.io/cyaanet/89142e6f8d57c185.mp3"),
        },
        {
            btnText: "kebabbia nakkipalkalla",
            msg: ":hitlerismo  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/7acfd75a3de12ca9.mp3"),
        },
        {
            btnText: "nettikiusaaja",
            msg: "sä oot netti kiusaaja",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d513f526fe94dabc.mp3"),
        },
        {
            btnText: "jallu",
            msg: "kyllä mulle jallu kelpaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/af3f9b2ecb819743.mp3"),
        },
        {
            btnText: "emmä tajunnut",
            msg: "emmä tajunnu että sä oot vajonnu noin alas",
            sound: new Audio("https://lololkuku.github.io/cyaanet/853cc5e703415590.mp3"),
        },
        {
            btnText: "naittekote",
            msg: "naitteko te",
            sound: new Audio("https://lololkuku.github.io/cyaanet/188bef05adf7ba33.mp3"),
        },
        {
            btnText: "WOO O",
            msg: "WO O O WOWO WO O O WOO",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e563b30dc218a0ed.mp3"),
        },
        {
            btnText: "ismo dirlandaa",
            msg: ":ismodance  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/56517cd6527df3a6.mp3"),
        },
        {
            btnText: "en ymmärrä",
            msg: "en ymmärrä ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/19770642b212e295.mp3"),
        },
        {
            btnText: "ootko aatellu töihin",
            msg: "ootko ajatellu työpaikkaa hankkia",
            sound: new Audio("https://lololkuku.github.io/cyaanet/5bf28446582f4504.mp3"),
        },
        {
            btnText: "en tiedä",
            msg: "en tiedä, täytyy mennä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/7525f024e5bdf7ce.mp3"),
        },
        {
            btnText: "TURPA KIINNI",
            msg: "TURPA KIINNI",
            sound: new Audio("https://lololkuku.github.io/cyaanet/afdc498ea0ccfacb.mp3"),
        },
        {
            btnText: "ismomitä helvettiä",
            msg: "MITÄ HELVETTIÄ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/cc8b19d82f367deb.mp3"),
        },
        {
            btnText: "sopii yrittää",
            msg: "sopii yrittää",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d0f720f9def1082c.mp3"),
        },
        {
            btnText: "no heii väliä",
            msg: "no heiii mitä väliä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a1d6797fc2783881.mp3"),
        },
        {
            btnText: "ämmien puhetta",
            msg: "ämmien puhetta",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6c95cb98a5c6dab2.mp3"),
        },
        {
            btnText: "seppo suu kii",
            msg: "seppo suus kiinni nyt",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d51fd00dcbbbf2da.mp3"),
        },
        {
            btnText: "meidän malja",
            msg: ":seppomeidänmalja  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e58073a658fb3ce3.mp3"),
        },
        {
            btnText: "ansaitset parasta",
            msg: "tää on just sitä mitä sä ansaitset - kaikkein parasta",
            sound: new Audio("https://lololkuku.github.io/cyaanet/367224fc6df7afce.mp3"),
        },
        {
            btnText: "akiHILJAA",
            msg: "HILJAA   ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/48c7cebf0d2f1be1.mp3"),
        },
        {
            btnText: "eikai mun tilanne",
            msg: "ei kai mun tilanne nyt niin vakava oo",
            sound: new Audio("https://lololkuku.github.io/cyaanet/40f03e90a5b69ae9.mp3"),
        },
        {
            btnText: "lempikeksejä",
            msg: "helveTIn sen lempikeksejä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e0a8df875d9c172a.mp3"),
        },
        {
            btnText: "rotta",
            msg: "roTTA",
            sound: new Audio("https://lololkuku.github.io/cyaanet/91f9c9e9a405a391.mp3"),
        },
        {
            btnText: "putatkaa jo",
            msg: "voi herran pieksut putatkaa nyt jo",
            sound: new Audio("https://lololkuku.github.io/cyaanet/21fcc52b613ae8b9.mp3"),
        },
        {
            btnText: "OO",
            msg: "OO ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d98858da1d28cf4e.mp3"),
        },
        {
            btnText: "pallirave:D",
            msg: ":rave  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/022f446bf1ed39e0.mp3"),
        },
        {
            btnText: "maaali",
            msg: "jeeee maaali",
            sound: new Audio("https://lololkuku.github.io/cyaanet/89bca8236a351178.mp3"),
        },
        {
            btnText: "jallupaukku",
            msg: "jallupaukkukii",
            sound: new Audio("https://lololkuku.github.io/cyaanet/858184812f248d48.mp3"),
        },
        {
            btnText: "laura laura",
            msg: "laura laura laura",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a9bb309c74734265.mp3"),
        },
        {
            btnText: "mä tein sen",
            msg: "MÄ TEIN SEN",
            sound: new Audio("https://lololkuku.github.io/cyaanet/4a35b9a8aa1c92e1.mp3"),
        },
        {
            btnText: "herran pieksut",
            msg: ":herranpieksut  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a5ffba5ba04e11da.mp3"),
        },
        {
            btnText: "turpaki giolo",
            msg: "pidä sinä nyt gigolo se turpas kiinni",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a55a2bb47d54ea7e.mp3"),
        },
        {
            btnText: "oot oikeessa",
            msg: "saatat olla oikeessa, hyvä pointti itse asiassa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/eed2124564abb152.mp3"),
        },
        {
            btnText: "en halua",
            msg: ":enhalua  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/f972bbc3ffeb4c37.mp3"),
        },
        {
            btnText: "svengaa hirvi",
            msg: "svengaa ku HIRVI",
            sound: new Audio("https://lololkuku.github.io/cyaanet/fa2598310243163b.mp3"),
        },
        {
            btnText: "kaapista pois",
            msg: "tuu pois sieltä kaapista",
            sound: new Audio("https://lololkuku.github.io/cyaanet/f71e91b042de8f5a.mp3"),
        },
        {
            btnText: "ooh ahaha cucka",
            msg: "/cuck  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/bbf70790a0abccbb.mp3"),
        },
        {
            btnText: "helvetin helveTTI",
            msg: ":laitelanlaiva  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6e748cc8f6b0bc92.mp3"),
        },
        {
            btnText: "pupheli",
            msg: "semmonen kuumaverinen puppheli ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/8b3c7fef4f94d89c.mp3"),
        },
        {
            btnText: "nirppanokka",
            msg: "kyllä sitä nyt ollaan niin nirppanokkaa niin nirppanokkaa että",
            sound: new Audio("https://lololkuku.github.io/cyaanet/697e9b61d787530d.mp3"),
        },
        {
            btnText: "nukkumaanmenoaika",
            msg: "eikös nyt ala oleen tuommosen nassikan nukkumaanmenoaika",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c7fa07ea75605bce.mp3"),
        },
        {
            btnText: "typeryyksiä",
            msg: "huhhhuh koko sivuhan vilisee kaameita typeryyksiä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/1909c233f9037cce.mp3"),
        },
        {
            btnText: "ryöstö hernesaar",
            msg: "RYÖSTÖ HERNESAARESSA",
            sound: new Audio("https://lololkuku.github.io/cyaanet/7b9e18574d12cb7f.mp3"),
        },
        {
            btnText: "oliko muuta asiaa",
            msg: "oliko muuta asiaa?",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b2eaa816301901cb.mp3"),
        },
        {
            btnText: "pöytä vino",
            msg: "onks tää pöytä jotenkin vino?",
            sound: new Audio("https://lololkuku.github.io/cyaanet/39298a5d601bb87f.mp3"),
        },
        {
            btnText: "eläin",
            msg: "jätkä on eläin",
            sound: new Audio("https://lololkuku.github.io/cyaanet/78089915ddfec10a.mp3"),
        },
        {
            btnText: "juon olutta",
            msg: "minä juon oluttahh",
            sound: new Audio("https://lololkuku.github.io/cyaanet/3500fc49b13e04d1.mp3"),
        },
        {
            btnText: "kusti kulkee",
            msg: "kusti polkee ni posti kulkee poika",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d120c2021dbaf6e7.mp3"),
        },
        {
            btnText: "leikki loppuu",
            msg: "kuule tää leikki loppuu nyT",
            sound: new Audio("https://lololkuku.github.io/cyaanet/8b6eb751b7b585b0.mp3"),
        },
        {
            btnText: "AERGH",
            msg: ":ismomunkki  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d65c89f05ef2fa18.mp3"),
        },
        {
            btnText: "valehteleva lepakko",
            msg: "EN MÄ EDEDES KOSKENU SUHUN SENKIN VALEHTELEVA LEPAKKO",
            sound: new Audio("https://lololkuku.github.io/cyaanet/0d714752b65fb9be.mp3"),
        },
        {
            btnText: "luuseri",
            msg: "luuserii",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2a388a4ba7c5cc55.mp3"),
        },
        {
            btnText: "uudestaan",
            msg: "toi on pakko kattoo uudestaan",
            sound: new Audio("https://lololkuku.github.io/cyaanet/f09fb5ee3d4a2c0b.mp3"),
        },
        {
            btnText: "hieno matsi",
            msg: "no onneks olkoon hieno matsi",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d1a0d2949c41c1c0.mp3"),
        },
        {
            btnText: "turpa tukkoon",
            msg: "tuwpa tukkoon",
            sound: new Audio("https://lololkuku.github.io/cyaanet/686cc939a8a10111.mp3"),
        },
        {
            btnText: "ole hyvä ja poistu",
            msg: "ole hyvä ja poistu",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c44d04b11e3ad73b.mp3"),
        },
        {
            btnText: "kiitos teillekin",
            msg: "kiitos teillekin ja anteeks",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d657637de618964d.mp3"),
        },
        {
            btnText: "haluun olla onnellinen",
            msg: "mä haluun olla onnellinen perkeLE",
            sound: new Audio("https://lololkuku.github.io/cyaanet/96591cc89d975c67.mp3"),
        },
        {
            btnText: "etsä oo kaljoissas?",
            msg: "et suinkaan sä oo vähän kaljoissas?",
            sound: new Audio("https://lololkuku.github.io/cyaanet/29dc32901df640f0.mp3"),
        },
        {
            btnText: "turpa kiinni nyt",
            msg: "turpa kiinni nyt",
            sound: new Audio("https://lololkuku.github.io/cyaanet/5a6ae787549786de.mp3"),
        },
        {
            btnText: "APUA",
            msg: "APUAA TULKAA AUTTAMAAN",
            sound: new Audio("https://lololkuku.github.io/cyaanet/55c5f2fe0ff963c9.mp3"),
        },
        {
            btnText: "en oo yht mitn",
            msg: "mä en oo yhtään mitään, mä oon ihan paska",
            sound: new Audio("https://lololkuku.github.io/cyaanet/603177f150394382.mp3"),
        },
        {
            btnText: "koppava lepakko",
            msg: "koppava lepakko",
            sound: new Audio("https://lololkuku.github.io/cyaanet/037a450f1b4ed8c7.mp3"),
        },
        {
            btnText: "munaton eunukki",
            msg: "munaton eunukki",
            sound: new Audio("https://lololkuku.github.io/cyaanet/9cb25d1062ab53a2.mp3"),
        },
        {
            btnText: "helunaei",
            msg: ":helunaei  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ac498304f9babdd3.mp3"),
        },
        {
            btnText: "vapaaherran elämä",
            msg: "mä oon juhlistanu tätä vapaaherran elämää",
            sound: new Audio("https://lololkuku.github.io/cyaanet/eb32c50ad8323eda.mp3"),
        },
        {
            btnText: "pullaoluet",
            msg: "tuoppas meille kolmelle pullakahvit, tai ei ku tuo meille oluet, tai eikä ku korkkaa sittenkin pullo kuohuvaa",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6b8b558935ef4a2c.mp3"),
        },
        {
            btnText: "välinpitämättömyyttä",
            msg: "mä en kestä tätä vitun välinpitämättömyyttä enää tippaakaan mä lähen vittuun täältä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6612309c15c0e737.mp3"),
        },
        {
            btnText: "NIINKÖ",
            msg: "NIINKÖ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/8b78803092e835e1.mp3"),
        },
        {
            btnText: "melamies valmiina",
            msg: "anytime baby, melamies on aina valmis",
            sound: new Audio("https://lololkuku.github.io/cyaanet/6e705639ad5f99b2.mp3"),
        },
        {
            btnText: "ei kai hämäystä",
            msg: "ettei tää nyt olis jotain hämäystä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e1bb9e64d928bbc7.mp3"),
        },
        {
            btnText: "juopottelin liikaa",
            msg: "/masa2  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/5e6a6109501c636b.mp3"),
        },
        {
            btnText: "haista jukka p*ska",
            msg: "haista sinä jukka iso pasKA ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/3a371fd7849a7167.mp3"),
        },
        {
            btnText: "hieno tarina",
            msg: "no olipa hieno tarina ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/afc8a9639260cfc1.mp3"),
        },
        {
            btnText: "HÄVETKÄÄ",
            msg: "HÄVETKÄÄ ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/927376c243f5e9f9.mp3"),
        },
        {
            btnText: "roope ankka",
            msg: "hemmetin roope ankka ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/68f40594a0159e28.mp3"),
        },
        {
            btnText: "laitelan laiva",
            msg: "nyt on laitelan laiva uponnut ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/bddbfc0f6172b2b3.mp3"),
        },
        {
            btnText: "bailaa rajusti",
            msg: "mää ainakin bailaan huomenna aika rajusti ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/3b6a82d537350431.mp3"),
        },
        {
            btnText: "tyttöystävää",
            msg: "mulla ei oo vieläkään tyttöystävää ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/bc4fae5808e1c6b4.mp3"),
        },
        {
            btnText: "rehellinen työ",
            msg: "se on niin poijjaat että rehellinen työ ei oo koskaan kannattanu, eikä kannata ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/fdedaa5f3988d971.mp3"),
        },
        {
            btnText: "vitun homo",
            msg: "vitun homo. HOMO ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/4036eecbf2a885a5.mp3"),
        },
        {
            btnText: "KÄRPÄNEN",
            msg: "KÄRPÄNE ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/307d20dd58ebae8d.mp3"),
        },
        {
            btnText: "hei oot homo",
            msg: "hei, sä oot homo ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ab90858d5c6a3ead.mp3"),
        },
        {
            btnText: "emmä niin tyhmä oo",
            msg: "no emmä niin tyhmä oo ettenkö mä tämmösiä juttuja tajuais. jos oot homo niin oot ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e6c236bcc6768e9b.mp3"),
        },
        {
            btnText: "tytöt on tyhmiä",
            msg: "tytöt on tyhmi ä ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/92c19c12df26e68d.mp3"),
        },
        {
            btnText: "hemmeTTI",
            msg: "voi hemmeTTI ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/bf5dcfe62f052ae1.mp3"),
        },
        {
            btnText: "ulos täälTÄ",
            msg: "ja nyt ulos täälTÄ ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ed244cc7dab361e1.mp3"),
        },
        {
            btnText: "ossikännit",
            msg: "/osteri harkitsee ryys  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/a49007ca04764d1f.mp3"),
        },
        {
            btnText: "mitä oot tehnyt",
            msg: "MITÄ SÄ OOT TEHNY",
            sound: new Audio("https://lololkuku.github.io/cyaanet/1df0ab945b86f490.mp3"),
        },
        {
            btnText: "pitäny pellenä",
            msg: "TE KAIKKI PITÄNY MUA IHAN PELLENÄ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ba248f5d3ab71646.mp3"),
        },
        {
            btnText: "s*ntakasa",
            msg: "sä olet mitätön sontakasa ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b7db775616dbf2ea.mp3"),
        },
        {
            btnText: "sekaan vaan",
            msg: "sekaan vaan jos kiinnostaa ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d8a703affc52b54c.mp3"),
        },
        {
            btnText: "huoripukit",
            msg: "pitäkää toisenne huoripukit ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/e7d3ac9e3f5c1939.mp3"),
        },
        {
            btnText: "kaljaa kohtuudella",
            msg: "mutta eikö sitä kaljaa voi ottaa kohtuuttomasti niiku sivistyneet ihmiset ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d47acc86f542add3.mp3"),
        },
        {
            btnText: "hyvin menee",
            msg: "hyvin menee. jes jes ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/1a94b3ff1be6fb95.mp3"),
        },
        {
            btnText: "OSSILLE",
            msg: ":ismoriehuu  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b8f8e546d5bc34ed.mp3"),
        },
        {
            btnText: "perhanan perhana",
            msg: "voi perhanan perhana sun kanssas ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b7b9eeef60bd2906.mp3"),
        },
        {
            btnText: "kebab kastiketta",
            msg: ":kurjahuijarinpainajainen  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/2dfcb458868fa34e.mp3"),
        },
        {
            btnText: "nappeja tänne",
            msg: ":nappeja  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/02c9f74e1237a3de.mp3"),
        },
        {
            btnText: ":mikkeli",
            msg: ":mikkeli  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c54d9204d6402b2a.mp3"),
        },
        {
            btnText: "ei mitään asiaa",
            msg: "tänne sulla ei oo mitään asiaa ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/44a9d4c79857a6af.mp3"),
        },
        {
            btnText: "tehkää mitä haluatte",
            msg: "hyvä on. tehkää ihan mitä haluatte. juokaa naikaa tappakaa vaikka ittenne en minä välitä",
            sound: new Audio("https://lololkuku.github.io/cyaanet/757b9a068eb97a97.mp3"),
        },
        {
            btnText: "aiai",
            msg: "aiaiaiaiaiaiAI",
            sound: new Audio("https://lololkuku.github.io/cyaanet/1b05b230541ed800.mp3"),
        },
        {
            btnText: "eiei",
            msg: "eieieieieieiEI",
            sound: new Audio("https://lololkuku.github.io/cyaanet/1b05b230541ed800.mp3"),
        },
        {
            btnText: "voi helvetin",
            msg: "no voi helvetin helvetti",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b58349018b82b702.mp3"),
        },
        {
            btnText: "paha paikka",
            msg: "mulla on nyt pikkasen paha paikka",
            sound: new Audio("https://lololkuku.github.io/cyaanet/ea76244ca22d63c8.mp3"),
        },
        {
            btnText: "mitähelkkaria",
            msg: "mitä helk karia",
            sound: new Audio("https://lololkuku.github.io/cyaanet/30128eb2eb481611.mp3"),
        },
        {
            btnText: "korkea aika töihin",
            msg: "sun on korkea aika mennä töihin ja lopettaa laiskottelu",
            sound: new Audio("https://lololkuku.github.io/cyaanet/da01f1885d516907.mp3"),
        },
        {
            btnText: "valehteleva paska",
            msg: "valehteleva paska ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/d02073f469f3ccc5.mp3"),
        },
        {
            btnText: "tissuttelee ittekseen",
            msg: "mistä lähtien sä oot ruvennu tissuttelemaan ittekses ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/5579f4243a8414d4.mp3"),
        },
        {
            btnText: "koko pullo meni",
            msg: "ja sitte menikin koko pullo että hupsista vaan ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/cb3d4553acdae8e2.mp3"),
        },
        {
            btnText: "mulla ei oo sanottavaa",
            msg: "mulla ei oo mitään sanottavAA ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b0cff532531f9384.mp3"),
        },
        {
            btnText: "alkoholin ongelma",
            msg: "sulla on alkoholiongelma ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/7080e72480c3e941.mp3"),
        },
        {
            btnText: "selvetin helvetin",
            msg: "aissselvetin helveTIn ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/b668b1b46a932b48.mp3"),
        },
        {
            btnText: "aaaATSAJAJA",
            msg: ":tsajajaja  ",
            sound: new Audio("https://lololkuku.github.io/cyaanet/c3c554ffad203705.mp3"),
        }
    ]

    const soundMsgs = [];
    //const soundNames = [];

    window.addEventListener("focus", () => { tabActive = true; })
    window.addEventListener("blur", () => { tabActive = false; })

    for(let i = 0; i < soundBtns.length; i++) {
        const btn = soundBtns[i];
        const text = btn.btnText;
        const msg = btn.msg;
        const sound = btn.sound;

        soundMsgs.push(msg);
        CHANNEL.emotes.push({name: msg});

        //soundNames.push(text);

        const btnEl = document.createElement("button");

        btnEl.textContent = text;
        btnEl.className = "btn btn-sm btn-default aaninappi";
        btnEl.style.float = "right";

        btnEl.addEventListener("click", () => {

            if(disableBtns)
                return;

            const time = localStorage.getItem(text + "_timelock");

            // if(!time || (text != "pallirave:D" && new Date().getTime() - +time >= 420000) || (new Date().getTime() - +time >= 3600000)) {
            if(true) {

                if(spamlock)
                    return;

                spamlock = false;
                setTimeout(() => {spamlock = false}, 3000)

                if(text == "ULOS") {
                    btnPressed = true;
                    setTimeout(() => { socket.emit("chatMsg", {msg: "/shout ULOS"}) }, 5500)
                }
                else if(text == "kannu") {
                    btnPressed = true;
                    setTimeout(() => { socket.emit("chatMsg", {msg: ":jablog"}) }, 5200)
                }

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
            for(let i = 0; i < soundBtns.length; i++) {
                const sound = soundBtns[i].sound;
                if(!sound.paused)
                    sound.load();
            }
            disableBtns = true;
            disableBtn.textContent = "unmuteta ääninapit";
        }

        const btns = document.getElementsByClassName("aaninappi");
        for(let i = 0; i < btns.length; i++)
            btns[i].style.display = disableBtns ? "none" : "inline-block";

        if(rightpane.classList.contains("marginfix"))
            rightpane.classList.remove("marginfix");
        else
            rightpane.classList.add("marginfix");
    });

    emoBtn.className = "btn btn-sm btn-default";
    emoBtn.style.float = "right";
    emoBtn.textContent = "Random emo";
    emoBtn.addEventListener("click", () => {
        if(spamlock)
            return;

        spamlock = false;

        //temp 3000
        setTimeout(() => {spamlock = false}, 3000)
        socket.emit("chatMsg", {msg: CHANNEL.emotes[Math.floor(Math.random() * CHANNEL.emotes.length)].name + " random. "})
    });

    randomUserBtn.className = "btn btn-sm btn-default";
    randomUserBtn.style.float = "right";
    randomUserBtn.textContent = "Random käyttäjä";
    randomUserBtn.addEventListener("click", () => {
        if(spamlock)
            return;

        spamlock = false;

        //temp 3000
        setTimeout(() => {spamlock = false}, 3000)
        const users = [...document.querySelectorAll("#userlist div span:nth-child(2)")]
        let randomUser = users[Math.floor(Math.random() * users.length)].textContent
        randomUser = randomUser.slice(0,1) + "​" + randomUser.slice(1)
        socket.emit("chatMsg", {msg:"-"})
        socket.emit("chatMsg", {msg: randomUser});
        socket.emit("chatMsg", {msg:"random."})
    });

    randomPipeBtn.className = "btn btn-sm btn-default";
    randomPipeBtn.style.float = "right";
    randomPipeBtn.textContent = "Random pipe";
    randomPipeBtn.addEventListener("click", () => {
        if(spamlock)
            return;

        spamlock = false;

        //temp 3000
        setTimeout(() => {spamlock = false}, 3000)
        socket.emit("chatMsg", {msg: "-"});
        socket.emit("chatMsg", {msg: CHANNEL.emotes[Math.floor(Math.random() * CHANNEL.emotes.length)].name})
        socket.emit("chatMsg", {msg: ":pippeli"});
    });

    randomEmosBtn.className = "btn btn-sm btn-default";
    randomEmosBtn.style.float = "right";
    randomEmosBtn.textContent = "Random emo3x";
    randomEmosBtn.addEventListener("click", () => {
        if(spamlock2)
            return;
    
        spamlock2 = false;
        setTimeout(() => {spamlock2 = false}, 60000)
        socket.emit("chatMsg", {msg: "+ " + CHANNEL.emotes[Math.floor(Math.random() * CHANNEL.emotes.length)].name + " " + CHANNEL.emotes[Math.floor(Math.random() * CHANNEL.emotes.length)].name + " " + CHANNEL.emotes[Math.floor(Math.random() * CHANNEL.emotes.length)].name + " +"})
    });

    kasBtn.className = "btn btn-sm btn-default";
    kasBtn.style.float = "right";
    kasBtn.textContent = "kass :D";
    kasBtn.addEventListener("click", () => {
        let extra = 0;
        let kass = ["-", ":pitkäkisu1", ":pitkäkisu2", ":pitkäkisu3"];

        (async () => {
            if(spamlock)
                return;

            spamlock = false;
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
            if(msgs[msgs.length - 1].classList.contains("small-emos")) {
                msg = msgs[msgs.length - 1];
                const emotes = msg.getElementsByClassName("channel-emote");

                msg.innerHTML += " <span class='randomEmo'>RANDOM</span>";

                for(let i = 0; i < emotes.length; i++) {
                    const emote = emotes[i];

                    emote.onclick = () => {
                        if(input.value.length == 0)
                            input.value = emote.getAttribute("title") + " ";
                        else if(input.value[input.value.length - 1] == " ")
                            input.value += emote.getAttribute("title") + " ";
                        else
                            input.value += " " + emote.getAttribute("title") + " ";
                        input.focus();
                    }
                }

                return;
            }
            let msgText = msg.textContent;
            let msgTextSound = "";

            if(msgText.slice(msgText.length - 9, msgText.length) == " random. ")
                msgTextSound = msgText.slice(0,msgText.length-9)

            msgTextSound = msgTextSound === "" ? msgText : msgTextSound;

            if(messageCont.scrollHeight - messageCont.scrollTop === messageCont.clientHeight) {
                setTimeout(() => { messageCont.scrollTo(0, messageCont.scrollHeight) }, 300);
            }

    // const username = msg.parentElement.className.split(" ")[0].split("-")[2];
            const username = msg.parentElement.className.split(" ")[0].substring(9);

            let soundIndex = soundMsgs.indexOf(msgTextSound);

            if(msg.childNodes.length === 2 && msg.childNodes[0].nodeType === 1 && msg.childNodes[1].nodeType === 3 && (msg.childNodes[1].textContent === "  " || msg.childNodes[1].textContent === "   ")) {
                const emoTitle = msg.childNodes[0].getAttribute("title");
                soundIndex = soundMsgs.indexOf(emoTitle + "  ");
            }

            if(soundIndex == -1 && msgTextSound[msgTextSound.length - 1] == " ") 
                soundIndex = soundMsgs.indexOf(msgTextSound.slice(0, msgTextSound.length - 1));

            if(soundIndex > -1) {
                const soundBtn = soundBtns[soundIndex];
                const text = soundBtn.btnText;
                const sound = soundBtn.sound;
                const time = localStorage.getItem(text + "_timelock2");
                const myTime = localStorage.getItem(text + "_timelock");

                if(username == CLIENT.name || (!disableBtns && (!time || (new Date().getTime() - +time > 400000)))) {
                    
                    if(username != CLIENT.name) {
                        localStorage.setItem(text + "_timelock2", new Date().getTime());
                        sound.play();
                    }
                    else if(!disableBtns) {
                        localStorage.setItem(text + "_timelock", new Date().getTime());
                        sound.play();

                        if(text == "ULOS" && !btnPressed)
                            setTimeout(() => { socket.emit("chatMsg", {msg: "/shout ULOS"}) }, 4700)
                        else if(text == "kannu" && !btnPressed)
                            setTimeout(() => { socket.emit("chatMsg", {msg: ":jablog"}) }, 5200)

                        btnPressed = false;
                    }
                }
            }
            else if(enabled && (!tabActive || document.hidden)) {
                tadaa.play();
            }

            if(msgText === "!roll" && username === CLIENT.name) {
                const rnd = Math.floor((Math.random() * 100)+1);
                socket.emit("chatMsg", {msg: "/me rolled " + rnd});
            }

            if(msgText.split(" ").length === 2 && msgText.split(" ")[1].split(":").length === 3 && document.getElementById("ytapiplayer_html5_api")) {
                const vidEl = document.getElementById("ytapiplayer_html5_api");
                const seconds = getSeconds(msgText.split(" ")[1]);
                vidEl.currentTime = seconds;
            }
            if((msgText === "synccistä" && username === CLIENT.name) || (msgText.split(" ").length === 2 && msgText.split(" ")[0] === `${CLIENT.name}:` && msgText.split(" ")[1] === "sync")) {
                const vidEl = document.getElementById("ytapiplayer_html5_api");
                socket.emit("chatMsg", {msg: `:ismo ${getTimeFromSeconds(vidEl.currentTime)}`})
            }

            if(msgText === "!roll") {
                msg.innerHTML += ' <img class="channel-emote" src="https://c.tenor.com/1ghY8kGML2sAAAAC/pepe-apu.gif" title=":roll">';
            }

            if(msgText.slice(0,6) == "!kysy " && msgText.length > 6 && username == CLIENT.name) {
                const kysymys = encodeURIComponent(msgText.slice(6));
                
                fetch("https://kannubotti.herokuapp.com/?" + kysymys, {headers: {"kysymys": "kys"}}).then(res => res.text()).then(text => {
                    socket.emit("chatMsg", {msg: "`" + text + "`"})
                })
            }

            if(username == CLIENT.name && msgText == "!napit") {
                const btns = document.querySelectorAll(".aaninappi").length;
                socket.emit("chatMsg", {msg: "nappeja: " + btns + " kpl :ismokolme"})
            }

            if(msgText == "random.")
                msg.innerHTML = "<span class='randomEmo'>RANDOM</span>"
 
            if(msg.innerHTML.split(" <").length == 2 && msg.innerHTML.split(" <")[0] == "pipe") {
                const msgParentClassname = msg.parentElement.className;
                msg.remove();
                if(msgParentClassname == "chat-msg-" + CLIENT.name) {
                    socket.emit("chatMsg", {msg: msg.getElementsByTagName("img")[0].getAttribute("title")});
                    socket.emit("chatMsg", {msg: ":pippeli"});
                }
            }

            if(msg.children.length === 1 && msg.querySelector("img") && msg.querySelector("img").getAttribute("title") === ":pippeli") {
                const prevMsg = msg.parentElement.previousElementSibling?.querySelector('span:last-of-type')
                const prevEmo = prevMsg?.querySelector("img")
                if(prevMsg && prevMsg.children.length === 1 && prevEmo) {
                    console.log("jeess")
                    console.log(prevEmo)
                    prevEmo.classList.add("pipenaama")                  
                }
            }

            else {
                const links = msg.getElementsByTagName("a");
                for(let i = 0; i < links.length; i++) {
                    const link = links[i];
                    handleLink(link);
                }
            }
            if(msgText.slice(msgText.length - 9, msgText.length) == " random. " && msg.innerHTML.split(">").length == 2) {
                let msgHtml = msg.innerHTML.split(">");
                msgHtml[1] = " <span class='randomEmo'>RANDOM</span>";
                msgHtml = msgHtml.join(">");
                msg.innerHTML = msgHtml;
            }
                //(msgText.slice(msgText.length - 9, msgText.length) == " random. " && soundIndex > -1)
            else if(msgText.slice(msgText.length - 9, msgText.length) == " random. ") {
                let msgHtml = msg.innerHTML.slice(0,msgText.length-9);
                msgHtml += " <span class='randomEmo'>RANDOM</span>";
                msg.innerHTML = msgHtml;
            }

            const emotes = msg.getElementsByClassName("channel-emote");

            for(let i = 0; i < emotes.length; i++) {
                const emote = emotes[i];

                emote.onclick = () => {
                    if(input.value.length == 0)
                        input.value = emote.getAttribute("title") + " ";
                    else if(input.value[input.value.length - 1] == " ")
                        input.value += emote.getAttribute("title") + " ";
                    else
                        input.value += " " + emote.getAttribute("title") + " ";
                    input.focus();
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

        const emotes = document.getElementsByClassName("channel-emote");

        for(let i = 0; i < emotes.length; i++) {
            const emote = emotes[i];

            emote.onclick = () => {
                if(input.value.length == 0)
                    input.value = emote.getAttribute("title") + " ";
                else if(input.value[input.value.length - 1] == " ")
                    input.value += emote.getAttribute("title") + " ";
                else
                    input.value += " " + emote.getAttribute("title") + " ";
                input.focus();
            }
        }

        input.onkeydown = e => {
            if(e.key !== "Tab") {
                const esi = document.getElementById("emo-esi");
                if(esi)
                    esi.remove();
                return;
            }
            for(let i = 0; i < CHANNEL.emotes.length; i++) {
                if(input.value.slice(0, input.selectionStart).endsWith(CHANNEL.emotes[i]["name"]) || input.value.slice(0, input.selectionStart).endsWith(CHANNEL.emotes[i]["name"] + " ")) {
                    let esi = document.getElementById("emo-esi");
                    if(!esi) {
                        esi = document.createElement("img");
                        esi.id = "emo-esi";
                        esi.style.position = "absolute";
                        esi.style.left = "15px";
                        esi.style.top = 0;
                        esi.style.zIndex = 999;
                        esi.style.width = "150px";
                        controls.appendChild(esi);
                    }
                    esi.src = CHANNEL.emotes[i].image;
                    break;
                }
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
            const url = isTubeUrl(link.href);
            const video = document.createElement("iframe");
            video.width = 450;
            video.height = 315;
            video.style.verticalAlign = "middle";
            video.src = "https://www.youtube.com/embed/" + url.split("?v=")[1];
            video.setAttribute("frameborder", 0);
            video.setAttribute("allowfullscreen", true);

            video.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            link.parentElement.replaceChild(video, link);
        }
    }

    setInterval(() => {
        for(let i = 0; i < CHANNEL.emotes.length; i++) {
            const emoName = CHANNEL.emotes[i]["name"];
            if(emoName === "ISMOJEN HÄTÄKOKOU")
                return;
        }
        for(let i = 0; i < soundBtns.length; i++) {
            const btn = soundBtns[i];
            const msg = btn.msg;

            CHANNEL.emotes.push({name: msg});
        }

    }, 1000);

    function isImgUrl(str) {
        const regex = new RegExp(/(https?:\/\/.*\.(?:png|jpg|gif|jpeg|avif|AVIF|PNG|JPG|GIF|JPEG|webp|WEBP))/);
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
        return str.indexOf("watch?v=") > 0 ? str.slice(0,43) : false;
    }
    function time(ms) {
        return new Promise(resolve => { setTimeout(resolve, ms) });
    }
    function getSeconds(str) {
        str = str.split(":");

        let h = +str[0];
        let m = +str[1];
        let s = +str[2];

        h = h*3600;
        m = m*60;

        return h+m+s;
    }

    function getTimeFromSeconds(seconds) {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        secs = String(secs).padStart(2, '0');

        return `${hours}:${minutes}:${secs.split(".")[0]}`;
    }
})();
