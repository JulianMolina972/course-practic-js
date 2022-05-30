
//Cupones de descuentos


const coupons = [
    {
        name: "Ultra",
        discount: 15,
    },
    {
        name: "Mega",
        discount: 30,
    },
    {
        name: "Super",
        discount: 45,
    },

];


function calculatePriceWithDiscount(originalPrice, discount){
    return (originalPrice * (100 - discount)) / 100;
}

function onClickButtonPriceCoupon() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputCoupon= document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    

    const isCouponValueValid = function (coupon) {
        console.log(coupon.name);
        console.log(couponValue);
        return coupon.name === couponValue;

        
    };

    const userCoupon = coupons.find(isCouponValueValid)
    
    if(!userCoupon) {
        alert(`El cupón ${couponValue} no es válido`);
    } else {
        const discount = userCoupon.discount;
        // const inputPrice = document.getElementById("InputPrice");
        // const priceValue = inputPrice.value;
    
        const discountedPrice = calculatePriceWithDiscount(priceValue, discount);
    
        const resultPrice = document.getElementById("ResultPrice");
        resultPrice.innerText = "El precio con descuento es: $" + discountedPrice;
    }
}





//Creamos la función para validar el cupón










// console.log({
//     originalPrice,
//     discount,
//     porcentagePriceWithDiscount,
//     discountedPrice
// });