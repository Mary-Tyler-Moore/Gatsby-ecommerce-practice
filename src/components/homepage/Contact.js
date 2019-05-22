import React from 'react';

import Title from '../global/Title';

const Contact = () => {
    return (
        <section className="contact py-5">
            <Title title="contact us" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form
                        action="https://formspree.io/christyksmile@gmail.com"
                        method="POST"
                    >
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="please enter your name"
                            />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="please enter your email address"
                            />
                        </div>
                        {/* message */}
                        <div className="form-group">
                            <label htmlFor="message">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="form-control"
                                rows="5"
                                placeholder="please enter your message..."></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-yellow btn-block text-capitalize">Submit</button>
                        <input type="hidden" name="_next" value="http://localhost:8000/" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;