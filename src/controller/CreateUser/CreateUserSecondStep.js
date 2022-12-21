const listUser = require('../../domain/user/mocks/UserMock')

class CreateUserSecondStep {

    finalStep(req, res) {

        try{

            const secondStepDatas = req.body
    
            listUser[listUser.length -1]["location"] = secondStepDatas

            return res.status(201).send('User created successfully')

        }catch(e){
            console.log(e)
        }

    }

}

module.exports = new CreateUserSecondStep()