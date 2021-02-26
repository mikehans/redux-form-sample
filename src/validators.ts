export const alphaOnly = (value: string) => value && !/^[a-z]+$/i.test(value) ? 'Characters only' : undefined;

const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more`: undefined);
export const minLength3 = minLength(3);
export const required = value => (value || typeof value === 'number' ? undefined : 'Required')
