import React, { FC } from 'react';

import { Contact as ContactForm, Seo } from '@components/common';
import { Divider } from '@components/core';

interface IProps {
  location: any;
}

export const Contact: FC<IProps> = ({ location }) => {
  return (
    <>
      <Seo
        description="BrandGlue Contact Us"
        path={location.pathname}
        title="Contact Us"
        type="website"
      />
      <Divider />
      <ContactForm isPage />
    </>
  );
};

export default Contact;
