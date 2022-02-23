function createProductCard(data,parent){
    data.map((elem)=>{
        let mainDiv = document.createElement("div");
        mainDiv.id="mainDiv";
        let imgDiv = document.createElement("img");
        imgDiv.src=elem.prodImgUrl[0];
        let saveDiv = document.createElement("div");
        saveDiv.textContent = "SAVE 10%";
        saveDiv.id="saveDiv";
        let star =  document.createElement("i");
        star.setAttribute("class","fa-solid fa-star")
        let max = 4.0;
        let min = 4.0;
        let value = Math.random() * (max - min + 1) + min;
        value = value.toFixed(1);
        let rating =  document.createElement("span");
        rating.textContent = ` ${value}/5 `;
        rating.id ="rating";
        let review =  document.createElement("span");
        review.id = "review";
        review.textContent = `(${elem.review})`
        let nameDiv = document.createElement("div");
        nameDiv.textContent = elem.DispName;
        nameDiv.id = "nameDiv";
        let subNameDiv = document.createElement("div");
        subNameDiv.textContent = elem.dNameSub;
        subNameDiv.id = "subNameDiv";

        let mainPrice = document.createElement("div");
        mainPrice.id="mainPrice";
        let discount = elem.price-(elem.price/10);
        let priceDiv = document.createElement("div");
        priceDiv.textContent = `RS: ${elem.price} `;
        priceDiv.style.textDecoration = "line-through"
        let discountSpan = document.createElement("div");
        discountSpan.textContent = ` RS: ${discount}`;

        mainPrice.append(priceDiv,discountSpan)


        let cart = document.createElement("button");
        cart.textContent = "ADD TO CART";
        cart.id = "Addcart";


        mainDiv.append(imgDiv,saveDiv,star,rating,review,nameDiv,subNameDiv,mainPrice,cart)
        parent.append(mainDiv);
    });
}


export {createProductCard};