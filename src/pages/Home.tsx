import React from 'react';
import NavBar from '../components/Navbar';
import LayoutHome from '../components/LayoutHome';

const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <LayoutHome />
        </>
    );
};

/* const Home = React.memo(HomePage, (prevProps, nextProps) => {
    return prevProps.match.params.id === nextProps.match.params.id;
}); */
export default Home;