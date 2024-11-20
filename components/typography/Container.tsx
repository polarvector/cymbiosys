export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={
				`container mx-auto w-full md:w-4/5` + (className ? ' ' + className : '')
			}
		>
			{children}
		</div>
	);
}
