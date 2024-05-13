import performanceImg from 'public/performance.jpg';
import Image from 'next/image';

export default function PerformancePage() {
    return (
        <div>
            Performance Page
            <Image src={performanceImg} alt="performanceImg" />
        </div>
    );
}
