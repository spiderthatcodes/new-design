import Layout from '../../components/Layout/Layout';
import { Paragraph, Container } from './style';

const About = ({ isMobile }) => {
    return (
        <Layout isMobile={isMobile}>
            <Container isMobile={isMobile}>
                <Paragraph isMobile={isMobile}>
                    My name is Jessica, and I am a full stack developer living
                    in Phoenix, AZ. I am most comfortable working in the MERN
                    stack, but I also have nearly 2 years of{' '}
                    <a
                        href='https://banyanlabs.io/indeed/'
                        target='blank'
                    >
                        professional experience
                    </a>{' '}
                    with Java and Springboot. I'm also a certified{' '}
                    <a
                        href='https://www.credly.com/earner/earned/badge/b38a24b9-7aae-480a-88f8-28bd6c69e960'
                        target='blank'
                    >
                        Professional Scrum Master
                    </a>
                    . I am always engaged in professional development; the
                    ability to engage in lifelong learning is one reason I love
                    to code.
                </Paragraph>
                <Paragraph isMobile={isMobile}>
                    I currently teach justice involved individuals to code for a
                    non-profit called{' '}
                    <a
                        href='https://www.perseverenow.org/'
                        target='blank'
                    >
                        Persevere
                    </a>
                    , as well as working freelance as a web developer. I am
                    grateful that I have the opportunity to do the two things I
                    love at the same time: teach and code. Every day I know that
                    my work genuinely makes a difference in the lives of others,
                    and that's pretty awesome.
                </Paragraph>
            </Container>
        </Layout>
    );
};

export default About;
