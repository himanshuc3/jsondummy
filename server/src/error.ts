setTimeout(() => {
    throw new ReferenceError('Just messing around')
}, 5000)

process.on("uncaughtException", () => {
    console.log("Logger, my friend")
})