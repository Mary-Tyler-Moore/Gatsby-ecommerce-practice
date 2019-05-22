import React from 'react';
import { Link } from 'gatsby';

import Title from '../global/Title';

const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Story" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <h3>This is not a real cafe website!</h3>
                        <p className="lead text-muted mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse officiis magnam, rerum exercitationem voluptatum assumenda sapiente, unde quam impedit ducimus modi sunt iusto temporibus, ipsa delectus? Magni eaque necessitatibus sit numquam dolorem, ad consequatur saepe aut hic aspernatur eius eligendi, quidem possimus reiciendis. Quas, similique.
                        </p>
                        <Link to="/about">
                            <button className="btn-yellow btn text-uppercase">About crown</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info;
