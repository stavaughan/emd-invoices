export const errorHandler = (err, req, res, next) => {
    const error = {
        message: err?.message,
        status: res?.statusCode
    }
    const errorObj = error?.message ? error : err;
    if (res.headersSent) {
        return next(errorObj)
    }
    res.status(res?.statusCode || 500)
    res.send([401, 403].includes(res?.statusCode)
        ? { message: JSON.stringify(errorObj) }
        : { message: 'The server has encountered a situation it does not know how to handle.'
    })
    throw new Error(err)
}
