import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

const MyNavbar = ({ sectionIds }) => {
    const [id1, id2, id3, id4] = sectionIds;

    const options = ['Banquet-Hall 1', 'Banquet-Hall 2', 'Banquet-Hall 3', 'Banquet-Hall 4'];

    return (
        <>
            <Navbar bg="light" data-bs-theme="light" className="sticky-top">
                <Container>
                    <Navbar.Brand href="#home">Banquet</Navbar.Brand>
                    <Nav className="me-auto">
                        <ScrollLink to={id1} spy={true} smooth={true} duration={200} offset={-70}>
                            <Nav.Link>About</Nav.Link>
                        </ScrollLink>
                        <ScrollLink to={id2} spy={true} smooth={true} duration={200} offset={-70}>
                            <Nav.Link>Top-Banquets</Nav.Link>
                        </ScrollLink>
                        <ScrollLink to={id3} spy={true} smooth={true} duration={200} offset={-70}>
                            <Nav.Link>Trending</Nav.Link>
                        </ScrollLink>
                        <ScrollLink to={id4} spy={true} smooth={true} duration={200} offset={-70}>
                            <Nav.Link>About Us</Nav.Link>
                        </ScrollLink>
                    </Nav>
                    <Box>
                        <Autocomplete
                            id="search-autocomplete"
                            options={options}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    className="search--box"
                                    label="Search banquet-halls"
                                    variant="outlined"
                                    size="small"
                                />
                            )}
                        />
                    </Box>
                </Container>
            </Navbar>
        </>
    );
};

export default MyNavbar;
