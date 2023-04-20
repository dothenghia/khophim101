import './slider.scss'

import slide1 from '../../assets/slideThumbnails/slide1.png'
import slide2 from '../../assets/slideThumbnails/slide2.jpg'
import slide3 from '../../assets/slideThumbnails/slide3.jpg'

const Slider = () => {
    return (
        <div id="slider">

            <div id="carouselExampleInterval" className="carousel slide container-xl" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="slider-carousel-item carousel-item active" data-bs-interval="2000">
                        <img src={slide1} className="d-block w-100" alt="Slide 1"/>
                    </div>
                    <div className="slider-carousel-item carousel-item" data-bs-interval="2000">
                        <img src={slide2} className="d-block w-100" alt="Slide 2"/>
                    </div>
                    <div className="slider-carousel-item carousel-item" data-bs-interval="2000">
                        <img src={slide3} className="d-block w-100" alt="Slide 3"/>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Slider;
