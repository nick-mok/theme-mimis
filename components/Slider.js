import Link from 'next/link';

export const ShowOptionalSlider = (Component) => {
    return ({...props}) => {
        
        if(props['show-slider']) {
            return <Component {...props}/>
        }
        return null;
    }
}

export const Slider = (props) => {
    return(
    <>
        <div className="image-slider">
            <div className="bg-wash"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        { props['slider-heading'] &&
                        <div className="h1 text-md-left text-white text-center">{props['slider-heading']}</div>
                        }
                        {props['slider-lead'] &&
                        <div className="h3 mb-4 text-md-left text-white text-center">{props['slider-lead']}</div>
                        }
                        { props['slider-button-text'] &&
                        <Link href={props['slider-button-link']}>
                            <a className="btn btn-info">{props['slider-button-text']}</a>
                        </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .image-slider {
                position: relative;
                background: url('uploads/header.jpg');
                background-position: center center;
                background-size: cover;
                color: white !important;
                padding: 100px 0;
            }

            .image-slider .h1 {
                font-size: 3.0rem;
            }

            .bg-wash {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg,#000544,transparent)
            }
        `}</style>
    </>
    )
}

export default Slider;