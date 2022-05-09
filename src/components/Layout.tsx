import React from 'react';
import { Navbar } from './Navbar';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import '../styles.css';

export const Layout: React.FC = (props) => (
	<div className="h-screen">
		<Helmet>
			<meta charSet="utf-8" />
			<title>LA regional Bau</title>
			<link rel="icon" type="image/png" href="../assets/favicon.ico" />
		</Helmet>
		<header className="shadow-md fixed top-0 left-0 right-0 bg-white z-20">
			<Navbar />
		</header>
		<main className="flex-1 p-5 pt-24 sm:p-10 sm:pt-24 min-h-full box-border max-w-3xl m-auto">
			{props.children}
		</main>
		<footer className="block w-full h-8 bg-secondary text-white flex justify-center gap-8">
			<Link to="/kontakt">Kontakt</Link>
			<Link to="/datenschutz">Datenschutz</Link>
			<Link to="/impressum">Impressum</Link>
		</footer>
	</div>
);
