import React, { FC, useState } from 'react';

import {
  Button,
  Box,
  Input,
  TextArea,
  NavLink,
  H1,
  H2,
  H3,
  P,
} from '@components/core';
import { TopLevelPages as Pages } from '@constants/routes';
import { css, hexToRgb, minMediaQuery, styled } from '@styles/index';
import { encodeFormData } from '@utils/encodeFormData';

interface IProps {
  isPage?: boolean;
}

export const Contact: FC<IProps> = ({ isPage = false }) => {
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
    <Box variant="section">
      {isPage ? (
        <H1>Ready to get to work? We are.</H1>
      ) : (
        <H2>Ready to get to work? We are.</H2>
      )}
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
              <NavLink to={`/${Pages.Blog}`}>blog</NavLink> or{' '}
              <NavLink to={`/${Pages.CaseStudies}`}>case studies</NavLink> to
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
      margin-right: ${({ theme }) => theme.spacings.pixelSpace05};
    }

    input:last-child {
      margin-bottom: 0;
    }
  `)}
`;

const Success = styled.div`
  ${({ theme }) => css`
    background: rgba(${hexToRgb(theme.colors.green)}, 0.5);
    border: 1px solid ${theme.colors.green};
    border-radius: 4px;
    padding: ${theme.spacings.emSpace02};
  `}
`;

const Error = styled.div`
  ${({ theme }) => css`
    background: rgba(${hexToRgb(theme.colors.red)}, 0.5);
    color: ${theme.colors.red};
    border: 1px solid ${theme.colors.red};
    padding: ${theme.spacings.emSpace02};
    margin-top: ${theme.spacings.pixelSpace03};
  `}
`;
