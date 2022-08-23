import Header from '../components/Header';
import Welcome from '../pages/Welcome';
import Footer from '../components/Footer';
import UnderConstruction from '../pages/UnderConstruction';
import Cities from '../pages/Cities';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import NewCity from '../pages/NewCity';


export default function WebsiteLayout(props) {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                    <Header />
                        {/* <Nav/> */}
                            {/* { props.children } */}
                            <Routes>
                                <Route path='/' element={<Welcome />} />
                                    <Route path='/cities' element={<Cities />} />
                                        <Route path='*' element={<UnderConstruction />} />
                                    <Route path='/newcity' element={<NewCity/>} />
                            </Routes>
                    <Footer />
            </BrowserRouter>
        </>
    )
}
