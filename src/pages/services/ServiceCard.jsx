const ServiceCard = ({ id, subheading, subcontent }) => {
    const subcontentLines = subcontent
        .split("\n")
        .map((line, index) => <p key={index}>{line.trim()}</p>);
    return (
        <div className="Service_card" key={id}>
            <div className="Service_card_heading">{subheading}</div>
            <div className="Service_card_content">{subcontentLines}</div>
        </div>
    );
};
export default ServiceCard;
