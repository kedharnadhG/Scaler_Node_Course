//schema
const Student = require('../app/student')
const assert = require('assert')


// All Delete Tests

describe("Delete Tests",  () => {
    let deleter;

    beforeEach((done)=> {
        deleter = new Student({name: "Deleter"});
        deleter.save()
            .then( () => done());
    });

    it("A delete test for deleter", (done) => {
        Student.findByIdAndDelete(deleter._id)
            .then(()=>  Student.findOne({name:"Deleter"}))  //this return value is passed to next "then", (the callback code should be in one-line)
            .then((student) => {
                assert(student === null);
                done();
            });
    });
});



