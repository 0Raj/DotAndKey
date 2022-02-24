function createProductCard(data, parent) {
  data.map((elem) => {
    let mainDiv = document.createElement("div");
    mainDiv.id = "mainDiv";
    let imgDiv = document.createElement("img");
    imgDiv.src = elem.prodImgUrl[0];
    imgDiv.style.cursor = "pointer";
    let saveDiv = document.createElement("div");
    saveDiv.textContent = "SAVE 10%";
    saveDiv.id = "saveDiv";
    let star = document.createElement("i");
    star.setAttribute("class", "fa-solid fa-star");
    let max = 4.0;
    let min = 4.0;
    let value = Math.random() * (max - min + 1) + min;
    value = value.toFixed(1);
    let rating = document.createElement("span");
    rating.textContent = ` ${value}/5 `;
    rating.id = "rating";
    let review = document.createElement("span");
    review.id = "review";
    review.textContent = `(${elem.review})`;
    let nameDiv = document.createElement("div");
    nameDiv.textContent = elem.DispName;
    nameDiv.id = "nameDiv";
    let subNameDiv = document.createElement("div");
    subNameDiv.textContent = elem.dNameSub;
    subNameDiv.id = "subNameDiv";

    let mainPrice = document.createElement("div");
    mainPrice.id = "mainPrice";
    let discount = elem.price - elem.price / 10;
    let priceDiv = document.createElement("div");
    priceDiv.textContent = `RS: ${elem.price} `;
    priceDiv.style.textDecoration = "line-through";
    let discountSpan = document.createElement("div");
    discountSpan.textContent = ` RS: ${discount}`;

    mainPrice.append(priceDiv, discountSpan);

    let cart = document.createElement("button");
    cart.textContent = "ADD TO CART";
    cart.id = "Addcart";

    cart.addEventListener("click", () => {
      localStorage.setItem("productData", JSON.stringify(elem));
      location.href = "productPage.html";
    });

    imgDiv.addEventListener("click", () => {
      localStorage.setItem("productData", JSON.stringify(elem));
      location.href = "productPage.html";
    });
    mainDiv.append(
      imgDiv,
      saveDiv,
      star,
      rating,
      review,
      nameDiv,
      subNameDiv,
      mainPrice,
      cart
    );
    parent.append(mainDiv);
  });
}

