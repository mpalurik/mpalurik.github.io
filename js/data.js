const projectsData = [
    {
        id: "diplomka",
        category: "school",
        title: {
            cz: "Propojení Matter a KNX",
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
            cz: `Tato práce představuje "Production-ready" Python Bridge, vytvořený ve spolupráci se společností **Schneider Electric**. Spojuje svět profesionální budovní automatizace (KNX) s nejmodernějším standardem chytrých domácností (Matter).
            \nSrdcem celého systému je vývojová deska **NXP FRDM-i.MX93**, která funguje jako dedikovaný Matter Controller a Thread Border Router. Systém využívá utilitu \`chip-tool\` z Matter SDK a dokáže párovat (commission) reálná chytrá zařízení do vlastní sítě.
            \nBrána zajišťuje obousměrnou synchronizaci stavů (Bidirectional Sync) s extrémně nízkou latencí. Propojení s KNX sběrnicí obstarává démon \`knxd\` (KNX/IP Tunneling). Celý systém je doplněn o integrované webové rozhraní běžící na portu 8080 pro jednoduchý management zařízení, live logování a mapování KNX skupin.
            \nCelá dokumentace a kompletní zdrojové kódy architektury jsou k nalezení v mém GitHub repozitáři.`,
            en: `This project is a "Production-ready" Python Bridge developed in collaboration with **Schneider Electric**. It seamlessly bridges the world of professional building automation (KNX) with the cutting-edge smart home standard (Matter).
            \nThe system is built on the **NXP FRDM-i.MX93** evaluation board, which acts as a dedicated Matter Controller and Thread Border Router. It leverages the \`chip-tool\` utility from the Matter SDK to actively commission real smart devices into its own fabric.
            \nThe gateway provides low-latency bidirectional state synchronization. Communication with the physical KNX bus is handled via the \`knxd\` daemon (KNX/IP Tunneling). The ecosystem includes a built-in web interface (port 8080) for easy device commissioning, live event logging, and KNX group address mapping.
            \nThe full architecture documentation and source codes are publicly available in my GitHub repository.`
        },
        tech: ["KNX", "Matter", "i.MX93", "Embedded Python", "Thread BR", "Schneider Electric"],
        images: [],
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
            \nSystém přes I2C sběrnici komunikuje s laserovými senzory vzdálenosti (VL53L0X) pro přesnou detekci překážek a pomocí modulu INA219 provádí měření proudu motoru v reálném čase. Softwarově je tak naprogramována pojistka detekce přetížení a zablokování brány. 
            \nSoučástí projektu byl také 3D návrh a samotný tisk zakázkových mechanických částí (Rack-and-pinion transmission). Webové rozhraní je navíc chráněno proti brute-force útokům pomocí automatického zámku po 5 neúspěšných pokusech o přihlášení.`,
            en: `A complete custom hardware and software solution for intelligent gate control. Powered by an ESP32 microcontroller running a highly responsive C++ asynchronous web server (AsyncTCP).
            \nIt communicates with I2C laser sensors (VL53L0X) for precise obstacle detection and uses the INA219 module for real-time motor current monitoring, implementing a robust software overload protection. 
            \nThe project also involved the 3D-modeling and printing of custom mechanical parts, such as the rack-and-pinion transmission. The web interface is secured against brute-force attacks via an automatic lockout after 5 failed login attempts.`
        },
        tech: ["ESP32", "C++", "AsyncTCP", "I2C", "3D Print"],
        images: ["assets/img/bakalarka_1.png", "assets/img/bakalarka_2.png"],
        links: [
            { icon: "fas fa-cogs", url: "#", tooltip: "IoT Project" }
        ]
    },
    {
        id: "hackathon",
        category: "school",
        title: {
            cz: "FairBank - Mikroslužbový Bankovní Systém",
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
            cz: `Tento projekt byl vytvořen během Hackathonu 2026 a představuje vysoce škálovatelný, distribuovaný bankovní systém navržený s extrémním důrazem na moderní Enterprise architekturu.
            \nJedná se o obrovskou kódovou základnu skládající se z více než 15 nezávislých .NET 8 projektů. Zákaznický frontend není monolitický, nýbrž využívá pokročilou **Micro-Frontend architekturu** v Blazor WASM (moduly pro Auth, Přehledy, Platby, Karty, atd.), která komunikuje se serverem přes centrální API Gateway.
            \nBackend se skládá z více než 8 zcela nezávislých mikroslužeb (Identity, Accounts, Payments, Cards, Chat, Documents, Products, Notifications). Tyto služby spolu nekomunikují napřímo, ale asynchronně se synchronizují skrze masivní message broker **Apache Kafka**. Perzistence dat je řešena relační databází **PostgreSQL**, která z důvodu vysoké dostupnosti běží v **Primary-Replica** clusterovém uspořádání. Celý ekosystém čítající přes 10 běžících kontejnerů je plně orchestratizován přes Docker Compose.`,
            en: `A highly scalable, distributed banking system designed during Hackathon 2026, heavily emphasizing modern Enterprise architectural patterns.
            \nThe massive codebase consists of over 15 distinct .NET 8 projects. The client-facing frontend avoids monolithic design by utilizing an advanced **Micro-Frontend architecture** built in Blazor WASM (separate modules for Auth, Dashboard, Payments, Cards, etc.), communicating through a central API Gateway.
            \nThe backend consists of over 8 completely independent microservices (Identity, Accounts, Payments, Cards, Chat, Documents, Products, Notifications). Rather than direct HTTP calls, these services synchronize asynchronously via an **Apache Kafka** event streaming broker. Data persistence is handled by a **PostgreSQL** database deployed in a highly-available **Primary-Replica** cluster. The entire ecosystem of 10+ containers is fully containerized and orchestrated using Docker Compose.`
        },
        tech: [".NET 8", "Blazor WASM", "Docker", "Kafka", "PostgreSQL", "Microservices"],
        images: ["assets/img/hackathon_1.png", "assets/img/hackathon_2.png", "assets/img/hackathon_3.png", "assets/img/hackathon_4.png", "assets/img/hackathon_5.png", "assets/img/hackathon_6.png", "assets/img/hackathon_7.png", "assets/img/hackathon_8.png"],
        links: []
    },
    {
        id: "ticketing-system",
        category: "school",
        title: {
            cz: "Systém pro prodej vstupenek",
            en: "Ticketing System"
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
            cz: `Projekt vyvinutý v rámci předmětu Vybrané techniky vývoje SW. Jedná se o komplexní platformu zaměřenou na prodej, správu a rezervaci vstupenek (Ticketing).
            \nHlavním přínosem tohoto projektu však nebyl jen finální produkt, nýbrž aplikace průmyslových standardů pro softwarový vývoj. Kladen byl extrémní důraz na moderní softwarovou architekturu, dodržování principů čistého kódu (Clean Code) a implementaci návrhových vzorů.
            \nPráce probíhala v agilním týmu pomocí frameworku Scrum. Naučili jsme se pracovat v Git workflow s Trunk-based developmentem, realizovat přísná Code Reviews a integrovat procesy CI/CD (Azure Pipelines) pro automatizované testování a nasazování kódu.`,
            en: `Developed as a core project for the Advanced Software Development Techniques course. It is a complex platform designed for event ticketing and reservation management.
            \nThe primary focus of this project was applying enterprise-level industry standards to software development. Extreme emphasis was placed on software architecture patterns, Clean Code principles, and design patterns.
            \nThe team operated under the Agile Scrum framework. We heavily utilized modern Git workflows (Trunk-based development), conducted rigorous Code Reviews, and implemented CI/CD pipelines (Azure) for automated unit testing and deployment.`
        },
        tech: ["C#", "Agile", "CI/CD", "Clean Architecture", "Teamwork"],
        images: ["assets/img/lorax_1.png", "assets/img/lorax_2.png", "assets/img/lorax_3.png", "assets/img/lorax_4.png", "assets/img/lorax_5.png", "assets/img/lorax_6.png", "assets/img/lorax_7.png", "assets/img/lorax_8.png"],
        links: [
            { icon: "fas fa-external-link-alt", url: "https://tomas-juri.github.io/STAG-AUIUI-P8VT/docs/2025/", tooltip: "Documentation" }
        ]
    },
    {
        id: "hscards-ionic",
        category: "mobile",
        title: {
            cz: "HSCards (Ionic/Angular)",
            en: "HSCards (Ionic/Angular)"
        },
        badge: {
            cz: "Cross-platform App",
            en: "Cross-platform App"
        },
        shortDesc: {
            cz: "Multiplatformní mobilní aplikace vytvořená v Ionic frameworku a Angularu. Zaměřeno na moderní responzivní UI/UX pro správu karet.",
            en: "Cross-platform mobile app built with Ionic framework and Angular. Focused on modern responsive UI/UX for managing cards."
        },
        longDesc: {
            cz: `Jedna ze dvou verzí projektu pro tvorbu a studium "Flash karet" (kartičky s otázkou a odpovědí). Tato verze je postavena jako multiplatformní (Cross-platform) mobilní aplikace s využitím moderních webových technologií.
            \nJádro tvoří robustní frontend framework Angular společně s UI knihovnou Ionic, což umožňuje nasazení jedné kódové základny na iOS i Android. Aplikace je balena do nativních mobilních kontejnerů pomocí technologie Capacitor.
            \nHlavní prioritou byl extrémní fokus na plynulost animací, responzivní design a intuitivní card-swiping logiku. Aplikace skvěle demonstruje výhody hybridního vývoje.`,
            en: `One of the two versions of the flashcards project. This version is architected as a cross-platform mobile application utilizing modern web technologies.
            \nThe core is built on the robust Angular frontend framework paired with the Ionic UI library, allowing deployment of a single codebase to both iOS and Android. The application is packaged into native mobile containers via Capacitor.
            \nThe absolute priority was an extreme focus on smooth animations, responsive design, and intuitive card-swiping logic. The app perfectly demonstrates the benefits of hybrid mobile development.`
        },
        tech: ["Ionic", "Angular", "TypeScript", "Capacitor", "UI/UX"],
        images: ["assets/img/hscards_1.png"],
        links: [
            { icon: "fab fa-github", url: "https://github.com/mpalurik/HSCards", tooltip: "GitHub Repository" }
        ]
    },
    {
        id: "hearthstonecards-native",
        category: "mobile",
        title: {
            cz: "HearthstoneCards (Native Android)",
            en: "HearthstoneCards (Native Android)"
        },
        badge: {
            cz: "Nativní Android App",
            en: "Native Android App"
        },
        shortDesc: {
            cz: "Nativní Android aplikace (Kotlin) pro komplexní správu kolekcí karet do hry Hearthstone. Optimalizovaný životní cyklus a nativní komponenty.",
            en: "Native Android app (Kotlin) for managing Hearthstone card collections. Highly optimized lifecycle and native UI components."
        },
        longDesc: {
            cz: `Druhá verze projektu pro správu karet, avšak tentokrát vyvinutá čistě jako nativní Android aplikace pomocí programovacího jazyka Kotlin v prostředí Android Studio.
            \nTento projekt zkoumá a využívá veškeré výhody nativního vývoje. Klade silný důraz na pochopení a správu Android životního cyklu (Activity/Fragment lifecycle), využití efektivních RecyclerViews pro zobrazení masivních seznamů karet bez zamrznutí UI a integraci lokální databáze (Room).
            \nDíky nativní implementaci aplikace poskytuje maximální možný výkon a perfektní integraci s operačním systémem Android.`,
            en: `The second version of the card management project, but this time developed entirely as a Native Android application using Kotlin in Android Studio.
            \nThis project explores and utilizes all the advantages of native development. It places a strong emphasis on understanding and managing the Android lifecycle (Activity/Fragment), implementing highly efficient RecyclerViews for displaying massive lists of cards without UI blocking, and integrating local storage (Room database).
            \nDue to the native implementation, the application provides maximum performance and perfect integration with the Android operating system.`
        },
        tech: ["Android", "Kotlin", "Native Mobile", "RecyclerView"],
        images: [],
        links: [
            { icon: "fab fa-github", url: "https://github.com/mpalurik/HearthstoneCards", tooltip: "GitHub Repository" }
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
            \nSystém dynamicky komunikuje s veřejným REST API Formule 1, data dekóduje přes JSON parsery a prezentuje je uživateli formou nativních iOS UI komponent. V aplikaci naleznete aktuální výsledky závodů, detailní statistiky jednotlivých jezdců, kalendáře sezóny a aktuální bodové stavy šampionátu.
            \nJednou ze stěžejních funkčností je asynchronní streamování zvuku – aplikace podporuje stahování a plynulé přehrávání oficiálních audio záznamů (tzv. Team Radios) přímo z prostředí aplikace, a to vše zcela asynchronně na pozadí.`,
            en: `F1 Live Tracker is a native iOS application developed entirely in Swift using XCode, serving as a pocket companion for Formula 1 fans.
            \nThe system dynamically interfaces with a public F1 REST API, decoding payloads via native JSON parsers, and presents the data using optimized iOS UI components. The app features real-time race results, highly detailed driver statistics, season calendars, and championship standings.
            \nA standout technical feature is the implementation of asynchronous audio streaming – the application supports fetching and smoothly playing official audio recordings (Team Radios) directly within the app, all handled asynchronously in the background.`
        },
        tech: ["iOS", "Swift", "REST API", "XCode"],
        images: [],
        links: [
            { icon: "fab fa-github", url: "https://github.com/mpalurik/Ios_F1_app", tooltip: "GitHub Repository" }
        ]
    },
    {
        id: "jump-to-space",
        category: "school",
        title: {
            cz: "Jump to Space",
            en: "Jump to Space"
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
            \nZákladní herní mechanismy jsou volně inspirované legendární hrou "Doodle Jump" (skákání po plošinách vzhůru). Cosmic Jump 3D to však posouvá dál zavedením unikátní vesmírné fyziky (úprava gravitace enginu, setrvačné driftování) a přechodem do plného 3D prostoru.
            \nBěhem vývoje jsem čelil náročným výzvám: programování logiky procedurálního generování nekonečných (endless) levelů bez přetížení paměti, správa 3D kolizí, návrh state-machines pro nepřátele a implementace plynulých přechodů animací hráčského avatara.`,
            en: `An action-packed 3D video game developed using the Unity Engine and C# for the Computer Game Development course.
            \nWhile the core gameplay loop is loosely inspired by the legendary "Doodle Jump" (platform hopping upwards), Cosmic Jump 3D pushes the concept further by moving into a full 3D space and introducing custom zero-gravity physics (engine gravity manipulation, inertia drift mechanics).
            \nDuring development, I tackled complex challenges such as procedural endless-level generation algorithms with object pooling, rigorous 3D collision detection, finite state-machines for enemy AI, and smooth player animation transitions.`
        },
        tech: ["Unity 3D", "C#", "Game Physics", "Procedural Gen"],
        images: [],
        links: []
    },
    {
        id: "movie-database",
        category: "school",
        title: {
            cz: "Fullstack Filmová Databáze",
            en: "Fullstack Movie Database"
        },
        badge: {
            cz: "Pokročilé Databáze",
            en: "Advanced Databases"
        },
        shortDesc: {
            cz: "Fullstack systém skládající se z Flutter frontendu a Python backendu, napojený na obří NoSQL MongoDB databázi.",
            en: "Fullstack system consisting of a Flutter frontend and a Python backend, connected to a massive NoSQL MongoDB database."
        },
        longDesc: {
            cz: `Projekt pro kurz Pokročilé databáze zkoumající limity nerelačních databázových systémů. Jedná se o kompletní fullstack architekturu rozdělenou na frontend a backend.
            \nZákaznická část (Frontend) je napsaná v moderním frameworku **Flutter** (Dart), což zaručuje plynulý chod na různých zařízeních (Web/Mobile/Desktop) s jednotnou kódovou základnou. Uživatelé v aplikaci mohou **vyhledávat filmy přes rychlý Full-Text Search**, prohlížet detailní záznamy o režisérech i filmech a dynamicky data přidávat či upravovat (kompletní CRUD). Komunikaci s databází a byznys logiku obstarává neuvěřitelně rychlý **Python backend** (REST API přes FastAPI), mapovaný přes MongoEngine.
            \nPod kapotou běží dokumentově orientovaná NoSQL databáze **MongoDB**. Důraz byl kladen primárně na architekturu: pokročilý návrh a strukturování dokumentových kolekcí, strategická de-normalizace dat pro zvýšení read-výkonu a aplikace složitých agregačních pipeline (Aggregation Framework). Zásadní částí projektu byla pokročilá optimalizace textových indexů, která dramaticky snížila latenci u komplexních vyhledávacích dotazů napříč miliony záznamů.`,
            en: `An academic project for the Advanced Databases course exploring the capabilities of non-relational database systems. It is built as a complete fullstack architecture separated into frontend and backend components.
            \nThe client-facing interface (Frontend) is developed using the modern **Flutter** (Dart) framework, ensuring smooth cross-platform performance from a single codebase. Within the app, users can **search movies using blazing-fast Full-Text Search**, view detailed records of directors and movies, and dynamically manage data (Full CRUD capabilities). The business logic and database communication are handled by a blazing-fast **Python backend** (REST API via FastAPI), mapped via MongoEngine.
            \nUnder the hood runs a document-oriented **MongoDB** NoSQL database. The primary academic focus was on the underlying architecture: advanced document collection design, strategic data de-normalization to maximize read-throughput, and heavy use of the Aggregation Framework. A crucial milestone of the project was advanced text index optimization, drastically reducing query latency for complex searches across millions of records.`
        },
        tech: ["MongoDB", "Flutter (Dart)", "Python", "FastAPI/Flask", "NoSQL", "Indexing"],
        images: [],
        links: [
            { icon: "fab fa-github", url: "https://github.com/mpalurik/MovieDatabase", tooltip: "GitHub Repository" }
        ]
    },
    {
        id: "sim-pedals",
        category: "other",
        title: {
            cz: "Simulační pedály s telemetrií",
            en: "Sim-Racing Telemetry Pedals"
        },
        badge: {
            cz: "Hobby HW/SW Modding",
            en: "Hobby HW/SW Modding"
        },
        shortDesc: {
            cz: "Hardware a software modifikace pedálů pro simulátory. RPi Pico s custom firmwarem a Python GUI pro živou telemetrii.",
            en: "HW/SW sim-racing pedals modification. Features RPi Pico with custom firmware and a Python GUI for live telemetry."
        },
        longDesc: {
            cz: `Kompletní obnova a inovace HW/SW projektu pro závodní simulátory. Po fyzické stránce (HW modding) byl klasický pevný gumový odpor u brzdového pedálu nahrazen progresivním pružinovým systémem (Load Cell / Potenciometr) pro dosažení autentické silové odezvy brzd (Force Feedback feel).
            \nPo softwarové stránce byl projekt převeden z pomalého Arduina na neuvěřitelně rychlé **Raspberry Pi Pico**. Napsal jsem kompletně nový **C/C++ firmware** extrémně optimalizovaný pro nízkou latenci vstupu (vyhlazovací filtry senzoru, normalizace os, atd.).
            \nNejvětší "Wow" funkcí je však mnou napsané desktopové řídící centrum – **Control Center**. Je to pokročilá **Python aplikace** postavená nad frameworky **CustomTkinter** a **Pygame**. Komunikuje s Picem přes sériovou linku rychlostí 115200 baudů a umožňuje:
            \n- Sledovat živou barevnou telemetrii vstupů z pedálů pomocí vlastního integrovaného **osciloskopu**
            \n- Graficky "tahat" myší za body a vytvářet **nelineární křivky citlivosti** (až 9 bodů interpolace na pedál)
            \n- Nastavovat začáteční a koncové **mrtvé zóny** (Deadzones)
            \n- Spustit funkci "Asistenta záběru spojky" a nastavovat brzdný tlak v reálných kilogramech (Kg target)
            \n- Automaticky tyto kalibrační profily zapsat přímo do trvalé paměti mikrokontroléru.`,
            en: `A complete overhaul and innovation of a HW/SW project for sim-racing enthusiasts. On the physical side (HW modding), the rigid rubber-block resistance on the brake pedal was replaced with a progressive dual-spring mechanism to achieve authentic braking force feedback.
            \nOn the software side, the project was migrated from a slow Arduino to a powerful **Raspberry Pi Pico**. I wrote an entirely new **C/C++ firmware** heavily optimized for sub-millisecond input latency (implementing sensor smoothing filters and dynamic axis normalization).
            \nThe absolute highlight is the custom desktop **Control Center**. It is an advanced **Python application** built using **CustomTkinter** and **Pygame**. It communicates with the microcontroller over a 115200 baud serial connection, offering high-end features:
            \n- View live, colored telemetry via a custom integrated **oscilloscope** graph (showing gas, brake, clutch inputs)
            \n- Graphically drag and drop nodes to create **non-linear sensitivity curves** (up to 9 interpolation points per pedal)
            \n- Adjust start and end **Deadzones** in real-time
            \n- Enable "Clutch Bite Point" visualizer and calibrate brake force pressure in real Kilograms (Load Cell target)
            \n- Seamlessly flash and persist these calibration profiles directly into the microcontroller's memory.`
        },
        tech: ["Raspberry Pi Pico", "Python", "CustomTkinter", "Pygame", "C/C++", "Hardware Modding", "Serial Comms"],
        images: ["assets/img/sim_pedals_1.png", "assets/img/sim_pedals_2.png", "assets/img/sim_pedals_3.png"],
        links: [
            { icon: "fab fa-github", url: "https://github.com/mpalurik/Sim-racing-pedals", tooltip: "GitHub Repository" }
        ]
    }
];
