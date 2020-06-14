import React, { FC, useState } from 'react';

import { Button } from '@components/buttons/Button';
import { Box } from '@components/boxes/Box';
import { Input, TextArea } from '@components/forms/Input';
import { NavLink } from '@components/links/NavLink';
import { H2, H3, P } from '@components/text/Text';
import { Routes } from '@constants/routes';
import { css, styled } from '@theme/styled';
import { hexToRgb, minMediaQuery } from '@theme/utils';
import { encodeFormData } from '@utils/encodeFormData';

export const Contact: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [hasSubmitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState(undefined);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCompany(e.target.value);
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formError) {
      setFormError(undefined);
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData({
        'form-name': 'contact',
        name,
        email,
        company,
        title,
        message,
      }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => setFormError(error));
  };

  return (
    <Box py={7} variant="column">
      <H2>Ready to get to work? We are.</H2>
      <P pb={5}>
        Overwhelmed with the possilibities and options of social media? Not sure
        where to focus your attention? We are here to help you figure that out{' '}
        <strong>for free!</strong> Just fill out the form below and {"we'll"} be
        in touch within 24hrs.
      </P>
      <ContactForm
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-testid="contact"
        name="contact"
        onSubmit={handleSubmit}
      >
        {!hasSubmitted ? (
          <>
            <Box
              alignItems="flex-start"
              flexDirection={['column', null, 'row']}
              variant="flex"
            >
              <Group>
                <input name="contact" type="hidden" value="contact" />
                <Input
                  aria-label="Name"
                  name="name"
                  onChange={handleNameChange}
                  placeholder="Name"
                  value={name}
                />
                <Input
                  aria-label="email"
                  name="email"
                  onChange={handleEmailChange}
                  placeholder="Email"
                  type="email"
                  value={email}
                />
                <Input
                  aria-label="company"
                  name="company"
                  onChange={handleCompanyChange}
                  placeholder="Company"
                  value={company}
                />
                <Input
                  aria-label="title"
                  name="title"
                  onChange={handleTitleChange}
                  placeholder="Title"
                  value={title}
                />
              </Group>
              <Group>
                <TextArea
                  aria-label="message"
                  name="message"
                  onChange={handleMessageChange}
                  placeholder="In a few words, what are your needs?"
                  value={message}
                />
                <Button type="submit" variant="primary">
                  Request Assessment
                </Button>
              </Group>
            </Box>
            {formError && <Error>{formError}</Error>}
          </>
        ) : (
          <Success>
            <H3>Thank You!</H3>
            <P>Your assessment is on {"it's"} way to us.</P>
            <P>{"We'll"} reach out soon to follow-up with you.</P>
            <P>
              In the meanwhile, check out our{' '}
              <NavLink to={`/${Routes.Blog}`}>blog</NavLink> or{' '}
              <NavLink to={`/${Routes.CaseStudies}`}>case studies</NavLink> to
              learn more.
            </P>
          </Success>
        )}
      </ContactForm>
    </Box>
  );
};

const ContactForm = styled.form`
  display: flex;
  flex-flow: column;
`;

const Group = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-flow: column;

  ${minMediaQuery.Medium(css`
    &:first-child {
      margin-right: ${({ theme }) => theme.Spacings.StaticSpace05};
    }

    input:last-child {
      margin-bottom: 0;
    }
  `)}
`;

const Success = styled.div`
  ${({ theme }) => css`
    background: rgba(${hexToRgb(theme.Colors.Green)}, 0.5);
    border: 1px solid ${theme.Colors.Green};
    border-radius: 4px;
    padding: ${theme.Spacings.FontSpace02};
  `}
`;

const Error = styled.div`
  ${({ theme }) => css`
    background: rgba(${hexToRgb(theme.Colors.Red)}, 0.5);
    color: ${theme.Colors.Red};
    border: 1px solid ${theme.Colors.Red};
    padding: ${theme.Spacings.FontSpace02};
    margin-top: ${theme.Spacings.StaticSpace03};
  `}
`;
