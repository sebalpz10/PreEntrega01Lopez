import NavBar from "./NavBar";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer_text">Copyright &copy; 2022</p>
            <NavBar
                hrefLinkFooter01="https://instagram.com"
                hrefLinkFooter02="https://twitter.com"
            >
            </NavBar>
        </footer>
    );
}

export default Footer;