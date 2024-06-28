import Link from 'next/link';

export default function Header() {
	return (
		<nav className='space-x-3'>
			<Link href='/'>Home</Link>
			<Link href='/performance'>Performance</Link>
			<Link href='/reliability'>Reliability</Link>
			<Link href='/scale'>Scale</Link>
		</nav>
	);
}
