import React, { ReactChildren, ReactChild } from 'react';
import { GlobalStyle } from '../../styles/GlobalStyles';
interface AuxProps {
    children: ReactChild | ReactChildren;
}


const Layout: React.FC<AuxProps> = ({ children }: AuxProps) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            { children }
        </React.Fragment>
    )
};

export default Layout;