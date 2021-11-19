import React, { Component } from 'react'
import Baner from './Baner'
import Container from './Container'
import Content from './Content'
import ContentFooter from './ContentFooter'
import ContentList from './ContentList'
import Nav from './Nav'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Baner/>
                <Nav></Nav>
                <Container/>
                <Content/>
                <ContentList/>
                <ContentFooter/>
            </React.Fragment>
        )
    }
}
