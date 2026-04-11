import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { source, name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.megagoz.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER, // Using a simple sender address for better compatibility
      replyTo: email || process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `${name} - Yeni Form Başvurusu: ${source || 'İletişim'}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #162f5d;">Yeni Form Başvurusu</h2>
          <hr />
          <p><strong>Kaynak:</strong> ${source || 'Genel İletişim'}</p>
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>
          ${email ? `<p><strong>E-Posta:</strong> ${email}</p>` : ''}
          <p><strong>Mesaj:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message || '-'}</div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error: any) {
    console.error("DEBUG - Mail Error:", error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Failed to send message.',
      code: error.code || 'UNKNOWN'
    }, { status: 500 });
  }
}
