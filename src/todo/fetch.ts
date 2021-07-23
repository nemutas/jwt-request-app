import axios from 'axios';
import { LogType, RequestTodoType, TodoType } from './types';

const url = process.env.REACT_APP_API_URL!;

const createHeaders = (jwt: string) => {
	return {
		headers: { Authorization: `Bearer ${jwt}` }
	};
};

const catchError = (error: any): LogType => {
	let status = 500;
	let message = 'Internal Server Error';
	if (error.response && error.response.data) {
		status = error.response.status;
		message = error.response.data.error;
	}
	return { status, message, isSuccess: false };
};

/**
 * Todo一覧を取得する
 * @param jwt JsonWebToken
 * @returns Todo一覧とログ
 */
export const getTodos = async (jwt: string) => {
	try {
		const res = await axios.get(url, createHeaders(jwt));
		const data = res.data as TodoType[];
		return {
			data,
			log: { status: res.status, message: 'success get request', isSuccess: true } as LogType
		};
	} catch (error) {
		return { data: [] as TodoType[], log: catchError(error) };
	}
};

/**
 * Todoを投稿する
 * @param jwt JsonWebToken
 * @param data 投稿するデータ
 * @returns ログ
 */
export const postTodo = async (jwt: string, data: RequestTodoType) => {
	try {
		const res = await axios.post(url, data, createHeaders(jwt));
		return { log: { status: res.status, message: res.data.message, isSuccess: true } as LogType };
	} catch (error) {
		return { log: catchError(error) };
	}
};

/**
 * Todoを削除する
 * @param jwt JsonWebToken
 * @param id Todoのid
 * @returns ログ
 */
export const deleteTodo = async (jwt: string, id: string) => {
	try {
		const res = await axios.delete(url + `/${id}`, createHeaders(jwt));
		return { log: { status: res.status, message: res.data.message, isSuccess: true } as LogType };
	} catch (error) {
		return { log: catchError(error) };
	}
};

/**
 * Todoを更新する
 * @param jwt JsonWebToken
 * @param id Todoのid
 * @param data 更新するデータ
 * @returns ログ
 */
export const putTodo = async (jwt: string, id: string, data: RequestTodoType) => {
	try {
		const res = await axios.put(url + `/${id}`, data, createHeaders(jwt));
		return { log: { status: res.status, message: res.data.message, isSuccess: true } as LogType };
	} catch (error) {
		return { log: catchError(error) };
	}
};
