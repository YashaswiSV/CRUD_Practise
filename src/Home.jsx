import Carousel from 'react-bootstrap/Carousel';
const Home=()=>{
    return(
        <>
             <Carousel>
      <Carousel.Item>

         <img src="public/imagess/bg1.jpeg" alt="" width="100%"  height="600px"/>    
  
        <Carousel.Caption>
          <h3 >Feel like new home</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

      <img src="public/imagess/bg11c.jpg" alt=""  width="100%"  height="600px" />
        <Carousel.Caption>
          <h3>Design your way</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/imagess/bg10c.jpg" alt=""  width="100%"  height="600px" />
        <Carousel.Caption>
          <h3>Customize your home</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="public/imagess/bg8c.jpg" alt=""  width="100%"  height="600px" />
        <Carousel.Caption>
          <h3  >Sweet home</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




        </>
    )
}
export default Home;
