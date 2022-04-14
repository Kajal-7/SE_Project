import React from 'react'
import Footer from '../components/Footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer >
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Lorem</Footer.Link>
                    <Footer.Link href="#">Ipsum</Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Something 1</Footer.Link>
                    <Footer.Link href="#">Something 2</Footer.Link>
                    <Footer.Link href="#">Something 3</Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Kajal</Footer.Link>
                    <Footer.Link href="#">Kartik</Footer.Link>
                    <Footer.Link href="#">Pratyush</Footer.Link>
                    <Footer.Link href="#">Srishti</Footer.Link>
                    <Footer.Link href="#">Aashita</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}