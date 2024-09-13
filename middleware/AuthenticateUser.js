import 'dotenv/config'
import jwt from 'jsonwebtoken'
const { sign, verify } = jwt

function createToken(user) {
    return sign(
        {
            emailAdd: user.emailAdd,
            userPass: user.userPass
        },
        process.env.secret_key,
        {
            expiresIn: '1h'
        }
    )
}
function verifyAToken(req, res, next) {
    const token = req?.headers["authorization"]
    if (token) {
        if (verify(token, process.env.secret_key)) {
            next()
        } else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials."
            })
        }
    } else {
        res?.json({
            status: 401,
            msg: "Please login."
        })
    }
}

export {
    createToken, verifyAToken
}