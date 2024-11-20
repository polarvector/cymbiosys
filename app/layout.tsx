import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import MainNavbar from '@/components/ui/MainNavbar';
import Head from 'next/head';
import Footer from '@/components/ui/Footer';
import { NextUIProvider } from '@nextui-org/react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cymbiosys',
	description: "The wave page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className='h-screen dark' lang='en'>
			<Head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content={metadata.description || ''} />
				<title>
					<>
						{metadata.title} | The Idealism
						{metadata.title}
					</>
				</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body
				className={
					montserrat.className +
					' ' +
					'flex flex-1 flex-col justify-between h-screen w-full'
				}
			>
				{/* nav */}
				<MainNavbar />
				<NextUIProvider>{children}</NextUIProvider>
				<Footer />
			</body>
		</html>
	);
}
