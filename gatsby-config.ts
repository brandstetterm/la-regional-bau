import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: 'LA regional Bau',
		description:
			'Benötigen Sie Unterstützung in Stadt- und Landkreis Landshut bei der Verwirklichung Ihrer Projekte und Wünsche Rund ums Haus? Dann bin ich ihr Fachmann!',
		siteUrl: `https://www.la-regionalbau.de`,
		social: {
			instagram: '',
			facebook: '',
		},
	},
	plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-postcss'],
};

export default config;
