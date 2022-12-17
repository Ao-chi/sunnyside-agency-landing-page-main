import "../assets/sass/components/_main.scss";

const egg = require("../assets/images/mobile/image-transform.jpg");
const cup = require("../assets/images/mobile/image-stand-out.jpg");
const berry = require("../assets/images/mobile/image-graphic-design.jpg");
const berry2 = require("../assets/images/desktop/image-graphic-design.jpg");
const orange = require("../assets/images/mobile/image-photography.jpg");
const orange2 = require("../assets/images/desktop/image-photography.jpg");
const emily = require("../assets/images/image-emily.jpg");
const thomas = require("../assets/images/image-thomas.jpg");
const jennie = require("../assets/images/image-jennie.jpg");
const bottle = require("../assets/images/mobile/image-gallery-milkbottles.jpg");
const mikan = require("../assets/images/mobile/image-gallery-orange.jpg");
const cone = require("../assets/images/mobile/image-gallery-cone.jpg");
const sugar = require("../assets/images/mobile/image-gallery-sugar-cubes.jpg");
const bottle1 = require("../assets/images/desktop/image-gallery-milkbottles.jpg");
const mikan1 = require("../assets/images/desktop/image-gallery-orange.jpg");
const cone1 = require("../assets/images/desktop/image-gallery-cone.jpg");
const sugar1 = require("../assets/images/desktop/image-gallery-sugarcubes.jpg");

const Main = () => {
    return (
        <main id="main">
            <section>
                <div className="grid-container">
                    <div className="grid-items egg">
                        <img className="image-only" src={egg} alt="egg transform" />
                    </div>
                    <div className="grid-items c2">
                        <div className="grid-inner-item">
                            <div className="desc">
                                <h2>Transform your brand</h2>
                                <p>
                                    We are full-service creative agency specializing in helping brands grow fast. Engage your clients through
                                    compelling visuals that do most of the marketing for you.
                                </p>
                                <button className="learn_more " type="button">
                                    <span className="yellow">Learn more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items cup">
                        <img className="image-only" src={cup} alt="egg transform" />
                    </div>
                    <div className="grid-items c3">
                        <div className="grid-inner-item">
                            <div className="desc">
                                <h2>Stand out to the right audience</h2>
                                <p>
                                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters we'll build
                                    and extend your brand in digital places.
                                </p>
                                <button className="learn_more red" type="button">
                                    <span className="red">Learn more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items berry">
                        <div className="image-container">
                            <img className="image-overlays d-block" src={berry} alt="berry" />
                            <img className="image-overlays d-none" src={berry2} alt="berry" />
                        </div>
                        <div className="desc overlay">
                            <div className="content">
                                <h2> Graphic design</h2>
                                <p>
                                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential
                                    clients’ attention.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items orange">
                        <div className="image-container">
                            <img className="image-overlays d-block" src={orange} alt="orange" />
                            <img className="image-overlays d-none" src={orange2} alt="orange" />
                        </div>
                        <div className="desc overlay">
                            <div className="content">
                                <h2> Photography</h2>
                                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonialSec">
                <h2>Client testimonials</h2>
                <div className="testimonials-container">
                    <div className="card">
                        <div className="card-profile">
                            <img className="profile" src={emily} alt="image1" />
                        </div>
                        <div className="testimony">
                            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        </div>
                        <div className="card-name">
                            <h3>Emily R.</h3>
                            <p> Marketing Director</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-profile">
                            <img className="profile" src={thomas} alt="image1" />
                        </div>
                        <div className="testimony">
                            <p>
                                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable
                                experience.
                            </p>
                        </div>
                        <div className="card-name">
                            <h3> Thomas S.</h3>
                            <p> Chief Operating Officer</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-profile">
                            <img className="profile" src={jennie} alt="image1" />
                        </div>
                        <div className="testimony">
                            <p> Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                        </div>
                        <div className="card-name">
                            <h3> Jennie F.</h3>
                            <p> Business Owner</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="image-gallery">
                <div className="container">
                    <div className="img-items">
                        <img className="image-only d-block" src={bottle} alt="milk bottles" />
                        <img className="image-only d-none" src={bottle1} alt="milk bottles" />
                    </div>
                    <div className="img-items">
                        <img className="image-only d-block" src={mikan} alt="orange again" />
                        <img className="image-only d-none" src={mikan1} alt="orange again" />
                    </div>
                    <div className="img-items">
                        <img className="image-only d-block" src={cone} alt="cone" />
                        <img className="image-only d-none" src={cone1} alt="cone" />
                    </div>
                    <div className="img-items">
                        <img className="image-only d-block" src={sugar} alt="sugar cubes" />
                        <img className="image-only d-none" src={sugar1} alt="sugar cubes" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
