import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from '@mui/base/Tabs';
import { Tab, tabClasses } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import {
    Link,
    matchPath,
    useLocation,
    Outlet,
} from 'react-router-dom';
import { styled } from '@mui/system';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import routes from '../config/routes';
import { Collapse } from '@mui/material';

function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
}

function MyTabs() {
    // You need to provide the routes in descendant order.
    // This means that if you have nested routes like:
    // users, users/new, users/edit.
    // Then the order should be ['users/add', 'users/edit', 'users'].
    const routePaths = Object.keys(routes).map( text => routes[text].path);
    const routeMatch = useRouteMatch(routePaths);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <Tabs value={currentTab}>
            <StyledTabsList>
                {Object.keys(routes).map((text) => (
                    <StyledTab value={routes[text].path} to={routes[text].path} slots={{ root: RouterLink }} key={text} aria-label={text}>
                    {routes[text].icon ? routes[text].icon : <ArrowRightIcon />}
                    <CollapseText in={routes[text].path === currentTab} orientation="horizontal">{text}</CollapseText>
                    </StyledTab>
                ))}
            </StyledTabsList>
            <Outlet />
        </Tabs>
    );
}

export default function Root() {
    return (
        <div>
            <MyTabs />
        </div>
    );
}

const green = {
    50: '#ecf3e9',
    100: '#d1e1ca',
    200: '#b5ceaa',
    300: '#9abc8a',
    400: '#87ae73',
    500: '#76a15d',
    600: '#6b9254',
    700: '#5f814a',
    800: '#547042',
    900: '#3e5231',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const RouterLink = React.forwardRef(function RouterLink(props, ref) {
    const { ownerState, ...other } = props;
    return <Link {...other} ref={ref} />;
});

RouterLink.propTypes = {
    ownerState: PropTypes.object.isRequired,
};

const StyledTab = styled(Tab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  background-color: transparent;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;

  &:hover {
    background-color: ${green[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${green[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${green[600]};
  }
`;

const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
  background-color: ${green[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);


const CollapseText = styled(Collapse)(
    ({ theme }) => `
    justify-content: center;
    display: flex;
    flexDirection: column;
    align-items: center;
    padding: 5px;
    `
)