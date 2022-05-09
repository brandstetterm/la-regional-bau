import React from 'react';
import { Layout } from '../components/Layout';

export default () => (
	<Layout>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 gap-y-10">
			<a
				href="tel:+49087196685640"
				className="text-secondary flex flex-col items-center gap-2"
			>
				<div className="bg-primary h-16 w-16 rounded-full text-white shadow-xl flex justify-center items-center">
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
				<span className="font-medium text-lg">0871 - 966 856 40</span>
			</a>
			<a
				href="mailto:info@la-regionalbau.de"
				className="flex flex-col items-center gap-2"
			>
				<div className="bg-primary h-16 w-16 rounded-full text-white shadow-xl flex justify-center items-center">
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
				<span className="font-medium text-lg text-secondary">
					info@la-regionalbau.de
				</span>
			</a>
			<a
				href="https://facebook.com/andreas.leyrer"
				className="flex flex-col items-center gap-2"
			>
				<div className="bg-primary h-16 w-16 rounded-full text-white shadow-xl flex justify-center items-center">
					<svg
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 30 30"
						width="48px"
						height="48px"
					>
						<path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11h4.205l-0.571,4H16v12H12z" />
					</svg>
				</div>
				<span className="font-medium text-lg text-secondary">
					Folgen Sie mir gerne auf Facebook!
				</span>
			</a>
			<a
				href="https://www.instagram.com/andreas.leyrer/"
				className="flex flex-col items-center gap-2"
			>
				<div className="bg-primary h-16 w-16 rounded-full text-white shadow-xl flex justify-center items-center">
					<svg
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="48px"
						height="48px"
					>
						<path d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z" />
						<path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5S14.757 7 12 7zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 15 12 15zM17 6A1 1 0 1 0 17 8 1 1 0 1 0 17 6z" />
					</svg>
				</div>
				<span className="font-medium text-lg text-secondary">
					Folgen Sie mir gerne auf Instagram!
				</span>
			</a>
		</div>
	</Layout>
);
