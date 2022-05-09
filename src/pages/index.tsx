import React from 'react';
import { Layout } from '../components/Layout';
import '../styles.css';
import { StaticImage } from 'gatsby-plugin-image';

export default () => (
	<Layout>
		<div className="flex flex-col items-center">
			<h1 className="font-bold text-lg sm:w-4/5 text-center tracking-wide">
				<span className="text-primary">LA regional Bau</span>
				<br />
				<span className="text-secondary">
					Ihr Meisterbetrieb zur Verwirklichung Ihrer Bauprojekte im
					Stadt- und Landkreis Landshut!
				</span>
			</h1>
			<StaticImage
				className="w-full h-60 rounded-3xl my-8 z-10"
				src="../assets/landshut.jpeg"
				alt="Landshut"
			/>
			<p className="text-secondary tracking-wide">
				Herzlich Willkommen,
				<br />
				<br />
				suchen Sie tatkräftige Unterstützung bei der Realisierung Ihrer
				kleineren Bauprojekte?
				<br />
				<br />
				Aufgrund meiner über 30-jährigen Tätigkeit im Baugewerbe
				profitieren Sie von meiner langjährigen praktischen Erfahrung.
				Außerdem biete ich eine umfassende Beratung und vorausschauende
				Planung für Ihre Projekte.
				<br />
				<br />
				Strebt Ihnen ein Bauvorhaben vor, bei welchem Sie noch
				Unterstützung brauchen? Dann kontaktieren Sie mich gerne per
				Mail oder rufen Sie mich persönlich an!
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-24 mt-8">
				<a
					href="tel:+49087196685640"
					className="text-secondary flex flex-col items-center gap-2"
				>
					<div className="bg-primary h-14 w-14 rounded-full text-white shadow-xl flex justify-center items-center">
						<svg
							className="w-10 h-10"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							></path>
						</svg>
					</div>
					<span className="font-medium text-base">
						0871 - 966 856 40
					</span>
				</a>
				<a
					href="mailto:info@la-regionalbau.de"
					className="flex flex-col items-center gap-2"
				>
					<div className="bg-primary h-14 w-14 rounded-full text-white shadow-xl flex justify-center items-center">
						<svg
							className="w-10 h-10"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							></path>
						</svg>
					</div>
					<span className="font-medium text-base text-secondary">
						info@la-regionalbau.de
					</span>
				</a>
			</div>
		</div>
	</Layout>
);
