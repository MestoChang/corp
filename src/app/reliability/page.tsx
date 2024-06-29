import ReliabilityImg from 'public/reliability.jpg';
import Hero from '@/components/Hero';

export default function ReliabilityPage() {
	return (
		<div>
			<Hero
				imgData={ReliabilityImg}
				imgAlt='car factory'
				title='Super high reliability hosting.'
			/>
		</div>
	);
}
