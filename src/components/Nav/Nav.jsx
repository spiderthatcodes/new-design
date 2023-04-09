import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import alternate from '../../resources/alternate.png';
import {
    Container,
    Logo,
    DropButton,
    Dropdown,
    DropdownContent,
} from './style';

const Nav = ({ isMobile, setVisibleSkills }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    const logoVersion =
        location.pathname === '/' ? (
            <Logo
                onMouseLeave={() => setVisibleSkills(0)}
                onMouseOver={() => setVisibleSkills(4)}
                src={alternate}
                alt='J.D.'
            />
        ) : (
            <Logo
                src={alternate}
                alt='J.D.'
            />
        );

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
            {logoVersion}
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
