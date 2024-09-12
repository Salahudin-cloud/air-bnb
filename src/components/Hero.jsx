import heroImage from '../assets/hero-image.png'


export default function Hero() {
    return (
        <div className='container-hero'>
            <img src={heroImage} alt="Hero AirBnb Image" className='hero-image'/>
            <div className="content">
                <h1 className='title-hero'>
                    Online Experiences
                </h1>
                <p className='content-hero'>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}