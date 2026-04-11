import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  console.log('--- API CONTACT START ---');
  try {
    const isFormData = request.headers.get('content-type')?.includes('multipart/form-data');
    let data: Record<string, string> = {};
    
    if (isFormData) {
      console.log('Input type: FormData');
      const formData = await request.formData();
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
    } else {
      console.log('Input type: JSON');
      const jsonData = await request.json();
      data = jsonData as Record<string, string>;
    }

    const { source, name, email, phone, message } = data;

    const smtpHost = process.env.SMTP_HOST || 'smtp.turkticaret.net';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || 'info@megagoz.com';
    const smtpPass = process.env.SMTP_PASS;

    console.log('SMTP Config:', { smtpHost, smtpPort, smtpUser, hasPass: !!smtpPass });

    if (!smtpPass) {
      throw new Error('SMTP_PASS is not defined in environment variables');
    }

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
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    } as any);

    console.log('Transporter created, sending mail...');

    const mailOptions = {
      from: `"Megagöz Web" <${smtpUser}>`,
      to: smtpUser,
      replyTo: email || smtpUser,
      subject: `Web Form: ${name || 'İsimsiz'} - ${source || 'Genel'}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #162f5d;">Yeni Başvuru</h2>
          <p><strong>Kaynak:</strong> ${source || 'Bilinmiyor'}</p>
          <p><strong>Ad:</strong> ${name || '-'}</p>
          <p><strong>Tel:</strong> ${phone || '-'}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
          <p><strong>Mesaj:</strong> ${message || '-'}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Mail sent successfully!');

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error: any) {
    console.error('--- API CONTACT ERROR ---', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Unknown error occurred',
        details: error.stack || 'No details'
      },
      { status: 500 }
    );
  }
}
