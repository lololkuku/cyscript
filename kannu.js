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

    const tadaa = new Audio("https://i.ylilauta.org/fe/13/fe13e32d5f50131a.m4a");

    const cyEmoBtn = document.getElementById("emotelistbtn");
    cyEmoBtn.style.float = "left";

    controls.appendChild(cyEmoBtn);
    controls.appendChild(disableBtn);
    controls.appendChild(kasBtn);
    controls.appendChild(soundNotifBtn);
    controls.appendChild(emoBtn);
    controls.appendChild(randomEmosBtn);

    const soundBtns = [
        {
            btnText: "hälytys",
            msg: "ISMOJEN HÄTÄKOKOU",
            sound: new Audio("https://i.ylilauta.org/22/47/2247757306bb9c10.mp4"),
        },
        {
            btnText: "OLE HILJAA :D",
            msg: "OLE HILJAA",
            sound: new Audio("https://i.ylilauta.org/c2/d6/c2d61a29e7987290.m4a"),
        },  
        {
            btnText: "ELÄMÄÄ",
            msg: "VOI SAAKELI TÄTÄ ELÄMÄÄ",
            sound: new Audio("https://i.ylilauta.org/5e/97/5e97fc96f52dfcfa.m4a"),
        },
        {
            btnText: "USKOSEJO",
            msg: "USKOSEJO",
            sound: new Audio("https://i.ylilauta.org/50/1e/501e48f6f86ce645.m4a"),
        },
        {
            btnText: "men dulla",
            msg: "Men dulla edläge bäeväd",
            sound: new Audio("https://i.ylilauta.org/eb/23/eb23f53e4a0e4b8a.m4a"),
        },
        {
            btnText: "NEEKER JÄSS",
            msg: "NEEKER JÄSS :D",
            sound: new Audio("https://i.ylilauta.org/9f/e8/9fe891b3618fca20.m4a"),
        },
        {
            btnText: "turpa kiinni sönkkö",
            msg: "si-si-si-si-si-sitte ka-ka-ka-ka-ka-kannattaa pitää turpa kiinni sönkkö",
            sound: new Audio("https://i.ylilauta.org/15/5c/155c85fd8f03ea3a.mp4"),
        },
        {
            btnText: "housut pois",
            msg: "HOUSUT JA KENGÄT POIS",
            sound: new Audio("https://i.ylilauta.org/ca/41/ca41516da801c6a6.mp4"),
        },
        {
            btnText: "säälittävältä kuulostat",
            msg: "tajuatko miten säälittävältä sä kuulostat?",
            sound: new Audio("https://i.ylilauta.org/01/2b/012bfbc83b1d6e65.mp4"),
        },
        {
            btnText: "ai niinkö",
            msg: "ai niinko?",
            sound: new Audio("https://i.ylilauta.org/62/28/62285fed7c663a94.mp4"),
        },
        {
            btnText: "kyllä",
            msg: "Kyllä",
            sound: new Audio("https://i.ylilauta.org/47/09/4709187cf869b10c.mp4"),
        },
        {
            btnText: "hattua nostaa",
            msg: "Ei voi muuta sanoo kun hattua nostaa",
            sound: new Audio("https://i.ylilauta.org/49/8d/498d8f87186dc57b.mp4"),
        },
        {
            btnText: "homo",
            msg: "Homo",
            sound: new Audio("https://i.ylilauta.org/24/b5/24b5f6c98b44d186.mp4"),
        },
        {
            btnText: "ANTAA OLLA SITTE",
            msg: "ANTAA OLLA SITTE",
            sound: new Audio("https://i.ylilauta.org/9e/a5/9ea5c36d5bb7c656.mp4"),
        },
        {
            btnText: "INISEMISENJA",
            msg: "NYTSÄLOPETATTONINISEMISENJA",
            sound: new Audio("https://i.ylilauta.org/39/69/39694c0de186b64e.mp4"),
        },
        {
            btnText: "niinpä niin",
            msg: "niinpä niin, niinhän ne kaikki sanoo",
            sound: new Audio("https://i.ylilauta.org/8e/88/8e884f33e8b6893c.mp4"),
        },
        {
            btnText: "EI KIINNOSTA",
            msg: "EI KIINNOSTA",
            sound: new Audio("https://i.ylilauta.org/6b/47/6b47203b71b0002d.mp4"),
        },
        {
            btnText: "Kas niiiin",
            msg: "Kas niiiin",
            sound: new Audio("https://i.ylilauta.org/d9/ae/d9ae7868a420ac0d.m4a"),
        },
        {
            btnText: "AIVAN AIVAN",
            msg: "NO AIVAN AIVAN AIVAN AIVAN",
            sound: new Audio("https://i.ylilauta.org/11/ba/11ba9fd59d74c92b.m4a"),
        },
        {
            btnText: "lassepihinä",
            msg: ":lasse  ",
            sound: new Audio("https://i.ylilauta.org/2e/08/2e08fb9e5b0109f7.m4a"),
        },
        {
            btnText: "EN OO NÄHNY TISSIÄ",
            msg: "EN OO NÄHNY PILLUA EN OO NÄHNY TISSIÄ",
            sound: new Audio("https://i.ylilauta.org/4d/d9/4dd94d6ee9a12983.m4a"),
        },
        {
            btnText: "kiva peppu",
            msg: "kiva peppu!",
            sound: new Audio("https://i.ylilauta.org/17/f3/17f3fb4400f58785.m4a"),
        },
        {
            btnText: "transu hiljaa",
            msg: "vitun transu hiljaa",
            sound: new Audio("https://i.ylilauta.org/5a/7c/5a7c778952168501.mp4"),
        },
        {
            btnText: "ÄLÄ VALEHTELE",
            msg: "ÄLÄ VALEHTELE",
            sound: new Audio("https://i.ylilauta.org/8a/ea/8aea348ac92ebe3b.mp4"),
        },
        {
            btnText: "hyi helveTTI",
            msg: "hyi helvetti",
            sound: new Audio("https://i.ylilauta.org/46/15/46155f0b545e6112.mp4"),
        },
        {
            btnText: "JES",
            msg: ":jes  ",
            sound: new Audio("https://i.ylilauta.org/6b/1f/6b1f29a03f331cbc.mp4"),
        },
        {
            btnText: "nyt loppu",
            msg: "nyt loppu.",
            sound: new Audio("https://i.ylilauta.org/e4/9c/e49c03d5763fa418.mp4"),
        },
        {
            btnText: "pillu mielessä",
            msg: "pillu mielessä SLRSPLPSRLSPRLSSPRLSPRLURPS",
            sound: new Audio("https://i.ylilauta.org/70/4b/704b56cacaf9858b.m4a"),
        },
        {
            btnText: "panemisiin",
            msg: "panemisiin",
            sound: new Audio("https://i.ylilauta.org/dc/65/dc65be05f5ed1a5d.m4a"),
        },
        {
            btnText: "asia selvä",
            msg: "asiahan on sitten sillä selvä senioriittaaa",
            sound: new Audio("https://i.ylilauta.org/9d/74/9d743762a26039fc.m4a"),
        },
        {
            btnText: "aivan kuten haluatte",
            msg: "aivan kuten haluatte ylhäisyys",
            sound: new Audio("https://i.ylilauta.org/c3/a4/c3a460b3dfa6e1a0.m4a"),
        },
        {
            btnText: "viisas päätös",
            msg: "todella viisas päätös teidän ylhäisyys",
            sound: new Audio("https://i.ylilauta.org/33/66/336643ca0f44fc92.m4a"),
        },
        {
            btnText: "HALUUTSÄ TURPAAS",
            msg: "HALUUT SÄ TURPAAS",
            sound: new Audio("https://i.ylilauta.org/c9/8a/c98af08255fd8d68.mp4"),
        },
        {
            btnText: "iida",
            msg: "vittu että oot läski :D",
            sound: new Audio("https://i.ylilauta.org/2b/df/2bdfec2f6966828e.mp4"),
        },
        {
            btnText: "sesmo vaan nauroi",
            msg: ":sesmo vaan nauroi  ",
            sound: new Audio("https://i.ylilauta.org/f0/5a/f05a88d710ae770f.mp4"),
        },
        {
            btnText: "se sun homoasia",
            msg: "se sun homoasiaski, se menee ajan myötä ohi",
            sound: new Audio("https://i.ylilauta.org/fc/6e/fc6e60315ccec868.mp4"),
        },
        {
            btnText: "jysähti",
            msg: "no nyt se mulkun seisominen taas alkaa",
            sound: new Audio("https://i.ylilauta.org/3e/bb/3ebb0e8ccf847689.mp4"),
        },
        {
            btnText: "mitä?",
            msg: "mitä?",
            sound: new Audio("https://i.ylilauta.org/5d/f1/5df1f7f1548beb5a.mp4"),
        },
        {
            btnText: "hyvä tytinä",
            msg: "mulla on nyt aika hyvä tytinä tästä",
            sound: new Audio("https://i.ylilauta.org/bb/0d/bb0d4fe807297e92.mp4"),
        },
        {
            btnText: "rakastan sinua",
            msg: "musta tuntuu että mä taidan rakastaa sua",
            sound: new Audio("https://i.ylilauta.org/f2/e8/f2e85c12aa20ebcd.mp4"),
        },
        {
            btnText: "älä pelleile",
            msg: "älä pelleile mun kanssa",
            sound: new Audio("https://i.ylilauta.org/66/61/6661584fb4319d12.mp4"),
        },
        {
            btnText: "nightfever :D",
            msg: ":ismofever  ",
            sound: new Audio("https://i.ylilauta.org/f1/61/f16116d1e54f4c84.mp4"),
        },
        {
            btnText: "ÄIJÄSETTIÄ",
            msg: ":äijäsetti  ",
            sound: new Audio("https://i.ylilauta.org/ba/76/ba7603c5f65eeaf1.mp4"),
        },
        {
            btnText: "arvasin",
            msg: ":arvasin  ",
            sound: new Audio("https://i.ylilauta.org/78/ee/78ee2923ee53c365.mp4"),
        },
        {
            btnText: "kahvi",
            msg: ":kahvi  ",
            sound: new Audio("https://i.ylilauta.org/f0/95/f095c349c3b22633.m4a"),
        },
        {
            btnText: "okei rumasti sanottu",
            msg: "okei okei okei se oli rumasti sanottu",
            sound: new Audio("https://i.ylilauta.org/9a/ee/9aeefc0cc59ac5d6.mp4"),
        },
        {
            btnText: "älä lonksuta",
            msg: "älä nyt lonksuta niitä leukojas vaan häivy",
            sound: new Audio("https://i.ylilauta.org/2e/3a/2e3ac0fa44400c3a.mp4"),
        },
        {
            btnText: "mulle passaa",
            msg: "kyllä se mulle vaan passaa :)",
            sound: new Audio("https://i.ylilauta.org/0b/8c/0b8cb5aaea7a907c.mp4"),
        },
        {
            btnText: "pilalla",
            msg: ":pilalla  ",
            sound: new Audio("https://i.ylilauta.org/d1/df/d1df4b8be4a7f0f7.m4a"),
        },
        {
            btnText: "leikkiin ryhtyy",
            msg: "KEN LEIKKIIN RYHTYY SE LEIKIN KESTÄKÖÖN",
            sound: new Audio("https://i.ylilauta.org/c3/2c/c32cbd8c1316baa2.mp4"),
        },
        {
            btnText: "MITÄ",
            msg: "MITÄ?",
            sound: new Audio("https://i.ylilauta.org/f7/8c/f78c996b7b8eab69.mp4"),
        },
        {
            btnText: "TUKU TUKU",
            msg: ":pap  ",
            sound: new Audio("https://i.ylilauta.org/3b/b0/3bb056114a7b2e90.m4a"),
        },
        {
            btnText: "karamba",
            msg: ":karamba  ",
            sound: new Audio("https://i.ylilauta.org/90/a8/90a85d6d703bdb43.m4a"),
        },
        {
            btnText: "cuckku",
            msg: ":cuckka  ",
            sound: new Audio("https://i.ylilauta.org/8f/d7/8fd7183bb671cbe6.m4a"),
        },
        {
            btnText: "kalja tänne",
            msg: "kalja tänne ja heTI",
            sound: new Audio("https://i.ylilauta.org/68/69/6869aace33c53a90.mp4"),
        },
        {
            btnText: "huora",
            msg: "HUORA",
            sound: new Audio("https://i.ylilauta.org/47/cb/47cbe6b0e2a5ac2e.mp4"),
        },
        {
            btnText: "turpa kiinni töihin",
            msg: "MEE KUNNON TÖIHIN JA PIDÄ TURPAS KIINNI",
            sound: new Audio("https://i.ylilauta.org/24/2d/242dc7f40ce14d75.mp4"),
        },
        {
            btnText: "paha kommentti :(",
            msg: "ei noin saa sanoo kellekään :(",
            sound: new Audio("https://i.ylilauta.org/38/be/38be496f0b30d634.mp4"),
        },
        {
            btnText: "cuckki",
            msg: ":cucku  ",
            sound: new Audio("https://i.ylilauta.org/26/80/26807c30da5a781e.m4a"),
        },
        {
            btnText: "ei kai kaljaa",
            msg: "et kai sää ala nyt kaljaa ottaan",
            sound: new Audio("https://i.ylilauta.org/56/2a/562a434c6f99156e.mp4"),
        },
        {
            btnText: "säälittävä läppä",
            msg: "ähhähä säälittävä läppä",
            sound: new Audio("https://i.ylilauta.org/7f/8f/7f8f8ff4fd7e88b4.m4a"),
        },
        {
            btnText: "niinii",
            msg: ":niinnii  ",
            sound: new Audio("https://i.ylilauta.org/c9/b4/c9b4fa100d5758d5.mp4"),
        },
        {
            btnText: "nigrolin",
            msg: "musta mies",
            sound: new Audio("https://i.ylilauta.org/4e/65/4e655aaa0fbb27b4.mp4"),
        },
        {
            btnText: "olipas hauskaa",
            msg: "olipas se hauskaa",
            sound: new Audio("https://i.ylilauta.org/38/e0/38e057be6725290e.m4a"),
        },
        {
            btnText: "niinvarmaanjoo",
            msg: "joo niin varmaan joo niin varmaa",
            sound: new Audio("https://i.ylilauta.org/17/d9/17d969f7c5dd88f2.mp4"),
        },
        {
            btnText: "heitä voltti",
            msg: "heitä homo voltti",
            sound: new Audio("https://i.ylilauta.org/01/e4/01e4c828b6926517.m4a"),
        },
        {
            btnText: "humpuukia",
            msg: "vai että semmosta humpuukia",
            sound: new Audio("https://i.ylilauta.org/2e/d9/2ed9c4a94a50d8bc.m4a"),
        },
        {
            btnText: "en ikinä",
            msg: "en ikiNÄ",
            sound: new Audio("https://i.ylilauta.org/86/ce/86ce82ebf432511b.mp4"),
        },
        {
            btnText: "hyvää yötä",
            msg: "hyvää yötä, jatketaan sitte joskus toiste",
            sound: new Audio("https://i.ylilauta.org/3b/22/3b22bbcf5ae109ec.m4a"),
        },
        {
            btnText: "mitkäs mehukestit",
            msg: "mitkäs lasten mehukestit täällä on",
            sound: new Audio("https://i.ylilauta.org/63/88/63888de66362e15f.m4a"),
        },
        {
            btnText: "turpa kii lutka",
            msg: "turpa kiinni lutka",
            sound: new Audio("https://i.ylilauta.org/e2/7e/e27e63b1de1ae33a.mp4"),
        },
        {
            btnText: "tässä tulee seppo",
            msg: "tässä tulee seppo taalasmaa sula hopsula hei sula hopsansaa :D",
            sound: new Audio("https://i.ylilauta.org/24/9b/249bf84572255665.m4a"),
        },
        {
            btnText: "supra",
            msg: "mmmmmmmmmmmmmm supra",
            sound: new Audio("https://i.ylilauta.org/fa/2c/fa2c191a7a4ec5a9.m4a"),
        },
        {
            btnText: "epäsensitiivinen tila",
            msg: "tää on musta ensinnäkin todella epämukava, todella epäsensitiivinen turvaton tila tällä hetkellä, et on tosi ikävää et mä oon tässä tilassa joudun tähän keskusteluun tällä tavalla",
            sound: new Audio("https://i.ylilauta.org/36/58/365841f2a46b3187.mp4"),
        },
        {
            btnText: "kiitos tiedosta",
            msg: "ahaa okei kiitos vittu tiedosta",
            sound: new Audio("https://i.ylilauta.org/9a/58/9a58c44564f6cddb.mp4"),
        },
        {
            btnText: "mitä sä kuulustelet",
            msg: "MITÄ SÄ SIINÄ KOKO AJAN KUULUSTELET",
            sound: new Audio("https://i.ylilauta.org/b0/25/b025ac0c6bb93814.mp4"),
        },
        {
            btnText: "sä helvetin nulkki",
            msg: "sä helvetin nulkki tiedät sen varsin hyvin",
            sound: new Audio("https://i.ylilauta.org/a9/3b/a93b2b4c4d650caf.mp4"),
        },
        {
            btnText: "hyvin oot viihtynyt",
            msg: "hyvin sää siellä netissä oot viihtynyt",
            sound: new Audio("https://i.ylilauta.org/05/15/051506a7e2b1ffea.mp4"),
        },
        {
            btnText: "MUA EI MÄÄRÄTÄ",
            msg: "MÄ OON AIKUINEN SÄ ET VOI MUA MÄÄRÄTÄ",
            sound: new Audio("https://i.ylilauta.org/35/ec/35ec430f7510a342.m4a"),
        },
        {
            btnText: "voisitko painua vittuun",
            msg: "voisitko painua vittuun täältä saatanan hökäle :D",
            sound: new Audio("https://i.ylilauta.org/99/e0/99e0985a46ca3425.m4a"),
        },
        {
            btnText: "no ei sitte",
            msg: ":jukkakerava  ",
            sound: new Audio("https://i.ylilauta.org/84/bc/84bc5f9e3186e281.m4a"),
        },
        {
            btnText: "olet paskapää",
            msg: "sää oot oikeen paska pää",
            sound: new Audio("https://i.ylilauta.org/82/ee/82eee9119390691a.m4a"),
        },
        {
            btnText: "niin olinkin",
            msg: "niin olinkin",
            sound: new Audio("https://i.ylilauta.org/81/4c/814cf7b19bfd770e.m4a"),
        },
        {
            btnText: "ruffnek",
            msg: "DONGGDONGGDONGGDONGG",
            sound: new Audio("https://i.ylilauta.org/d4/71/d471722670572ddb.m4a"),
        },
        {
            btnText: "ei aina viinaa",
            msg: "ei aina kannata viinaa ottaa mut välillä kannattaa mei",
            sound: new Audio("https://i.ylilauta.org/2d/05/2d0568e2a465cb0b.mp4"),
        },
        {
            btnText: "DONG DONG DONG",
            msg: ":mäenpystykeskittyy  ",
            sound: new Audio("https://i.ylilauta.org/6a/9f/6a9fc4c123863d1a.m4a"),
        },
        {
            btnText: "älä kullittele",
            msg: "hei hei älä yhtään kullittele siinä",
            sound: new Audio("https://i.ylilauta.org/0b/de/0bded1db98ee6a7b.m4a"),
        },
        {
            btnText: "OON ISOSISKO",
            msg: "miten niin, mä oon ISO SISKO",
            sound: new Audio("https://i.ylilauta.org/27/f9/27f9a8fc9d70e3f3.m4a"),
        },
        {
            btnText: "kauniita unia",
            msg: "kauniita unia beibi",
            sound: new Audio("https://i.ylilauta.org/a1/58/a1584e56836cb0d7.m4a"),
        },
        {
            btnText: "en tietenkään",
            msg: "eeennn en tietenkään",
            sound: new Audio("https://i.ylilauta.org/09/39/09391fb6fed40dc6.mp4"),
        },
        {
            btnText: "skippaappaduuppa",
            msg: ":ami  ",
            sound: new Audio("https://i.ylilauta.org/ff/ee/ffee75ceee8a3e6b.m4a"),
        },
        {
            btnText: "millos koulu alkaa",
            msg: "mihis aikaan sun koulu alkaa?",
            sound: new Audio("https://i.ylilauta.org/72/49/724952f0404cfc7c.mp4"),
        },
        {
            btnText: "puli MITÄ",
            msg: ":pulimitä  ",
            sound: new Audio("https://i.ylilauta.org/a2/90/a290514f18880e2d.mp4"),
        },
        {
            btnText: "mikä mättää",
            msg: "mikä vittu tässä nyt mättää",
            sound: new Audio("https://i.ylilauta.org/65/81/658167f5fd41a1a5.m4a"),
        },
        {
            btnText: "naurettava pelle",
            msg: "naurettava pelle :D",
            sound: new Audio("https://i.ylilauta.org/cf/bd/cfbdd6d9c6e492b9.mp4"),
        },
        {
            btnText: "tekisit töitä",
            msg: "sä täällä dokaat ja luet lehtiä, tekisit töitä saatanan huuhkaja",
            sound: new Audio("https://i.ylilauta.org/2b/ce/2bce336a9e9ca2af.m4a"),
        },
        {
            btnText: "älä puhu paskaa",
            msg: "älä puhu paskaa saatana",
            sound: new Audio("https://i.ylilauta.org/a6/1f/a61f54f6b689a35b.mp4"),
        },
        {
            btnText: "ala mennä siitä",
            msg: "ala mennä siitä, JA TAKAS EI OO TULEMISTA ENNEN KUN ON DUUNIA",
            sound: new Audio("https://i.ylilauta.org/f9/93/f9938835e2fa0454.m4a"),
        },
        {
            btnText: "SEKUNTI POIS",
            msg: "SEKUNTI POIS",
            sound: new Audio("https://i.ylilauta.org/ea/fc/eafc6515147c3441.m4a"),
        },
        {
            btnText: "ryyppäämääään",
            msg: ":ryyppäämään  ",
            sound: new Audio("https://i.ylilauta.org/b4/6f/b46f2b8083f031fd.m4a"),
        },
        {
            btnText: "HILJAA",
            msg: "HILJAA",
            sound: new Audio("https://i.ylilauta.org/ab/da/abda965b19e12b47.m4a"),
        },
        {
            btnText: "oletettavasti huumeissa",
            msg: "oletettavasti huumeissa",
            sound: new Audio("https://i.ylilauta.org/96/69/9669e17b8ddcdea3.mp4"),
        },
        {
            btnText: "ULOS",
            msg: "eikö sana kuulu vai eikö se tehoa?",
            sound: new Audio("https://i.ylilauta.org/2b/bb/2bbb9eae3094aa94.mp4"),
        },
        {
            btnText: "kylläpä imas",
            msg: "kylläpä іmas",
            sound: new Audio("https://i.ylilauta.org/18/53/1853f01e58dbbe93.m4a"),
        },
        {
            btnText: "mikä toi on",
            msg: "mikä toi on",
            sound: new Audio("https://i.ylilauta.org/c1/52/c1523277b9d55369.mp4"),
        },
        {
            btnText: "ei aikaa",
            msg: "kun mulla nyt ei vaan kertakaikkiaan ole aikaa mihinkään sosiaaliseen kanssakäymiseen",
            sound: new Audio("https://i.ylilauta.org/be/a4/bea44e1c09d64a99.mp4"),
        },
        {
            btnText: "homolta kuulostaa",
            msg: ":artolauri  ",
            sound: new Audio("https://i.ylilauta.org/bf/b7/bfb709214b3fb498.mp4"),
        },
        {
            btnText: "haista paska",
            msg: "haista paska",
            sound: new Audio("https://i.ylilauta.org/a4/b5/a4b521265cc5b0a5.m4a"),
        },
        {
            btnText: "en keskustele",
            msg: "minä en keskustele anonyymien kanssa",
            sound: new Audio("https://i.ylilauta.org/71/7a/717ac543c533bd02.m4a"),
        },
        {
            btnText: "voi tsiisus",
            msg: "voi tsiisus",
            sound: new Audio("https://i.ylilauta.org/6c/7b/6c7bb9a52ff26d45.m4a"),
        },
        {
            btnText: "öitä seppo",
            msg: "lepää rauhassa seppo",
            sound: new Audio("https://i.ylilauta.org/e3/4e/e34e15e2b00aa739.mp4"),
        },
        {
            btnText: "onks tää paskaa",
            msg: "onks tää paskaa mitä",
            sound: new Audio("https://i.ylilauta.org/f3/7d/f37d4f641a462ff5.m4a"),
        },
        {
            btnText: "suu suppuun",
            msg: "suu suppuun eikö sana kuulu",
            sound: new Audio("https://i.ylilauta.org/c5/1e/c51e99b84639690a.m4a"),
        },
        {
            btnText: "kauanko pelleily jatkuu",
            msg: "kuinka kauan tää pelleily jatkuu?",
            sound: new Audio("https://i.ylilauta.org/03/8d/038d2c1ba508cef0.mp4"),
        },
        {
            btnText: "HÄ",
            msg: "HÄ ",
            sound: new Audio("https://i.ylilauta.org/a0/78/a078b164bc1dbb9c.m4a"),
        },
        {
            btnText: "kannu",
            msg: "täältähän löytyy aika paljonkin vammasten kirjotuksia",
            sound: new Audio("https://i.ylilauta.org/56/2d/562d76a0efd67605.mp4"),
        },
        {
            btnText: "mene siitä mammanpoika",
            msg: "MENE SENKIN SENKIN MAMMANPOIKA",
            sound: new Audio("https://i.ylilauta.org/fc/d9/fcd90bd0c97fea6d.mp4"),
        },
        {
            btnText: "niin menenkin",
            msg: "NIIN MENENKIN",
            sound: new Audio("https://i.ylilauta.org/ac/00/ac00559a7b34b5e5.mp4"),
        },
        {
            btnText: "töihin siitä",
            msg: "töihin siitä",
            sound: new Audio("https://i.ylilauta.org/ef/41/ef41b5804e8780ae.mp4"),
        },
        {
            btnText: "teteem :D",
            msg: ":teteem  ",
            sound: new Audio("https://i.ylilauta.org/1c/54/1c5432bd08cb928e.m4a"),
        },
        {
            btnText: "pulihuutis",
            msg: ":pulihuutis  ",
            sound: new Audio("https://i.ylilauta.org/76/65/76653a6bd18461df.m4a"),
        },
        {
            btnText: "pulihuutis2",
            msg: "/pulihuutis2  ",
            sound: new Audio("https://i.ylilauta.org/42/a7/42a7cfaec5cd7d72.m4a"),
        },
        {
            btnText: "gutvana",
            msg: "sehän teki kutvanaa",
            sound: new Audio("https://i.ylilauta.org/2b/ba/2bbad01445a881b1.m4a"),
        },
        {
            btnText: "voiks antaa anteeks",
            msg: "voiksä antaa mulle anteeks, voitko",
            sound: new Audio("https://i.ylilauta.org/38/82/3882576176deb140.m4a"),
        },
        {
            btnText: "mans gotta do",
            msg: "mans gotta do what a mans gotta do",
            sound: new Audio("https://i.ylilauta.org/64/42/64422e04bd9e94b5.mp4"),
        },   
        {
            btnText: "sinä turpa kiinni",
            msg: "sinä turpa kiinni nYT",
            sound: new Audio("https://i.ylilauta.org/37/c2/37c2407dc9de2073.m4a"),
        }, 
        {
            btnText: "nyt turpa kiinni",
            msg: "ja nyt turpa kiiNNI",
            sound: new Audio("https://i.ylilauta.org/6a/c6/6ac69ee3364212fd.mp4"),
        },
        {
            btnText: "onks pakko mökätä",
            msg: "no onks pakko olla täällä mökäämässä",
            sound: new Audio("https://i.ylilauta.org/7a/bf/7abf0ef4f30c95ee.m4a"),
        },
        {
            btnText: "tosi hauskaa",
            msg: "joo joo on tosi hauskaa",
            sound: new Audio("https://i.ylilauta.org/7a/a9/7aa9f1b14c2eb12d.m4a"),
        },
        {
            btnText: "yhen voi ottaa",
            msg: "kyllähän sitä nyt yhen voi ottaa",
            sound: new Audio("https://i.ylilauta.org/c1/87/c187beccd9e0c224.m4a"),
        },
        {
            btnText: "tän takia koneen hankin",
            msg: "tän takia mä tän koneen hankin",
            sound: new Audio("https://i.ylilauta.org/db/d6/dbd6862b5f2ea77d.mp4"),
        },
        {
            btnText: "oot humalas",
            msg: "sä oot humalas",
            sound: new Audio("https://i.ylilauta.org/73/5a/735ae60f612ea15f.m4a"),
        },
        {
            btnText: "höpöhöpö",
            msg: "höpö höpö höpö höpö höpö",
            sound: new Audio("https://i.ylilauta.org/a9/24/a924dbe464755111.m4a"),
        },
        {
            btnText: "joojoojojojoj",
            msg: "no joojoojoojoojoojoojoojoo",
            sound: new Audio("https://i.ylilauta.org/c0/cd/c0cdeaf5ac85ba1a.m4a"),
        },
        {
            btnText: "KUOPIJOOOO",
            msg: ":KUOPIIJJOOO  ",
            sound: new Audio("https://i.ylilauta.org/3e/1f/3e1f5cf794afa50d.mp4"),
        },
        {
            btnText: "KERRO",
            msg: "KERRO ",
            sound: new Audio("https://i.ylilauta.org/9d/9f/9d9f57a2cfa55f14.mp4"),
        },
        {
            btnText: "idioottien touhua",
            msg: "ihan idioottien touhua se koko tsätti ",
            sound: new Audio("https://i.ylilauta.org/35/fe/35fed50eb7917309.m4a"),
        },
        {
            btnText: "tsajajajajajai",
            msg: "tsajajajajajai",
            sound: new Audio("https://i.ylilauta.org/18/02/180296bca3ffcac6.mp4"),
        },
        {
            btnText: "mut tsajai ismo",
            msg: "mut tsajajajajai ismo",
            sound: new Audio("https://i.ylilauta.org/16/7e/167e61a9517830d4.mp4"),
        },
        {
            btnText: "hyvä syy dokata",
            msg: "siinähän sulla onki hyvä syy alkaa dokata",
            sound: new Audio("https://i.ylilauta.org/60/5a/605a83eec2c0ecc7.mp4"),
        },
        {
            btnText: "olutta ON",
            msg: "JA OLUTTA ON",
            sound: new Audio("https://i.ylilauta.org/4e/25/4e256518c760366f.m4a"),
        },
        {
            btnText: "glögi maistunu",
            msg: "SULLE ON GLÖGI MAISTUNU GINIÄ ON MENNY JUOPPO",
            sound: new Audio("https://i.ylilauta.org/29/41/294187eab6a472f1.mp4"),
        },
        {
            btnText: "OSTERI OSSI",
            msg: "sinne meni osteri-ossi joka naisen lossi",
            sound: new Audio("https://i.ylilauta.org/01/59/0159ae196f265d74.m4a"),
        },
        {
            btnText: "hoho ei kiinnost",
            msg: "HOHHOHO ei kiinnosta",
            sound: new Audio("https://i.ylilauta.org/06/9c/069c294c391c1010.mp4"),
        },
        {
            btnText: "mitä iniset",
            msg: "mitä sä oikein iniset mies",
            sound: new Audio("https://i.ylilauta.org/1f/00/1f002091b1e4756e.mp4"),
        },
        {
            btnText: "kutos jässi",
            msg: "kutos jatsi :D",
            sound: new Audio("https://i.ylilauta.org/e9/bd/e9bd49c80346a896.m4a"),
        },
        {
            btnText: "mä mitään ryyp",
            msg: "mä mitään ryyppää, kuhan vaan huuhdon kaikki huolet ja murheet pois",
            sound: new Audio("https://i.ylilauta.org/43/17/4317514f41946b5b.mp4"),
        },
        {
            btnText: "ei",
            msg: ":ismoei  ",
            sound: new Audio("https://i.ylilauta.org/97/23/97234ae6b76f6535.mp4"),
        },
        {
            btnText: "älä puhu p*skaa",
            msg: "älä puhu pasKAA",
            sound: new Audio("https://i.ylilauta.org/85/a9/85a900093d06dd02.mp4"),
        },
        {
            btnText: "totuus tekee kipeetä",
            msg: "mä olen todella pahoillani joskus totuus tekee kipeetä",
            sound: new Audio("https://i.ylilauta.org/e5/1c/e51c319428ebfb2c.mp4"),
        },  
        {
            btnText: "mitä uhoot",
            msg: "mitä sä oikein uhoot poika",
            sound: new Audio("https://i.ylilauta.org/e4/50/e450466f61fe2e67.mp4"),
        },
        {
            btnText: "homoja",
            msg: "homoja",
            sound: new Audio("https://i.ylilauta.org/ba/e1/bae1c3766a732cc4.mp4"),
        },
        {
            btnText: "kuka pelleilee",
            msg: "kuka täällä oikein pelleilee",
            sound: new Audio("https://i.ylilauta.org/40/f1/40f192dae5a69d5f.mp4"),
        },
        {
            btnText: "ullahuutis",
            msg: ":ulla  ",
            sound: new Audio("https://i.ylilauta.org/61/93/619353bae560a537.m4a"),
        },
        {
            btnText: "ja nyt sinä pidät turpas kii",
            msg: ":ismolyö3  ",
            sound: new Audio("https://i.ylilauta.org/ed/16/ed1667c100390ac7.mp4"),
        },
        {
            btnText: "en usko",
            msg: "mä en usko sua",
            sound: new Audio("https://i.ylilauta.org/e4/75/e47562526e074d55.mp4"),
        },
        {
            btnText: "miten voi olla mahollista",
            msg: "miten helkkarissa tämmönen voi olla ees mahdollista",
            sound: new Audio("https://i.ylilauta.org/42/37/42375f90ee4c5ee2.mp4"),
        },
        {
            btnText: "takalisto",
            msg: "avaas toi takalisto",
            sound: new Audio("https://i.ylilauta.org/79/30/7930d4c1e10fc2aa.m4a"),
        },
        {
            btnText: "kiitoksia",
            msg: "kiitoksia vaan",
            sound: new Audio("https://i.ylilauta.org/00/83/0083fcc15aeb8bbc.m4a"),
        },
        {
            btnText: "pitäskö ryyppäämään",
            msg: "pitäskö tässä ruveta ryyppäämään",
            sound: new Audio("https://i.ylilauta.org/b8/dc/b8dca225d06df6c3.m4a"),
        },
        {
            btnText: "hyvää olutta",
            msg: "hyvää olutta",
            sound: new Audio("https://i.ylilauta.org/61/36/6136ce7ab90a5c33.mp4"),
        },
        {
            btnText: "eieieiei",
            msg: "eieieieiei nyt sä käsitit ihan väärin",
            sound: new Audio("https://i.ylilauta.org/39/73/3973ff2359b8ed80.mp4"),
        },
        {
            btnText: "no ei kai",
            msg: "no ei kai",
            sound: new Audio("https://i.ylilauta.org/6e/ce/6ece1e4f0bf491a1.m4a"),
        },
        {
            btnText: "otaotaotata",
            msg: ":ismosepporyys  ",
            sound: new Audio("https://i.ylilauta.org/09/9a/099a16516976140b.m4a"),
        },
        {
            btnText: "juttus on tyhmiä",
            msg: "onko kukaan kertonut että noi sun juttus on saatanan tyhmiä",
            sound: new Audio("https://i.ylilauta.org/73/73/7373ec0a0e970f23.mp4"),
        },
        {
            btnText: "häähä",
            msg: "häähä",
            sound: new Audio("https://i.ylilauta.org/a6/22/a6227939d1d3fc65.mp4"),
        },
        {
            btnText: "kys yourself",
            msg: "tapa ittes",
            sound: new Audio("https://i.ylilauta.org/94/a3/94a34409062dbbd9.m4a"),
        },
        {
            btnText: "mustalaisia",
            msg: "mustalaisia neekeri",
            sound: new Audio("https://i.ylilauta.org/98/bc/98bc2b3982b48e6d.m4a"),
        },
        {
            btnText: "jumala töihin",
            msg: "jumala haulaa että sä meet töihin",
            sound: new Audio("https://i.ylilauta.org/96/de/96de3353955d4cbc.mp4"),
        },
        {
            btnText: "aattelin ryypätä",
            msg: "/gunnarryys  ",
            sound: new Audio("https://i.ylilauta.org/60/b1/60b10a10a1e6b8f9.m4a"),
        },
        {
            btnText: "älä koske muhun",
            msg: "älä koske muhun, mä oon vammanen",
            sound: new Audio("https://i.ylilauta.org/df/3f/df3fc86ab15a5a46.m4a"),
        },
        {
            btnText: "monimutkanen kysymys",
            msg: "hohhoijaa olipa monimutkanen kysymys",
            sound: new Audio("https://i.ylilauta.org/88/b0/88b0b807fbb49395.mp4"),
        },
        {
            btnText: "kirottua",
            msg: "kirottua",
            sound: new Audio("https://i.ylilauta.org/b2/e2/b2e24b53a3221565.mp4"),
        },
        {
            btnText: "hemmettiä",
            msg: "hemmeTTIä oikeesti",
            sound: new Audio("https://i.ylilauta.org/0e/a9/0ea948aa96a20348.m4a"),
        },
        {
            btnText: "sinne meni",
            msg: "ahh sinne meni",
            sound: new Audio("https://i.ylilauta.org/10/b8/10b87e938a9d0bee.m4a"),
        },
        {
            btnText: "pysähdy pent",
            msg: "pysähdy penteLE",
            sound: new Audio("https://i.ylilauta.org/06/99/06994b75d51f5f7c.m4a"),
        },
        {
            btnText: "maahanmuuttajat",
            msg: "kaikki maahanmuuttajat on väkivaltasia rikollisia",
            sound: new Audio("https://i.ylilauta.org/0a/5f/0a5f4eb2a48dedf8.m4a"),
        },
        {
            btnText: "oot oikeessa",
            msg: "sä oot harvinaisen oikeessa",
            sound: new Audio("https://i.ylilauta.org/c5/fa/c5fae1f7e4e76904.mp4"),
        },
        {
            btnText: "m molopää",
            msg: "äm niinkun molopää",
            sound: new Audio("https://i.ylilauta.org/50/4b/504b916c1508f984.m4a"),
        },
        {
            btnText: "piipin",
            msg: "piipin piipin",
            sound: new Audio("https://i.ylilauta.org/18/54/185445d3ac9a2901.m4a"),
        },
        {
            btnText: "höpön löpö",
            msg: "ja höpön löpön löppö",
            sound: new Audio("https://i.ylilauta.org/2c/1e/2c1e3c77bce1bfa3.m4a"),
        },
        {
            btnText: "mitä helvettiä",
            msg: "mitä helveTTIä",
            sound: new Audio("https://i.ylilauta.org/e5/42/e54223fffa4ee4d8.m4a"),
        },
        {
            btnText: "varmuudella",
            msg: "n*ekeri melkoisella varmuudella",
            sound: new Audio("https://i.ylilauta.org/ec/96/ec961e364fcc758a.mp4"),
        },
        {
            btnText: "lohkare",
            msg: "kohta lentää lohkare",
            sound: new Audio("https://i.ylilauta.org/99/5c/995ced935f253065.mp4"),
        },
        {
            btnText: "tästä se lähtee",
            msg: "joo joo, tästä se lähtee",
            sound: new Audio("https://i.ylilauta.org/79/7c/797c22009f8de567.mp4"),
        },
        {
            btnText: "sä kuolet",
            msg: "sä kuolet",
            sound: new Audio("https://i.ylilauta.org/89/14/89142e6f8d57c185.mp4"),
        },
        {
            btnText: "kebabbia nakkipalkalla",
            msg: ":hitlerismo  ",
            sound: new Audio("https://i.ylilauta.org/7a/cf/7acfd75a3de12ca9.mp4"),
        },
        {
            btnText: "nettikiusaaja",
            msg: "sä oot netti kiusaaja",
            sound: new Audio("https://i.ylilauta.org/d5/13/d513f526fe94dabc.mp4"),
        },
        {
            btnText: "jallu",
            msg: "kyllä mulle jallu kelpaa",
            sound: new Audio("https://i.ylilauta.org/af/3f/af3f9b2ecb819743.mp4"),
        },
        {
            btnText: "emmä tajunnut",
            msg: "emmä tajunnu että sä oot vajonnu noin alas",
            sound: new Audio("https://i.ylilauta.org/85/3c/853cc5e703415590.mp4"),
        },
        {
            btnText: "naittekote",
            msg: "naitteko te",
            sound: new Audio("https://i.ylilauta.org/18/8b/188bef05adf7ba33.mp4"),
        },
        {
            btnText: "WOO O",
            msg: "WO O O WOWO WO O O WOO",
            sound: new Audio("https://i.ylilauta.org/e5/63/e563b30dc218a0ed.m4a"),
        },
        {
            btnText: "ismo dirlandaa",
            msg: ":ismodance  ",
            sound: new Audio("https://i.ylilauta.org/56/51/56517cd6527df3a6.mp4"),
        },
        {
            btnText: "en ymmärrä",
            msg: "en ymmärrä ",
            sound: new Audio("https://i.ylilauta.org/19/77/19770642b212e295.mp4"),
        },
        {
            btnText: "ootko aatellu töihin",
            msg: "ootko ajatellu työpaikkaa hankkia",
            sound: new Audio("https://i.ylilauta.org/5b/f2/5bf28446582f4504.mp4"),
        },
        {
            btnText: "en tiedä",
            msg: "en tiedä, täytyy mennä",
            sound: new Audio("https://i.ylilauta.org/75/25/7525f024e5bdf7ce.m4a"),
        },
        {
            btnText: "TURPA KIINNI",
            msg: "TURPA KIINNI",
            sound: new Audio("https://i.ylilauta.org/af/dc/afdc498ea0ccfacb.m4a"),
        },
        {
            btnText: "ismomitä helvettiä",
            msg: "MITÄ HELVETTIÄ",
            sound: new Audio("https://i.ylilauta.org/cc/8b/cc8b19d82f367deb.mp4"),
        },
        {
            btnText: "sopii yrittää",
            msg: "sopii yrittää",
            sound: new Audio("https://i.ylilauta.org/d0/f7/d0f720f9def1082c.mp4"),
        },
        {
            btnText: "no heii väliä",
            msg: "no heiii mitä väliä",
            sound: new Audio("https://i.ylilauta.org/a1/d6/a1d6797fc2783881.mp4"),
        },
        {
            btnText: "ämmien puhetta",
            msg: "ämmien puhetta",
            sound: new Audio("https://i.ylilauta.org/6c/95/6c95cb98a5c6dab2.mp4"),
        },
        {
            btnText: "seppo suu kii",
            msg: "seppo suus kiinni nyt",
            sound: new Audio("https://i.ylilauta.org/d5/1f/d51fd00dcbbbf2da.m4a"),
        },
        {
            btnText: "meidän malja",
            msg: ":seppomeidänmalja  ",
            sound: new Audio("https://i.ylilauta.org/e5/80/e58073a658fb3ce3.m4a"),
        },
        {
            btnText: "ansaitset parasta",
            msg: "tää on just sitä mitä sä ansaitset - kaikkein parasta",
            sound: new Audio("https://i.ylilauta.org/36/72/367224fc6df7afce.mp4"),
        },
        {
            btnText: "akiHILJAA",
            msg: "HILJAA   ",
            sound: new Audio("https://i.ylilauta.org/48/c7/48c7cebf0d2f1be1.m4a"),
        },
        {
            btnText: "eikai mun tilanne",
            msg: "ei kai mun tilanne nyt niin vakava oo",
            sound: new Audio("https://i.ylilauta.org/40/f0/40f03e90a5b69ae9.mp4"),
        },
        {
            btnText: "lempikeksejä",
            msg: "helveTIn sen lempikeksejä",
            sound: new Audio("https://i.ylilauta.org/e0/a8/e0a8df875d9c172a.m4a"),
        },
        {
            btnText: "rotta",
            msg: "roTTA",
            sound: new Audio("https://i.ylilauta.org/91/f9/91f9c9e9a405a391.mp4"),
        },
        {
            btnText: "putatkaa jo",
            msg: "voi herran pieksut putatkaa nyt jo",
            sound: new Audio("https://i.ylilauta.org/21/fc/21fcc52b613ae8b9.m4a"),
        },
        {
            btnText: "OO",
            msg: "OO ",
            sound: new Audio("https://i.ylilauta.org/d9/88/d98858da1d28cf4e.m4a"),
        },
        {
            btnText: "pallirave:D",
            msg: ":rave  ",
            sound: new Audio("https://i.ylilauta.org/02/2f/022f446bf1ed39e0.m4a"),
        },
        {
            btnText: "maaali",
            msg: "jeeee maaali",
            sound: new Audio("https://i.ylilauta.org/89/bc/89bca8236a351178.m4a"),
        },
        {
            btnText: "jallupaukku",
            msg: "jallupaukkukii",
            sound: new Audio("https://i.ylilauta.org/85/81/858184812f248d48.m4a"),
        },
        {
            btnText: "laura laura",
            msg: "laura laura laura",
            sound: new Audio("https://i.ylilauta.org/a9/bb/a9bb309c74734265.m4a"),
        },
        {
            btnText: "mä tein sen",
            msg: "MÄ TEIN SEN",
            sound: new Audio("https://i.ylilauta.org/4a/35/4a35b9a8aa1c92e1.m4a"),
        },
        {
            btnText: "herran pieksut",
            msg: ":herranpieksut  ",
            sound: new Audio("https://i.ylilauta.org/a5/ff/a5ffba5ba04e11da.mp4"),
        },
        {
            btnText: "turpaki giolo",
            msg: "pidä sinä nyt gigolo se turpas kiinni",
            sound: new Audio("https://i.ylilauta.org/a5/5a/a55a2bb47d54ea7e.m4a"),
        },
        {
            btnText: "oot oikeessa",
            msg: "saatat olla oikeessa, hyvä pointti itse asiassa",
            sound: new Audio("https://i.ylilauta.org/ee/d2/eed2124564abb152.m4a"),
        },
        {
            btnText: "en halua",
            msg: ":enhalua  ",
            sound: new Audio("https://i.ylilauta.org/f9/72/f972bbc3ffeb4c37.m4a"),
        },
        {
            btnText: "svengaa hirvi",
            msg: "svengaa ku HIRVI",
            sound: new Audio("https://i.ylilauta.org/fa/25/fa2598310243163b.mp4"),
        },
        {
            btnText: "kaapista pois",
            msg: "tuu pois sieltä kaapista",
            sound: new Audio("https://i.ylilauta.org/f7/1e/f71e91b042de8f5a.m4a"),
        },
        {
            btnText: "ooh ahaha cucka",
            msg: "/cuck  ",
            sound: new Audio("https://i.ylilauta.org/bb/f7/bbf70790a0abccbb.m4a"),
        },
        {
            btnText: "helvetin helveTTI",
            msg: ":laitelanlaiva  ",
            sound: new Audio("https://i.ylilauta.org/6e/74/6e748cc8f6b0bc92.mp4"),
        },
        {
            btnText: "pupheli",
            msg: "semmonen kuumaverinen puppheli ",
            sound: new Audio("https://i.ylilauta.org/8b/3c/8b3c7fef4f94d89c.m4a"),
        },
        {
            btnText: "nirppanokka",
            msg: "kyllä sitä nyt ollaan niin nirppanokkaa niin nirppanokkaa että",
            sound: new Audio("https://i.ylilauta.org/69/7e/697e9b61d787530d.m4a"),
        },
        {
            btnText: "nukkumaanmenoaika",
            msg: "eikös nyt ala oleen tuommosen nassikan nukkumaanmenoaika",
            sound: new Audio("https://i.ylilauta.org/c7/fa/c7fa07ea75605bce.mp4"),
        },
        {
            btnText: "typeryyksiä",
            msg: "huhhhuh koko sivuhan vilisee kaameita typeryyksiä",
            sound: new Audio("https://i.ylilauta.org/19/09/1909c233f9037cce.m4a"),
        },
        {
            btnText: "ryöstö hernesaar",
            msg: "RYÖSTÖ HERNESAARESSA",
            sound: new Audio("https://i.ylilauta.org/7b/9e/7b9e18574d12cb7f.m4a"),
        },
        {
            btnText: "oliko muuta asiaa",
            msg: "oliko muuta asiaa?",
            sound: new Audio("https://i.ylilauta.org/b2/ea/b2eaa816301901cb.m4a"),
        },
        {
            btnText: "pöytä vino",
            msg: "onks tää pöytä jotenkin vino?",
            sound: new Audio("https://i.ylilauta.org/39/29/39298a5d601bb87f.m4a"),
        },
        {
            btnText: "eläin",
            msg: "jätkä on eläin",
            sound: new Audio("https://i.ylilauta.org/78/08/78089915ddfec10a.m4a"),
        },
        {
            btnText: "juon olutta",
            msg: "minä juon oluttahh",
            sound: new Audio("https://i.ylilauta.org/35/00/3500fc49b13e04d1.m4a"),
        },
        {
            btnText: "kusti kulkee",
            msg: "kusti polkee ni posti kulkee poika",
            sound: new Audio("https://i.ylilauta.org/d1/20/d120c2021dbaf6e7.m4a"),
        },
        {
            btnText: "leikki loppuu",
            msg: "kuule tää leikki loppuu nyT",
            sound: new Audio("https://i.ylilauta.org/8b/6e/8b6eb751b7b585b0.mp4"),
        },
        {
            btnText: "AERGH",
            msg: ":ismomunkki  ",
            sound: new Audio("https://i.ylilauta.org/d6/5c/d65c89f05ef2fa18.m4a"),
        },
        {
            btnText: "valehteleva lepakko",
            msg: "EN MÄ EDEDES KOSKENU SUHUN SENKIN VALEHTELEVA LEPAKKO",
            sound: new Audio("https://i.ylilauta.org/0d/71/0d714752b65fb9be.m4a"),
        },
        {
            btnText: "luuseri",
            msg: "luuserii",
            sound: new Audio("https://i.ylilauta.org/2a/38/2a388a4ba7c5cc55.m4a"),
        },
        {
            btnText: "uudestaan",
            msg: "toi on pakko kattoo uudestaan",
            sound: new Audio("https://i.ylilauta.org/f0/9f/f09fb5ee3d4a2c0b.m4a"),
        },
        {
            btnText: "hieno matsi",
            msg: "no onneks olkoon hieno matsi",
            sound: new Audio("https://i.ylilauta.org/d1/a0/d1a0d2949c41c1c0.m4a"),
        },
        {
            btnText: "turpa tukkoon",
            msg: "tuwpa tukkoon",
            sound: new Audio("https://i.ylilauta.org/68/6c/686cc939a8a10111.m4a"),
        },
        {
            btnText: "ole hyvä ja poistu",
            msg: "ole hyvä ja poistu",
            sound: new Audio("https://i.ylilauta.org/c4/4d/c44d04b11e3ad73b.m4a"),
        },
        {
            btnText: "kiitos teillekin",
            msg: "kiitos teillekin ja anteeks",
            sound: new Audio("https://i.ylilauta.org/d6/57/d657637de618964d.m4a"),
        },
        {
            btnText: "haluun olla onnellinen",
            msg: "mä haluun olla onnellinen perkeLE",
            sound: new Audio("https://i.ylilauta.org/96/59/96591cc89d975c67.m4a"),
        },
        {
            btnText: "etsä oo kaljoissas?",
            msg: "et suinkaan sä oo vähän kaljoissas?",
            sound: new Audio("https://i.ylilauta.org/29/dc/29dc32901df640f0.mp4"),
        },
        {
            btnText: "turpa kiinni nyt",
            msg: "turpa kiinni nyt",
            sound: new Audio("https://i.ylilauta.org/5a/6a/5a6ae787549786de.m4a"),
        },
        {
            btnText: "APUA",
            msg: "APUAA TULKAA AUTTAMAAN",
            sound: new Audio("https://i.ylilauta.org/55/c5/55c5f2fe0ff963c9.m4a"),
        },
        {
            btnText: "en oo yht mitn",
            msg: "mä en oo yhtään mitään, mä oon ihan paska",
            sound: new Audio("https://i.ylilauta.org/60/31/603177f150394382.m4a"),
        },
        {
            btnText: "koppava lepakko",
            msg: "koppava lepakko",
            sound: new Audio("https://i.ylilauta.org/03/7a/037a450f1b4ed8c7.m4a"),
        },
        {
            btnText: "munaton eunukki",
            msg: "munaton eunukki",
            sound: new Audio("https://i.ylilauta.org/9c/b2/9cb25d1062ab53a2.m4a"),
        },
        {
            btnText: "helunaei",
            msg: ":helunaei  ",
            sound: new Audio("https://i.ylilauta.org/ac/49/ac498304f9babdd3.m4a"),
        },
        {
            btnText: "vapaaherran elämä",
            msg: "mä oon juhlistanu tätä vapaaherran elämää",
            sound: new Audio("https://i.ylilauta.org/eb/32/eb32c50ad8323eda.m4a"),
        },
        {
            btnText: "pullaoluet",
            msg: "tuoppas meille kolmelle pullakahvit, tai ei ku tuo meille oluet, tai eikä ku korkkaa sittenkin pullo kuohuvaa",
            sound: new Audio("https://i.ylilauta.org/6b/8b/6b8b558935ef4a2c.m4a"),
        },
        {
            btnText: "välinpitämättömyyttä",
            msg: "mä en kestä tätä vitun välinpitämättömyyttä enää tippaakaan mä lähen vittuun täältä",
            sound: new Audio("https://i.ylilauta.org/66/12/6612309c15c0e737.m4a"),
        },
        {
            btnText: "NIINKÖ",
            msg: "NIINKÖ",
            sound: new Audio("https://i.ylilauta.org/8b/78/8b78803092e835e1.m4a"),
        },
        {
            btnText: "melamies valmiina",
            msg: "anytime baby, melamies on aina valmis",
            sound: new Audio("https://i.ylilauta.org/6e/70/6e705639ad5f99b2.m4a"),
        },
        {
            btnText: "ei kai hämäystä",
            msg: "ettei tää nyt olis jotain hämäystä",
            sound: new Audio("https://i.ylilauta.org/e1/bb/e1bb9e64d928bbc7.mp4"),
        },
        {
            btnText: "juopottelin liikaa",
            msg: "/masa2  ",
            sound: new Audio("https://i.ylilauta.org/5e/6a/5e6a6109501c636b.m4a"),
        },
        {
            btnText: "haista jukka p*ska",
            msg: "haista sinä jukka iso pasKA ",
            sound: new Audio("https://i.ylilauta.org/3a/37/3a371fd7849a7167.m4a"),
        },
        {
            btnText: "hieno tarina",
            msg: "no olipa hieno tarina ",
            sound: new Audio("https://i.ylilauta.org/af/c8/afc8a9639260cfc1.mp4"),
        },
        {
            btnText: "HÄVETKÄÄ",
            msg: "HÄVETKÄÄ ",
            sound: new Audio("https://i.ylilauta.org/92/73/927376c243f5e9f9.m4a"),
        },
        {
            btnText: "roope ankka",
            msg: "hemmetin roope ankka ",
            sound: new Audio("https://i.ylilauta.org/68/f4/68f40594a0159e28.m4a"),
        },
        {
            btnText: "laitelan laiva",
            msg: "nyt on laitelan laiva uponnut ",
            sound: new Audio("https://i.ylilauta.org/bd/db/bddbfc0f6172b2b3.m4a"),
        },
        {
            btnText: "bailaa rajusti",
            msg: "mää ainakin bailaan huomenna aika rajusti ",
            sound: new Audio("https://i.ylilauta.org/3b/6a/3b6a82d537350431.m4a"),
        },
        {
            btnText: "tyttöystävää",
            msg: "mulla ei oo vieläkään tyttöystävää ",
            sound: new Audio("https://i.ylilauta.org/bc/4f/bc4fae5808e1c6b4.m4a"),
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
            if(!time || new Date().getTime() - +time >= 420000) {

                if(spamlock)
                    return;

                spamlock = true;
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

        spamlock = true;

        //temp 3000
        setTimeout(() => {spamlock = false}, 3000)
        socket.emit("chatMsg", {msg: CHANNEL.emotes[Math.floor(Math.random() * CHANNEL.emotes.length)].name + " random. "})
    });

    randomEmosBtn.className = "btn btn-sm btn-default";
    randomEmosBtn.style.float = "right";
    randomEmosBtn.textContent = "Random emo3x";
    randomEmosBtn.addEventListener("click", () => {
        if(spamlock2)
            return;
    
        spamlock2 = true;
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
            console.log("msgennen: " + msgs[msgs.length - 1].className)
            let msg = msgs[msgs.length - 1].querySelector("span:last-of-type");
            if(msgs[msgs.length - 1].classList.contains("small-emos")) {
                msg = msgs[msgs.length - 1];
                const emotes = msg.getElementsByClassName("channel-emote");

                msg.innerHTML += " <span class='randomEmo'>RANDOM</span>";

                for(let i = 0; i < emotes.length; i++) {
                    const emote = emotes[i];

                    emote.onclick = () => {
                        console.log("asd")
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
            console.log("msg: " + msg)
            let msgText = msg.textContent;
            let msgTextSound = "";

            if(msgText.slice(msgText.length - 9, msgText.length) == " random. ")
                msgTextSound = msgText.slice(0,msgText.length-9)

            msgTextSound = msgTextSound === "" ? msgText : msgTextSound;

            if(messageCont.scrollHeight - messageCont.scrollTop === messageCont.clientHeight) {
                setTimeout(() => { messageCont.scrollTo(0, messageCont.scrollHeight) }, 300);
            }


            const username = msg.parentElement.className.split(" ")[0].split("-")[2];

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
                    else if(!disableBtns && (!myTime || (new Date().getTime() - +myTime > 420000))) {
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
                const seconds = getTime(msgText.split(" ")[1]);
                vidEl.currentTime = seconds;
            }

            if(msgText === "synccistä") {
            	const vidEl = document.getElementById("ytapiplayer_html5_api");
            	console.log("currenttime:", vidEl.currentTime)
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
 
            if(msg.innerHTML.split(" <").length == 2 && msg.innerHTML.split(" <")[0] == "pipe") {
                const msgParentClassname = msg.parentElement.className;
                msg.remove();
                if(msgParentClassname == "chat-msg-" + CLIENT.name) {
                    socket.emit("chatMsg", {msg: msg.getElementsByTagName("img")[0].getAttribute("title")});
                    socket.emit("chatMsg", {msg: ":pippeli"});
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
                    console.log("asd")
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
    function getTime(str) {
        str = str.split(":");

        let h = +str[0];
        let m = +str[1];
        let s = +str[2];

        h = h*3600;
        m = m*60;

        return h+m+s;
    }
})();
