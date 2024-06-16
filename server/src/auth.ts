import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'



// Converting object to string (variable length
// dependant on object size) -- serialization
export const createJWT = (user) => {
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET)
    return token
}

export const authorize = (req, res, next) => {
    // explicitly passed in authorization header but 
    // could be set implicitly in cookies
    const bearer = req.headers.authorization

    if (!bearer || !(bearer.split(' ')[1])) {
        res.status(401)
        return res.send("Not authorized")

    }
    const token = bearer.split(' ')[1]
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()

    } catch (err) {
        console.error(err)
        res.status(401)
        return res.json({ message: "Not valid token" })
    }
}


export const hashPassword = (password) => {
    return bcrypt.hash(password, 5)
}

export const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash)
}