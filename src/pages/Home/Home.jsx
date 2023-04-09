import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import SkillGrid from '../../components/SkillGrid/SkillGrid';
import { Container, Button, ButtonBox } from './style';

const Home = ({ isMobile }) => {
    const [visibleSkills, setVisibleSkills] = useState(0);
    const introduction = "Hello, I'm Jessica.";

    const handleMouse = (index) => {
        if (index === 0 || index === 7 || index === 11) {
            setVisibleSkills(1);
        } else if (index % 2 === 0) {
            setVisibleSkills(2);
        } else {
            setVisibleSkills(3);
        }
    };

    return (
        <Layout
            isMobile={isMobile}
            setVisibleSkills={setVisibleSkills}
        >
            <Container isMobile={isMobile}>
                {!isMobile ? (
                    <p id='intro'>
                        &#8594;
                        {introduction.split('').map((char, index) => (
                            <span
                                key={index}
                                onMouseLeave={() => setVisibleSkills(0)}
                                onMouseOver={() => handleMouse(index)}
                            >
                                {char}
                            </span>
                        ))}
                    </p>
                ) : (
                    <>
                        <div id='lineOne'>
                            <p className='mobileIntro'>Hello,</p>
                            <p className='mobileIntro2'>I'm Jessica.</p>
                        </div>
                        <p className='mobileCert'>Full Stack</p>
                        <p className='mobileCert'>Developer</p>
                    </>
                )}
                {!isMobile && <SkillGrid visibleSkills={visibleSkills} />}
            </Container>
            <ButtonBox
                onMouseLeave={() => setVisibleSkills(0)}
                onMouseOver={() => setVisibleSkills(4)}
            >
                <Button onClick={() => console.log('click')}>
                    More Info &#8658;
                </Button>
            </ButtonBox>
        </Layout>
    );
};

export default Home;
