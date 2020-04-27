import Header from './Header';
import Main from './Main';
import Head from 'next/head';
import Slider, {ShowOptionalSlider} from './Slider';
import {attributes} from '../content/config/site.md';

const defaultSiteConfig = {
    name: attributes['site-config']['name'],
    description: attributes['site-config']['description']
}
const defaultSiteTitle = attributes['site-config']['name'];

const ShowSlider = ShowOptionalSlider(Slider);

export const Layout = (props) => {
    const { pageTitle = defaultSiteConfig.name, pageSlider = {} } = props;
    return(
        <>
            <Head>
                <title>{pageTitle} - {defaultSiteConfig.name}</title>
            </Head>
            <Header/>
            <ShowSlider {...pageSlider} />
            {/* {props.slides && 
                <Slider heading={props.sliderHeading} text={props.sliderText} button={props.sliderButton} image={props.sliderImage}/>
            } */}
            {props.children}
        </>
    );
}

export default Layout;