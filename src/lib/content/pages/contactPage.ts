import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry10.webp';
import WhatsappImg from '$lib/assets/contact/whatsapp.png';
import FacebookImg from '$lib/assets/contact/facebook.png';
import GmailImg from '$lib/assets/contact/mail.png';

const contactPage: PageType = {
	id: 'a2',
	name: 'contacto',
	url: '/contacto',
	meta: {
		title: 'Contacto',
		description: '¡Cuéntanos tu idea y realizaremos un presupuesto sin compromiso!',
		imageUrl: carpentryImg,
		imageDescription: 'Caja de herramientas'
	},
	pageSections: [
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: { background: '#ffffff' },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Text',
							content: {
								title: {
									size: 'medium',
									text: 'Comienza a imaginar...'
								},
								paragraphs: [
									'No importa el tamaño de tu proyecto, contacta con nosotros por la vía que prefieras y te haremos un presupuesto sin compromiso totalmente personalizado.',
									'Tus datos serán siempre tratados con la máxima confidencialidad.'
								],
								textColor: '#000000'
							}
						}
					]
				}
			]
		},
		{
			totalColumns: 3,
			columnsWidth: [4, 4, 4],
			sectionProperties: { background: '#f3f1e9', id: 'contactMethods' },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Card',
							content: {
								imageUrl: WhatsappImg,
								imageDescription: 'Whatsapp logo',
								title: 'Whatsapp',
								description: '+34 622 88 13 50',
								buttonText: 'Envíanos un mensaje',
								url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
							}
						}
					]
				},
				{
					rowProperties: {},
					rows: [
						{
							type: 'Card',
							content: {
								imageUrl: GmailImg,
								imageDescription: 'Gmail logo',
								title: 'Correo electrónico',
								description: 'vidalcofusta@gmail.com',
								buttonText: 'Envíanos un email',
								url: 'mailto:vidalcofusta@gmail.com'
							}
						}
					]
				},
				{
					rowProperties: {},
					rows: [
						{
							type: 'Card',
							content: {
								imageUrl: FacebookImg,
								imageDescription: 'Facebook logo',
								title: 'Facebook',
								description: '@vidalco fusta',
								buttonText: 'Envíanos un MD',
								url: 'https://www.facebook.com/vidalcofusta'
							}
						}
					]
				}
			]
		}
	]
};

export default contactPage;
