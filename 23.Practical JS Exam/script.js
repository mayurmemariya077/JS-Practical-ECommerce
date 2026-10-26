




let products = [
  {
    id: 1,
    name: "Nike Sports Shoes",
    price: 6499,
    image: "https://m.media-amazon.com/images/I/61d6jEjOUNL._AC_UY1000_.jpg",
  },
  {
    id: 2,
    name: "Men's Casual Shirt",
    price: 1250,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJIo_zcV1aMa0Ei4x3P7rWkzLsXZejMmpUeBG_ysymW75D0e6eRDWfOQ&s=10",
  },
  {
    id: 3,
    name: "Franci's Silver Sunglasses",
    price: 12950,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTm0E1KlDRCfvuXwsGJkol1SPUdFPuAZDcyDkjgLvsyjtbCsJ7BVzTf0&s=10",
  },
  {
    id: 4,
    name: "Samsung Smart Watch",
    price: 25999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfTWtLvYfynGZ_V8qNnPG7qVvbA33XMgnVDOisX2c73LYENu2lgo9vFY&s=10",
  },
  {
    id: 5,
    name: "Play Station 5",
    price: 54999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyxVrV7HEJ4dquq3dh-JSl6XCpviqY-aotLBcyrBjgF1V3gQFBzIhNEl0&s=10",
  },
  {
    id: 6,
    name: "Grand Theft Auto V",
    price: 2500,
    image: "https://i.ebayimg.com/images/g/jAwAAOSwa8hkm6nR/s-l1200.jpg",
  },
  {
    id: 7,
    name: "Luxury Perfume",
    price: 65000,
    image: "https://img.magnific.com/premium-photo/luxury-perfume-mockup-with-golden-texture_126460-566.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 8,
    name: "Casual Korean jacket",
    price: 1899,
    image: "https://t3.ftcdn.net/jpg/02/84/96/40/360_F_284964033_FHsK9tZPqkcF1HnSVd53I62VVy7T838D.jpg",
  },
  {
    id: 9,
    name: "Gucci Luxury Bag",
    price: 8500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqf3Gqxw7pXNwTiVOksyOnB9p2tOFxAqHvuE6HrGXs8Yo_iJ0sZHiZEC8&s=10",
  },
  {
    id: 10,
    name: "REDTAPE Premium Wallet ",
    price: 7999,
    image: "https://redtape.com/cdn/shop/files/1_e212cc40-a4fd-4021-a9b7-c7a5ed3a7194.jpg?v=1766559695",
  },
  {
    id: 11,
    name: "Boat Airdopes 301",
    price: 1999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbOhwgkXKDljqJERudSNCLGEu2j6SvxqNAM9r2vUZwQDnJWo5DdFjSWMj&s=10",
  },
  {
    id: 12,
    name: "Iphone Duo 512gb",
    price: 359999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ee-5cr4ukTZH1jpwy1RJIKR8tB6NFqM2N0EkxBSIWOsq_yP7vUSSBd62&s=10",
  },
];

// localStorage.clear();

let localCartItem = JSON.parse(localStorage.getItem("cartList")) || [];

console.log("localCartItem", localCartItem);

function showProduct() {
  const productList = document.getElementById("product-list");

  productList.innerHTML = "";

  products.forEach((p) => {
    productList.innerHTML += `<div class="col-md-4  mt-3">
        
<div class="card product-card" >
  <img src="${p.image}" class="card-img-top" alt="${p.name}">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text"> ₹${p.price}</p>
    <button  class="btn btn-primary" onclick="addToCart(${p.id})" >add to cart</button>
    <button  class="btn btn-warning" onclick="updateProduct(${p.id})" >update</button>
    <button  class="btn btn-danger" onclick="deleteProduct(${p.id})" >Delete</button>
  </div>
</div>
        
        
        </div>`;
  });
}

showProduct();

localStorage

const data = {
  name: "iphone 18 pro max",
  price: 189999,
  qty: 1,
};

// setItem,getItem,

localStorage.setItem("data", JSON.stringify(data));

// getItem

const productData = JSON.parse(localStorage.getItem("data"));

console.log("product data", productData);

// document.getElementById("name").innerHTML = productData.name;

const nameElement = document.getElementById("name");

if (nameElement) {
  nameElement.innerHTML = productData.name;
}


function addToCart(id) {

  let product = localCartItem.find((p) => p.id === id);

  console.log(" already Product", product);

  if (product) {
    product.qty++;

    console.log("qty increased");
  } else {
     product = products.find((p) => p.id === id);

    console.log("new product", product);

    localCartItem.push({...product, qty: 1 });

    console.log("localCartItem", localCartItem);

    localStorage.setItem("cartList", JSON.stringify(localCartItem));

    alert("product added");
  }
}

