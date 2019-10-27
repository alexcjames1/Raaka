import React, { Component } from 'react';
import {Heading, Header, AppWrapper, RakkaHero, Products, Owners, Ingredients, Newsletter, FinalThingsToClick, Footer} from '../../components';

export default class Landing extends Component {
    render() {
        return (
          <AppWrapper>
            <RakkaHero />
            <Owners/>
            <Products />
            <Ingredients />
            <Newsletter />
            <FinalThingsToClick />
          </AppWrapper>
        );
    }
}
