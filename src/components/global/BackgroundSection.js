import React from 'react';
import BackgroundImage from 'gatsby-background-image';


const BackgroundSection = ({
    img,
    styleClass,
    title,
    children
}) => {
    return (
        <BackgroundImage
            className={styleClass}
            fluid={img}
        >
            <h1 className="title text-white text-uppercase text-center dispaly-4 font-weight-bold">
                {title}
            </h1>
            {children}
        </BackgroundImage>
    );
}

export default BackgroundSection;

BackgroundSection.defaultProps = {
    title: 'default title add!',
    styleClass: "default-background",
}