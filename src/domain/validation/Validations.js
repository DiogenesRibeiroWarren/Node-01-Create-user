const { body } = require('express-validator')

class UserValidator {

    validation() {
        return [

            body('fullName')
                .isString()
                .withMessage('Invalid name'),

            body('email')
                .isString()
                .isEmail()
                .withMessage('Invalid email'),

            body('emailConfirmation')
                .isString()
                .withMessage('Invalid email'),

            body('cpf')
                .isString()
                .withMessage('Invalid CPF'),

            body('cellphone')
                .isString()
                .withMessage('Invalid cellphone'),

            body('birthdate')
                .isDate()
                .default(() => {
                    new Date.parse()
                })
                .withMessage('Invalid date'),

            body('emailSms')
                .isBoolean(),

            body('whatsapp')
                .isBoolean()    

        ]
    }

    secondStepValidation(){

        return[

            body('country')
                .isString()
                .withMessage('Invalid country'),
            
            body('city')
                .isString()
                .withMessage('Invalid city'),
            
            body('postalCode')
                .isString()
                .withMessage('Invalid postal code'),
            
            body('address')
                .isString()
                .withMessage('Invalid address'),

            body('number')
                .isNumeric()
                .withMessage('Invalid number')

        ]

    }

}


module.exports = new UserValidator()