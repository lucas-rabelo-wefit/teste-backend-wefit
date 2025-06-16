export const emailValidation = (email: string) => {
  const [ , domain ] = email.split('@');

  const emailHasDomain = domain;
  if(!emailHasDomain) {
    return false;
  }

  return Boolean(email.split('@').length === 2);
};