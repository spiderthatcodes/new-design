import React from 'react';
import linkedin from '../../resources/linkedin.png';
import github from '../../resources/github.png';
import { Container, Links, Wrapper } from './style';

const Footer = ({ isMobile }) => {
    return (
        <Wrapper>
            <Container isMobile={isMobile}>
                {!isMobile && <p>jessicaldickerson@outlook.com</p>}
                <Links>
                    <a
                        href='https://www.linkedin.com/in/jessica-lynn-dickerson/'
                        target='blank'
                    >
                        <img
                            src={linkedin}
                            alt='linkedin logo'
                        />
                    </a>
                    <a
                        href='https://github.com/spiderthatcodes'
                        target='blank'
                    >
                        <img
                            src={github}
                            alt='github logo'
                        />
                    </a>
                </Links>
            </Container>
        </Wrapper>
    );
};

export default Footer;
