import { NextResponse } from "next/server";
import axios from 'axios';

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export async function POST(req) {
    try {
        const body = await req.text();
        const { name, email } = JSON.parse(body);

        const message = `Hi David,\nAn employer contacted you through your portfolio website.\nEmployer Info:\nName: ${name}\nEmail: ${email}`;

        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message,
            }
        );

        return NextResponse.json({ message: 'Message sent to Telegram successfully' });
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        return NextResponse.json({ error: 'Error sending message to Telegram' });
    }
}
