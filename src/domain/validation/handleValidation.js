const { validationResult } = require('express-validator')

class HandleValidation {

    validate(req, res, next) {

        const errors = validationResult(req)

        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array()[0].msg })

        next()

    }

}

module.exports = new HandleValidation()