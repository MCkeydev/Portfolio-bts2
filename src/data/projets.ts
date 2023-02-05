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
					mission: `En tant que développeur junior au service informatique de l'entreprise MediaTek76, il m'a été confié de réaliser une application permettant la gestion du personnel de la mediatèque de Rouen.`,
				},
				stack: [
					{ name: 'C#', icon: '/svg/csharp.png' },
					{ name: 'MySQL', icon: '/svg/mysql.svg' },
				],
				thumbnail: '/images/personnel.webp',
				tags: 'C#, MYSQL',
				resume: `Dans le cadre de ma première année de BTS SIO au CNED, j'ai été confié la mission de développer une application de gestion de personnel pour une entreprise fictive appelée MediaTEK76. J'ai choisi de développer cette application en utilisant C#, car je suis plus à l'aise avec ce langage. (Il fallait choisir entre du Java ou C#).

				L'application a plusieurs fonctionnalités, telles que l'ajout de personnel à des services, la gestion des absences et la suppression de personnel. Cette mission m'a permis d'appliquer les connaissances acquises au cours de l'année en développant une application simple et portable qui peut être utilisée par tous.
				
				J'ai utilisé le modèle MVC (Modèle-Vue-Contrôleur) pour structurer cette application. Ce modèle divise l'application en trois parties distinctes : le modèle, qui gère les données, la vue, qui affiche les données à l'utilisateur, et le contrôleur, qui gère les interactions entre le modèle et la vue. Cette structure permet une séparation claire des tâches et une maintenance plus facile du code.

				J'ai également utilisé des User Stories pour planifier les fonctionnalités de l'application. Les User Stories sont des descriptions de la façon dont les utilisateurs interagissent avec l'application. Elles m'ont permis de décrire les fonctionnalités de l'application sous forme de scénarios concrets pour les utilisateurs, facilitant ainsi la planification et le développement de l'application.
				Vous pourrez trouver de plus amples informations dans le dossier documentaire du projet.
				
				`,
			},
			{
				name: 'Ticket-IO | Application web de gestion de tickets',
				description:
					"Ceci est la description du projet, il m'a demandé beaucoup de travail wallah, je dis la vérité je le jure monsieur le comissaire, sur la tête de ma mère",
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
				resume: `Dans le cadre de notre premier projet d'option développement de seconde année de BTS, il nous a été proposé de réaliser une application de gestion tickets.
            Le choix des technologies utilisées à été libre, à condition qu'elles aient été vues en cours. 
            C'est en binome que ce projet à été réalisé, ainsi nous avons choisi la technologie avec laquelle nous étions le plus à l'aise : Symfony.
            L'application permet à un opérateur de créer un ticket d'incident informatique pour un client, et de l'assigner à un service de techniciens.
            Il sera alors possible d'effectuer le suivi du ticket, en observant son évolution, sous forme de commentaires.
            Le client à la possibilité de voir ses tickets, et leurs status.
            `,
				githublink: 'https://github.com/MCkeydev/ticket.io',
				cahierCharge: '/projets/cahiercharge.pdf',
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
					mission: `Une nouvelle itération du logiciel propriétaire développé par mon service étant actuellement en cours, de nouvelles fonctionnalitées et statistiques étaient alors accessibles aux utilisateurs ayant crée un projet. Il fallut donc mettre en place un tableau de bord regroupant tous ces ajouts.`,
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
					mission: `Apprenant à l'époque le framework JavaScript React, ainsi que d'autres technologies de base de la programmation web, j'ai vite souhaité pouvoir tester mes nouvelles compétences sur un petit projet challengeant. J'ai alors eu l'idée de réaliser cette petite application statique (n'utilisant pas de de serveur web)`,
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
				githublink: 'https://github.com/MCkeydev/ticket.io',
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
