import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'mail@ronijaat.com',
    to: email,
    subject: 'Verify your email',
    html: `
      <h1>Verify your email</h1>
      <p>Click the link below to verify your email</p>
      <a href="${confirmLink}">Verify email</a>
    `,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: 'mail@ronijaat.com',
    to: email,
    subject: 'Verify your email',
    html: `
      <h1>Reset Your Password</h1>
      <p>Click the link below to reset your password</p>
      <a href="${resetLink}">Reset password</a>
    `,
  });
};

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'mail@ronijaat.com',
    to: email,
    subject: '2FA Code',
    html: `
      <h1>2FA Code</h1>
      <p>${token}</p>
    `,
  });
};
