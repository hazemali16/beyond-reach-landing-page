import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { fullname, email, phone, message } = await request.json();
    console.log('Request data:', { fullname, email, phone, message });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "hazemali1262007@gmail.com",
      subject: `Message from ${process.env.EMAIL_USER}`,
      text: `Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    console.log('Mail options:', mailOptions);

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return new Response(JSON.stringify({ message: 'رسالتكم وصلت ، وسنقوم بالتواصل معكم قريباً' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'هناك خطأ في الإرسال', details: error.message }), { status: 500 });
  }
}

