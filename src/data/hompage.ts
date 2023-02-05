export const compData = {
	categories: [
		{
			name: 'Langages',
			description: `voici l'ensemble des langages de développement que j'ai eu l'occasion d'utiliser : le niveau d'aisance et d'expérience va varier.`,
			items: [
				{
					name: 'JavaScript',
					description:
						"Langage incontournable du développeur Web côté client, il est le premier langage de programmation qu'il, m'a été donné d'apprendre.",
					asset: '/svg/javascript.svg',
					level: 'Avancé',
					color: 'success',
				},
				{
					name: 'TypeScript',
					description:
						"Version typée du langage de programmation web JavaScript. Utilisé par les plus grandes entreprises du monde pour produire du code de qualité industrielle, il s'agit d'un indispensable pour tout développeur web moderne. Je l'utilise quotidiennement, que ce soit dans le cadre de mon alternance, ou dans mes projets personnels. Je n'utilise plus du tout de simple JavaScript.",
					asset: '/svg/typescript.svg',
					level: 'Avancé',
					color: 'success',
				},
				{
					name: 'PHP',
					description: `Incontournable du développement web dit "Back-end" (côté serveur), je l'utilise principalement pour créer des APIs qui vont recevoir et transmettre des données aux vues de mes applications TypeScript. J'ai l'occasion de l'utiliser dans le cadre de ma formation, de mon alternance, et de mes projets personnels.`,
					asset: '/svg/php.svg',
					level: 'Avancé',
					color: 'success',
				},
				{
					name: 'C#',
					description: `Langage lourd exclusif à la plateform windows, il est très similaire au TypeScript dans sa syntaxe, car développé par le même ingénieur.
						Je l'ai utilisé au cours de ma première année de BTS, ainsi que lors de projet personnels (Blazor et Web Assembly).`,
					asset: '/svg/csharp.png',
					level: 'Intermédiaire',
					color: 'warning',
				},
				{
					name: 'Java',
					description:
						"Grand classique de la programmation orientée objet, il monopolise le marché de l'application d'entreprise depuis près de 20 ans. Je l'ai un peu utilisé au cours de mon BTS (Swing), mais ne l'ai jamais utilisé dans un autre contexte.",
					asset: '/svg/java.svg',
					level: 'Débutant',
					color: 'error',
				},
			],
		},
		{
			name: 'Frameworks',
			description: `Ce sont les différents FrameWorks, extensions de langages précedemment cités, que j'ai eu l'occasion d'utiliser.`,
			items: [
				{
					name: 'React',
					description:
						"Développé par Facebook au début des années 2010, React s'est imposé comme le framework/library l plus influent du marché. Il s'agit d'un incontournable pour tout développeur web ayant des volonté d'évoluer du côté client d'une application.",
					asset: '/svg/react.svg',
					level: 'Avancé',
					color: 'success',
				},
				{
					name: 'Symfony',
					description:
						"Framework PHP permettant d'éviter l'écriture de code utilitaire répétitif ralentissant le développement d'une application. Ce dernier offre une structure précise au projet, ainsi qu'une multitude de fonctionnalitées, allant de la cybersécurité à la persistance de données.",
					asset: '/svg/symfony.png',
					level: 'Avancé',
					color: 'success',
				},
				{
					name: 'Framework .NET',
					description:
						"Plateforme développée par Microsoft, et disponible sur tous les postes Windows. Ce framework offre un très large éventail de fonctionnalités, permettant d'intéragir avec quasiment tous les aspects d'un système windows et plus encore. On va le retrouver notamment dans le langage de programmation C# et le langage de scripting Powershell.",
					asset: '/svg/net.png',
					level: 'Débutant',
					color: 'error',
				},
			],
		},
		{
			name: 'Environnement',
			description: `Cette section concerne les outils qui constituent mon environnement de travail.`,
			items: [
				{
					name: 'MySQL',
					description:
						"SGBR très connu, il s'appuie sur la syntaxe SQL. Je l'utilise énormément, que ce soit en formation ou en alternance. Ce dernier peut-être accompagné de PHPMyAdmin, qui facilite la gestion des bases de données.",
					asset: '/svg/mysql.svg',
					level: 'Avancé',
					color: 'success',
				},
				{
					name: 'PostGreSQL',
					description:
						"Mastodonte des SGBR de bases de données relationnelles, connu pour sa grande scalabilité, je ne l'ai utilisé qu'à quelques reprises en BTS dans le cadre de l'apprentissage du langage SQL.",
					asset: '/svg/postgresql.svg',
					level: 'Débutant',
					color: 'error',
				},
				{
					name: 'Docker',
					description:
						"Véritable révolution dans le milieu, docker permet de virtualiser des machines sous la forme de container qui peuvent s'emboîter. Très intéressant en développement, car il permet de mettre en place des environnements facilement (base de données, serveurs webs).",
					asset: '/svg/docker.svg',
					level: 'Intermédiaire',
					color: 'warning',
				},
				{
					name: 'VirtualBox',
					description:
						"Mastodonte du milieu de la virtualisation, il m'a été donné de l'utiliser à de nombreuses reprises au cours de ma formation, afin de simuler différents environnements techniques.",
					asset: '/svg/virtualbox.png',
					level: 'Intermédiaire',
					color: 'warning',
				},
			],
		},
		{
			name: 'Administration Système et Réseau',
			description: `Il s'agit de tous les outils et logiciel que j'ai pu utiliser dans le cadre de l'administration système et réseau.`,
			items: [
				{
					name: 'Powershell',
					description:
						"Langage shell propriétaire de Microsoft. Ce dernier permet d'administrer tous les aspects d'un poste windows.",
					asset: '/svg/powershell.svg',
					level: 'Intermédiaire',
					color: 'warning',
				},
				{
					name: 'Cisco Packet Tracer',
					description:
						"Logiciel édité par l'entreprise Cisco, il permet de visualiser de manière réaliste toute sorte d'interface réseau. C'est l'outil parfait pour l'apprentissage de l'administration système et réseau.",
					asset: '/svg/cisco.png',
					level: 'Débutant',
					color: 'error',
				},
			],
		},
	],
};
