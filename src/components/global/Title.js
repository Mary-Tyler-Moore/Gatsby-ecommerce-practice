import React from 'react';

const Title = ({ title }) => {
    return (
        <div className="row">
            <div className="col text-center mb-3">
                <h1 className="dispaly-4 text-capitalize font-weight-bold">{title}</h1>
            </div>
        </div>
    )
}

export default Title;