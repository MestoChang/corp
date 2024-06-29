import Link from 'next/link';

export default function Header() {
	return (
		<div className='absolute top-0 z-10 w-full text-white'>
			<nav className='container relative mx-auto flex flex-wrap items-center justify-between gap-5 py-3'>
				<Link
					className='text-3xl font-bold duration-300 ease-linear hover:text-cyan-300'
					href='/'
				>
					Home
				</Link>
				<div className='space-x-3'>
					<Link className='link' href='/performance'>
						Performance
					</Link>
					<Link className='link' href='/reliability'>
						Reliability
					</Link>
					<Link className='link' href='/scale'>
						Scale
					</Link>
				</div>
			</nav>
		</div>
	);
}
