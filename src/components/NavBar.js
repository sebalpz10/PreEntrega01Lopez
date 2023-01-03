import CartWidget from "./CartWidget";

const NavBar = (props) => {
    const { isHeader, hrefLinkFooter01, hrefLinkFooter02 } = props;

    if (isHeader) {
        return (
            <nav className="header_navbar">
                <a href="#">
                    <img src="/img/logo/logo.png" alt="Logo" className="header_logo" />
                </a>

                <ul className="header_ul">
                    <li className="header_li">
                        <a href="#" className="header_link">NOTICIAS</a>
                    </li>
                    <li className="header_li">
                        <a href="#" className="header_link">PRENDAS</a>
                    </li>
                    <li className="header_li">
                        <a href="#" className="header_link">NOSOTROS</a>
                    </li>
                </ul>

                <CartWidget></CartWidget>
            </nav>
        );
    } else {
        return (
            <nav className="footer_navbar">
                <ul className="footer_ul">
                    <li className="footer_li">
                        <a href={hrefLinkFooter01}>
                            <img src="/img/iconos/instagram.png" alt="instagram" className="footer_icono" />
                        </a>
                    </li>
                    <li className="footer_li">
                        <a href={hrefLinkFooter02}>
                            <img src="/img/iconos/twitter.png" alt="twitter" className="footer_icono" />
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;