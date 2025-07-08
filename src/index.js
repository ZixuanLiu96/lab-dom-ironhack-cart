// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price > span").innerHTML;
  const quantity = product.querySelector(".quantity  input").value;
  const subtotal = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotal;
  return subtotal;
}

updateSubtotal(document.querySelector(".product"));

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  let total = 0;
  document.querySelectorAll(".product").forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value").innerHTML = `Total: $${total}`;
}

// ITERATION 4

function removeProduct() {
  // const target = event.currentTarget;
  // console.log("The target in remove is:", target);
  // //... your code goes here

  // window.addEventListener("load", () => {
  //   const btns = document.querySelectorAll(".btn-remove");
  //   btns.forEach((btn) =>
  //     btn.addEventListener("click", () => removeProduct(btn))
  //   );
  // });
  document.querySelector("tbody").addEventListener("click", (e) => {
    console.log(e.target.classList);

    if (e.target.classList.contains("btn-remove")) {
      console.log(11);
      e.target.parentNode.parentNode.innerHTML = "";
    }
  });
}
removeProduct();

// ITERATION 5

function createProduct() {
  //... your code goes here
  document.querySelector("#create").addEventListener("click", () => {
    const productName = document.querySelector("input[type='text']").value;
    // console.log(productName);
    // console.log(document.querySelector(".create-product input[type='number']"));
    const price = document.querySelector(
      ".create-product input[type='number']"
    ).value;
    document.querySelector("tbody").innerHTML += `
        <tr class="product">
          <td class="name">
            <span>${productName}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
    `;
    document.querySelector("input[type='text']").value = "";
    document.querySelector(".create-product input[type='number']").value = "";
  });
}

createProduct();

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
