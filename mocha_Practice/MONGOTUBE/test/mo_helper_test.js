const mongoose =  require('mongoose');
//mongoose.Promise =  global.Promise;      //ES6 - Promise

before( (done) => {
    mongoose.connect("mongodb://localhost/mongotube", {useNewUrlParser: true} )
mongoose.connection
    .once('open', () => {
        // console.log("Connected")
        done(); // (berore runs first) after it say's DONE, the next tests executes
    })
    .on('error', (error) => {
        console.log("Your Error", error)
    });
});

beforeEach(() => {
    //dropping the collections before writing data
    mongoose.connection.collections.students.drop(() => {
        done();
        console.log("students collection was dropped")
    })
})