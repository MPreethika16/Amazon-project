function Cart(localStoragekey){
    const cart={
    cartItems:undefined,


     loadLocalStorage:function(){
        this.cartItems=JSON.parse(localStorage.getItem(localStoragekey));
        if(!cart.cartItems){
        this.cartItems=[{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity:2,
            deliveryOptionsId:'1'
        },
        {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity:1,
            deliveryOptionsId:'2'
        }];
        
        }
    },

    saveToStorage:function (){
            localStorage.setItem(localStoragekey,JSON.stringify(this.cartItems));
    },

    addToCart:function (productId){
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
    });
  
  if (matchingItem) {
    matchingItem.quantity +=1;
  } else {
    this.cartItems.push({
      productId,
      quantity:1,
      deliveryOptionsId:'1'
    });
  }
  this.saveToStorage();
  },


   removeFromCart:function(productId){
  const newCart=[];
   this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId!=productId){
            newCart.push(cartItem);
        }
  });

  this.cartItems=newCart;
  this.saveToStorage();
},

 calculateCartQuantity:function  (){
  let cartQuantity = 0;
  this.cartItems.forEach((cartItem) => {
   cartQuantity += cartItem.quantity;
 });
 return cartQuantity;
},

 updateQuantity:function(productId,newQuantity){
  let matchingItem;

  this.cartItems.forEach((cartItem)=>{
    if(productId===cartItem.productId){
      matchingItem=cartItem;
    }
  });
  matchingItem.quantity=newQuantity;
  document.querySelector('.js-cart-quantity-header').textContent=newQuantity;
  this.saveToStorage();
}


};

return cart;

}

const cart=Cart('cart-oop');
const businessCart=Cart('cart-business');


cart.loadLocalStorage();
businessCart.loadLocalStorage();
console.log(cart);
console.log(businessCart);



export function updateDeliveryOption(productId,deliveryOptionsId){
let matchingItem;
    cart.forEach((cartItem)=>{
      if(productId===cartItem.productId){
        matchingItem=cartItem;
      }

    });
    matchingItem.deliveryOptionsId=deliveryOptionsId;

    saveToStorage();
}