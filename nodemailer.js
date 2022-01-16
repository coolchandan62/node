// Node Mailer
var node_mailer = require('nodemailer');
var transport = node_mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'searchyou62@gmail.com',
        pass: '9013841418'
    }
});
var mailOptions = {
    from: 'searchyou62@gmail.com',
    to: 'coolchandan62@gmail.com',
    subject: 'Test Email from node',
    text: 'Hi, This is test email.'
}
transport.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Mail has been sent', info.response);
        }
    })
    // Node Mailer