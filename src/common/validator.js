export const LOGIN_VALIDATOR = {
    customerId: data => (typeof(data) === 'number'),
    password: data => (typeof(data) === 'string'),
}