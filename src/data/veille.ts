export interface IPostData {
	title: string;
	link: string;
	thumbnail: string;
}

const veilleData: Array<IPostData> = [
	{
		title: 'L’intelligence artificielle ChatGPT et la démocratisation de la cybercriminalité',
		link: 'https://www.france24.com/fr/%C3%A9co-tech/20230116-l-intelligence-artificielle-chatgpt-et-la-d%C3%A9mocratisation-de-la-cybercriminalit%C3%A9',
		thumbnail:
			'https://s.france24.com/media/display/59a2df1a-95bc-11ed-a655-005056a90321/w:980/p:16x9/chat-gpt-cybercriminalite.webp',
	},
	{
		title: "Avec l'IA, l'OTAN teste la cyber-protection des infrastructures critiques",
		link: 'https://www.lemondeinformatique.fr/actualites/lire-avec-l-ia-l-otan-teste-la-cyber-protection-des-infrastructures-critiques-89241.html',
		thumbnail:
			'https://images.itnewsinfo.com/lmi/articles/grande/000000090007.jpg',
	},
	{
		title: 'L’IA viole-t-elle le copyright ? Des artistes portent plainte',
		link: 'https://www.presse-citron.net/lia-viole-t-elle-le-copyright-des-artistes-portent-plainte/',
		thumbnail:
			'https://www.presse-citron.net/app/uploads/2023/01/template-jdg-1-1000x600.jpg',
	},
	{
		title: "L'intelligence articificielle c'est pas bien du tout.",
		link: 'http://wikipedia.com',
		thumbnail: 'https://source.unsplash.com/random',
	},
];

export default veilleData;
