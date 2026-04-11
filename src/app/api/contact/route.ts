import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const isFormData = request.headers.get('content-type')?.includes('multipart/form-data');
    let data: Record<string, string> = {};
    
    if (isFormData) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
    } else {
      const jsonData = await request.json();
      data = jsonData as Record<string, string>;
    }

    const {
      source = 'İletişim Formu',
      name,
      email,
      phone,
      message,
    } = data;

    const smtpHost = process.env.SMTP_HOST || 'smtp.turkticaret.net';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || 'info@megagoz.com';
    const smtpPass = process.env.SMTP_PASS;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, 
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"Megagöz Web Form" <${smtpUser}>`,
      to: smtpUser,
      replyTo: email || smtpUser, 
      subject: `${name || 'İsimsiz'} - Web Sitesi Form Bildirimi: ${source}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #162f5d;">Yeni Form Başvurusu</h2>
          <hr />
          <p><strong>Kaynak:</strong> ${source}</p>
          <p><strong>Ad Soyad:</strong> ${name || 'Belirtilmedi'}</p>
          <p><strong>Telefon:</strong> <a href="tel:${phone}">${phone || 'Belirtilmedi'}</a></p>
          ${email ? `<p><strong>E-Posta:</strong> ${email}</p>` : ''}
          <p><strong>Mesaj:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message || '-'}</div>
          <br />
          <p style="font-size: 12px; color: #888;">Bu mail Megagöz web sitesi üzerinden gönderilmiştir.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error sending email' },
      { status: 500 }
    );
  }
}
