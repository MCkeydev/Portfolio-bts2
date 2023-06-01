const projetsData = [
    {
        name: 'projet académiques',
        items: [
            {
                name: 'Application de Gestion de Personnel',
                description:
                    "Application Windows de gestion d'effectif/personnel, dans le cadre d'une médiathèque.",
                path: 'gestion+personnel',
                context: {
                    role: 'Developpeur junior',
                    contexte: 'Entreprise fictive Mediatek76',
                    mission:
                        "En tant que développeur junior au service informatique de l'entreprise MediaTek76, il m'a été confié de réaliser une application permettant la gestion du personnel de la mediatèque de Rouen.",
                },
                stack: [
                    { name: 'C#', icon: '/svg/csharp.png' },
                    { name: 'MySQL', icon: '/svg/mysql.svg' },
                ],
                thumbnail: '/images/personnel.webp',
                tags: 'C#, MYSQL',
                resume: `Dans le cadre de ma première année de BTS SIO au CNED, il m'a été confié la mission de développer une application de gestion de personnel pour une entreprise fictive appelée MediaTEK76. J'ai choisi de développer cette application en utilisant C#, car je suis plus à l'aise avec ce langage. (Il fallait choisir entre du Java ou C#).

				L'application a plusieurs fonctionnalités, telles que l'ajout de personnel à des services, la gestion des absences et la suppression de personnel. Cette mission m'a permis d'appliquer les connaissances acquises au cours de l'année en développant une application simple et portable qui peut être utilisée par tous.
				
				J'ai utilisé le modèle MVC (Modèle-Vue-Contrôleur) pour structurer cette application. Ce modèle divise l'application en trois parties distinctes : le modèle, qui gère les données, la vue, qui affiche les données à l'utilisateur, et le contrôleur, qui gère les interactions entre le modèle et la vue. Cette structure permet une séparation claire des tâches et une maintenance plus facile du code.

				J'ai également utilisé des User Stories pour planifier les fonctionnalités de l'application. Les User Stories sont des descriptions de la façon dont les utilisateurs interagissent avec l'application. Elles m'ont permis de décrire les fonctionnalités de l'application sous forme de scénarios concrets pour les utilisateurs, facilitant ainsi la planification et le développement de l'application.
				Vous pourrez trouver de plus amples informations dans le dossier documentaire du projet.
				`,
                cahierCharge: '/downloads/mediatek-rapport.pdf',
                download: '/downloads/mediatek-installer.zip',
            },
            {
                name: 'Ticket-IO | Application web de gestion de tickets',
                description:
                    'Application de gestion de tickets, similaire à la fonctionnalité de suivi de GLPI.',
                path: 'ticketio',
                context: {
                    Role: 'developpeur Full-Stack',
                    Contexte: 'Entreprise fictive crée pour le projet',
                    Mission:
                        'Concevoir une application web de gestion ticket, similaire à GLPI.',
                },
                stack: [
                    { name: 'PHP', icon: '/svg/php.svg' },
                    { name: 'Symfony', icon: '/svg/symfony.png' },
                    { name: 'CSS', icon: '/svg/css.svg' },
                    { name: 'HTML', icon: '/svg/html.svg' },
                ],
                thumbnail: '/images/ticketio.png',
                tags: 'SYMFONY, TWIG, HTML, CSS',
                resume: `
Dans le cadre de mon premier projet d'option développement de deuxième année de BTS SIO, j'ai été chargé de réaliser une application de gestion de tickets. Mon binôme et moi avons choisi d'utiliser le framework PHP Symfony, car nous nous sentions le plus à l'aise avec ce dernier.

Dans un premier temps, lors de la phase de maquettage, nous avons élaboré un plan détaillé de l'application, en déterminant les fonctionnalités nécessaires pour répondre aux besoins de l'utilisateur (en accord avec les fonctionnalités attendues dans le cahier des charges fourni par les formateurs). Nous avons également créé des maquettes graphiques afin de visualiser les différentes vues de l'application.

Pendant la phase de développement, basée sur des User Stories, nous avons commencé à implémenter les fonctionnalités de l'application en utilisant les cas d'utilisation du cahier des charges comme guide pour notre travail. Par exemple, nous avons créé une fonctionnalité qui permet à un opérateur de créer un ticket d'incident informatique pour un client et de l'assigner à un service de techniciens.
Une fois que les fonctionnalités attendues ont été implémentées et testées, nous avons réalisé une documentation complète récapitulant la mise en place et le développement du projet.

Il convient de noter que nous avons fourni à la fois une documentation technique et une documentation utilisateur. La documentation utilisateur est disponible sous forme de vidéos ainsi que de texte sur GitHub.

En conclusion, ce projet représente une progression significative de nos compétences, que ce soit en développement web ou en gestion de projet, pour moi et mon binôme.
				
            `,
                githublink: 'https://github.com/MCkeydev/Ticket-IO',
                cahierCharge: '/downloads/ticketio-cahier-charge.pdf',
                rapportActivite: '/downloads/ticketio-RA.pdf',
                docTechnique: 'https://ticket-io-doc.netlify.app',
                docUtilisateur: '/video/ticketio_util.mp4',
                ficheProjet: '/downloads/ticketio-E5.pdf',
            },
            {
                name: "Script d'installation GLPI",
                description:
                    'Script shell installant tous les paquets nécessaires à GLPI, ainsi que ce dernier.',
                path: 'glpi',
                context: {
                    Role: 'developpeur',
                    Contexte: 'TP sur une séance de 7H',
                    Mission: "Créer un script complet d'installation de GLPI.",
                },
                stack: [{ name: 'Virtual Box', icon: '/svg/virtualbox.png' }],
                thumbnail: '/images/glpi.png',
                tags: 'APACHE, VIRTUAL BOX, GLPI, SHELL',
                resume: `Dans le cadre d'un TP de la matière du bloc 1 "Support et mise à disposition de services informatiques", il nous a été demandé d'écrire un script shell permettant le déploiement complet de la solution de ticketing open source GLPI sur un environnement debian.

                Une fois le script fait, il fallait créer de multiples utilisateurs et techniciens, ainsi que créer et résoudre différents tickets de manière professionnelle, en proposant des solutions cohérentes et fonctionnelles.
				
            `,
                cahierCharge: '/downloads/glpi.pdf',
            },
            {
                name: "Quiz Dubois | Application d'évaluations (type moodle)",
                description:
                    'Client web et API permettant à des professeurs de créer des quiz, et de noter les élèves..',
                path: 'quiz',
                context: {
                    Role: 'developpeur',
                    Contexte: 'AP4 option SLAM',
                    Mission: "Développer l'application",
                },
                stack: [
                    { name: 'React', icon: '/svg/react.svg' },
                    { name: 'Symfony', icon: '/svg/symfony.png' },
                ],
                thumbnail: '/images/quiz.png',
                tags: 'REACT, SYMFONY, MYSQL',
                resume: `Dans le cadre du second atelier de professionnalisation de ma deuxième année de BTS SIO 2, j'ai été chargé de développer une application web pour le centre de formation Dubois. Ce projet fictif est accompagné d'un cahier des charges complet fourni par mes enseignants (voir bas de page). Pour répondre à ces besoins, j'ai commencé par créer le modèle conceptuel de données, puis j'ai procédé à l'architecture de l'application.

L'application se compose d'une interface client développée en TypeScript (React), ainsi que d'une API serveur en PHP 8.1 (Symfony). Toutes les instructions d'installation sont disponibles dans le dossier documentaire téléchargeable ci-dessous, où vous trouverez également une description détaillée de la conception de l'application. Une documentation technique et une documentation utilisateur sont également incluses pour faciliter son utilisation.
            `,
                docUtilisateur: '/video/dubois_util.mp4',
                docTechnique: 'https://quiz-doc.netlify.app/',
                githublink: 'https://github.com/MCkeydev/dubois-quiz-back',
                githublink2: 'https://github.com/MCkeydev/dubois-quiz-front',
                cahierCharge: '/downloads/dubois-cahier-charge.pdf',
                rapportActivite: '/downloads/dubois-RA.pdf',
                ficheProjet: '/downloads/dubois-E5.pdf',
            },
        ],
    },
    {
        name: 'projets professionnels',
        items: [
            {
                name: 'Tableau de bord statistiques utilisateur',
                description:
                    "Vue interactive d'une application Web, exposant et synthétisant les données majeures d'un projet crée par un utilisateur. Cette dernière permet aussi à l'utilisateur d'intéragir avec le projet (modification, suppression).",
                path: 'project-dashboard',
                context: {
                    role: 'Developeur Web Front-End',
                    entreprise: 'Linkweb, Agen - Alternance',
                    mission:
                        'Une nouvelle itération du logiciel propriétaire développé par mon service étant actuellement en cours, de nouvelles fonctionnalitées et statistiques étaient alors accessibles aux utilisateurs ayant crée un projet. Il fallut donc mettre en place un tableau de bord regroupant tous ces ajouts.',
                },
                stack: [
                    {
                        name: 'Figma, logiciel de maquettage en ligne',
                        icon: '/svg/figma.svg',
                    },
                    { name: 'Typescript', icon: '/svg/typescript.svg' },
                    {
                        name: 'Vite, environnement de travail React',
                        icon: '/svg/vite.svg',
                    },
                    {
                        name: 'React, framework JavaScript',
                        icon: '/svg/react.svg',
                    },
                    {
                        name: 'Victory, library de graphiques',
                        icon: '/svg/victory.svg',
                    },
                ],
                thumbnail: '/images/project-dashboard.png',
                tags: 'React, JavaScript',
                resume: `
				Linkweb, agence web située à Boé (47550, Lot-et-Garonne), s'est constituée un service développement logiciel dans le but d'éditer une aplication permettant de centraliser toute la gestion d'une agence web. C'est ce service que j'ai rejoins dans le cadre de mon alternance de seconde année de BTS, en tant que développeur web full-stack. Dans une optique de scalabilité de la plateforme, il parut nécessaire au CTO d'embrayer vers une version 3.0 du logiciel, plus légère, et plus stable.
				
				Une fois la partie back-end de l'application développée, il était temps de créer les différentes vues accessibles aux clients. L'application permettait de créer des projets, sur lesquels de multiples actions et statistiques étaient disponbiles. Le lead developper de l'équipe m'avaiat confié comme misson de maquetter ce tableau de bord, et une fois le design vérouillé, de l'implémenter sur l'application.
				Dans le but de collecter une expression de besoins précise pour m'aguiller dans la création de la maquette, je dus effectuer des réunions avec les services réferencement de l'entreprise, étant les principaux utilisateurs du logiciel.
				
				Je pu ensuite réaliser la maquette, qui fut directement validée par mes supérieurs. L'intégration de la maquette dans l'application fut simple, car j'eu l'occasion de réaliser une tâche similaire antérieurement, aucours de laquelle j'avais crée de nombreux composants réutilisables.`,
                cahierCharge:
                    'https://docs.google.com/document/d/1urK4VT5XOtdWM3n_BGvFeSw26jra3SvzkKzhqkt7BgM/edit?usp=drive_web&ouid=116899015101016116841',
                figma: 'https://www.figma.com/proto/LdokSuGXDf0AckYfIRZwJM/Pegaseo---Project-Dashboard?node-id=0%3A1',
                ficheActivite: '/downloads/fa-dashboard.pdf',
            },
            {
                name: 'Fonctionnalité de Drag and Drop',
                description:
                    'Logiciel de drag and drop avec posibilité de nesting recursif.',
                path: 'drag',
                context: {
                    role: 'Developeur Web',
                    entreprise: 'Linkweb, Agen - Alternance',
                    mission:
                        "En prévision d'une fonctionnalité future nécessitant un système poussé de Drag and Drop, il m'a été demandé de développer à l'aide de la library de mon choix une fonctionnalité de glisser déposant pouvant être totalement récursive.",
                },
                stack: [
                    { name: 'Typescript', icon: '/svg/typescript.svg' },
                    {
                        name: 'Vite, environnement de travail React',
                        icon: '/svg/vite.svg',
                    },
                    {
                        name: 'React, framework JavaScript',
                        icon: '/svg/react.svg',
                    },
                    {
                        name: 'Dnd-kit, une excellente library exposant une API drag and drop.',
                        icon: '/svg/dnd-kit.svg',
                    },
                ],
                thumbnail: '/images/drag.png',
                tags: 'React, Typescript',
                resume: `
                Avant même le début du développement de cette fonctionnalité, une problématique était à résoudre : quelle library allait-on utiliser pour mener à bien ce projet ? 

                La réponse pouvait paraître simple, car de multiples bibliothèques existent pour ce type de besoin. Cependant, elles possédaient toutes au moins un défaut éliminatoire. Soit elles n'étaient plus maintenues par leurs éditeurs, soit elles ne supportaient pas la dernière version de React (18.0.1 à l'époque du projet).
                La seule qui semblait convenir à ces deux exigences, tout en étant robuste et approuvée (utilisée par Github dans différentes de leurs applications) était Dnd-kit.
                
                Une fois le choix de la library fait, il fallait étudier scrupuleusement la documentation histoire de se familiariser avec l'API du projet, et de ne pas être bloqué ultérieurement au cours de la phase de développement.
                
                Il ne restait alors plus qu'à passer à la phase de développement de la fonctionnalité. Ici, le but était d'obtenir une interface totalement récursive, il était donc évident que la structure de données sous-jacente allait être une arborescence. Afin de minimiser la lourdeur des traitements de l'arbre, je choisis d'aplatir ce dernier à chaque fois qu'un lourd traitement était à effectuer (réorganisations profondes et successives de ce dernier).

La fonctionnalité est fonctionnelle, et m'aura demandé une quantité conséquente de travail ainsi que de recherche au niveau algorithmique. J'ai ressenti une réelle montée en compétences, et suis très satisfait du résultat final.
				`,

                figma: 'https://www.figma.com/file/HyMTaStYn6MVHkFDirhrln/Inputs-Designs?node-id=0%3A1&t=Cj0PcjJDnQsPkMc2-1',
                ficheActivite: '/downloads/FA-drag.pdf',
            },
            {
                name: 'Library de composants réutilisables',
                description:
                    "Biblithèques d'inputs propriétaires réutilisables dans toutes les applications de l'entreprise.",
                path: 'inputs',
                context: {
                    role: 'Developeur Web Front-End',
                    entreprise: 'Linkweb, Agen - Alternance',
                    mission:
                        "Une nouvelle itération du logiciel propriétaire développé par mon service étant actuellement en cours, une refonte graphique était nécessaire. C'était notamment le cas de tous les inputs de formulaires. Il m'a alors été demandé de développer une bibliothèque React pouvant être utilisée dans tous les projets de l'entreprise.",
                },
                stack: [
                    {
                        name: 'Figma, logiciel de maquettage en ligne',
                        icon: '/svg/figma.svg',
                    },
                    { name: 'Typescript', icon: '/svg/typescript.svg' },
                    {
                        name: 'Vite, environnement de travail React',
                        icon: '/svg/vite.svg',
                    },
                    {
                        name: 'React, framework JavaScript',
                        icon: '/svg/react.svg',
                    },
                ],
                thumbnail: '/images/inputs.png',
                tags: 'React, Typescript',
                resume: `
				Linkweb, agence web située à Boé (47550, Lot-et-Garonne), s'est constituée un service développement logiciel dans le but d'éditer une aplication permettant de centraliser toute la gestion d'une agence web. C'est ce service que j'ai rejoins dans le cadre de mon alternance de seconde année de BTS, en tant que développeur web full-stack. Dans une optique de scalabilité de la plateforme, il parut nécessaire au CTO d'embrayer vers une version 3.0 du logiciel, plus légère, et plus stable.
				
				Une fois la partie back-end de l'application développée, il était temps de créer l'identité visuelle de cette troisième itération. L'équipe utilisait avant la bibliothèque de composants open source MUI (Material UI), cependant cette dernière était très lourde et imposait de grandes limites en matière de personnalisation.J'ai donc été chargé de créer une nouvelle library, utilisable sur tous les projets de la boîte. J'ai opté pour Emotion JS afin de pouvoir utiliser du CSS dans le JavaScript, facilitant l'expérience de développement.
				
				J'ai tout d'abord maquetté de nombreuses batteries d'inputs, chacunes dans un style différent. Une fois un design validé par mes supérieurs, j'ai pu intégrer les inputs. Bien que cela semblait simple, cela s'est avéré plus complexe que prévu, tant il y a de cas spécifiques à prendre en compte. 
				
				Cette library est maintenant utilisée partout dans les projets de l'entreprise, et j'ai même pu en extraire une partie pour l'utiliser dans des projets personnels.`,

                figma: 'https://www.figma.com/file/HyMTaStYn6MVHkFDirhrln/Inputs-Designs?node-id=0%3A1&t=Cj0PcjJDnQsPkMc2-1',
            },
        ],
    },
    {
        name: 'projets personnels',
        items: [
            {
                name: 'Application Galerie de musée en ligne',
                description:
                    "Petite application web, servant de support à une galerie d'art fictive.",
                path: 'galeria',
                context: {
                    role: 'Developeur Web',
                    Contexte: 'Dans le cadre de mon développement personnel',
                    mission:
                        "Apprenant à l'époque le framework JavaScript React, ainsi que d'autres technologies de base de la programmation web, j'ai vite souhaité pouvoir tester mes nouvelles compétences sur un petit projet challengeant. J'ai alors eu l'idée de réaliser cette petite application statique (n'utilisant pas de de serveur web)",
                },
                stack: [{ name: 'React', icon: '/svg/react.svg' }],
                thumbnail: '/images/galleria.png',
                tags: 'React, JavaScript',
                resume: `Pour développer cette galerie d'art en ligne, j'ai commencé par le maquettage de l'interface utilisateur. J'ai utilisé des outils tels que Figma pour créer des maquettes de chaque page de l'application. Cela m'a permis de visualiser l'apparence et la disposition de chaque page avant de les construire avec du code.

				Une fois le maquettage terminé, j'ai commencé à développer l'application en utilisant React. J'ai commencé par créer les composants de base, tels que le le footer, qui sont utilisés sur toutes les pages. J'ai ensuite travaillé sur la page d'accueil qui affiche les œuvres d'art en utilisant un tableau de données que j'ai créé pour les objets de la galerie d'art.

				Le layout dit en "masonry" était un  véritable challenge technique, pour lequel je dus effectuer de la veille et de la recherche technique.
				
				J'ai également développé une page de détail pour chaque œuvre d'art, qui affiche des informations supplémentaires telles que la description et les informations sur l'artiste. 
				 J'ai également utilisé du CSS (SASS) pour donner à l'application une apparence professionnelle et cohérente.
				
				En somme, le processus de développement de l'application de galerie d'art en ligne m'a permis de mettre en pratique mes connaissances en React tout en développant mes autres compétences de développement web. Je suis fier du résultat final, et pense que ce projet m'a permis d'énormément progresser.`,
                githublink: 'https://github.com/MCkeydev/Galeria-Portfolio',
                hosted: 'https://matthieu-courrejou-galeria.netlify.app/',
            },
            {
                name: 'Application de recherce de profil Github',
                description: 'Petit site web de recherche de profil Github',
                path: 'github',
                context: {
                    Role: 'Developeur Web',
                    Contexte: 'Apprentissage du framework React',
                    Mission:
                        'Utiliser pour la première fois une API externe dans une application React',
                },
                stack: [
                    { name: 'JavaScript', icon: '/svg/javascript.svg' },
                    { name: 'React', icon: '/svg/react.svg' },
                    { name: 'CSS', icon: '/svg/css.svg' },
                    { name: 'HTML', icon: '/svg/html.svg' },
                ],
                thumbnail: '/images/github.png',
                tags: 'REACT, API, GITHUB, HTML, CSS',
                resume: `Ayant déjà quelques bases en programmation, et pour approfondir les concepts clés du développement web, j'ai décidé d'élaborer une application de recherche de profils GitHub en utilisant leur API. J'ai commencé par étudier les différentes fonctionnalités de l'API de GitHub et les différents types de requêtes que je pouvais effectuer.

				Ensuite, j'ai commencé à développer l'application en utilisant du HTML, CSS (SASS) et du JavaScript. J'ai créé une page qui comprend une zone de saisie où les utilisateurs peuvent entrer le nom d'utilisateur GitHub qu'ils cherchent. Lorsqu'un utilisateur effectue une recherche, l'application envoie une requête à l'API de GitHub pour obtenir les informations sur le profil demandé.
				
				J'ai également utilisé JavaScript pour afficher les informations sur le profil GitHub sélectionné sur la même page. Cette fonctionnalité utilise la programmation asynchrone pour gérer les requêtes à l'API de GitHub de manière efficace.
				
				`,
                githublink: 'https://github.com/MCkeydev/Ticket-IO',
                hosted: 'https://modest-jang-c10cda.netlify.app/',
            },
            {
                name: 'Site web informatif sur le système solaire',
                description:
                    "Permet d'obtenir des informations topologiques et géologiques sur multiples planètes du système solaire.",
                path: 'planet',
                context: {
                    Role: 'Developeur Web',
                    Contexte: 'Apprentissage du framework React',
                    Mission:
                        "Réaliser l'intégration complète d'une maquette Figma, en utilisant les dernières technologies de développement web.",
                },
                stack: [
                    { name: 'JavaScript', icon: '/svg/javascript.svg' },
                    { name: 'React', icon: '/svg/react.svg' },
                    { name: 'CSS3', icon: '/svg/css.svg' },
                    { name: 'HTML5', icon: '/svg/html.svg' },
                ],
                thumbnail: '/images/planet.png',
                tags: 'REACT, HTML, CSS',
                resume: `
				Le projet en question a été conçu comme une activité de loisirs pour améliorer mes compétences en développement web. La maquette initiale avait déjà été créée avec Figma et mon objectif était de l'intégrer pour en faire un site fonctionnel. J'ai choisi de développer ce projet avec React car je voulais améliorer mes compétences dans cette technologie. Je considérais ce projet comme une opportunité d'entraînement et de mise en pratique de mes connaissances.

Le site a pour objectif de fournir des informations générales sur les planètes du système solaire. Il comprend des sections détaillées sur chacune des neuf planètes. Chaque section comprend des informations telles que la taille de la planète, sa vitesse de rotation, etc. Le site a été conçu pour être simple d'utilisation et facile à naviguer, avec une interface claire et intuitive. 
            `,
                figma: 'https://www.figma.com/prohttps://www.figma.com/proto/YBuifnn5itth9hoNklEoPW/planets-fact-site?node-id=0%3A12836&scaling=min-zoom&page-id=0%3A1to/YBuifnn5itth9hoNklEoPW/planets-fact-site?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1',
                hosted: 'https://ecstatic-visvesvaraya-803acb.netlify.app/',
            },
        ],
    },
];

export default projetsData;
