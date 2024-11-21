'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const faqs = [
	{
		title: 'What is a wireless sensor network?',
		content:
			'A web of 'nodes' capable of 'sensing' physical parameters & communicating with other nodes',
	},
	{
		title: 'How big will each node be?',
		content:
			'30mm x 30mm so far. Will only get smaller!',
	},
	{
		title: 'What does it use to 'sense' things?',
		content:
			'Sound waves to sense everything.',
	},
];

export default function FAQs() {
	return (
		<section className='mx-auto w-full max-w-6xl px-0 py-16 sm:py-32 md:px-4 lg:px-8 lg:py-40'>
			<div className='mx-auto flex w-full max-w-4xl flex-col items-center gap-6'>
				<div className='px-2 text-3xl leading-7'>
					<span className='inline-block md:hidden'>FAQs</span>
					<h2 className='hidden bg-gradient-to-br from-foreground-800 to-foreground-500 bg-clip-text pt-4 text-5xl font-semibold tracking-tight text-transparent dark:to-foreground-200 lg:inline-block'>
						Frequently asked questions
					</h2>
				</div>
				<Accordion
					fullWidth
					keepContentMounted
					className='gap-3'
					itemClasses={{
						base: 'px-6 !bg-transparent hover:!bg-default-100 !shadow-none data-[open=true]:!bg-default-100',
						title: 'font-medium',
						trigger: 'py-4 md:py-6',
						content: 'pt-0 pb-6 text-base text-default-500',
						indicator: 'data-[open=true]:rotate-180',
					}}
					items={faqs}
					selectionMode='multiple'
					variant='splitted'
				>
					{faqs.map((item, i) => (
						<AccordionItem
							key={i}
							indicator={<Icon icon='solar:alt-arrow-down-linear' width={24} />}
							title={item.title}
						>
							{item.content}
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
