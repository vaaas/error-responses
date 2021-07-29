'use strict'
module.exports = {
    method_not_allowed: () => ({
        status: 405,
        mimetype: 'text/plain',
        data: 'Method not allowed',
        headers: []
    }),

    not_found: () => ({
        status: 404,
        mimetype: 'text/plain',
        data: 'Not found',
        headers: []
    }),

    bad_request: (msg='Bad request') => ({
        status: 400,
        mimetype: 'text/plain',
        data: msg,
        headers: []
    }),
}
