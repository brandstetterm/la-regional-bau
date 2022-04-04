import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'gatsby';

export const Layout: React.FC = (props) => (
	<div className="flex flex-col h-screen">
		<header className="flex flex-row m-4 gap-8">
			<img src={logo} alt="Logo" className="h-16" />
			<nav className="flex-1 flex gap-4 justify-end items-end">
				<Link to="/" className="text-secondary font-bold">
					Startseite
				</Link>
				<Link to="/ueber-mich" className="text-secondary font-bold">
					Über mich
				</Link>
				<Link to="/leistungen" className="text-secondary font-bold">
					Leistungen
				</Link>
				<Link to="/kontakt" className="text-secondary font-bold">
					Kontakt
				</Link>
			</nav>
		</header>
		<main className="flex-1 m-10">{props.children}</main>
		<footer className="h-32 bg-secondary"></footer>
	</div>
);
