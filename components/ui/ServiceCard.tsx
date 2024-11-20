export default function ServiceCard({
	title,
	projects,
	icon,
	className,
}: {
	title: string;
	projects: number;
	icon: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={
				'flex rounded-lg border-gray-300 items-center border border-1 p-8' +
				(className ? ' ' + className : '')
			}
		>
			{/* icon */}
			<div className='w-12 h-12 rounded-lg bg-gray-300'></div>
			<div className='pl-4'>
				<h3 className='text-lg font-semibold'>{title}</h3>
				<p className=''>{projects} projects</p>
			</div>
		</div>
	);
}
