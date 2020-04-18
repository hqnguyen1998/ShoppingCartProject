import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import CollectionItem from '../Collection-Item/CollectionItem.component';
import { GET_ID_COLLECTION } from '../../graphql/collections/collectionQuery';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.component';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  collectionHeader: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
  collectionTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  collectionImage: {
    width: '100%',
    position: 'relative',
  },
  collectionAddToCart: {
    position: 'absolute',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    opacity: 0.7,
    color: '#000',
    textAlign: 'center',
    bottom: 0,
    left: 0,
    padding: 10,
    zIndex: 100,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  image: {
    width: '100%',
  },
  collectionName: {
    display: 'block',
    textAlign: 'center',
  },
  collectionPrice: {
    display: 'block',
    textAlign: 'center',
    color: '#ccc',
  },
  collectionViewAll: {
    fontWeight: 600,
    color: '#000',
    display: 'block',
    marginTop: theme.spacing(3),
  },
}));

const CollectionPreview = ({ collectionId }) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_ID_COLLECTION, {
    variables: { id: collectionId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :)</p>;

  const { name, url, posts } = data.getCollectionById;

  return (
    <div className={classes.root}>
      <div className={classes.collectionHeader}>
        <div>
          <Typography variant='body1' className={classes.collectionTitle}>
            {name}
          </Typography>
          <Typography variant='h4' className={classes.collectionTitle}>
            New Releases
          </Typography>
        </div>
        <div>
          <Typography variant='body1' component='span'>
            <Link to={`${url}`} className={classes.collectionViewAll}>
              View All
            </Link>
          </Typography>
        </div>
      </div>
      <Grid container spacing={3}>
        <ErrorBoundary>
          <CollectionItem collections={posts} />
        </ErrorBoundary>
      </Grid>
    </div>
  );
};

export default CollectionPreview;
