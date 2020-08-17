import React, { FC } from 'react';

import { Contact as ContactForm } from '@components/common';
import { Divider } from '@components/core';

export const Contact: FC = () => {
  return (
    <>
      <Divider />
      <ContactForm isPage />
    </>
  );
};

export default Contact;
