import React from 'react';
import Axios from 'axios';

import withAnalytics from '../src/hocs/withAnalytics'

const Detail = ({ user }) => (
  <div>
    <h1>{user.login}</h1>
    <img src={user.avatar_url} width="200" alt="Avatar"/>
  </div>
);

Detail.getInitialProps = async ({ query }) => {
  const response = await Axios.get(
    `https://api.github.com/users/${query.user}`
  )
  return { user: response.data }
}

export default withAnalytics()(Detail);