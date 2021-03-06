import type { GatsbyConfig } from 'gatsby'
import { resolve } from 'path'

const plugins: GatsbyConfig[`plugins`] = [
	`gatsby-plugin-typescript`,
	`gatsby-plugin-typegen`,
	`gatsby-plugin-sass`,
	`gatsby-plugin-react-helmet`,
	`gatsby-plugin-image`,
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `images`,
			path: `${__dirname}/src/images`,
		},
	},
	`gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `images`,
			path: `${__dirname}/src/images/`
		},
	},
	`gatsby-plugin-gatsby-cloud`,
	`gatsby-plugin-react-helmet`,
	{
		resolve: `gatsby-plugin-manifest`,
		options: {
			name: `GatsbyCafeSite`,
			short_name: `GatsbyCafe`,
			start_url: `/`,
			background_color: `#339999`,
			theme_color: `#477294`,
			display: `standalone`,
			icon: `src/images/icon.png`,
		}
	},
	`gatsby-plugin-offline`,
	{
		resolve: `gatsby-source-contentful`,
		options: {
			spaceId: process.env.CONTENTFUL_SPACE_ID,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			host: process.env.CONTENTFUL_HOST,
		}
	}
]

const siteMetadata: GatsbyConfig[`siteMetadata`] = {
	title: `GatsbyCafeSite`,
	description: `おいしい珈琲`,
	lang: `ja`,
	siteUrl: `https://gatsbycafesite.netlify.app`,
	locale: `ja_JP`,
}

const config: GatsbyConfig = {
	siteMetadata,
	plugins,
}

export default config