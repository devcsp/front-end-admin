import React from 'react';
import Route from './Route';
import { Switch } from 'react-router-dom';

import AdminLayout from 'layouts/Admin';
import SignIn from 'views/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/admin" component={AdminLayout} isPrivate />
    </Switch>
  );
}
