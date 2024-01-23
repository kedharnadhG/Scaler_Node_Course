function myMiddleware(req, res, next){
    console.log('I am Custom MiddleWare')
    next()
}

module.exports = myMiddleware