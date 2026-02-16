import jwt from 'jsonwebtoken';


const userAuth = (req, res, next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized' });
    }
    try {
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecoded.id) {
            req.body.userId = tokenDecoded.id;
        }
        else {
            return res.json({ success: false, message: 'Not Authorized' });
        }
        next();    
    } catch (error)  {
        console.log(error);
        res.json({ success: false, message: 'Not Authorized' });
    }
}

export default userAuth;