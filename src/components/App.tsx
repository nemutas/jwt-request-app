import React from 'react';
import { colors, createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { Main } from './Main';

export const App: React.FC = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: colors.orange[800]
			},
			type: 'dark'
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Main />
		</ThemeProvider>
	);
};
