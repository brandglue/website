import React, { FC, useState } from 'react';

import ButtonPrimary from '@components/ButtonPrimary';
import Input from '@components/Input';
import SectionText from '@components/SectionText';
import SectionTitle from '@components/SectionTitle';
import SectionWrapper from '@components/SectionWrapper';
import TextArea from '@components/TextArea';
import TextLink from '@components/TextLink';
import { Routes } from '@constants/routes';
import styled, { css } from '@theme/styled';
import { fluidFontSize, hexToRgb, minMediaQuery } from '@theme/utils';
import encodeFormData from '@utils/encodeFormData';

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
      .catch(error => setFormError(error));
  };

  return (
    <SectionWrapper>
      <SectionTitle>Ready to get to work? We are.</SectionTitle>
      <SectionText>
        <p>
          Overwhelmed with the possilibities and options of social media? Not
          sure where to focus your attention? We are here to help you figure
          that out <strong>for free!</strong> Just fill out the form below and{' '}
          {"we'll"} be in touch within 24hrs.
        </p>
      </SectionText>
      <ContactForm
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="contact"
        onSubmit={handleSubmit}
      >
        {!hasSubmitted ? (
          <>
            <GroupWrapper>
              <Group>
                <input name="contact" type="hidden" value="contact" />
                <Input
                  name="name"
                  onChange={handleNameChange}
                  placeholder="Name"
                  value={name}
                />
                <Input
                  name="email"
                  onChange={handleEmailChange}
                  placeholder="Email"
                  type="email"
                  value={email}
                />
                <Input
                  name="company"
                  onChange={handleCompanyChange}
                  placeholder="Company"
                  value={company}
                />
                <Input
                  name="title"
                  onChange={handleTitleChange}
                  placeholder="Title"
                  value={title}
                />
              </Group>
              <Group>
                <TextArea
                  name="message"
                  onChange={handleMessageChange}
                  placeholder="In a few words, what are your needs?"
                  value={message}
                />
                <ButtonPrimary type="submit">Request Assessment</ButtonPrimary>
              </Group>
            </GroupWrapper>
            {formError && <Error>{formError}</Error>}
          </>
        ) : (
          <Success>
            <SuccessTitle>Thank You!</SuccessTitle>
            <p>Your assessment is on {"it's"} way to us.</p>
            <p>{"We'll"} reach out soon to follow-up with you.</p>
            <p>
              In the meanwhile, check out our{' '}
              <TextLink to={`/${Routes.Blog}`}>blog</TextLink> or{' '}
              <TextLink to={`/${Routes.CaseStudies}`}>case studies</TextLink> to
              learn more.
            </p>
          </Success>
        )}
      </ContactForm>
    </SectionWrapper>
  );
};

const ContactForm = styled.form`
  display: flex;
  flex-flow: column;
`;

const GroupWrapper = styled.div`
  display: flex;
  flex-flow: column;

  ${minMediaQuery.Medium(css`
    flex-flow: row;
  `)}
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

const SuccessTitle = styled.h3`
  text-transform: uppercase;
  ${fluidFontSize.StepUp1()};
`;

const Success = styled.div`
  background: rgba(${({ theme }) => hexToRgb(theme.Colors.Green)}, 0.5);
  border: 1px solid ${({ theme }) => theme.Colors.Green};
  border-radius: 4px;
  padding: ${({ theme }) => theme.Spacings.FontSpace02};
`;

const Error = styled.div`
  background: rgba(${({ theme }) => hexToRgb(theme.Colors.Red)}, 0.5);
  color: ${({ theme }) => theme.Colors.Red};
  border: 1px solid ${({ theme }) => theme.Colors.Red};
  padding: ${({ theme }) => theme.Spacings.FontSpace02};
  margin-top: ${({ theme }) => theme.Spacings.StaticSpace03};
`;

export default Contact;
