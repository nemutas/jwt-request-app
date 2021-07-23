import { atom } from 'recoil';
import { LogType, TodoType } from './types';

export const todosState = atom({
	key: 'state/todos',
	default: [] as TodoType[]
});

export const logsState = atom({
	key: 'state/logs',
	default: [] as LogType[]
});

export const jwtState = atom({
	key: 'state/jwt',
	default: ''
});

export const selectedTodoState = atom<TodoType>({
	key: 'state/selectedTodo',
	default: {
		id: '',
		title: '',
		description: '',
		completed: false,
		created_at: '',
		updated_at: ''
	}
});
