import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import UserRoute from './UserRoute'
import GuestRoute from './GuestRoute'

const Routes = (props) => {
    return (
        <Switch>
            {props.init.map((route, index) => {
                let RouteRole;
                switch (route.role) {
                    case "User":
                        RouteRole = UserRoute;
                        break;
                    case "Guest":
                        RouteRole = GuestRoute;
                        break;
                    default:
                        RouteRole = Route;
                        break;
                }

                return (
                  <RouteRole
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={props => {
                        if (typeof route.layout === 'undefined') {
                            return (
                                <route.page {...props} routes={route.routes} />
                            );
                        }

                        return (
                            <route.layout {...props}>
                                <route.page {...props} routes={route.routes} />
                            </route.layout>
                        );
                    }}
                  />
                );
            })}
        </Switch>
    )
}

Routes.propTypes = {
    init: PropTypes.array.isRequired
}

export default Routes
