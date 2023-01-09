import { CSSProperties } from 'react';
import { Interpolation, Theme } from '@emotion/react';

export type TCssxProperties = {
	[key in keyof CSSProperties]:
		| ((theme: Theme) => string | number)
		| string
		| number;
};

interface ICssxShortcuts {
	[key: number]: {
		keys: Array<string>;
		transform: (value: number) => string | number;
	};
}

/**
 * @param theme Theme given by ThemeProvider
 *
 * @returns cssxShortcuts processed using given theme
 */
const cssxShortcuts: (theme: Theme) => ICssxShortcuts = (theme: Theme) => [
	{
		keys: ['height', 'width', 'top', 'right', 'bottom', 'left'],
		transform: (value: number) => `${value}%`,
	},
	{
		keys: [
			'padding',
			'paddingTop',
			'paddingRight',
			'paddingBottom',
			'paddinfLeft',
			'margin',
			'marginTop',
			'marginRight',
			'marginBottom',
			'marginLeft',
			'gap',
			'columnGap',
			'rowGap',
		],
		transform: (value: number) => theme.spacing(value),
	},
	{
		keys: ['opacity', 'fontWeight', 'lineHeight', 'zIndex', 'order'],
		transform: (value: number) => value,
	},
];

/**
 * Transforms cssx object to css object
 *
 * @param cssx  Similar to css prop but with custom shortcuts
 * @param theme Theme given by ThemeProvider
 *
 * @returns css object
 */
const styleFunctionCssx = (cssx: any, theme: Theme): Interpolation<Theme> => {
	// Process shortcuts with theme
	const shortcuts = cssxShortcuts(theme);
	const shortcutsLength = Object.keys(shortcuts).length;

	// For each properties given cssx
	Object.entries(cssx).forEach(([key, value]) => {
		// If property value is a function, call it by giving theme
		if ('function' === typeof value) {
			cssx[key] = value(theme);
		}

		// Else if property value is a number, it might be a shortcut
		else if ('number' === typeof value) {
			// Try find corresponding defined shortcut
			let index = 0;
			let shortcutManaged = false;
			while (index < shortcutsLength && false === shortcutManaged) {
				// Shortcut is defined for this property
				if (shortcuts[index].keys.includes(key)) {
					// Transform its value using defined shortcut transform function
					cssx[key] = shortcuts[index].transform(value);
					shortcutManaged = true;
				}

				// Move to the next defined shortcut
				++index;
			}

			// In case value is type of number but has no corresponding defined shortcut
			if (false === shortcutManaged) {
				// Convert property value value to px
				cssx[key] = `${value}px`;
			}
		}
	});

	// cssx with managed shortcuts
	return cssx;
};

/**
 * Similar to @emotion/react css() but with shortcuts !
 */
const cssx = (cssx: TCssxProperties) => (theme: Theme) =>
	styleFunctionCssx(cssx, theme);

export default cssx;
