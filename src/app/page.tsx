import homeImg from 'public/home.jpg';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            Home Page
            <div className="absolute -z-10 inset-0">
                <Image
                    src={homeImg}
                    alt="homeImg"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </div>
    );
}
