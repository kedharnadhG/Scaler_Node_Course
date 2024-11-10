//schema
const Student = require('../app/student')
const assert = require('assert')


// All update Tests
describe( "Update Tests" ,() => {
    let updater;
    beforeEach((done) => {
        updater = new Student({name: "Updater"});
        updater.save()
            .then(()=> done());
    });

    it("Set n save test", () => {
        updater.set("name", "UpUpdater");
        updater.save()
            .then(() => Student.find({}) )   //to get all the values pass {Empty_Braces}
            .then(students => {
                assert(students[0].name !== "Updater");
                // assert(students[0].name === "UpUpdater");
            })
    })
})

