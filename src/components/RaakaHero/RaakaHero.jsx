import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './RaakaHero.scss';
import barhero from './images/barhero.png';
import {Col, Row, Container } from 'react-bootstrap';

export default class RaakaHero extends Component {
    render() {
        return(
            <div className="userHero">
                <div className="brand-scenery">
                    <div className="brand-scenery__background">

                            <section className="section section--huge section--dark section--userHero section--onTransparentHeader">



                                    <Container>
                                        <Row>
                                            <Col xs="12" sm="5" className="userHero__CTA">
                                                <div className="section__header">
                                                    <h1 className="section__title h1">
                                                        Our Backstory
                                                    </h1>
                                                </div>
                                                <div className="section__content">
                                                    <p className="lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam no</p>
                                                </div>
                                            </Col>

                                            <Col xs="12" sm="7">
                                                <img src={barhero} alt="#" />
                                            </Col>

                                        </Row>
                                    </Container>

                            </section>
                    </div>
                </div>
            </div>
        );
    }
}
