const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("./catchAsyncErrors");
const User = require("../models/user");
const Shop = require("../models/shop");

exports.isAuthenticated = catchAsyncErrors(async(req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please login to continue", 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return next(new ErrorHandler("User not found with this token", 401));
        }
        next();
    } catch (error) {
        return next(new ErrorHandler("Invalid or expired token", 401));
    }

});

exports.isSeller = catchAsyncErrors(async(req, res, next) => {
    const { seller_token } = req.cookies;

    if (!seller_token) {
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(seller_token, process.env.JWT_SECRET_KEY)

    req.seller = await Shop.findById(decoded.id);

    next();
})