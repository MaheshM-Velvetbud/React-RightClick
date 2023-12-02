const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Add this line
const nodemailer = require('nodemailer'); // Add this line

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle contact form submissions
const corsOptions = {
    origin: 'http://localhost:3000',  // Replace with the actual origin of your React app
    methods: 'POST',
    optionsSuccessStatus: 200,
};

app.post('/send-email', cors(corsOptions), (req, res) => {
    const { name, email, message } = req.body;

    // Create a nodemailer transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mahesh.m@velvetbud.in',
            pass: 'maheshmahi',
        },
    });

    // Define the email content
    const mailOptions = {
        from: 'mahesh.m@velvetbud.in',
        to: 'mahesh.m@velvetbud.in',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
