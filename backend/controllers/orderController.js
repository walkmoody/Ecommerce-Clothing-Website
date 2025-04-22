import orderModel from "../models/orderModel.js"
import userModel from "../models/userModels.js"


const placeOrder = async (req,res) => {
    try {
        console.log("test")
        const {userId, items, amount, address} = req.body
        
        const orderData = {
            userId,
            items,
            address,
            amount, 
            paymentMethod:'temp',
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.json({success:true,message:"Order Placed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}
// Placing orders using stripe method
const placeOrderStripe = async(req,res) =>{
   
}

// Placing orders using razorpay method
const placeOrderRazorpay = async(req,res) =>{
    
}

//ADD APPLE PAY

// all order dates for Admin panel
const allOrders = async(req, res) =>{
    console.log("allOrder")
    try{
        const orders = await orderModel.find({})
        res.json({success:true, orders})
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }

}

// user roder data for front end
const userOrders = async(req, res) =>{
    try{

        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true, orders})
        

    } catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// update order status from admin panel
const updateStatus = async(req, res) =>{

}

export {placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus}
