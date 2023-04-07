import {useState} from 'react';
import { Link } from 'react-router-dom';
import alternate from '../../resources/alternate.png';
import { Container, Logo, DropButton, Dropdown, DropdownContent } from './style';

const Nav = ({ isMobile }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const firstTwoLinks = (
        <>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </>
    );
    const lastTwoLinks = (
        <>
            <Link to='/work'>Work</Link>
            <Link to='/contact'>Contact</Link>
        </>
    );
    return (
        <Container className={isMobile ? 'mobile' : ''}>
            {!isMobile && firstTwoLinks}
            <Logo
                src={alternate}
                alt='J.D.'
            />
            {isMobile && (
                <Dropdown className={dropdownOpen ? 'open' : ''}>
                <DropButton
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={dropdownOpen ? 'open' : ''}
                >
                    &#9776;
                </DropButton>
                <DropdownContent className={dropdownOpen ? 'open' : ''}>
                    {firstTwoLinks}
                    {lastTwoLinks}
                    </DropdownContent>
                </Dropdown>
            )}
            {!isMobile && lastTwoLinks}
        </Container>
    );
};

export default Nav;
