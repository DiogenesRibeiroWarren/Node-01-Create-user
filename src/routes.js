const { Router } = require('express')

const userValidator = require('./domain/validation/Validations')
const validateError = require('./domain/validation/handleValidation')

const allUsers = require('./controller/ListUsers/ListUsers')
const createNewUser = require('./controller/CreateUser/CreateUser')
const createNewUserSecondStep = require('./controller/CreateUser/CreateUserSecondStep')

const router = Router()
const errorsMiddleware = validateError.validate

router.get('/customer', allUsers.handle)
router.post('/create-user-first-step', userValidator.validation(), errorsMiddleware, createNewUser.create)
router.post('/create-user-second-step', userValidator.secondStepValidation(), errorsMiddleware, createNewUserSecondStep.finalStep)

module.exports = router 