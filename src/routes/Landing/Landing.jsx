import React, { Component } from 'react';
import {Heading, Header, AppWrapper, RaakaHero, Products, Owners, Ingredients, Newsletter, Footer} from '../../components';

export default class Landing extends Component {
    render() {
        return (
          <AppWrapper>
            <RaakaHero />
            <Owners/>
            <Products />
            <Ingredients />
            <Newsletter />
          </AppWrapper>
        );
    }
}
