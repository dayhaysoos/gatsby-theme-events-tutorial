import React from 'react';
import { Layout as ThemeLayout, Header, Main, Container } from 'theme-ui';



const Layout = ({ children }) => (
    <ThemeLayout>
        <Header><h1>Gatsby events theme</h1></Header>
        <Main><Container>
            {children}
        </Container></Main>

    </ThemeLayout>
);

export default Layout;