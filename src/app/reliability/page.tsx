import ReliabilityImg from 'public/reliability.jpg';
import Image from 'next/image';

export default function ReliabilityPage() {
    return (
        <div>
            Reliability Page
            <Image src={ReliabilityImg} alt="ReliabilityImg" />
        </div>
    );
}
