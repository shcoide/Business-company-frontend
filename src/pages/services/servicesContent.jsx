import details from "./serviceDetails";
import React from "react";
import  ServiceCard  from "./ServiceCard";

const servicesContent = ({ mainheading }) => {
  const selectedDetails = details.find(
    (detail) => detail.mainheading === mainheading
  );

  if (!selectedDetails) {
    return null;
  }

  const { content } = selectedDetails;
  console.log("content is ",content);

  return (
    <div className="Acco_content">
      <h3>{mainheading}</h3>
      <div className="Acco_cards">
        {content.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default servicesContent;


