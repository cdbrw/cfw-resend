import { Hono } from 'hono';
import { Resend } from 'resend';

import DefaultEmail from './emails/default-email';
import VercelInviteUserEmail from './emails/vercel-email';

export type Env = {
  RESEND_API_KEY: string;
};

const app = new Hono<{ Bindings: Env }>();

app.post('/send/email', async (c) => {
  const resend = new Resend(c.env.RESEND_API_KEY);

  const data = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['thcdbrw@gmail.com'],
    subject: 'Subscribe to CodeBrew',
    react: <DefaultEmail firstName="codebrew" />,
  });

  return c.json(data);
});

app.post('/send/email/vercel', async (c) => {
  const resend = new Resend(c.env.RESEND_API_KEY);

  const data = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['thcdbrw@gmail.com'],
    subject: 'Join CodeBrew',
    react: (
      <VercelInviteUserEmail
        username="cdbrw"
        teamName="CodeBrew"
        invitedByUsername="CodeBrew"
        invitedByEmail="thcdbrw@gmail.com"
      />
    ),
  });

  return c.json(data);
});

export default app;
