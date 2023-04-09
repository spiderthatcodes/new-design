import { Grid, GridContainer } from './style';

const SkillGrid = () => {
    const rowOne = ['MongoDB', 'Express', 'Node.js', 'Springboot'];
    const rowThree = ['React.js', 'CSS', 'jQuery', 'Angular'];

    return (
        <GridContainer>
            <Grid>
                <div id='row-one'>
                    {rowOne.map((skill, index) => (
                        <p key={index}>{skill}</p>
                    ))}
                </div>
                <div id='row-two'>
                    <p>Typescript</p>
                    <p>Full Stack Developer</p>
                    <p>Java</p>
                </div>
                <div id='row-three'>
                    {rowThree.map((skill, index) => (
                        <p key={index}>{skill}</p>
                    ))}
                </div>
            </Grid>
        </GridContainer>
    );
};

export default SkillGrid;
