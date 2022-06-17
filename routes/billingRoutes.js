const Stripe = require('stripe')
const requireLogin = require("../middlewares/requireLogin")

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req,res) => {

        const stripe = Stripe(process.env.stripesecretkey)
        const charge = await stripe.charges.create({
            ammount: 500,
            currency: "usd",
            description: '$5 for 5 credits',
            source:req.body.id, 
        })
        
        req.user.credits += 5
        const user = await req.user.save()



        res.send(user)
    })
}

