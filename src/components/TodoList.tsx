import React, { useCallback } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { css } from '@emotion/css';
import {
	Avatar, Card, CardContent, CardHeader, createStyles, IconButton, makeStyles, Theme, Typography
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteTodo, getTodos } from '../todo/fetch';
import { jwtState, logsState, selectedTodoState, todosState } from '../todo/store';
import { TodoType } from '../todo/types';

export const TodoList: React.FC = () => {
	const classes = useStyles();
	const [todos, setTodos] = useRecoilState(todosState);
	const setLogs = useSetRecoilState(logsState);
	const jwt = useRecoilValue(jwtState);
	const setSelectedTodo = useSetRecoilState(selectedTodoState);

	const deleteTodoHandler = async (id: string) => {
		const res = await deleteTodo(jwt, id);
		setLogs(prev => [res.log, ...prev]);

		if (res.log.isSuccess) {
			// 削除に成功したらリストを更新する
			const res = await getTodos(jwt);
			setTodos(res.data);
			setLogs(prev => [res.log, ...prev]);
		}
	};

	const selectTodoHandler = (todo: TodoType) => {
		setSelectedTodo(todo);
	};

	/** Todoの完了状態とタイトルの文字によってアイコンを変更する */
	const createIcon = useCallback(
		(title: string, completed: boolean) => {
			const firstChar = title.slice(0, 1);
			const style = completed ? classes.avatarComplete : classes.avatarIncomplete;

			return (
				<Avatar aria-label="recipe" className={style}>
					{firstChar}
				</Avatar>
			);
		},
		[classes.avatarComplete, classes.avatarIncomplete]
	);

	return (
		<div className={sScrollContainer}>
			<div className={sContainer}>
				{todos.map(todo => (
					<Card key={todo.id} className={classes.cardContainer}>
						<CardHeader
							avatar={
								<IconButton
									onClick={e => {
										selectTodoHandler(todo);
									}}>
									{createIcon(todo.title, todo.completed)}
								</IconButton>
							}
							action={
								<IconButton
									aria-label="delete"
									onClick={e => {
										deleteTodoHandler(todo.id);
									}}>
									<DeleteIcon />
								</IconButton>
							}
							title={todo.title}
							subheader={new Date(todo.updated_at).toLocaleString()}
						/>
						<CardContent className={classes.cardcontent}>
							<Typography variant="body2" color="textSecondary" component="p">
								{todo.description}
							</Typography>
						</CardContent>
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
			width: '340px',
			margin: '0 auto'
		},
		avatarComplete: {
			backgroundColor: theme.palette.primary.main
		},
		avatarIncomplete: {
			backgroundColor: theme.palette.grey[600]
		},
		cardcontent: {
			paddingTop: 0
		}
	})
);

const sContainer = css`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
	grid-gap: 10px;
	width: 100%;
`;

const sScrollContainer = css`
	width: 100%;
	height: calc(100vh - 350px);
	overflow: auto;
	padding-right: 5px;
`;
