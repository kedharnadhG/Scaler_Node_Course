//schema
const Student = require('../app/student')

const assert = require('assert')

describe('Create records', () => {
    it('create a user in DB', () => {
        //assert(true);
        //assert(false);

        const sam = new Student({name:"Sam"});
        sam.save()
            .then(() => {
                assert(!sam.isNew);   //if it saved, then 'isNew' sets to false, therefore to pass the testcase we need (true) in assert, so we are complimenting it
            })
            .catch((e)=> {
                console.log("error is: " + e)
            })
    })
})





