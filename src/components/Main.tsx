import React from 'react';
import { css } from '@emotion/css';
import { createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import { Controller } from './Controller';
import { Log } from './Log';
import { TodoList } from './TodoList';

export const Main: React.FC = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.gridContainer} component="main">
			<Grid item className={classes.gridItem} xs={12} sm={5}>
				<Controller />
			</Grid>

			<div className={classes.dividerVContainer}>
				<Divider className={classes.dividerV} orientation="vertical" />
			</div>

			<div className={classes.dividerHContainer}>
				<Divider className={classes.dividerH} />
			</div>

			<Grid item className={classes.gridItem} xs={12} sm={7}>
				<div className={sRightContainer}>
					<div className={sListContainer}>
						<TodoList />
					</div>
					<Divider className={classes.dividerH} />
					<Log />
				</div>
			</Grid>
		</Grid>
	);
};

// ===================================================
// Style

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		gridContainer: {
			width: '100%',
			height: '100vh'
		},
		gridItem: {
			padding: theme.spacing(3),
			width: '100%'
		},
		dividerVContainer: {
			padding: theme.spacing(2, 0),
			[theme.breakpoints.down('sm')]: {
				display: 'none'
			}
		},
		dividerHContainer: {
			width: '100%',
			margin: '-1px 0',
			padding: theme.spacing(0, 2),
			[theme.breakpoints.up('sm')]: {
				display: 'none'
			}
		},
		dividerV: {
			margin: '0 -1px',
			backgroundColor: theme.palette.primary.dark
		},
		dividerH: {
			margin: '-1px 0',
			padding: theme.spacing(0, 2),
			backgroundColor: theme.palette.primary.dark
		}
	})
);

const sListContainer = css`
	width: 100%;
`;

const sRightContainer = css`
	display: grid;
	grid-template-rows: 1fr auto auto;
	grid-gap: 20px;
`;
