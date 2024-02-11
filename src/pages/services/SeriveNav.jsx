import { Link } from "react-router-dom";
import "./SeriveNav.css";

const ServiceNav = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div className="Service-nav">
            <div className="contentsContainer">
                <Link
                    to="/Staffing-Services"
                    className="accomodation-tooltip"
                    onClick={scrollToTop}
                >
                    <div className="acco_icon"></div>
                    <div className="head">Staffing Services</div>
                </Link>

                <Link
                    to="/Product-Engereing"
                    className="accomodation-tooltip"
                    onClick={scrollToTop}
                >
                    <div className="acco_icon "></div>
                    <div className="head">Product Engereing</div>
                </Link>

                <Link
                    to="/Agile-infra-services"
                    className="accomodation-tooltip"
                    onClick={scrollToTop}
                >
                    <div className="acco_icon acco_icon_FAQ"></div>
                    <div className="head">Agile infra services</div>
                </Link>

                <Link
                    to="/INTERNET-OF-THINGS"
                    className="accomodation-tooltip"
                    onClick={scrollToTop}
                >
                    <div className="acco_icon"></div>
                    <div className="head">INTERNET OF THINGS</div>
                </Link>
                <Link
                    to="/Analytics"
                    className="accomodation-tooltip"
                    onClick={scrollToTop}
                >
                    <div className="acco_icon"></div>
                    <div className="head">Analytics</div>
                </Link>
                <Link
                    to="/GENERATIVE-AI-BUSINESS"
                    className="accomodation-tooltip"
                    onClick={scrollToTop}
                >
                    <div className="acco_icon"></div>
                    <div className="head">GENERATIVE AI BUSINESS</div>
                </Link>
                <Link
                    to="/SECURITY-SERVICES"
                    className="accomodation-tooltip"
                    onClick={scrollToTop}
                >
                    <div className="acco_icon"></div>
                    <div className="head">SECURITY SERVICES</div>
                </Link>
            </div>
        </div>
    );
};

export default ServiceNav;
