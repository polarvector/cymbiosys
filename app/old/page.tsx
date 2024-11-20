'use client';

import Container from '@/components/typography/Container';
import { useRef, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Home() {
	const formRef = useRef(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setIsSubmitting(true);
		const form: any = formRef.current;
		const formData = new FormData(form);
		const scriptURL =
			'https://script.google.com/macros/s/AKfycbzEJD50OQ0aTTOJFHTolvnR9adOSG9HeJYE5wJFDn6a0lPqj6vdp4BV9HCpagkB6Fw/exec';
		try {
			const response = await axios.post(scriptURL, formData);
			setIsSubmitted(true);
			alert('Subscribed!');
		} catch (error) {
			alert('Error!');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className='flex flex-1 w-full justify-between flex-col'>
			{/* company intro section */}
			<section
				id='intro-section'
				className='w-full flex items-center flex-1 text-white'
			>
				{/* container */}
				<Container className='relative gap-x-8 flex justify-center items-center'>
					{/* text */}
					<div className='flex flex-col items-center w-1/2'>
						<h1 className='text-5xl font-bold'>A complete Ideal OS</h1>
						<h3>Get all the conveniences to make your life better</h3>
						<p className='mt-2 font-semibold'>Presenting</p>
						{/* products logo */}
						<div className='my-6'>
							<div className='w-48 h-24'>
								<Image
									className='opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-300 ease-in-out'
									src='/bookism/bookism-light.svg'
									width={500}
									height={250}
									alt='bookism'
								/>
							</div>
						</div>
						{/* forms */}
						<div className='p-8 border border-gray-300 rounded-lg'>
							<h2 className='text-3xl font-semibold'>Stay updated</h2>
							<p>
								Subscribe to our newsletter to get updates on our latest
								products and tips
							</p>
							<form
								id='form'
								ref={formRef}
								method='POST'
								onSubmit={handleSubmit}
								className='flex flex-col gap-y-4 flex-1 w-full mt-4'
							>
								<div className='flex w-full gap-x-4'>
									<input
										type='text'
										placeholder='Enter your name'
										name='Name'
										autoComplete='name'
										className='p-3 rounded-lg flex w-1/3 text-black'
									/>
									<input
										type='email'
										name='Email'
										autoComplete='email'
										placeholder='Enter your email'
										className='p-3 rounded-lg flex flex-1 text-black'
									/>
								</div>
								<button
									id='submit'
									disabled={isSubmitting || isSubmitted}
									className='font-semibold bg-primary text-white px-4 py-2 rounded-lg'
								>
									{isSubmitting
										? 'Subscribing'
										: isSubmitted
										? 'Subscribed'
										: 'subscribe'}
								</button>
							</form>
						</div>
					</div>
					{/* image */}
					<div className='flex item-center justify-end -z-50 w-1/2'>
						<Image
							src='/bookism/bookism.png'
							width={250}
							height={500}
							alt='The Idealism'
						/>
					</div>
				</Container>
			</section>
			{/* end of intro session */}
		</main>
	);
}
