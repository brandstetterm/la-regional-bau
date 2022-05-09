import React from 'react';
import { Layout } from '../components/Layout';

export default () => (
	<Layout>
		<div className="flex flex-col gap-4 text-secondary">
			<h2 className="font-bold text-lg">Neu- und Anbauten</h2>
			<ul className="ml-4 list-disc">
				<li>Garagen</li>
				<li>Fundamente und Bodenplatten</li>
				<li>Wonraumerweiterungen</li>
			</ul>
			<h2 className="font-bold text-lg">Umbauten und Renovierungen</h2>
			<ul className="ml-4 list-disc">
				<li>Fenster- und Türöffnungen erstellen oder schließen</li>
				<li>Treppen einschalen, bewähren und betonieren </li>
				<li>Abbruch von Wänden</li>
				<li>Altbausanierungen</li>
				<li>Errichten von Wänden und deren Verputz</li>
			</ul>
			<h2 className="font-bold text-lg">Ausbesserungsarbeiten</h2>
			<ul className="ml-4 list-disc">
				<li>Putzausbesserungen</li>
				<li>Beheben von Materialschäden</li>
				<li>Pflasterausbesserungen</li>
			</ul>
			<h2 className="font-bold text-lg">Außenanlagen</h2>
			<ul className="ml-4 list-disc">
				<li>Pflasterarbeiten</li>
				<li>Fundamente für Gartenmauern, Zäune, Carports</li>
				<li>Terrassen</li>
				<li>Pools</li>
				<li>Anlegen von Gartenwegen</li>
			</ul>
			<p>Jegliche Maurer- und Betonarbeiten!</p>
			<div className="flex-1" />
			<p className="font-sm">
				Partnerbetriebe: <br />
				Fliesenleger, Zimmerer, Baggerbetriebe, Verputzfirma
			</p>
		</div>
	</Layout>
);
