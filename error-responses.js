'use strict'
const HttpError = (message, status) =>
	({ status, data: message, mimetype: 'text/plain', headers: [] })

module.exports =
{	method_not_allowed: HttpError('Method not allowed', 405),
	not_found: HttpError('Not found', 404),
	bad_request: (msg='Bad request') => HttpError(msg, 400), }
