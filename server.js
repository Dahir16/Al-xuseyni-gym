const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const script = http.Server(app);
const PORT = process.env.PORT || 5000;



// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
})

app.post('/', (req, res) => {
    console.log(req.body);


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'codelead16@gmail.com',
        pass: 'pzyk fnqw mfer sdhr'
      }
    });
    
    const mailOptions = {
      email: req.body.email,
      from: req.body.email.value,
      to: 'engdahir16@gmail.com',
      phone: req.body.value,
      subject: req.body.userName,
      text: `Name: ${req.body.userName}, \n Email: ${req.body.email}, \n Phone: ${req.body.phone}, \n ${req.body.message}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send('error');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('success');
      }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})