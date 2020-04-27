import Link from 'next/link';

const navigation = [
    {
        name: 'home',
        slug: '/'
    }, 
    {
        name: 'about',
        slug: 'about'
    }

];

export const Header = (props) => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
            <Link href="/">
                <a  className="navbar-brand"><img className="" src="logo.png"/></a>
            </Link>
            <div className="justify-content-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Menu</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            
        </nav>
    );
}

export default Header;