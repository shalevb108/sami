import axios from "axios";
import { Email } from "../models/email.model";

const PREFIX = "email";
const SERVER_URL = 'https://sami-backend-j9lt.onrender.com'; // Update with your server URL

function convertDateFormat(email: Email): Email {
  // Create a new Date object from the string
  const date = new Date(email.date);

  // Extract the day, month, and year from the date object
  const day = String(date.getUTCDate() + 1).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getUTCFullYear();

  // Format the date as DD/MM/YYYY
  const formattedDate = `${day}/${month}/${year}`;

  // Return a new Email object with the date fixed in the new format
  return {
    ...email,
    date: formattedDate
  };
}

class EmailService {
  async create(content: Email) {
    try {
      const response = await axios.post<Email>(
        `${SERVER_URL}/${PREFIX}`,
        convertDateFormat(content)
      );
      return response.data;
    } catch (e) {
      throw new Error("Error creating email");
    }
  }
}

export const emailService = new EmailService();
