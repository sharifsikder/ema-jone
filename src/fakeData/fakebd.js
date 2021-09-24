
const getDb = () => localStorage.getItem('shopping_cart')

const addToDb = id =>{

const exists =getDb()
let shopping_cart = {};
if(!exists){
    shopping_cart[id] = 1;
    
}
else{
    shopping_cart = JSON.parse(exists)
    if(shopping_cart[id]){
        const newCount = shopping_cart[id] + 1;
        shopping_cart[id]=newCount;
    }
    else{
        shopping_cart[id]=1;
    }
}

updateDb(shopping_cart)
}




const updateDb = cart => {

    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}



// remove storage
const removeFromDb = id => {

    const exists = getDb();
    if(!exists){

    }
    else{

       const shopping_cart = JSON.parse(exists);
       delete shopping_cart[id];
       updateDb(shopping_cart)
    }
}
export{addToDb, removeFromDb as deleteFromdb}






//add storage
// const addToDb = (id) => {

//     const exists = localStorage.getItem('shopping_cart')
//     let shopping_cart = {}
//     if(!exists){
//         shopping_cart[id] = 1;
//     }
//     else{
//          shopping_cart = JSON.parse(exists);
//         if(shopping_cart[id]){
//             const newcount = shopping_cart[id] + 1;
//             shopping_cart[id] = newcount;
//         }

//         else{
//             shopping_cart[id] = 1;
//         }
//     }
//     localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))
//     // updateDb(shopping_cart)
// }

// //Remove storage
// const removeFromDb = (id) => {
//     const exists = localStorage.getItem('shopping_cart')
  
//     if(!exists){

//     }
//     else{
//       const  shopping_cart = JSON.parse(exists);
//         delete shopping_cart[id];
//         localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))
//         // updateDb(shopping_cart)
//     }   
// }

// export{addToDb, removeFromDb as deleteFromdb}