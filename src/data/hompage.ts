export const compData = {
	categories: [
		{
			name: 'Langages',
			description: `Il s'agit des différents langages avec lesquels je suis en capacité de livrer un produit de qualité professionnelle. J'ai une appétence particulière pour l'écosystème Web.`,
			items: [
				{
					name: 'JavaScript',
					description:
						"Langage incontournable du développeur Web côté client, il est le premier langage de programmation qu'il mais été donné d'apprendre.",
					asset: '/svg/javascript.svg',
					level: "Très à  l'aise",
					color: 'success',
				},
				{
					name: 'TypeScript',
					description:
						"Version typée du langage de programmation web JavaScript. Utilisé par les plus grandes entreprises du monde pour produire de code de qualité industrielle, il s'agit d'un indispensable pour tout développeur web moderne.",
					asset: '/svg/typescript.svg',
					level: "Très à  l'aise",
					color: 'success',
				},
				{
					name: 'PHP',
					description:
						"Il s'agit d'un dans langage les plus utilisé sur terre, très puissant en matière de serveur web.",
					asset: '/svg/php.svg',
					level: "Très à  l'aise",
					color: 'success',
				},
				{
					name: 'C#',
					description:
						'Langage lourd exclusif à la plateform windows, il est très similaire au TypeScript dans sa syntaxe, car développé par le même ingénieur.',
					asset: '/svg/csharp.png',
					level: 'Intermédiaire',
					color: 'warning',
				},
				{
					name: 'Java',
					description:
						"Grand classique de la programmation orientée objet, il monopolise le marché de l'application d'entreprise depuis près de 20 ans.",
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
					level: "Très à  l'aise",
					color: 'success',
				},
				{
					name: 'Symfony',
					description:
						"Framework PHP permettant d'éviter l'écriture de code utilitaire répétitif ralentissant le développement d'une application. Ce dernier offre une structure précise au projet, ainsi qu'une multitude de fonctionnalitées, allant de la cybersécurité à la persistance de données.",
					asset: '/svg/symfony.png',
					level: "Très à  l'aise",
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
					name: 'Docker',
					description:
						"Véritable révolution dans le milieu, docker permet de virtualiser des machines sous la forme de container qui peuvent s'emboîter. Très intéressant en développement, car il permet de mettre en place des environnements facilemen (base de données, serveurs webs).",
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
