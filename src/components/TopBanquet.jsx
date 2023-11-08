import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "../ComponentStyles/TopBanquet.css";

function TopBanquet({ id }) {
  return (
    <div className="multiple--cards text-center" id={id} style={{ backgroundColor: 'rgba(167, 160, 160, 0.489)' }}>
      <h1 >Top Banquet-Halls</h1>
      <p>Step into a world of unparalleled luxury and sophistication at our premier banquet halls. Meticulously crafted to exceed expectations, these venues redefine opulence and set the stage for extraordinary events. From exquisite architecture to impeccable service, every detail is curated to perfection. Our commitment to excellence ensures that your special moments are not just celebrated but elevated, creating memories that linger long after the last toast.
        Discover the epitome of grandeur and make your events truly exceptional at our best banquet halls.</p>

      <div className='cards'>
        <Row className='mb-4'>
          <Col md={6}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>Banquet Hall 1</Card.Title>
                <img src="../../assets/hall2.jpg" alt="" className="card-image" />
                <Card.Text>
                  Step into a world where luxury meets charm at our first banquet hall.
                  The epitome of elegance, this venue is adorned with timeless decor and an ambiance that whispers sophistication.
                  Perfect for those who appreciate the finer things in life.
                </Card.Text>
                <Card.Link href="#">Know More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>Banquet Hall 2</Card.Title>
                <img src="../../assets/hall3.jpg" alt="" className="card-image" />
                <Card.Text>
                  Our second banquet hall is a contemporary masterpiece, featuring sleek lines and cutting-edge design.
                  With state-of-the-art technology and a vibrant atmosphere, it's the ideal choice for those who crave a modern and dynamic setting for their events.
                </Card.Text>
                <Card.Link href="#">know More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>Banquet Hall 3</Card.Title>
                <img src="../../assets/hall4.jpg" alt="" className="card-image" />
                <Card.Text>
                  Nestled in the heart of nature, our third banquet hall exudes rustic charm. Surrounded by lush greenery and warm wooden accents, it's a haven for those who seek a touch of nature's beauty, creating an intimate and romantic backdrop for unforgettable celebrations.
                </Card.Text>
                <Card.Link href="#">Know More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>Banquet Hall 4</Card.Title>
                <img src="../../assets/hall5.jpg" alt="" className="card-image" />
                <Card.Text>
                  For those who desire flexibility, our fourth banquet hall is a versatile space that can transform to suit any occasion. Whether it's a grand wedding, a corporate event, or a cozy family gathering, this hall offers the perfect canvas for your vision and treat for you soul.
                </Card.Text>
                <Card.Link href="#">Know More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TopBanquet;
