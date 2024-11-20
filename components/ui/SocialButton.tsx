import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {
	faXTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const socials = [
	{
		title: 'X',
		link: 'https://x.com/The_Idealism',
		icon: faXTwitter,
		color: '#ffffff',
	},
	{
		title: 'Github',
		link: 'https://github.com/the-idealism',
		icon: faGithub,
		color: '#ffffff',
	},
	{
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/',
		icon: faLinkedin,
		color: '#0077B5',
	},
	{
		title: 'Instagram',
		link: 'https://www.instagram.com/',
		icon: faInstagram,
		color: '#FD1D1D',
	},
];

export function SocialButton({
	title,
	link,
	icon,
	color,
}: {
	title: string;
	link: string;
	icon: IconProp;
	color: string;
}) {
	return (
		<Link
			href={link}
			target='_blank'
			className={`bg-[${color}] hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-100 ease-in-out`}
		>
			<FontAwesomeIcon icon={icon} className='w-8 h-8' aria-details={title} />
		</Link>
	);
}

export default function SocialButtons() {
	return (
		<div className='flex mt-4 gap-4'>
			{socials.map((social) => (
				<SocialButton
					key={social.title}
					title={social.title}
					link={social.link}
					icon={social.icon}
					color={social.color}
				/>
			))}
		</div>
	);
}
