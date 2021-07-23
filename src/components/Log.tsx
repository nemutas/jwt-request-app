import React, { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { Avatar, Card, CardHeader, createStyles, makeStyles, Theme } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { logsState } from '../todo/store';

export const Log: React.FC = () => {
	const classes = useStyles();
	const logs = useRecoilValue(logsState);

	/** ログの状態によってアイコンを変更する */
	const createIcon = useCallback(
		(isSuccess: boolean) => {
			return isSuccess ? (
				<Avatar aria-label="recipe" className={classes.avatarSuccess}>
					!
				</Avatar>
			) : (
				<Avatar aria-label="recipe" className={classes.avatarError}>
					X
				</Avatar>
			);
		},
		[classes.avatarError, classes.avatarSuccess]
	);

	return (
		<div className={sScrollContainer}>
			<div className={sContainer}>
				{logs.map((log, i) => (
					<Card key={i} className={classes.cardContainer}>
						<CardHeader
							className={classes.cardHeader}
							avatar={createIcon(log.isSuccess)}
							title={log.message}
							subheader={log.status}
						/>
					</Card>
				))}
			</div>
		</div>
	);
};

// ===================================================
// Style

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		cardContainer: {
			width: '100%',
			padding: theme.spacing(1)
		},
		cardHeader: {
			padding: 0
		},
		avatarError: {
			width: theme.spacing(4),
			height: theme.spacing(4),
			backgroundColor: red[500]
		},
		avatarSuccess: {
			width: theme.spacing(4),
			height: theme.spacing(4),
			backgroundColor: green[600]
		}
	})
);

const sContainer = css`
	display: grid;
	grid-gap: 10px;
`;

const sScrollContainer = css`
	width: 100%;
	height: 250px;
	overflow: auto;
	padding-right: 5px;
`;
