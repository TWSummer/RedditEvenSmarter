import { Route, Switch, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import React from 'react';

const ProtectedRouter = (props) => {
  return (
    <div>
      <SiteHeaderContainer />
      <Switch>
        // <Route exact path="/profile" component={ProfileContainer} />
        // <Route exact path="/profile/:username" component={ViewProfileContainer} />
        // <Route exact path="/questions" component={QuestionContainer} />
        // <Route exact path="/friends" component={FriendSearchContainer} />
        // <Route exact path="/messages" component={MessageContainer} />
        // <Redirect from='/' to='/profile'/>
      </Switch>
    </div>
  );
};

export default ProtectedRouter;
