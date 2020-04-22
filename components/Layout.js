import Header from './Header';
import Main from './Main';
import Head from 'next/head';
import Slider from './Slider';

export const Layout = (props) => {
    return(
        <>
            <Head>
                <title>{props.pageTitle}</title>
            </Head>
            <Header/>
            {props.slides && 
                <Slider heading={props.sliderHeading} text={props.sliderText} button={props.sliderButton} image={props.sliderImage}/>
            }
        </>
    );
}

export default Layout;