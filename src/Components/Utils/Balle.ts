import { MutableRefObject } from 'react';

function testBalle(balleRef: MutableRefObject<HTMLImageElement>) {
	let mouvement = () => console.log('hello');
	if (window.matchMedia('(max-width: 1000px)').matches) {
		let balle = balleRef; // Récupère l'ID balle dans la variable balle
		balle.coord_x = 0; // propriété de la variable balle, axe X initialisé à 0
		balle.coord_y = 0; // propriété de la variable balle, axe Y initialisé à 0
		var decalagex = 1.5;
		var decalagey = 2;
		const unite = 'px';
		balle.dx = decalagex;
		balle.dy = decalagey;
		mouvement = () => {
			let colision = balleRef.getBoundingClientRect(); // Récupère la dimensions de la balle
			balle.coord_y += balle.dy; // ajoute la constante décalage à la propriété balle.coord_y ( initialement à 0 )
			balle.coord_x += balle.dx;

			balle.style.top = balle.coord_y + unite; //Ajoute la constante décalage à la coordonée y de la variable balle
			balle.style.left = balle.coord_x + unite; // Ajoute la constante décalage sur le coté gauche de la variable balle

			if (
				balle.coord_y < 2 ||
				balle.coord_y + colision.height > document.body.clientHeight
			) {
				// Test de colision Coté Top et coté bot
				balle.dy = -balle.dy;
			} else if (
				balle.coord_x < 1.5 ||
				balle.coord_x + colision.width > document.body.clientWidth
			) {
				// Test de colision coté left et right
				balle.dx = -balle.dx;
			}
		};
	} else {
		let balle = balleRef; // Récupère l'ID balle dans la variable balle
		balle.coord_x = 0; // propriété de la variable balle, axe X initialisé à 0
		balle.coord_y = 0; // propriété de la variable balle, axe Y initialisé à 0
		var decalagex = 3;
		var decalagey = 4;
		const unite = 'px';
		balle.dx = decalagex;
		balle.dy = decalagey;

		mouvement = () => {
			let colision = balleRef.getBoundingClientRect(); // Récupère la dimensions de la balle
			balle.coord_y += balle.dy; // ajoute la constante décalage à la propriété balle.coord_y ( initialement à 0 )
			balle.coord_x += balle.dx;

			balle.style.top = balle.coord_y + unite; //Ajoute la constante décalage à la coordonée y de la variable balle
			balle.style.left = balle.coord_x + unite; // Ajoute la constante décalage sur le coté gauche de la variable balle

			if (
				balle.coord_y < 3 ||
				balle.coord_y + colision.height > window.innerHeight
			) {
				// Test de colision Coté Top et coté bot
				balle.dy = -balle.dy;
			} else if (
				balle.coord_x < 3 ||
				balle.coord_x + colision.width > window.innerWidth
			) {
				// Test de colision coté left et right
				balle.dx = -balle.dx;
			}
		};
	}
	setInterval(mouvement, 10); // aplique la fonction mouvement toutes les 10 ms.
}

export default testBalle;
