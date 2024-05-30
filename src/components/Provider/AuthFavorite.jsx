import { createContext, useContext, useState, useEffect } from 'react';
  
import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch the user's favorite services when the component mounts
      const fetchFavorites = async () => {
        const response = await fetch(`/favorites/${user.uid}`);
        const data = await response.json();
        setFavorites(data);
      };
      fetchFavorites();
    }
  }, [user]);

  const addFavorite = async (serviceId) => {
    await fetch('/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.uid, serviceId })
    });
    setFavorites(prev => [...prev, { _id: serviceId }]);
  };

  const removeFavorite = async (serviceId) => {
    await fetch('/favorites', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.uid, serviceId })
    });
    setFavorites(prev => prev.filter(fav => fav._id !== serviceId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
FavoritesProvider.propTypes = {
    children: PropTypes.node
}