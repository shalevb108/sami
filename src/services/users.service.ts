import axios, { AxiosResponse } from 'axios';
import { User, UserSchema } from '../models/user.model';

const PREFIX = 'users';
const SERVER_URL = "https://sami-backend-j9lt.onrender.com"; // Update with your server URL "http://localhost:3000"

class UsersService {
    async getAll() {
        try {
            const response = await axios.get<User[]>(`${SERVER_URL}/${PREFIX}`);
            const parsed = UserSchema.array().parse(response.data);
            return parsed;
        } catch (e: any) {
            console.error(e.message);
            throw new Error('Error getting users');
        }
    }
    async findOne(username: string, password:string) {
        try {
            const response: AxiosResponse<boolean> = await axios.get<boolean>(`${SERVER_URL}/${PREFIX}/${username}/${password}`);
            return response.data;
        } catch (e: any) {
            console.error(e.message);
            throw new Error('Error getting users');
        }
    }
}

export const usersService = new UsersService();