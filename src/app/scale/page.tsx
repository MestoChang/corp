import scaleImg from 'public/scale.jpg';
import Hero from '@/components/Hero';

export default function ScalePage() {
	return (
		<div>
			Scale Page
			<Hero imgData={scaleImg} imgAlt='car factory' title='Scale your app to infinity.' />
		</div>
	);
}
