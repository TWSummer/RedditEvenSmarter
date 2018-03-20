import { Route, Switch, Link } from 'react-router-dom';
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
      </Switch>
    </div>
  );
};

export default ProtectedRouter;
