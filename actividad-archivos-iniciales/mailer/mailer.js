const nodemailer = require('nodemailer')

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'arnaldo.nader99@ethereal.email',
        pass: '62CJnwzkafb8kjtG9n'
    }
}

module.exports = nodemailer.createTransport(mailConfig)
