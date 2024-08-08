import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import DashboardPage from './pages/DashboardPage';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userID'));

  const { isOpen: isRegisterOpen, onOpen: onOpenRegister, onClose: onCloseRegister } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen: onOpenLogin, onClose: onCloseLogin } = useDisclosure();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    onCloseLogin();
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header isLoggedIn={isLoggedIn} onOpenLogin={onOpenLogin} onOpenRegister={onOpenRegister} onLogout={handleLogout} />
        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesListingPage />} />
            <Route path="/tvShows" element={<TVShowsListingPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/tvShows/:id" element={<TVShowDetailsPage />} />
            <Route
              path="/dashboard"
              element={
                isLoggedIn ? (
                  <DashboardPage />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
        <RegisterModal isOpen={isRegisterOpen} onClose={onCloseRegister} />
        <LoginModal isOpen={isLoginOpen} onClose={onCloseLogin} onLoginSuccess={handleLoginSuccess} />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