function addToCart(id) {
  try {
    let productItem = localCartItem.find((p) => p.id === id);

    console.log("already product", productItem);

    if (productItem) {
      productItem.qty++;
    } else {
      productItem = products.find((p) => p.id === id);

      localCartItem.push({ ...productItem, qty: 1 });
    }

    updateLocalStorageData();

    alert("item added");
  } catch (error) {
    console.log(error);
  }
}

function updateLocalStorageData() {
  localStorage.setItem("cartList", JSON.stringify(localCartItem));
  showCartItems();
  total();
}

function showCartModal() {
  const cartModal = document.getElementById("cartModal");

  const modal = new bootstrap.Modal(cartModal);

  modal.show();

  updateLocalStorageData();

  showCartItems();
}

function showCartItems() {
  try {
    const cartTable = document.getElementById("cartTable");

    cartTable.innerHTML = "";

    localCartItem.forEach((p) => {
      cartTable.innerHTML += `
      <tr>
      <td>${p.id}</td>
      <td>  <img  src="${p.image}" class="img-fluid" height="40px" width="40px" /> </td>
      <td>${p.name}</td>
      <td>₹${p.price * p.qty}</td>
      <td>
      
      
      <div class="d-flex gap-2 align-items-center justify-content-center" >

      <button  class="btn btn-outline-success" onclick="increase(${p.id})" >+</button>
      <h4>${p.qty}</h4>
         <button  class="btn btn-outline-danger" onclick="decrease(${p.id})" >-</button>
      </div>
      
      </td>

      <td> <button class="btn btn-danger" onclick="remove(${p.id})" >remove</button> </td>
      </tr>

      `;
    });
  } catch (error) {
    console.log(error);
  }
}

function increase(id) {
  try {
    const product = localCartItem.find((p) => p.id === id);

    if (product) {
      product.qty++;
    }

    updateLocalStorageData();
  } catch (error) {
    console.log(error);
  }
}

function decrease(id) {
  try {
    const product = localCartItem.find((p) => p.id === id);

    if (product) {
      product.qty--;
    }

    if (product.qty === 0) {
      localCartItem = localCartItem.filter((p) => p.id !== id);
    }
    updateLocalStorageData();
  } catch (error) {
    console.log(error);
  }
}

function remove(id) {
  try {
    localCartItem = localCartItem.filter((p) => p.id !== id);
    updateLocalStorageData();
  } catch (error) {
    console.log(error);
  }
}

function total() {
  const total = document.getElementById("total");

  total.innerHTML = "";

  const totalAmount = localCartItem.reduce((acc, curr) => {
    return (acc += curr.price * curr.qty);
  }, 0);

  total.innerHTML = `₹ ${totalAmount}`;

  console.log("total amount", totalAmount);
}

function checkOut() {
  try {
    if (localCartItem.length === 0) {
      return alert("your cart is empty please add item to checkout");
    }

    alert("your order placed successfully");

    localCartItem = [];

    updateLocalStorageData();

    const cartModal = document.getElementById("cartModal");

    const modal = new bootstrap.Modal(cartModal);

    modal.hide();
  } catch (error) {
    console.log(error);
  }
}

function addProductModalShow() {
  const addProductModal = document.getElementById("addProductModal");

  const modal = new bootstrap.Modal(addProductModal);

  modal.show();
}

document.getElementById("addProductModal").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("ProductName").value.trim();
  const price = document.getElementById("ProductPrice").value.trim();
  const image = document.getElementById("ProductImage").value.trim();

  if (!name || !price || !image) {
    alert("product detail required");
  }

  const newProduct = {
    id: new Date().getTime(),
    name,
    price,
    image,
  };

  products.push({ ...newProduct });

  console.log("all products", products);

  alert("product added successfully");

  showProduct();
});

function deleteProduct(id) {
  const product = products.find((p) => p.id === id);

  if (!product) {
    alert("product not found");
  }

  products = products.filter((p) => p.id !== id);

  alert("product deleted");

  showProduct();
}

function updateProduct(id) {
  try {
    const updateProductModal = document.getElementById("updateProductModal");

    const modal = new bootstrap.Modal(updateProductModal);

    modal.show();

    const product = products.find((p) => p.id === id);

    if (!product) {
      alert("product not found");
    }

    document.getElementById("updateProductName").value = product.name;
    document.getElementById("updateProductPrice").value = product.price;
    document.getElementById("updateProductImage").value = product.image;

    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      alert("product not found");
    }

    const form = document.getElementById("updateProductForm");

    form.onsubmit = function (e) {
      e.preventDefault();

      const name = document.getElementById("updateProductName").value.trim();
      const price = document.getElementById("updateProductPrice").value.trim();
      const image = document.getElementById("updateProductImage").value.trim();

      products[index] = {
        ...products[index],
        name,
        price,
        image,
      };

      alert("product detail updated");

      modal.hide()

      showProduct();
    };
  } catch (error) {}
}