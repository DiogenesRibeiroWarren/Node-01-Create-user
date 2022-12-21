const ListUser = require('../../domain/user/mocks/UserMock')

class AllUsers{

    handle(req, res){
        res.status(200).send(ListUser)
    }

}

module.exports = new AllUsers()