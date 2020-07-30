import React, { FC } from 'react';
import { FluidObject } from 'gatsby-image';
import { kebabCase } from 'lodash-es';

import { Contact, Hero } from '@components/common';
import { Box, Divider, H1, Image, NavLink, P } from '@components/core';
import { useCaseStudyLogos } from '@hooks/useCaseStudyLogos';
import { rhythm } from '@theme/globalStyles';
import { styled } from '@theme/styled';

interface ICaseStudyItems {
  image: FluidObject;
  company: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

export const CaseStudies: FC = () => {
  const logos = useCaseStudyLogos();

  const caseStudyItems: ICaseStudyItems[] = [
    {
      image: logos?.quicken?.childImageSharp?.fluid as FluidObject,
      company: 'Quicken',
      title: 'How we helped Quicken attract the right audience',
      description:
        'Quicken approached us with a desire to grow their Facebook presence. They wanted to go about growing their following with a Sweepstakes competition. The growth had to be cost-eﬀective, and the inﬂux of new fans had to hit targeted personas.',
      linkText: 'Check out the Case Study',
      link: '/case-studies/quicken',
    },
    {
      image: logos?.eloqua?.childImageSharp?.fluid as FluidObject,
      company: 'Eloqua',
      title: "How we helped grow Eloqua's Facebook community by 2,500%.",
      description: 'TBD',
      linkText: 'Check out the Case Study',
      link: '/case-studies/eloqua',
    },
    {
      image: logos?.intuit?.childImageSharp?.fluid as FluidObject,
      company: 'Intuit Accountants',
      title:
        'How we helped Inuit Accountants get the right audience at the right price',
      description: 'TBD',
      linkText: 'Check out the Case Study',
      link: '/case-studies/intuit-accountants',
    },
    {
      image: logos?.moveFree?.childImageSharp?.fluid as FluidObject,
      company: 'Move Free',
      title: 'How we helped Move Free grow a targeted social following',
      description: 'TBD',
      linkText: 'Check out the Case Study',
      link: '/case-studies/move-free',
    },
    {
      image: logos?.jacksonKayak?.childImageSharp?.fluid as FluidObject,
      company: 'Jackson Kayak',
      title:
        'How we helped Jackson Kayak navigate the rapidly changing waters of social media',
      description: 'TBD',
      linkText: 'Check out the Case Study',
      link: '/case-studies/jackson-kayak',
    },
    {
      image: logos?.good?.childImageSharp?.fluid as FluidObject,
      company: 'Good',
      title: 'How we drove Facebook reach and website traffic for Good',
      description: 'TBD',
      linkText: 'Check out the Case Study',
      link: '/case-studies/good',
    },
    {
      image: logos?.pgi?.childImageSharp?.fluid as FluidObject,
      company: 'PGI',
      title: 'Howe we drove trial sign-ups for PGI from social media',
      description: 'TBD',
      linkText: 'Check out the Case Study',
      link: '/case-studies/pgi',
    },
  ];

  return (
    <>
      <Hero />
      <Box variant="section">
        <H1>See how we&apos;ve helped our clients.</H1>
        <P>
          From developing social strategies to event social management, we’ve
          done a lot. But don’t take our word for it, check out the case studies
          below.
        </P>
        <Grid>
          {caseStudyItems.map((item) => {
            return (
              <GridItem key={item.company}>
                <GridImage variant="flexItem">
                  <Image alt={kebabCase(item.company)} fluid={item.image} />
                </GridImage>
                <GridContent variant="flexItem">
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                  <Link to={item.link}>{item.linkText}</Link>
                </GridContent>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
      <Divider />
      <Contact />
    </>
  );
};

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 100px;
  margin-bottom: ${rhythm(1)};
`;

const GridItem = styled(Box)`
  display: flex;
`;

const GridImage = styled(Box)`
  flex-basis: 30%;
  flex-grow: 0;
  margin-right: 2em;
`;

const GridContent = styled(Box)`
  flex-basis: 70%;
`;

const Title = styled.h3``;

const Description = styled.div``;

const Link = styled(NavLink)``;

export default CaseStudies;
