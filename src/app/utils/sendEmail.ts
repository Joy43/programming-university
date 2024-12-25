import config from "../config";


const nodemailer = require("nodemailer");


export const sendEmail=async(to: string, resetUILink: string)=>{  
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    port: 587,
    secure:config.NODE_ENV==='production', 
    auth: {
      user: "ssjoy43@gmail.com",
      pass: "daax tzoa lzuo elyt",
    },
  });

    // send mail with defined transport object
     await transporter.sendMail({
      // ----sevice kina nay tai nijer e
      from: 'ssjoy370@gmail.com', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "passowrd chage", // Subject line
      text: "Hello world?please provide password", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
  
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }


