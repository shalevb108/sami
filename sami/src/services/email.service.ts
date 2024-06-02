import axios, { AxiosResponse } from 'axios';
import { Email } from '../models/email.model';

const PREFIX = 'email';
const SERVER_URL = 'http://localhost:3000'; // Update with your server URL

class EmailService {
    async create(content: Email) {
        try {
            const response = await axios.post<Email>(
                `${SERVER_URL}/${PREFIX}`,
                { content: content }
            );
            return response.data;
        } catch (e) {
            throw new Error('Error creating email');
        }
    }
}

export const emailService = new EmailService();