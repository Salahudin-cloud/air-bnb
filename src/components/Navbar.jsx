import airbnb from '../assets/airbnb-logo.png'


export default function Navbar () {
    return (
        <nav className='navbar'>
            <img src={airbnb} alt="AirBnb logo" className='logo-navbar' />
        </nav>
    )
}