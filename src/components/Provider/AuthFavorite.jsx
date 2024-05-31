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
        try {
          const response = await fetch(`https://service-assignment11-server.vercel.app/favorites/${user.uid}`);
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch favorites: ${errorText}`);
          }
          const data = await response.json();
          setFavorites(data);
        } catch (error) {
          console.error('Error fetching favorites:', error.message);
        }
      };
      fetchFavorites();
    }
  }, [user]);

  const addFavorite = async (serviceId) => {
    try {
      const response = await fetch('https://service-assignment11-server.vercel.app/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.uid, serviceId })
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to add favorite: ${errorText}`);
      }
      setFavorites(prev => [...prev, { _id: serviceId }]);
    } catch (error) {
      console.error('Error adding favorite:', error.message);
    }
  };

  const removeFavorite = async (serviceId) => {
    try {
      const response = await fetch('https://service-assignment11-server.vercel.app/favorites', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.uid, serviceId })
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to remove favorite: ${errorText}`);
      }
      setFavorites(prev => prev.filter(fav => fav._id !== serviceId));
    } catch (error) {
      console.error('Error removing favorite:', error.message);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavoritesProvider;