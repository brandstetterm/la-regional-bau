import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: 'LA regional Bau',
		description:
			'Benötigen Sie Unterstützung in Stadt- und Landkreis Landshut bei der Verwirklichung Ihrer Projekte und Wünsche Rund ums Haus? Dann bin ich ihr Fachmann!',
		siteUrl: `https://www.la-regionalbau.de`,
		social: {
			instagram: 'https://www.instagram.com/andreas.leyrer/',
			facebook: '',
		},
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
	],
};

export default config;
