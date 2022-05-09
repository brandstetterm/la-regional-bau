import React from 'react';
import { Layout } from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

export default () => (
	<Layout>
		<div className="flex flex-col items-center">
			<StaticImage
				className="w-40 h-40 rounded-full mx-auto block z-10"
				src="../assets/portrait.JPG"
				alt="Andreas Leyrer"
			/>
			<h1 className="text-secondary self-start text-2xl font-bold mb-4">
				Servus,
			</h1>
			<p className="text-secondary leading-8">
				mein Name ist Andreas Leyrer, ich bin verheiratet und wohne mit
				meiner Frau und meinen 2 Kindern in Tiefenbach bei Landshut.
				Aufgrund meiner aktiven Tätigkeit seit 30 Jahren im Baugewerbe
				profitieren sie von meiner langjährigen praktischen Erfahrung.
				Im Jahr 2002 habe ich mit Erfolg meine Meisterprüfung bei der
				LGA Landshut absolviert. In den darauffolgenden Jahren konnte
				ich mein Wissen ausbauen und optimieren. Heutzutage ist es
				schwer eine Firma zu finden, die „kleinere“ Projekte übernimmt,
				diese Lücke schließt sich mit LA-regional-Bau. Benötigen Sie
				Unterstützung in Stadt- und Landkreis Landshut bei der
				Verwirklichung Ihrer Projekte und Wünsche Rund ums Haus? Dann
				bin ich ihr Fachmann!
			</p>
		</div>
	</Layout>
);
