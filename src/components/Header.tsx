import ImageBanner from "${process.env.PUBLIC_URL}/banniere.jpg";
import './Header.css';

function Header() {
    return (
        <header className='header-container'>
            <img className='header-img' src={ImageBanner} alt="" />
            <h1 className='header-title'>Bienvenue sur Zen Attitude</h1>
        </header>
    );
}

export default Header;