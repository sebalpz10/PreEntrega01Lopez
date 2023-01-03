import NavBar from "./NavBar";

const Header = () => {
    const isHeader = true;

    return (
        <header className="header">
            <h1 className="none">#</h1>
            <NavBar isHeader={isHeader}></NavBar>
        </header>
    );
}

export default Header;