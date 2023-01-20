import { Carousel } from "react-bootstrap"
import './Slider.css'
import img1 from '../../assets/imagenes/img1.jpg'
import img2 from '../../assets/imagenes/img2.jpg'
import img3 from '../../assets/imagenes/img3.jpg'

const Slider = () => {
  return (
    <>
         <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 edit"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="titulo">Bienvenido a Buddy ONG</h3>
          <p className="texto">En nuestro sitio web encontraras todo para ayudar a nuestros amigos peluditos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 edit"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 edit"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider