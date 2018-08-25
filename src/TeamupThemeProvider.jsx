import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: orange
    },
});

const TeamupThemeProvider = ({ children }) =>
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>

export default TeamupThemeProvider;