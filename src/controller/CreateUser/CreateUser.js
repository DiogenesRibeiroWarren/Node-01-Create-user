/* const listUser = require('../../domain/user/mocks/UserMock') */

class CreateNewUser {

    create(req, res) {
        
        try{
            
            const userData = req.body

            if (userData.email != userData.emailConfirmation)
                return res.status(400).send('The emails do not match')
                
            listUser.push(userData)

            return res.status(201).send('OK')
            
        }catch (e){
            console.log(e)
        }
    }

}

module.exports = new CreateNewUser()