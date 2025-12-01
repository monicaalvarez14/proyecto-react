import headerImg from "../assets/img/Header.jpg"

const Header = () => {
    return (
        <header
            className="text-white text-center p-5" style={{
                backgroundImage: `url(${headerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1>Pizzería Mamma Mia!</h1>
            <p>¡Las mejores pizzas al mejor precio!</p>
        </header>
    );
};

export default Header;