function createProductPage(data, parent) {
  data.map((elem) => {
    let topDiv = document.createElement("div");
    topDiv.id = "topDiv";

    let leftDiv = document.createElement("div");
    leftDiv.id = "leftDiv";
    let leftMainImg = document.createElement("img");
    leftMainImg.src = elem.prodImgUrl[0];

    let thumbMain = document.createElement("div");
    thumbMain.id = "thumbMain";

    for (let i = 0; i < elem.prodImgUrl.length; i++) {
      let thumb1 = document.createElement("img");
      thumb1.class = "thumb1";
      thumb1.src = elem.prodImgUrl[i];
      thumbMain.append(thumb1);
      thumb1.addEventListener("click", () => {
        let list = document.querySelectorAll("img");
        for (let j = 0; j < list.length; j++) {
          list[j].style.border = "0px solid black";
        }
        leftMainImg.src = elem.prodImgUrl[i];
        thumb1.style.border = "2px solid black";
      });
    }

    let perksDiv = document.createElement("div");
    perksDiv.id = "perksDiv";
    let headPerks = document.createElement("div");
    headPerks.textContent = "Perks to love";
    headPerks.id = "headPerks";
    let UlDiv = document.createElement("ul");
    UlDiv.id = "UlDiv";

    let firstLi = document.createElement("li");
    firstLi.textContent =
      "Buy Products Worth Rs. 1499 Or More & Pick Your Free 5-in-1 Kit";
    let secLi = document.createElement("li");
    secLi.textContent =
      "Buy Products Worth Rs. 899 Or More & Get A Cica Calming Night Gel - 15ml For Free.";
    let thirdLi = document.createElement("li");
    thirdLi.textContent =
      "Upto 15% Off On Haircare + Free Detangling Brush on All Haircare Combos";
    let fourthLi = document.createElement("li");
    fourthLi.textContent = "Flat 10% Off On Bodycare";
    let fiveLi = document.createElement("li");
    fiveLi.textContent = "Extra 3% Off on Prepaid Orders";
    let sixLi = document.createElement("li");
    sixLi.textContent = "10% Cashback on all orders";

    UlDiv.append(firstLi, secLi, thirdLi, fourthLi, fiveLi, sixLi);
    perksDiv.append(headPerks, UlDiv);
    leftDiv.append(leftMainImg, thumbMain, perksDiv);

    let rigthDiv = document.createElement("div");
    rigthDiv.id = "rigthDiv";
    let rightName = document.createElement("div");
    rightName.id = "rightName";
    rightName.textContent = elem.name;

    let starDiv = document.createElement("i");
    starDiv.id = "starDiv";

    for (let i = 1; i <= 5; i++) {
      let star = document.createElement("i");
      star.setAttribute("class", "fa-solid fa-star");
      starDiv.append(star);
    }
    let review = document.createElement("a");
    review.href = "#";
    review.id = "review";
    review.textContent = `${elem.review} Reviews`;

    let mainPrice = document.createElement("div");
    mainPrice.id = "mainPrice";
    let discount = elem.price - elem.price / 10;
    let priceDiv = document.createElement("div");
    priceDiv.textContent = `RS: ${elem.price} `;
    priceDiv.style.textDecoration = "line-through";
    let discountSpan = document.createElement("div");
    discountSpan.textContent = ` RS: ${discount}`;

    mainPrice.append(priceDiv, discountSpan);

    let tax = document.createElement("div");
    tax.textContent = "Inclusive of All Taxes";
    tax.id = "tax";

    let size = document.createElement("div");
    size.id = "size";
    let sizeDiv = document.createElement("div");
    sizeDiv.id = "sizeDiv";
    if (elem.size != undefined) {
      size.textContent = "SIZE";
      sizeDiv.textContent = `${elem.size} ml`;
    } else {
      sizeDiv.style.border = "0px";
    }

    let addFav = document.createElement("div");
    addFav.id = "addFav";

    let cart = document.createElement("button");
    cart.textContent = "ADD TO CART";
    cart.id = "Addcart";

    let heart = document.createElement("i");
    heart.id = "heart";
    heart.setAttribute("class", "fa-regular fa-heart");
    let count = 1;
    heart.addEventListener("click", (elem) => {
      count++;
      console.log(count);
      if (count % 2 == 0) {
        document
          .querySelector("#heart")
          .setAttribute("class", "fa-solid fa-heart");
        document.querySelector("#heart").style.color = "red";
      } else {
        document
          .querySelector("#heart")
          .setAttribute("class", "fa-regular fa-heart");
        document.querySelector("#heart").style.color = "#3c3c3c";
      }
    });

    let descp = document.createElement("div");
    descp.textContent = elem.discription;
    descp.id = "descp";

    let featureDiv = document.createElement("div");
    featureDiv.id = "featureDiv";
    let featureHead = document.createElement("span");
    featureHead.textContent = "Feel the ";
    let featureHead2 = document.createElement("span");
    featureHead2.textContent = " Love";

    let featureImageDiv = document.createElement("div");
    featureImageDiv.id = "featureImageDiv";
    for (let i = 0; i < 3; i++) {
      let imgSrc = document.createElement("img");
      imgSrc.src = elem.featuresImg[i];
      featureImageDiv.append(imgSrc);
    }
    let fTextDiv = document.createElement("div");
    fTextDiv.id = "fTextDiv";
    for (let i = 0; i < 3; i++) {
      let textSrc = document.createElement("div");
      textSrc.textContent = elem.features[i];
      fTextDiv.append(textSrc);
    }

    featureDiv.append(featureHead, featureHead2);
    addFav.append(cart, heart);
    rigthDiv.append(
      rightName,
      starDiv,
      review,
      mainPrice,
      tax,
      size,
      sizeDiv,
      addFav,
      descp,
      featureDiv,
      featureImageDiv,
      fTextDiv
    );
    topDiv.append(leftDiv, rigthDiv);

    let head2 = document.createElement("div");
    head2.id = "head2";

    let headspn1 = document.createElement("span");
    headspn1.textContent = "Made With ";

    let headspn2 = document.createElement("span");
    headspn2.textContent = " Love";

    head2.append(headspn1, headspn2);

    let banner1 = document.createElement("img");
    banner1.src = elem.promo1;
    banner1.id="banner1"

    let head3 = document.createElement("div");
    head3.id = "head3";

    let headspn3 = document.createElement("span");
    headspn3.textContent = "Slather ";

    let headspn4 = document.createElement("span");
    headspn4.textContent = " Not Slurp";

    head3.append(headspn3, headspn4);

    let banner2 = document.createElement("img");
    banner2.src = elem.promo3;
    banner2.id="banner2"


    parent.append(topDiv, head2, banner1, head3, banner2);
  });
}
export { createProductCard, createProductPage };
