require('dotenv').config();
var nodemailer = require('nodemailer');
const mailkey = process.env.MAIL_KEY||'somefillerpassword';
const mailsource = process.env.MAIL_FROM ||'example@gmail.com';

function sendmail(args){
    const mailto = args.mailto||'prateek.k@example.com';
    const mailsubject = args.mailsubject||'Sending Email using test';
    const mailtext= args.mailtext||'That was easy!';
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: mailsource,
        pass: mailkey
      }
    });
    
    var mailOptions = {
      from: mailsource,
      to: mailto,
      subject: mailsubject,
      text: mailtext
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}
const mailargs = {mailto:"prateek.k@exmaple.com",
mailsubject:'this is another subject',
mailtext:"sirius blake was harry's friend"}
sendmail(mailargs);