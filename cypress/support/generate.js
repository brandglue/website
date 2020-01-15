import { build, fake } from 'test-data-bot';

const buildUser = build('User').fields({
  company: fake(f => f.company.companyName()),
  email: fake(f => f.internet.email()),
  name: fake(f => f.name.findName()),
  title: fake(f => f.name.jobTitle()),
  username: fake(f => f.internet.userName()),
});

export { buildUser };
