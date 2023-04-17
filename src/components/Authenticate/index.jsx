import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from 'universal-cookie';
//AbortedDeferredError,
// Await,
//     BrowserRouter,
//     Form,
//     HashRouter,
//     Link,
//     MemoryRouter,
//     NavLink,
//     Navigate,
//     NavigationType,
//     Outlet,
//     Route,
//     Router,
//     RouterProvider,
//     Routes,
//     ScrollRestoration,
//     UNSAFE_DataRouterContext,
//     UNSAFE_DataRouterStateContext,
//     UNSAFE_LocationContext,
//     UNSAFE_NavigationContext,
//     UNSAFE_RouteContext,
//     UNSAFE_useScrollRestoration,
//     createBrowserRouter,
//     createHashRouter,
//     createMemoryRouter,
//     createPath,
//     createRoutesFromChildren,
//     createRoutesFromElements,
//     createSearchParams,
//     defer,
//     generatePath,
//     isRouteErrorResponse,
//     json,
//     matchPath,
//     matchRoutes,
//     parsePath,
    // redirect, renderMatches, resolvePath, unstable_HistoryRouter, unstable_useBlocker, unstable_usePrompt, useActionData, useAsyncError, useAsyncValue, useBeforeUnload, useFetcher, useFetchers, useFormAction, useHref, useInRouterContext, useLinkClickHandler, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes, useSearchParams, useSubmit;

const Authenticate = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                isAuthenticated: false,
            };
        }
        
        componentDidMount() {
            const cookies = new Cookies();
            let refreshToken = cookies.get('refreshToken');
            console.log("componentDidMount refreshToken",refreshToken)
            if (refreshToken) {
                this.setState({ isAuthenticated: true });
            }
        }

        render() {
            const { isAuthenticated } = this.state;

            if (isAuthenticated) {
                return <Component {...this.props} />;
            } else {
                return <Navigate to="/login" />;
            }
        }
    };
};

export default Authenticate;
