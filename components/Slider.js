import Link from 'next/link';

export const ShowOptionalSlider = (Component) => {
    return ({show, ...props}) => {
        if(show) {
            return <Component {...props}/>
        }
        return null;
    }
}

export const Slider = (props) => {

    const {heading, text, button, image} = props;

    return(
    <>
        <div className="image-slider">
            <div className="bg-wash"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="h1 text-md-left text-white text-center">Awarded best restaurant in Texas</div>
                        { button &&
                        <Link href="/">
                            <a className="btn btn-info">Read Our Story</a>
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
                background: linear-gradient(45deg, #000544b8, transparent);
            }
        `}</style>
    </>
    )
}

export default Slider;