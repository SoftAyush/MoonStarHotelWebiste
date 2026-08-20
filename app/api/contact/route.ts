import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 13px; width: 140px; vertical-align: top;">${label}</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111827; font-size: 14px; font-weight: 600;">${value}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      subject,
      roomType,
      checkIn,
      checkOut,
      // guests,
      message,
    } = body;

    if (!name || !email || !phone || !roomType || !checkIn || !checkOut) {
      return NextResponse.json(
        { success: false, error: 'Name, email, phone, room type, check-in and check-out are required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL || 'moonstarhotel@gmail.com';
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'Moon Star Booking <onboarding@resend.dev>';

    if (!apiKey) {

      return NextResponse.json(
        // { success: false, error: 'Resend API key is missing.' },
        { success: false, error: 'Unable to send your message. The email service is currently unavailable. Please try again later.' },

        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || 'Not provided'),
      roomType: escapeHtml(roomType || 'Not selected'),
      checkIn: escapeHtml(checkIn || 'Not provided'),
      checkOut: escapeHtml(checkOut || 'Not provided'),
      // guests: escapeHtml(guests || 'Not provided'),
      subject: escapeHtml(subject || 'Booking Inquiry'),
      message: escapeHtml(message || 'No additional message provided').replace(/\n/g, '<br />'),
    };

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: recipient,
      replyTo: email,
      subject: `Booking Inquiry - ${name}`,
      html: `
        <div style="margin: 0; padding: 32px 16px; background: #f4f4f5; font-family: Georgia, 'Times New Roman', serif;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <tr>
              <td style="background: linear-gradient(135deg, #b8860b, #d4af37); padding: 28px 32px; text-align: center;">
                <div style="color: #1c1917; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; font-weight: bold; font-family: Arial, sans-serif;">Moon Star</div>
                <div style="color: #1c1917; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; opacity: 0.8; font-family: Arial, sans-serif;">Restaurant &amp; Lodge</div>
              </td>
            </tr>
            <tr>
              <td style="padding: 28px 32px 8px;">
                <h1 style="margin: 0 0 4px; font-size: 20px; color: #1c1917;">New Booking Inquiry</h1>
                <p style="margin: 0 0 20px; font-size: 13px; color: #9ca3af; font-family: Arial, sans-serif;">${safe.subject}</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif;">
                  ${renderRow('Guest Name', safe.name)}
                  ${renderRow('Email', `<a href="mailto:${safe.email}" style="color: #b8860b; text-decoration: none;">${safe.email}</a>`)}
                  ${renderRow('Phone', safe.phone)}
                  ${renderRow('Room Type', safe.roomType)}
                  ${renderRow('Check-in', safe.checkIn)}
                  ${renderRow('Check-out', safe.checkOut)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 32px 32px;">
                <div style="margin-top: 12px; padding: 18px 20px; background: #faf9f7; border-left: 3px solid #d4af37; border-radius: 6px; font-family: Arial, sans-serif;">
                  <div style="font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: #9ca3af; margin-bottom: 8px;">Message</div>
                  <div style="font-size: 14px; color: #374151; line-height: 1.6;">${safe.message}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 32px; background: #1c1917; text-align: center;">
                <p style="margin: 0; font-size: 11px; color: #9ca3af; font-family: Arial, sans-serif;">Reply directly to this email to respond to ${safe.name}.</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
