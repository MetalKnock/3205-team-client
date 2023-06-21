enum EmailErrors {
  required = 'Please enter your email',
  regex = 'Please enter valid email',
}

enum NumberErrors {
  regex = 'Please enter valid number or leave this field blank',
}

enum FormFields {
  email = '*Email',
  number = 'Number',
}

const ERROR_MESSAGES = {
  email: EmailErrors,
  number: NumberErrors,
};

const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const NUMBER_REGEX = /^\d{2}-\d{2}-\d{2}$/;

export { FormFields, ERROR_MESSAGES, EMAIL_REGEX, NUMBER_REGEX };
