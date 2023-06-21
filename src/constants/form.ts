enum EmailErrors {
  required = 'Please enter your email',
  regex = 'Please enter valid email',
}

enum FormFields {
  email = 'email',
  number = 'number',
}

const ERROR_MESSAGES = {
  email: EmailErrors,
};

const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export { FormFields, ERROR_MESSAGES, EMAIL_REGEX };
