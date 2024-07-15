import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const adminEmail = process.env.ADMIN_EMAIL;
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: adminEmail,
        pass: process.env.PASSWORD
    }
});

export async function POST(req, res) {
  const { name, email, subject, message } = await req.json();

  try {
    // Email to the user
    const userMailOptions = {
      from: adminEmail,
      to: email,
      subject: 'Thanks for contacting me',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f2f2f2;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
            }
            p {
              font-size: 16px;
              line-height: 1.5;
              color: #666;
              margin-bottom: 15px;
            }
            a {
              color: #007bff;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <p>Dear ${name},</p>
            <p>Thank you for expressing interest in hiring me! I'm excited about the possibility of working together.</p>
            <p>I've received your email address: ${email}</p>
            <p>To proceed, please feel free to:</p>
            <ul>
              <li><a href="mailto:rdavidprasanna97@gmail.com">Contact me</a></li>
            </ul>
            <p>I'm eager to talk to you and demonstrate how my skills can be a valuable asset to your team.</p>
            <p>Thank you again for your interest!</p>
            <p>Best regards,</p>
            <p>Prasanna R</p>
          </div>
        </body>
        </html>
      `,
    };

    // Email to the admin
    const adminMailOptions = {
      from: adminEmail,
      to: adminEmail,
      subject: 'New Contact Form Submitted',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f2f2f2;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
            }
            p {
              font-size: 16px;
              line-height: 1.5;
              color: #666;
              margin-bottom: 15px;
            }
            a {
              color: #007bff;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <p>Hello David,</p>
            <p>A new contact form submission has been received:</p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Subject:</strong> ${subject}</li>
              <li><strong>Message:</strong> ${message}</li>
            </ul>
            <p>Take a look!</p>
          </div>
        </body>
        </html>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error sending emails' });
  }
}
