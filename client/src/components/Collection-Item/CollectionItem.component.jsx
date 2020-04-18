import React, { Fragment } from 'react';
import Collection from '../Collection/Collection.component';

const CollectionItem = ({ collections }) => {
  return (
    <Fragment>
      {collections.map((collection) => (
        <Collection key={collection.id} collection={collection} />
      ))}
    </Fragment>
  );
};

export default CollectionItem;
