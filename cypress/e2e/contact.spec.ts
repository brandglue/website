import { buildUser } from '../support/generate';

describe('contact us form', () => {
  it('can submit the form', () => {
    const user = buildUser();

    cy.visit('/')
      .findByTestId('contact')
      .findByLabelText(/name/i)
      .type(user.name)
      .findByLabelText(/email/i)
      .type(user.email)
      .findByLabelText(/company/i)
      .type(user.company)
      .findByLabelText(/title/i)
      .type(user.title)
      .findByLabelText(/message/i)
      .type('Test Message')
      .findByText(/request assessment/i)
      .click();
  });
});
