const projectsData = [
    {
        id: "diplomka",
        category: "school",
        title: {
            cz: "Propojení KNX a Matter",
            en: "Matter & KNX Bridge"
        },
        badge: {
            cz: "Diplomová práce (Ing.)",
            en: "Master's Thesis"
        },
        shortDesc: {
            cz: "HW/SW brána na procesoru i.MX93 umožňující propojení a řízení průmyslového standardu KNX přes moderní protokol Matter.",
            en: "A HW/SW gateway on the i.MX93 processor that bridges the industrial KNX standard with the modern Matter protocol."
        },
        longDesc: {
            cz: `V rámci diplomové práce vznikla HW/SW brána na aplikačním procesoru i.MX93. Systém umožňuje bezproblémové připojení moderních zařízení platformy Matter a následné řízení robustních prvků KNX přes ethernetové rozhraní. 
            \nSoučástí vývoje bylo také vytvoření integrovaného webového rozhraní pro jednoduchou konfiguraci lokální sítě a mapování protokolů. 
            \n*Poznámka: Detailní implementace zdrojových kódů a hardware design je chráněn NDA.*`,
            en: `This master's thesis focused on developing a hardware and software gateway built on the i.MX93 application processor. It enables seamless integration of modern Matter smart home devices with industrial KNX components via Ethernet. 
            \nThe project includes a full embedded web interface for network and protocol configuration mapping. 
            \n*Note: Detailed implementation and hardware design are protected by an NDA.*`
        },
        tech: ["KNX", "Matter", "i.MX93", "Embedded C"],
        image: null,
        links: [
            { icon: "fas fa-microchip", url: "#", tooltip: "Hardware Project" }
        ]
    },
    {
        id: "bakalarka",
        category: "school",
        title: {
            cz: "Chytré řízení posuvné brány",
            en: "Smart Sliding Gate Controller"
        },
        badge: {
            cz: "Bakalářská práce (Bc.)",
            en: "Bachelor's Thesis"
        },
        shortDesc: {
            cz: "Kompletní návrh HW i SW běžící na ESP32 (AsyncTCP) pro chytrou bránu s měřením zátěže (INA219) a laserovými senzory (I2C).",
            en: "Complete HW/SW design running on ESP32 (AsyncTCP) for a smart gate with load sensing (INA219) and I2C laser sensors."
        },
        longDesc: {
            cz: `Komplexní vlastní řešení pro automatizaci posuvné brány od návrhu po realizaci. Srdcem celého systému je mikrokontrolér ESP32, na kterém běží vysoce responzivní asynchronní webový server (AsyncTCP) napsaný v C++.
            \nSystém přes I2C sběrnici komunikuje s laserovými senzory vzdálenosti (VL53L0X) pro přesnou detekci překážek a pomocí modulu INA219 provádí měření proudu motoru v reálném čase (detekce přetížení a zablokování brány). 
            \nSoučástí projektu byl také 3D návrh a samotný tisk zakázkových mechanických částí, jako jsou modulární ozubené hřebeny.`,
            en: `A complete custom hardware and software solution for intelligent gate control. Powered by an ESP32 microcontroller running a highly responsive C++ asynchronous web server (AsyncTCP).
            \nIt communicates with I2C laser sensors (VL53L0X) for precise obstacle detection and uses the INA219 module for real-time motor current monitoring, implementing a robust software overload protection. 
            \nThe project also involved the 3D-modeling and printing of custom mechanical parts, such as the rack-and-pinion transmission.`
        },
        tech: ["ESP32", "C++", "AsyncTCP", "I2C", "3D Print"],
        image: null,
        links: [
            { icon: "fas fa-cogs", url: "#", tooltip: "IoT Project" }
        ]
    },
    {
        id: "hackathon",
        category: "school",
        title: {
            cz: "FairBank Microservices",
            en: "FairBank Microservices"
        },
        badge: {
            cz: "Hackathon 2026",
            en: "Hackathon 2026"
        },
        shortDesc: {
            cz: "Vysoce škálovatelný bankovní systém postavený v C# .NET 8 pomocí mikroslužeb, Kafky, Dockeru a PostgreSQL.",
            en: "Highly scalable banking system built in C# .NET 8 using microservices, Apache Kafka, Docker, and PostgreSQL."
        },
        longDesc: {
            cz: `Tento projekt byl vytvořen během Hackathonu 2026 a představuje vysoce škálovatelný, distribuovaný bankovní systém navržený s důrazem na moderní architektonické standardy.
            \nZáklad tvoří mikroslužbová architektura (Microservices) napsaná v C# na platformě .NET 8. Zákaznický frontend využívá Blazor WASM a se serverem komunikuje přes centrální API Gateway. 
            \nBackend se skládá z více než 8 nezávislých služeb (Identity, Payments, Cards, Chat, Documents), které jsou asynchronně synchronizovány skrze message broker Apache Kafka. Perzistence dat je řešena relační databází PostgreSQL, běžící v Primary-Replica uspořádání. Celý systém (včetně Admin UI a databází) je kontejnerizován pomocí Docker Compose.`,
            en: `A highly scalable, distributed banking system designed during Hackathon 2026, heavily emphasizing modern architectural patterns.
            \nBuilt on a microservices architecture using C# and .NET 8. The client-facing frontend utilizes Blazor WASM and communicates through a central API Gateway. 
            \nThe backend consists of over 8 distinct microservices (Identity, Payments, Cards, Chat, Documents) seamlessly synchronized via an Apache Kafka message broker. Data persistence is handled by a PostgreSQL database deployed in a Primary-Replica cluster, and the entire stack (including an Admin Dashboard) is containerized using Docker Compose.`
        },
        tech: [".NET 8", "Blazor WASM", "Docker", "Kafka", "PostgreSQL", "Microservices"],
        image: null,
        links: []
    },
    {
        id: "lorax",
        category: "school",
        title: {
            cz: "Lorax Ticketing System",
            en: "Lorax Ticketing System"
        },
        badge: {
            cz: "Softwarové inženýrství",
            en: "Software Engineering"
        },
        shortDesc: {
            cz: "Komplexní týmová platforma pro prodej lístků. Kladl se extrémní důraz na moderní architekturu, čistý kód a efektivní agilní spolupráci.",
            en: "A complex team-built ticketing platform. Extreme emphasis on modern architecture, clean code, and agile collaboration."
        },
        longDesc: {
            cz: `Projekt vyvinutý v rámci předmětu Vybrané techniky vývoje SW. Lorax je komplexní platforma zaměřená na prodej, správu a rezervaci vstupenek.
            \nHlavním přínosem tohoto projektu však nebyl jen finální produkt, nýbrž aplikace průmyslových standardů pro softwarový vývoj. Kladen byl extrémní důraz na moderní softwarovou architekturu, dodržování principů čistého kódu (Clean Code) a implementaci návrhových vzorů.
            \nPráce probíhala v agilním týmu pomocí frameworku Scrum. Naučili jsme se pracovat v Git workflow s Trunk-based developmentem, realizovat přísná Code Reviews a integrovat procesy CI/CD (Azure Pipelines) pro automatizované testování a nasazování kódu.`,
            en: `Developed as a core project for the Advanced Software Development Techniques course. Lorax is a complex platform designed for event ticketing and reservation management.
            \nThe primary focus of this project was applying enterprise-level industry standards to software development. Extreme emphasis was placed on software architecture patterns, Clean Code principles, and design patterns.
            \nThe team operated under the Agile Scrum framework. We heavily utilized modern Git workflows (Trunk-based development), conducted rigorous Code Reviews, and implemented CI/CD pipelines (Azure) for automated unit testing and deployment.`
        },
        tech: ["C#", "Agile", "CI/CD", "Clean Architecture", "Teamwork"],
        image: "assets/img/lorax_1.png",
        links: [
            { icon: "fas fa-external-link-alt", url: "https://tomas-juri.github.io/STAG-AUIUI-P8VT/docs/2025/", tooltip: "Documentation" }
        ]
    },
    {
        id: "hscards",
        category: "mobile",
        title: {
            cz: "HSCards Mobile App",
            en: "HSCards Mobile App"
        },
        badge: {
            cz: "Mobilní Aplikace",
            en: "Mobile Application"
        },
        shortDesc: {
            cz: "Aplikace s moderním UI/UX pro správu sad studijních karet. Zaměřeno na interaktivitu a vizuální čistotu.",
            en: "An app with modern UI/UX for managing flashcard study sets. Focused on interactivity and visual clarity."
        },
        longDesc: {
            cz: `Mobilní aplikace HSCards byla vytvořena během 5. semestru. Slouží k rychlému ukládání, organizaci a procházení takzvaných flashcards (studijních karet).
            \nHlavní prioritou tohoto projektu byl extrémní fokus na uživatelské rozhraní (UI) a uživatelský prožitek (UX). Aplikace implementuje moderní designové trendy, plynulé animace, card-swiping logiku a intuitivní responzivní ovládání. 
            \nSkvěle demonstruje moji schopnost propojit náročný, graficky atraktivní design se spolehlivou backendovou logikou mobilní aplikace.`,
            en: `The HSCards mobile application was developed during the 5th semester. It is designed for rapidly creating, organizing, and reviewing study flashcards.
            \nThe absolute priority for this project was an extreme focus on User Interface (UI) and User Experience (UX) design. The app implements modern design trends, smooth physics-based animations, card-swiping logic, and intuitive responsive controls.
            \nIt perfectly demonstrates my ability to bridge demanding, visually striking frontend designs with reliable mobile backend application logic.`
        },
        tech: ["Mobile Dev", "UI/UX", "Frontend", "Animations"],
        image: "assets/img/hscards_1.png",
        links: [
            { icon: "fab fa-github", url: "https://github.com/mpalurik/HSCards", tooltip: "GitHub Repository" }
        ]
    },
    {
        id: "f1-app",
        category: "mobile",
        title: {
            cz: "F1 Live Tracker",
            en: "F1 Live Tracker"
        },
        badge: {
            cz: "Nativní iOS App",
            en: "Native iOS App"
        },
        shortDesc: {
            cz: "Nativní iOS aplikace ve Swiftu komunikující s veřejným REST API Formule 1. Nabízí statistiky, výsledky a audio záznamy.",
            en: "Native iOS Swift app interfacing with a public F1 REST API. Features stats, race results, and team radio audio."
        },
        longDesc: {
            cz: `F1 Live Tracker je nativní iOS aplikace vyvíjená kompletně v jazyce Swift (XCode). Slouží jako kapesní průvodce pro fanoušky Formule 1.
            \nSystém dynamicky komunikuje s veřejným REST API Formule 1, data dekóduje přes JSON parsery a prezentuje je uživateli formou nativních iOS komponent. V aplikaci naleznete aktuální výsledky závodů, detailní statistiky jednotlivých jezdců, kalendáře sezóny a aktuální bodové stavy šampionátu.
            \nJednou ze stěžejních funkčností je asynchronní streamování zvuku – aplikace podporuje stahování a plynulé přehrávání oficiálních audio záznamů (Team Radios) přímo z prostředí aplikace.`,
            en: `F1 Live Tracker is a native iOS application developed entirely in Swift using XCode, serving as a pocket companion for Formula 1 fans.
            \nThe system dynamically interfaces with a public F1 REST API, decoding payloads via native JSON parsers, and presents the data using optimized iOS UI components. The app features real-time race results, highly detailed driver statistics, season calendars, and championship standings.
            \nA standout technical feature is the implementation of asynchronous audio streaming – the application supports fetching and smoothly playing official audio recordings (Team Radios) directly within the app.`
        },
        tech: ["iOS", "Swift", "REST API", "XCode"],
        image: null,
        links: [
            { icon: "fab fa-github", url: "https://github.com/mpalurik/Ios_F1_app", tooltip: "GitHub Repository" }
        ]
    },
    {
        id: "jump-to-space",
        category: "school",
        title: {
            cz: "Cosmic Jump 3D",
            en: "Cosmic Jump 3D"
        },
        badge: {
            cz: "Vývoj her (Unity)",
            en: "Game Dev (Unity)"
        },
        shortDesc: {
            cz: "Akční 3D hra vytvořená v enginu Unity. Inovativní fyzika nulové gravitace, procedurální překážky a vlastní animace.",
            en: "Action 3D game built in Unity Engine. Features innovative zero-G physics, procedural obstacles, and custom animations."
        },
        longDesc: {
            cz: `Akční počítačová hra vyvinutá v herním enginu Unity za použití jazyka C# pro předmět Vývoj počítačových her.
            \nZákladní herní mechanismy jsou volně inspirované legendární hrou "Doodle Jump" (skákání po plošinách vzhůru). Cosmic Jump 3D to však posouvá dál zavedením unikátní vesmírné fyziky (úprava gravitace enginu, driftování) a přechodem do plného 3D prostoru.
            \nBěhem vývoje jsem řešil procedurální generování nekonečných levelů, správu kolizí, návrh state-machines pro nepřátele a plynulé přechody animací hráče.`,
            en: `An action-packed 3D video game developed using the Unity Engine and C# for the Computer Game Development course.
            \nWhile the core gameplay loop is loosely inspired by the legendary "Doodle Jump" (platform hopping upwards), Cosmic Jump 3D pushes the concept further by moving into a full 3D space and introducing custom zero-gravity physics (engine gravity manipulation, drift mechanics).
            \nDuring development, I tackled complex challenges such as procedural endless-level generation, rigorous collision detection, finite state-machines for enemy AI, and smooth player animation transitions.`
        },
        tech: ["Unity 3D", "C#", "Game Physics", "Procedural Gen"],
        image: null,
        links: []
    },
    {
        id: "movie-database",
        category: "school",
        title: {
            cz: "NoSQL Movie Database",
            en: "NoSQL Movie Database"
        },
        badge: {
            cz: "Pokročilé Databáze",
            en: "Advanced Databases"
        },
        shortDesc: {
            cz: "Architektura databáze pro rozsáhlý filmový katalog. Zaměřeno na výkon MongoDB, optimalizaci indexů a full-textové vyhledávání.",
            en: "Database architecture for a massive movie catalog. Focused on MongoDB performance, index optimization, and full-text search."
        },
        longDesc: {
            cz: `Projekt pro kurz Pokročilé databáze zkoumající limity nerelačních databázových systémů. Pro uložení a efektivní prohledávání velkých datasetů filmových záznamů a uživatelských recenzí využívá dokumentově orientovanou NoSQL databázi MongoDB.
            \nDůraz nebyl kladen na samotnou aplikaci, ale primárně na architekturu pod kapotou: návrh a strukturování dokumentových kolekcí, de-normalizaci dat pro zvýšení read-výkonu a aplikaci agregačních pipeline (Aggregation Framework).
            \nZásadní částí projektu byla pokročilá optimalizace indexování, která dramaticky snížila latenci u složitých full-textových vyhledávacích dotazů napříč miliony záznamů.`,
            en: `An academic project for the Advanced Databases course exploring the capabilities and limits of non-relational database systems. It leverages the MongoDB document-oriented NoSQL database to store and effectively search massive datasets of movie records and user reviews.
            \nThe primary focus was not on the frontend application, but heavily on the underlying architecture: document collection design, strategic data de-normalization to maximize read-throughput, and heavy use of the Aggregation Framework.
            \nA crucial milestone of the project was advanced index optimization, which drastically reduced query latency for complex full-text searches executed across millions of records.`
        },
        tech: ["MongoDB", "NoSQL", "Database Design", "Indexing"],
        image: null,
        links: [
            { icon: "fab fa-github", url: "https://github.com/mpalurik/MovieDatabase", tooltip: "GitHub Repository" }
        ]
    },
    {
        id: "sim-pedals",
        category: "other",
        title: {
            cz: "Sim-Racing Telemetry Pedals",
            en: "Sim-Racing Telemetry Pedals"
        },
        badge: {
            cz: "Hobby HW/SW Modding",
            en: "Hobby HW/SW Modding"
        },
        shortDesc: {
            cz: "Hardware a software modifikace pedálů pro simulátory. Obsahuje RPi Pico s custom firmwarem a Python GUI pro živou telemetrii.",
            en: "HW/SW sim-racing pedals modification. Features RPi Pico with custom firmware and a Python GUI for live telemetry."
        },
        longDesc: {
            cz: `Kompletní obnova a inovace open-source projektu pro závodní simulátory. Po fyzické stránce (HW modding) byl klasický pevný gumový odpor u pedálů nahrazen progresivním pružinovým systémem pro dosažení autentické silové odezvy brzd (Force Feedback feel).
            \nPo softwarové stránce byl projekt převeden z pomalého Arduina na výkonné Raspberry Pi Pico (kompletně přepsaný C++/C firmware optimalizovaný pro nízkou latenci vstupu).
            \nNejvětší novinkou je mnou napsané desktopové Control Center v Pythonu (pomocí CustomTkinter). Tato aplikace komunikuje s procesorem přes sériovou linku, vykresluje živou grafickou telemetrii (osciloskop brzdění), a umožňuje v reálném čase nastavovat bodové křivky citlivosti, kalibrovat mrtvé zóny a ukládat profily přímo do perzistentní paměti Pica.`,
            en: `A complete overhaul and innovation of an open-source project for sim-racing enthusiasts. On the physical side (HW modding), the rigid rubber-block resistance was replaced with a progressive dual-spring mechanism to achieve authentic braking force feedback.
            \nOn the software side, the legacy firmware was entirely rewritten in C/C++ and migrated from a slow Arduino to a powerful Raspberry Pi Pico, heavily optimized for sub-millisecond input latency.
            \nThe biggest addition is a custom desktop Control Center I developed in Python (using CustomTkinter). This application communicates with the microcontroller over serial, rendering live graphical telemetry (braking oscilloscopes), and allows the user to tweak multi-point sensitivity curves, calibrate deadzones, and flash profiles directly into the Pico's persistent memory in real-time.`
        },
        tech: ["Raspberry Pi Pico", "Python GUI", "C/C++", "Hardware Modding", "Serial Comms"],
        image: null,
        links: [
            { icon: "fab fa-github", url: "https://github.com/mpalurik/Sim-racing-pedals", tooltip: "GitHub Repository" }
        ]
    }
];
