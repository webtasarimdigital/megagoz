import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const message = formData.get('message') as string;
    const cvFile = formData.get('cv') as File | null;

    let attachments = [];
    
    if (cvFile && cvFile.name) {
      if (cvFile.size > MAX_FILE_SIZE) {
        return NextResponse.json({ success: false, message: 'File size exceeds 10MB limit.' }, { status: 400 });
      }
      const arrayBuffer = await cvFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: cvFile.name,
        content: buffer,
        contentType: cvFile.type,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.megagoz.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email || process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Yeni İş Başvurusu: ${position || 'Belirtilmedi'}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #ecbb3f;">MegaGöz Kariyer Başvurusu</h2>
          <p>Kariyer portalınızdan yeni bir iş başvurusu aldınız.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; width: 150px;">Ad Soyad:</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${name || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">E-Posta:</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${email || '-'}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Telefon:</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${phone || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Başvurulan Pozisyon:</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #162f5d;">${position || '-'}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Ön Yazı / Hedef:</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${message || '-'}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">Bu e-posta sistem tarafından otomatik gönderilmiştir.</p>
        </div>
      `,
      attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Career Email sent: %s", info.messageId);

    return NextResponse.json({ success: true, message: 'Application submitted successfully.' }, { status: 200 });
  } catch (error) {
    console.error("Error sending career email:", error);
    return NextResponse.json({ success: false, message: 'Failed to submit application.' }, { status: 500 });
  }
}
