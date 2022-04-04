import React from 'react';
import { Layout } from '../components/Layout';

export default () => (
	<Layout>
		<div className="flex flex-col gap-4 lg:flex-row lg:justify-around ">
			<div className="flex flex-col items-center gap-2">
				<div className="bg-primary h-16 w-16 rounded-full text-white shadow-xl flex justify-center items-center">
					<svg
						className="w-10 h-10"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						></path>
					</svg>
				</div>
				<a href="tel:+49871123456789" className="font-medium text-lg text-secondary">
					+49 0871 123456789
				</a>
			</div>

			<div className="flex flex-col items-center gap-2">
				<div className="bg-primary h-16 w-16 rounded-full text-white shadow-xl flex justify-center items-center">
					<svg
						className="w-10 h-10"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						></path>
					</svg>
				</div>
				<a href="mailto:info@la-regionalbau.de" className="font-medium text-lg text-secondary">
					info@la-regionalbau.de
				</a>
			</div>

			<div className="flex flex-col items-center gap-2">
				<div className="bg-primary h-16 w-16 rounded-full text-white shadow-xl flex justify-center items-center">
					<svg
						className="w-10 h-10"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						></path>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						></path>
					</svg>
				</div>
				<a href="https://goo.gl/maps/Q43tN4Qw6vmj3S2h6" className="font-medium text-lg text-secondary">
					Schloßberg 32, 84183 Tiefenbach
				</a>
			</div>
		</div>
	</Layout>
);
