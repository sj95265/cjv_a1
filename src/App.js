import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import MoviesListingPage from './pages/MoviesListingPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import TVShowsListingPage from './pages/TVShowsListingPage';
import TVShowDetailsPage from './pages/TVShowDetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black', // Set background color for the entire site
        color: 'white', // Set text color for the entire site
      },
    },
  },
});


function App() {
  const { isOpen: isRegisterOpen, onOpen: onOpenRegister, onClose: onCloseRegister } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen: onOpenLogin, onClose: onCloseLogin } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header onOpenLogin={onOpenLogin} onOpenRegister={onOpenRegister} />
        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesListingPage />} />
            <Route path="/tvShows" element={<TVShowsListingPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/tvShows/:id" element={<TVShowDetailsPage />} />
          </Routes>
        </div>
        <RegisterModal isOpen={isRegisterOpen} onClose={onCloseRegister} />
        <LoginModal isOpen={isLoginOpen} onClose={onCloseLogin} />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
