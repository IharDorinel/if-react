import React from 'react';
import Hotel from "./Hotel";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./Layout";

const Routes = () => {

  return (
    <BrowserRouter>
      <>
        <Switch>

          <Layout>
            <Route path="/hotels/:id">
              <Hotel data={data} />
            </Route>
          </Layout>

        </Switch>
        </>
        </BrowserRouter>
    );

}

export default Routes;