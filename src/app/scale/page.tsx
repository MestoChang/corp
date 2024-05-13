import scaleImg from 'public/scale.jpg';
import Image from 'next/image';

export default function ScalePage() {
    return (
        <div>
            Scale Page
            <Image src={scaleImg} alt="scaleImg" />
        </div>
    );
}
