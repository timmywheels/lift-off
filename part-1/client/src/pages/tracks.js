import React from 'react';
import {Layout, QueryResult} from '../components';
import {gql, useQuery} from '@apollo/client';
import TrackCard from "../containers/track-card";

const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      author {
        name
        photo
        id
      }
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  const tracks = data?.tracksForHome?.map((track) => {
    return <TrackCard track={track} />
  })

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <Layout grid>{tracks}</Layout>
    </QueryResult>
  );
};

export default Tracks;
