import React, { FC, useState } from 'react';

import { Button, Box, Input, P, TextArea } from '@components/core';
import { css, hexToRgb, minMediaQuery, rhythm, styled } from '@styles/index';
import { encodeFormData } from '@utils/encodeFormData';

interface IProps {
  isPage?: boolean;
}

const initialState = {
  company: '',
  email: '',
  message: '',
  name: '',
  title: '',
  formError: undefined,
  hasSubmitted: false,
};

export const Contact: FC<IProps> = ({ isPage = false }) => {
  const [state, setState] = useState(initialState);
  const {
    company,
    email,
    message,
    name,
    title,
    formError,
    hasSubmitted,
  } = state;

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formError) {
      setState((prevState) => {
        return { ...prevState, formError: undefined };
      });
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData({
        'form-name': 'contact',
        email,
        company,
        message,
        name,
        title,
      }),
    })
      .then(() =>
        setState((prevState) => {
          return { ...prevState, hasSubmitted: true };
        }),
      )
      .catch((error) =>
        setState((prevState) => {
          return { ...prevState, formError: error };
        }),
      );
  };

  return (
    <Box variant="section">
      {isPage ? (
        <h1>Ready to get to work? We are.</h1>
      ) : (
        <h2>Ready to get to work? We are.</h2>
      )}
      <P pb={5}>
        Overwhelmed with the possibilities and options of social media? Not sure
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
            <Fields>
              <Group>
                <input name="contact" type="hidden" value="contact" />
                <Input
                  aria-label="Name"
                  name="name"
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  placeholder="Name"
                  value={name}
                />
                <Input
                  aria-label="email"
                  name="email"
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                  placeholder="Email"
                  type="email"
                  value={email}
                />
                <Input
                  aria-label="company"
                  name="company"
                  onChange={(e) =>
                    setState({ ...state, company: e.target.value })
                  }
                  placeholder="Company"
                  value={company}
                />
                <Input
                  aria-label="title"
                  name="title"
                  onChange={(e) =>
                    setState({ ...state, title: e.target.value })
                  }
                  placeholder="Title"
                  value={title}
                />
              </Group>
              <Group>
                <TextArea
                  aria-label="message"
                  name="message"
                  onChange={(e) =>
                    setState({ ...state, message: e.target.value })
                  }
                  placeholder="In a few words, what are your needs?"
                  value={message}
                />
                <Button type="submit" variant="primary">
                  Request Assessment
                </Button>
              </Group>
            </Fields>
            {formError && <Error>{formError}</Error>}
          </>
        ) : (
          <Success>
            <h3>Thank You!</h3>
            <p>
              We&apos;ve received your message. We&apos;ll be in touch soon.
            </p>
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

const Fields = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${minMediaQuery.Medium(css`
    flex-direction: row;
  `)}
`;

const Group = styled.div`
  flex: auto;
  width: 100%;
  display: flex;
  flex-flow: column;

  ${minMediaQuery.Medium(css`
    flex: 1 1 50%;

    &:first-child {
      margin-right: 25px;
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
    padding: 0.6em;
  `}
`;

const Error = styled.div`
  ${({ theme }) => css`
    background: rgba(${hexToRgb(theme.colors.red)}, 0.5);
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.red};
    padding: 0.6em;
    margin-top: ${rhythm(0.5)};
  `}
`;
