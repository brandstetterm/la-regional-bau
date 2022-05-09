import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export const Navbar: React.VFC = () => {
	return (
		<nav className="text-secondary relative my-2 mx-8 flex flex-wrap justify-between items-end">
			<Link to="/">
				<StaticImage
					src="../assets/logo.png"
					alt="Logo"
					height={60}
					layout="fixed"
				/>
			</Link>
			<button
				className="w-8 h-8 bg-transparent flex justify-center items-center rounded sm:hidden hover:bg-gray-200"
				onClick={() =>
					document
						.getElementById('mobile-menu')
						?.classList.toggle('hidden')
				}
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
			<div
				className="hidden mt-4 sm:mt-0 w-full sm:w-auto sm:inline-block"
				id="mobile-menu"
			>
				<ul className="flex flex-col sm:flex-row sm:gap-8">
					<li>
						<Link
							to="/"
							onClick={() =>
								document
									.getElementById('mobile-menu')
									?.classList.toggle('hidden')
							}
							className="font-bold rounded block py-2 sm:py-0 hover:bg-gray-200 sm:hover:bg-transparent text-center border-b-2 sm:border-none"
						>
							Startseite
						</Link>
					</li>
					<li>
						<Link
							to="/ueber-mich"
							onClick={() =>
								document
									.getElementById('mobile-menu')
									?.classList.toggle('hidden')
							}
							className="font-bold rounded block py-2 sm:py-0 hover:bg-gray-200 sm:hover:bg-transparent text-center border-b-2 sm:border-none"
						>
							Über mich
						</Link>
					</li>
					<li>
						<Link
							to="/leistungen"
							onClick={() =>
								document
									.getElementById('mobile-menu')
									?.classList.toggle('hidden')
							}
							className="font-bold rounded block py-2 sm:py-0 hover:bg-gray-200 sm:hover:bg-transparent text-center border-b-2 sm:border-none"
						>
							Leistungen
						</Link>
					</li>
					<li>
						<Link
							to="/kontakt"
							onClick={() =>
								document
									.getElementById('mobile-menu')
									?.classList.toggle('hidden')
							}
							className="font-bold rounded block py-2 sm:py-0 hover:bg-gray-200 sm:hover:bg-transparent text-center"
						>
							Kontakt
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
