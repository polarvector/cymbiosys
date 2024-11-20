import React from 'react';
import { Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

import FAQs from '@/components/ui/FAQ';
import ScrollingBanner from '@/components/ui/ScrollingBanner';
import FadeInImage from '@/components/ui/FadeInImage';

// demo logos
import {
	Logo1,
	Logo10,
	Logo2,
	Logo3,
	Logo4,
	Logo5,
	Logo6,
	Logo7,
	Logo8,
	Logo9,
} from './logos';

const logos = [
	{
		key: 'logo-1',
		logo: Logo1,
	},
	{
		key: 'logo-2',
		logo: Logo2,
	},
	{
		key: 'logo-3',
		logo: Logo3,
	},
	{
		key: 'logo-4',
		logo: Logo4,
	},
	{
		key: 'logo-5',
		logo: Logo5,
	},
	{
		key: 'logo-6',
		logo: Logo6,
	},
	{
		key: 'logo-7',
		logo: Logo7,
	},
	{
		key: 'logo-8',
		logo: Logo8,
	},
	{
		key: 'logo-9',
		logo: Logo9,
	},
	{
		key: 'logo-10',
		logo: Logo10,
	},
];

export default function HomePage() {
	return (
		<div className='relative flex h-screen min-h-dvh w-full flex-col overflow-hidden overflow-y-auto bg-background'>
			<main className='flex flex-col items-center rounded-2xl px-3 md:rounded-3xl md:px-0'>
				<section className='z-20 my-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6'>
					<Button
						className='h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500'
						endContent={
							<Icon
								className='flex-none outline-none [&>path]:stroke-[2]'
								icon='solar:arrow-right-linear'
								width={20}
							/>
						}
						radius='full'
						variant='bordered'
					>
						Join the waitlist
					</Button>
					<div className='text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]'>
						<div className='text-black'>
							A complete data-driven<br /> bio-conservation suite
						</div>
					</div>
					<p className='text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]'>
						Next generation cyber-infrastructure allowing you to reach your hard-to-reach ecosystems.
					</p>
					<div className='flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6'>
						<Button
							className='h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-small font-medium leading-5 text-background'
							radius='full'
						>
							Get Started
						</Button>
						<Button
							className='h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5'
							endContent={
								<span className='pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100'>
									<Icon
										className='text-default-500 [&>path]:stroke-[1.5]'
										icon='solar:arrow-right-linear'
										width={16}
									/>
								</span>
							}
							radius='full'
							variant='bordered'
						>
							See our plans
						</Button>
					</div>
				</section>
				<section className='mx-auto w-full max-w-6xl px-6 py-16 sm:py-32 lg:px-8 lg:py-40'>
					<ScrollingBanner shouldPauseOnHover gap='40px'>
						{logos.map(({ key, logo }) => (
							<div
								key={key}
								className='flex items-center justify-center text-foreground'
							>
								{logo}
							</div>
						))}
					</ScrollingBanner>
				</section>
				<section className='w-full'>
					<FAQs />
				</section>
			</main>
		</div>
	);
}
