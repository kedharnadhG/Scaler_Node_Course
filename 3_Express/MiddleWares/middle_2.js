function myMiddleware2(req, res, next){
    console.log('I am the Second MiddleWare')
    next()
}

module.exports = myMiddleware2