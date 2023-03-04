import {useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import BannerSlider from './BannerSlider';
import Emoji from './Emoji.json'
import Lottie from 'lottie-react'
import Team from '../Team/Team';
import Blogs from '../Blogs/Blogs';
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "INSTITUTE", "WELLNESS", "GROUP" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  
  return (
    <>
     <section className='banner' id='banner-id '>
        <Container className='banner-container '>
          <Row className="align-items-center">
           <Col xs={12} md={6} xl={7}>
           <span className='tagline'>Hello Junta</span>
           <h1 className='mt-3'>{`WELCOME TO `}<span style={{color:"#0f52ba"}}>{text}</span></h1>
           <p className='mt-3' style={{lineHeight:"2" }}>Under the Students' Welfare portfolio of the Technology Students' Gymkhana,<br></br> IWG consists of trained who work for the mental wellbeing of the kgp</p>
           </Col>
           <Col xs={12} md={6} xl={5}>
           <Lottie animationData={Emoji} style={{height:"400px", width:"400px" }}></Lottie>
           </Col>
          </Row>
        </Container>

       
        
     </section>
    
     </>
  )
}
/* <lord-icon
  src="https://cdn.lordicon.com/pithnlch.json"
  trigger="loop"
    delay="500"
  colors="primary:#121331,secondary:#242424"
  style={{ width: 250, height: 250 }}
></lord-icon> */
export default Banner