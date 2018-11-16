import Initial_Thumb from '../images/thumbs/news.png'
import Header_Thumb from '../images/thumbs/runway.png'
import * as Runway from './imgs/runway'
import * as UL from './imgs/ul'
import * as Archetype from './imgs/archetype'
import * as Composite from './imgs/composite'
import * as Pong from './imgs/pong'
import * as Daga from './imgs/daga'
import * as Onerandom from './imgs/onerandom'
import * as Microsoft from './imgs/Microsoft'
import * as Ricardo from './imgs/Ricardo'
import * as Music from './imgs/music'
import * as Ossa from './imgs/ossa'
import * as Dieecke from './imgs/dieecke'
import * as Comoqueremos from './imgs/comoqueremos'
import * as Relations from './imgs/relations'

export const PROJECTS = [
	{
		name: 'Runway ML',
		description: "Runway ML is desktop application to integrate machine learning models capabilities into exiting creative tools and workflows.", 
		short_description: 'AI/ML Tool.',
		year: 'Now.',
		data: "AI/ML Tools",
		link: "https://runwayapp.ai",
		outsideText: "www.runwayapp.ai",
		thumb: Runway.Thumb,
		imgs: Runway.Imgs 
	},
	{
		name: 'Unsecured Landscapes',
		description: 'Unsecure Landscapes is an exercise of juxtaposing moving images from natural landscapes that are being surveilled by IP Cameras. The footage is scraped by a bot every 12 hours from cameras found at insecam.com ', 
		short_description: 'Web.',
		outsideText: "Watch Video",
		data: "Experimental.",
		year: '2018',
		video: true,
		thumb: UL.Thumb,
		imgs: UL.Imgs 
	},
	{
		name: 'Archetype',
		description: 'Archetype is a set of three standalone desktop applications to create, follow, sync and archive websites under the P2P DAT protocol. Created as a thesis research at ITP, NYU.', 
		short_description: 'P2P Tool.',
		year: '2018',
		data: "Prototype, Application.",
		thumb: Archetype.Thumb,
		imgs: Archetype.Imgs,
		link: "dat://archetype.cc/",
		video: true,
		outsideText: "dat://archetype.cc/ (  Requires Beaker Browser )",
	},
	{
		name: 'Pong ML',
		description: "Pong ML aims to educate users on how machine learning tasks are trained through a browser based gaming experience. The user is able to teach, in real-time, a neural network and then play the game in the using a set of assigned emojis as a reference. Project made with ML5.js.", 
		short_description: 'Browser Experiment.',
		data: "Browser Experiment.",
		year: '2017',
		thumb: Pong.Thumb,
		imgs: Pong.Imgs,
		link: "https://am7673.itp.io:3000/",
		outsideText: "Try it",
		video: true
	},
	{
		name: 'OFwBooks',
		description: '"Our Future with Books" a mixed reality application for the Microsoft Hololens that allows to overlay meta information over books and to explore relationships between different fields, concepts, and subjects. This project was part of the 2017 Microsoft Design Expo. The original challenge was: Intentional Design for Positive Cultural Impact in Mixed Reality.', 
		short_description: 'Prototype.',
		data: "Prototype",
		year: '2017',
		video: true,
		thumb: Microsoft.Thumb,
		imgs: Microsoft.Imgs
	},
	{
		name: 'RTCMV',
		description: "Interactive performance controlled by two mobile applications to output a real time music and visual experience through out the audience's laptops – screens and speakers –. Around 65 devices were used during this performance at NYU.", 
		short_description: 'Performance, Experiment.',
		data: "Performance, Experiment.",
		year: '2016',
		thumb: Music.Thumb,
		imgs: Music.Imgs,
		outsideText: "Watch Video",
		video: true
	},
	{
		name: 'One Random Line',
		description: "A small twitter bot created with nodejs and processing that draw and tweet one random line – @onerandomline – with a constant height in the second point (y2) every so often from my personal computer.", 
		short_description: 'Bot.',
		year: '2016',
		data: "Experiment.",
		thumb: Onerandom.Thumb,
		imgs: Onerandom.Imgs
	},
	{
		name: 'Ricardo Villavicencio',
		description: 'Website for the New York based artist, designer and educator Ricardo Villavicencio, in collaboration with the designer Sebastian Rodríguez – sebastianrodriguez.ch.', 
		short_description: 'Website.',
		data: "Website",
		year: '2016',
		link: "http://www.ricardovillavicencio.com",
		outsideText: "www.ricardovillavicencio.com",
		thumb: Ricardo.Thumb,
		imgs: Ricardo.Imgs
	},
	{
		name: 'Composite',
		description: "A small physical tool to create new images from an archive of photos I've collected plus the intervention of visitors at a show exhibition. As a result, new images are presented in a screen, uploaded to a twitter account (@compositeDevice) and saved as a new page in a PDF Book.", 
		short_description: 'Tool.',
		data: "Tool.",
		year: '2016',
		thumb: Composite.Thumb,
		imgs: Composite.Imgs,
		outsideText: "Watch Video", 
		video: true
	},
	{
		name: 'Die Ecke',
		description: 'Web design and development for the chilean and spanish art gallery Die Ecke.', 
		short_description: 'Website.',
		data: "Website",
		year: '2016',
		link: "http://www.dieecke.com",
		outsideText: "www.dieecke.com",
		thumb: Dieecke.Thumb,
		imgs: Dieecke.Imgs
	},
	{
		name: 'Benjamin Ossa',
		description: 'Web design and development for the chilean artist Benjamin Ossa. Made with kirby cms.', 
		short_description: 'Website.',
		data: "Website",
		year: '2016',
		link: "http://www.benjaminossa.com",
		outsideText: "www.benjaminossa.com",
		thumb: Ossa.Thumb,
		imgs: Ossa.Imgs
	},
	{
		name: 'Relations',
		description: "Relations is the outcome of the juxtaposition between photographs taken by sebastianrodriguez.ch and myself during trips to Patagonia (Chile) and Beijing (China), respectively. This project take part of the collection of Projeto Multiplo.", 
		short_description: 'Printed.',
		data: "Printed.",
		year: '2015',
		outsideText: "Visit Project",
		thumb: Relations.Thumb,
		imgs: Relations.Imgs
	},
	{
		name: 'Como queremos Vivir',
		description: "Photography series exhibited at a group show in Sala Cero of Galería Animal – Santiago, Chile. The exhibition focused in the art of reproduction. Curated by Ediciones Daga.", 
		short_description: 'Exhibition.',
		data: "Exhibition.",
		year: '2012',
		thumb: Comoqueremos.Thumb,
		imgs: Comoqueremos.Imgs
	},
	{
		name: 'Ediciones Daga',
		description: 'A small independent art book publishing house focused in the printing and archival material of visual artists from South-America.', 
		short_description: 'Publishing.',
		data: "Publishing",
		link: 'http://www.edicionesdaga.com',
		year: '2010',
		thumb: Daga.Thumb,
		imgs: Daga.Imgs
	},
];



export const INITIAL = [
	{
		name: 'Proccess',
		description: 'Unsecured Landscape Sketches', 
		thumb: Initial_Thumb
	}
];

export const HEADER = [
	{
		name: 'Runway',
		link: 'https://runwayapp.ai', 
		data: 'Machine Learning for Everyone. Fall 2018.',
		text: 'Runwayml',
		thumb: Header_Thumb
	}
];



