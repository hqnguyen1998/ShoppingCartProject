import React from 'react';
import CollectionPreview from '../../components/Collection-Preview/CollectionPreview.component';
import Wallpaper from '../../components/Wallpaper/Wallpaper.component';

const HomePage = () => {
  return (
    <div>
      <Wallpaper url='https://img4.goodfon.com/wallpaper/nbig/6/3f/gym-clothes-gemma-aktinson-exercise-weight-gym-piercing.jpg' />
      <CollectionPreview collectionId='5e9ab6ac61094e16e5dcb7d5' />
      <CollectionPreview collectionId='5e9ab6b761094e16e5dcb7d6' />
    </div>
  );
};

export default HomePage;
