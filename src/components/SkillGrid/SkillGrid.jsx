import { Grid, GridContainer } from './style';

const SkillGrid = ({ visibleSkills }) => {
    const optionOne = visibleSkills === 1 || visibleSkills === 4
    ? 'visible'
    : 'skill'
    const optionTwo = visibleSkills === 2 || visibleSkills === 4
    ? 'visible'
    : 'skill'
    const optionThree = visibleSkills === 3 || visibleSkills === 4
    ? 'visible'
    : 'skill'

    return (
        <GridContainer>
            <Grid>
                <div id='row-one'>
                    <p
                        className={optionOne
                        }
                    >
                        Express
                    </p>
                    <p className={optionTwo}>MongoDB</p>
                    <p className={optionTwo}>Node.js</p>
                    <p className={
                            visibleSkills === 1 || visibleSkills === 4
                                ? 'visible'
                                : 'skill'
                        }>Springboot</p>
                </div>
                <div id='row-two'>
                    <p className={optionThree}>Typescript</p>
                    <p id='cert'>Full Stack Developer</p>
                    <p className={optionThree}>Java</p>
                </div>
                <div id='row-three'>
                    <p className={optionOne}>React.js</p>
                    <p className={optionTwo}>CSS</p>
                    <p className={optionTwo}>Redux</p>
                    <p className={optionOne}>Angular</p>
                </div>
            </Grid>
        </GridContainer>
    );
};

export default SkillGrid;
