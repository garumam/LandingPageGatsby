import React,{ useState, useEffect } from "react"
import Header from '../components/Header';
import Home from '../components/Home';
import Info from '../components/Info';
import Service from '../components/Service';
import Features from '../components/Features';
import SystemPrints from '../components/SystemPrints';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import { Layout } from 'antd';
import { Background } from '../components/styles';
import { scroller } from "react-scroll";
import Helmet from "react-helmet"
import './index.css';

const { Footer } = Layout;

const IndexPage = () => {
  const [visible, setVisible] = useState(false);
  const [menuBg, setMenuBg] = useState('');
  const [imagePosition, setImagePosition] = useState(0);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const carouselHandle = (imagePosition) => {
    setImagePosition(imagePosition);
  }

  const scrollToId = (sectionId) => { 
    scroller.scrollTo(sectionId, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -70
    });
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const root = document.documentElement;

    if(scrollTop >= 50){
      if(menuBg !== 'newHeader'){
        root.style.setProperty('--heightpadrao', '70px');
        setMenuBg('newHeader');
      }
    }else{
      if(menuBg !== ''){
        root.style.setProperty('--heightpadrao', '100px');
        setMenuBg('');
      }
    }
  }

  const windowSizeChange = () => {
    if (visible) {
      let currentHideNav = (window.innerWidth < 650);
      if(!currentHideNav){
        setVisible(currentHideNav);
      } 
    } 
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", windowSizeChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", windowSizeChange);
    }
  }, [menuBg]);

  return (
    <Layout style={{ position: 'relative' }}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap" rel="stylesheet" />
      </Helmet>
      <Header 
      showDrawer={showDrawer} 
      onClose={onClose} 
      visible={visible} 
      menuBg={menuBg}
      scrollTo={scrollToId}
      />

      <Background smallHeight="550px" smallMediumHeight="600px" />
      
      <Background 
      clipPath="polygon(0 11%, 100% 16%, 100% 100%, 0% 100%)"
      style={{ bottom: '0' }}
      mediumHeight="950px" largeHeight="950px" smallMediumHeight="950px" smallHeight="1000px" />
      
      <Home />
      <Service />
      <Info />
      <Features />
      <SystemPrints carouselHandle={carouselHandle} imagePosition={imagePosition} />
      <Pricing scrollTo={scrollToId} />
      <Contact />
      
      <Footer 
      style={
      { textAlign: 'center',
        zIndex: '1',
        background: 'transparent',
        color: 'white',
        borderTop: '1px solid rgba(255,255,255,0.5)' }
      }
      > © 2019 SEVS by Duck Agency</Footer>
      
    </Layout>
  )
}

export default IndexPage



// import { Layout } from 'antd';
// import { scroller } from "react-scroll";
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
// import Service from './components/Service/Service';
// import Info from './components/Info/Info';
// import Features from './components/Features/Features';
// import Systemprints from './components/SystemPrints/Systemprints';
// import Pricing from './components/Pricing/Pricing';
// import Contact from './components/Contact/Contact';

// import { Background } from './styles/styles';

// const { Footer } = Layout;

// class App extends Component {
//   constructor () {
//     super();
//     this.state = { visible: false, menuBg: '', imagePosition: 0 };
//   }
//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   componentDidMount() {
//     window.addEventListener("resize", this.windowSizeChange);
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.windowSizeChange);
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   windowSizeChange = () => {
//     if (this.state.visible) {
//       let currentHideNav = (window.innerWidth < 650);
//       if(!currentHideNav){
//         this.setState({ visible: currentHideNav});
//       } 
//     } 
//   }

//   handleScroll = () => {
//     const scrollTop = window.scrollY;
//     const root = document.documentElement;

//     if(scrollTop >= 50){
//       if(this.state.menuBg !== 'newHeader'){
//         root.style.setProperty('--heightpadrao', '70px');
//         this.setState({ menuBg: 'newHeader'});
//       }
//     }else{
//       if(this.state.menuBg !== ''){
//         root.style.setProperty('--heightpadrao', '100px');
//         this.setState({ menuBg: ''});
//       }
//     }
//   }

//   carouselHandle = (imagePosition) => {
//     this.setState({
//       imagePosition: imagePosition,
//     });
//   }

//   scrollTo = (sectionId) => { 
//     return(
//         scroller.scrollTo(sectionId, {
//         duration: 1500,
//         delay: 100,
//         smooth: true,
//         offset: -70
//         }) 
//     )
//   }
  
//   render () {
//     return (

      
//     );
//   }
// }

// export default App;

