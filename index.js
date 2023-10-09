
const nodemailer = require('nodemailer');
const fs = require('fs');
// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ramadanebrahim791@gmail.com', // Your Gmail address
    pass: 'your Application-specific password here', // Your Application-specific  password 
  },
});

const recipients = [
  { name:'kalmnyishara', email: 'info@kalmnyishara.com' },
    // Add the rest of the companies and their email addresses
  ];
  const resumeFile = fs.readFileSync('./my resume.pdf');
  const subject ='Frontend application'
const emailContent = `
<div>
<div>
Dear [Company Name]
</div>
      <div>
        My name is Ebrahim Ramadan and I am a sophomore computer science student
        at E-JUST. As a web developer, I am seeking a junior-level position in a
        space that allows me to expand my skills and learn about software
        development.
      </div>
      <div>
        The work intalio is doing is exactly the work I want to be part of. That
        is why I am applying for the position of Front-end developer. I look
        forward to hearing from you soon.
      </div>
      <div>Thank you,</div>
      <div>Ebrahim Ramadan</div>
    </div>
`;

recipients.forEach((company) => {
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: company.email,
      subject: subject,
        html: emailContent.replace('[Company Name]', company.name),
        attachments: [{ filename: 'resume.pdf', content: resumeFile }],
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(`Error sending email to ${company.name}: ${error}`);
      } else {
        console.log(`Email sent to ${company.name}: ${info.response}`);
      }
    });
  });