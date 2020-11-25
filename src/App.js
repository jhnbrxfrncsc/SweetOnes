import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Store from './components/Store';
import Modal from './components/Modal';
import {GlobalProvider} from './context/GlobalContext';

function App() {
    return (
        <GlobalProvider>
            <header> 
                <Nav />
                <Banner />
            </header>
            <section>
                <AboutUs />
            </section>
            <section>
                <Store />
            </section>
            <Modal />
        </GlobalProvider>
    )
}

export default App
