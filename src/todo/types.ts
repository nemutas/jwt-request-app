export type TodoType = {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	created_at: string;
	updated_at: string;
};

export type RequestTodoType = {
	title: string;
	description: string;
	completed: boolean;
};

export type LogType = {
	status: number;
	message: string;
	isSuccess: boolean;
};
