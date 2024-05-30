
import SingleService from '../../Pages/AllService/SingleService';
import { useFavorites } from '../Provider/AuthFavorite';




const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="mt-28">
      <h1 className="text-3xl font-bold text-center">My Favorite Services</h1>
      <div className="grid grid-cols-1 gap-5 max-w-screen-xl mx-auto">
        {favorites.map(service => (
          <SingleService key={service._id} oneService={service} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
