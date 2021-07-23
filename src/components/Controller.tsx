import React, { useState } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { css } from '@emotion/css';
import {
	Button, Checkbox, createStyles, Divider, FormControlLabel, InputAdornment, makeStyles, TextField,
	Theme, Typography
} from '@material-ui/core';
import { getTodos, postTodo, putTodo } from '../todo/fetch';
import { jwtState, logsState, selectedTodoState, todosState } from '../todo/store';
import { RequestTodoType } from '../todo/types';

export const Controller: React.FC = () => {
	const classes = useStyles();
	const setTodos = useSetRecoilState(todosState);
	const setLogs = useSetRecoilState(logsState);
	const [jwt, setJwt] = useRecoilState(jwtState);
	const [selectedTodo, setSelectedTodo] = useRecoilState(selectedTodoState);
	const resetSelectedTodo = useResetRecoilState(selectedTodoState);
	const [postData, setPostData] = useState<RequestTodoType>({
		title: '',
		description: '',
		completed: false
	});

	const getTodosHandler = async () => {
		const res = await getTodos(jwt);
		setTodos(res.data);
		setLogs(prev => [res.log, ...prev]);
	};

	const postTodoHandler = async () => {
		const res = await postTodo(jwt, postData);
		setLogs(prev => [res.log, ...prev]);

		if (res.log.isSuccess) {
			// 投稿に成功したら表示を初期状態に戻す
			setPostData({ title: '', description: '', completed: false });
			// リストを更新する
			await getTodosHandler();
		}
	};

	const putTodoHandler = async () => {
		const putData = {
			title: selectedTodo.title,
			description: selectedTodo.description,
			completed: selectedTodo.completed
		} as RequestTodoType;
		const res = await putTodo(jwt, selectedTodo.id, putData);
		setLogs(prev => [res.log, ...prev]);

		if (res.log.isSuccess) {
			// 更新に成功したら表示を初期状態に戻す
			resetSelectedTodo();
			// リストを更新する
			await getTodosHandler();
		}
	};

	return (
		<div className={sScrollContainer}>
			<div className={sContainer}>
				<div>
					<Typography className={classes.header} variant="h5">
						Specify JWT
					</Typography>
					<TextField
						className={classes.jwt}
						id="jwt"
						label="JWT"
						multiline
						fullWidth
						value={jwt}
						onChange={e => {
							setJwt(e.target.value);
						}}
					/>
				</div>

				<Divider className={classes.divider} />

				{/* get */}
				<div>
					<Typography className={classes.header} variant="h5">
						Get Todos
					</Typography>
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						fullWidth
						onClick={getTodosHandler}>
						GET
					</Button>
				</div>

				<Divider className={classes.divider} />

				{/* post */}
				<div>
					<div className={sTtileLine}>
						<Typography className={classes.header} variant="h5">
							Post Todo
						</Typography>
						<span />
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									name="complited"
									checked={postData.completed}
									onChange={e => setPostData(prev => ({ ...prev, completed: e.target.checked }))}
								/>
							}
							label="Complited"
						/>
					</div>
					<TextField
						className={classes.title}
						id="title_post"
						label="Title"
						fullWidth
						value={postData.title}
						onChange={e => {
							setPostData(prev => ({ ...prev, title: e.target.value }));
						}}
					/>
					<TextField
						className={classes.desc}
						id="desc_post"
						label="Description"
						multiline
						fullWidth
						value={postData.description}
						onChange={e => {
							setPostData(prev => ({ ...prev, description: e.target.value }));
						}}
					/>
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						fullWidth
						disabled={!postData.title}
						onClick={postTodoHandler}>
						POST
					</Button>
				</div>

				<Divider className={classes.divider} />

				{/* put */}
				<div>
					<div className={sTtileLine}>
						<Typography className={classes.header} variant="h5">
							Put Todo
						</Typography>
						<TextField
							id="id"
							fullWidth
							disabled
							value={selectedTodo.id}
							InputProps={{
								startAdornment: <InputAdornment position="start">ID</InputAdornment>
							}}
						/>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									name="complited"
									checked={selectedTodo.completed}
									onChange={e => {
										setSelectedTodo(prev => ({ ...prev, completed: e.target.checked }));
									}}
								/>
							}
							label="Complited"
						/>
					</div>
					<TextField
						className={classes.title}
						id="title_put"
						label="Title"
						fullWidth
						value={selectedTodo.title}
						onChange={e => {
							setSelectedTodo(prev => ({ ...prev, title: e.target.value }));
						}}
					/>
					<TextField
						className={classes.desc}
						id="desc_put"
						label="Description"
						multiline
						fullWidth
						value={selectedTodo.description}
						onChange={e => {
							setSelectedTodo(prev => ({ ...prev, description: e.target.value }));
						}}
					/>
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						fullWidth
						disabled={!selectedTodo.title || !selectedTodo.id}
						onClick={putTodoHandler}>
						PUT
					</Button>
				</div>
			</div>
		</div>
	);
};

// ===================================================
// Style

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			color: theme.palette.primary.main
		},
		jwt: {
			marginTop: theme.spacing(2)
		},
		title: {
			marginTop: theme.spacing(2)
		},
		desc: {
			marginTop: theme.spacing(2)
		},
		id: {
			marginTop: theme.spacing(2)
		},
		button: {
			marginTop: theme.spacing(2)
		},
		divider: {
			margin: theme.spacing(3, 0, 2),
			backgroundColor: theme.palette.secondary.dark
		}
	})
);

const sScrollContainer = css`
	width: 100%;
	height: calc(100vh - 50px);
	overflow: auto;
	padding-right: 5px;
`;

const sContainer = css`
	display: grid;
	grid-template-rows: auto auto auto auto 1fr auto 1fr;
`;

const sTtileLine = css`
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-gap: 20px;
	align-items: center;
	justify-content: center;
`;
