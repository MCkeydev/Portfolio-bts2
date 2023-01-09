const projetsData = {
	projets: [
		{
			name: 'Application de Gestion de Personnel',
			description:
				"Application Windows de gestion d'effectif/personnel, dans le cadre d'une médiathèque.",
			path: 'gestion+personnel',
			context: {
				role: 'Developpeur junior',
				entreprise: 'Entreprise fictive Mediatek76',
				mission: `En tant que développeur junior au service informatique de l'entreprise MediaTek76, il m'a été confié de réaliser une application permettant la gestion du personnel de la mediatèque de Rouen.`,
			},
			stack: [{ name: 'C#', icon: '/svg/csharp.png' }],
			thumbnail: '/images/personnel.webp',
			tags: 'C#, MYSQL',
			resume: `Dans le cadre de ma première année de BTS SIO au CNED, il m'a été confiée la mission de réaliser une application de gestion de personnel pour une netreprise fictive crée par mes porfesseurs : MediaTEK76.
			Ce projet devait être réalisé avec un des deux langages vus au cours de l'année : Le java et le C#. Je me suis orienté vers ce dernier, étant plus prolifique avec.
			L'application permet d'ajouter du personnel à des services, gérer les absences, voire supprimer du personnel. J'ai grandement apprécié travailler sur cette mission, car elle permetait d'appliquer les connaissances apprises plus tôt d'ans l'année,
			tout en créant une application légère et portable, accessible à tous.`,
		},
		{
			name: 'Ticket-IO | Application web de gestion de tickets',
			description:
				"Ceci est la description du projet, il m'a demandé beaucoup de travail wallah, je dis la vérité je le jure monsieur le comissaire, sur la tête de ma mère",
			path: 'ticketio',
			context: {
				Role: 'developpeur Full-Stack',
				Entreprise: "Contexte d'entreprise fictif crée pour le projet",
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
};

export default projetsData;
