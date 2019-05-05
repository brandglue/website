import React, { FC, useState } from 'react';

import ButtonPrimary from '@components/ButtonPrimary';
import Input from '@components/Input';
import SectionTitle from '@components/SectionTitle';
import TextArea from '@components/TextArea';
import styled from '@theme/styled';
import encodeFormData from '@utils/encodeFormData';

export const Contact: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

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
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  return (
    <Wrapper>
      <SectionTitle>Ready to get to work? We are.</SectionTitle>
      <SectionText>
        Overwhelmed with the possilibities and options of social media? Not sure
        where to focus your attention? We are here to help you figure that out{' '}
        <strong>for free!</strong> Just fill out the form below and {"we'll"} be
        in touch within 24hrs.
      </SectionText>
      <Form
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="contact"
        onSubmit={handleSubmit}
      >
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
          <ButtonPrimary>Request Assessment</ButtonPrimary>
        </Group>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.Spacings.StaticSpace05} ${theme.Spacings.Page}`};
`;

const SectionText = styled.p`
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace03};
`;

const Form = styled.form`
  display: flex;
`;

const Group = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-flow: column;

  &:first-child {
    margin-right: ${({ theme }) => theme.Spacings.StaticSpace05};
  }

  input:last-child {
    margin-bottom: 0;
  }
`;

export default Contact;
