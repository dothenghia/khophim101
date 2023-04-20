import './header.scss'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header id="header" className='container'>
            {/* Navigation Bar */}
            <nav className="navbar fixed-top navbar-expand-md bg-body-tertiary" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        <img src={logo}
                            alt="Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-text-top" />
                        Khoái Xem Phim
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Phim Lẻ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Phim bộ</a>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>

                </div>
            </nav>


        </header>
    );
};

export default Header;
