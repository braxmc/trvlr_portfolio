import React from 'react'

import {FooterContainer, FooterWrap, FooterLinks, FooterItems, LinkWrapper, LinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialLink} from './FooterElements';

import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

import {animateScroll} from 'react-scroll'

const Footer = () => {

  const toggleHome = () => {
    animateScroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinks>
          <LinkWrapper>
            <FooterItems>
              <LinkTitle>About Us</LinkTitle>
                <FooterLink to='/signin'>The family</FooterLink>
                <FooterLink to='/signin'>How it works</FooterLink>
                <FooterLink to='/signin'>Testimonials</FooterLink>
                <FooterLink to='/signin'>Careers</FooterLink>
                <FooterLink to='/signin'>Investors</FooterLink>
                <FooterLink to='/signin'>Partners</FooterLink>
                <FooterLink to='/signin'>
                  Terms of Service
                </FooterLink>
            </FooterItems>
            <FooterItems>
              <LinkTitle>Contact</LinkTitle>
                <FooterLink to='/signin'>Contact info</FooterLink>
                <FooterLink to='/signin'>Support</FooterLink>
                <FooterLink to='/signin'>Airlines</FooterLink>
                <FooterLink to='/signin'>Hotels</FooterLink>
                <FooterLink to='/signin'>Rental Cars</FooterLink>
                <FooterLink to='/signin'></FooterLink>
                <FooterLink to='/signin'></FooterLink>
            </FooterItems>
          </LinkWrapper>
          <LinkWrapper>
            <FooterItems>
              <LinkTitle>Pictures</LinkTitle>
                <FooterLink to='/signin'>Tropical</FooterLink>
                <FooterLink to='/signin'>Desert</FooterLink>
                <FooterLink to='/signin'>Mountains</FooterLink>
                <FooterLink to='/signin'>Jungle</FooterLink>
                <FooterLink to='/signin'>Historical</FooterLink>
                <FooterLink to='/signin'>Resorts</FooterLink>
                <FooterLink to='/signin'></FooterLink>
            </FooterItems>
            <FooterItems>
              <LinkTitle>We're Social</LinkTitle>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
                <FooterLink to='/'>Snapchat</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'></FooterLink>
                <FooterLink to='/'></FooterLink>
                <FooterLink to='/'></FooterLink>
            </FooterItems>
          </LinkWrapper>
        </FooterLinks>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              trvlr
            </SocialLogo>
            <WebsiteRights>
              trvlr © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialLink>
              <SocialLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialLink>
              <SocialLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;