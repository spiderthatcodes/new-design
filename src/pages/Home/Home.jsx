import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Button, ButtonBox } from './style';
import SkillGrid from '../../components/SkillGrid/SkillGrid';

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
                <p id='intro'>&#8594;
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
