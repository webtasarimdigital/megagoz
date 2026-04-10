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
      from: `"${name}" <${process.env.SMTP_USER}>`, // Send via authenticated email but set friendly name
      replyTo: email || process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Yeni Form Başvurusu: ${source || 'İletişim'}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #162f5d;">MegaGöz Web Form Başvurusu</h2>
          <p>Web sitenizden yeni bir <strong>${source || 'İletişim Formu'}</strong> başvurusu aldınız.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; width: 120px;">Ad Soyad:</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${name || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Telefon:</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${phone || '-'}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">E-Posta:</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${email || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Mesaj:</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${message || '-'}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">Bu mesaj otomatik olarak megagoz.com üzerinden gönderilmiştir.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Contact Email sent: %s", info.messageId);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}
