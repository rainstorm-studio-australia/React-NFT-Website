import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./step-section.css";
import { Link } from "react-router-dom";

const STEP__DATA = [
    {
        title: 'Setup your wallet',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur, impedit corrupti saepe eos inventore!',
        icon: 'ri-wallet-line'
    },
    {
        title: 'Create your collection',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur, impedit corrupti saepe eos inventore!',
        icon: 'ri-layout-masonry-line'
    },
    {
        title: 'Add your NFTs',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur, impedit corrupti saepe eos inventore!',
        icon: 'ri-image-fill'
    },
    {
        title: 'List them for salle',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur, impedit corrupti saepe eos inventore!',
        icon: 'ri-list-check'
    }
]

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and Sell your NFTs</h3>
          </Col>
          {
              STEP__DATA.map((item, index) => (
                <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                <div className="single__step__item">
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <div className="step__item__content">
                    <h5>
                      <Link to="/walllet">{item.title}</Link>
                    </h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </Col>
              ))
          }

        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
