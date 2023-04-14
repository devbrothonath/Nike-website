const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "navy",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "Chartreuse",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const choosenProductImg = document.querySelector(".productImg");
const choosenProductTitle = document.querySelector(".productTitle");
const choosenProductPrice = document.querySelector(".productPrice");
const choosenShoeColor = document.querySelectorAll(".shoeColor");
console.log(choosenShoeColor);
const choosenShoeSize1 = document.querySelector(".shoeSize1");
const choosenShoeSize2 = document.querySelector(".shoeSize2");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct = products[index];

    // change the texts of choosen products
    choosenProductImg.src = choosenProduct.colors[0].img;
    choosenProductTitle.textContent = choosenProduct.title;
    choosenProductPrice.textContent = "$" + choosenProduct.price;

    // assigning new colors
    choosenShoeColor.forEach((shoeColor, index) => {
      shoeColor.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

// chooses the img based on shoeColor
choosenShoeColor.forEach((shoeColor, index) => {
  shoeColor.addEventListener("click", () => {
    choosenProductImg.src = choosenProduct.colors[index].img;
  });
});

var isClicked1 = false;
choosenShoeSize1.addEventListener("click", ()=>{
    isClicked1 = !isClicked1;
    choosenShoeSize1.style.backgroundColor = (isClicked1 == true) ? "black" : "white"
    choosenShoeSize1.style.color = (isClicked1 == true) ? "white" : "black"
})
var isClicked2 = false;
choosenShoeSize2.addEventListener("click", ()=>{
    isClicked2 = !isClicked2;
    choosenShoeSize2.style.backgroundColor = (isClicked2 == true) ? "black" : "white"
    choosenShoeSize2.style.color = (isClicked2 == true) ? "white" : "black"
})

// changes the style of button based on shoe size clicked
// choosenShoeSize.forEach((shoeSize) => {
//   shoeSize.addEventListener("click", (e) => {
//     const shoestyle = e.currentTarget;
//     choosenShoeSize.forEach((item) => {
//       if (item !== shoestyle) {
//         item.classList.remove(style="color: black; background-color: white");
//         // item.classList.style.color.remove("black");
//       }
//     });
//     item.classList.toggle(style="color: white; background-color: black");
//     // item.classList.style.color.toggle("white");
//   });
// });

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
