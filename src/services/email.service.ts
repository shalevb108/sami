import axios from "axios";
import { Email } from "../models/email.model";

const PREFIX = "email";
const SERVER_URL = "https://sami-backend-j9lt.onrender.com"; // Update with your server URL

function convertDateFormat(email: Email): Email {
  // Create a new Date object from the string
  const time = new Date(email.time);
  const formattedTime = `${time.getHours().toString().padStart(2, "0")}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  const date = new Date(email.date);
  // Extract the day, month, and year from the date object
  const day = String(date.getUTCDate() + 1).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getUTCFullYear();

  // Format the date as DD/MM/YYYY
  const formattedDate = `${day}/${month}/${year}`;
  let emailString: string = "";
  const parsedValue = JSON.parse(email.emailAddress);
  if (Array.isArray(parsedValue)) {
    emailString = parsedValue.join(", ");
  } else {
    emailString = parsedValue;
  }
  // Return a new Email object with the date fixed in the new format
  return {
    ...email,
    emailAddress: `${emailString}, roshcontrol@gmail.com`,
    date: formattedDate,
    time: formattedTime,
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
