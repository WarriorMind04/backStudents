const FakeService = require('./data')
class DBSchool {
    static create(type, connectionString){
        return new FakeService();
    }
}

module.exports = DBSchool;