import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Button, ButtonBox } from './style';
import SkillGrid from '../../components/SkillGrid/SkillGrid';

const Home = ({ isMobile }) => {
    const [visibleSkills, setVisibleSkills] = useState(0);
    const introduction = "Hello, I'm Jessica.";

    const handleMouse = (index) => {
        if (index === 0) {
            setVisibleSkills(1);
        } else if (index % 2 === 0) {
            setVisibleSkills(2);
        } else {
            setVisibleSkills(3);
        }
    };

    return (
        <Layout isMobile={isMobile}>
            <Container isMobile={isMobile}>
                <p id='intro'>
                    {introduction.split('').map((char, index) => (
                        <span
                            key={index}
                            onMouseOver={() => handleMouse(index)}
                        >
                            {char}
                        </span>
                    ))}
                </p>
                {!isMobile && <SkillGrid />}
            </Container>
            <ButtonBox onMouseOver={() => setVisibleSkills(4)}>
                <Button onClick={() => console.log('click')}>
                    More Info &#8658;
                </Button>
            </ButtonBox>
        </Layout>
    );
};

export default Home;
