$(document).foundation();

// GLOBAL VARIABLES
let login = false;
let departments = [];
let cart = {};
let transaction_code = "";
let user_id = "";
let products = {};
let final_sub_total=0;
let final_hst = 0;
let final_total = 0;

let loginBtn = document.querySelector("#login-btn");
let createAccountBtn = document.querySelector("#createAccount-btn");
let cancelBtn = document.querySelector("#cancel-btn");
document.querySelector("#accoutName").innerText = "Account";

// ****** PAGE SHOW FUNCTIONS ****** //

// * Home page
function getSplash() {
    destroyDepartmentSlider();
    destroyDealsSlider();
    destroyHeroSlider(); 

    $(".hideAll").hide();
    $(window).scrollTop(0);
    $(".splash-container").show();

    // Slider Initialization
    initializeHeroSlider(); 
    initializeDepartmentSlider();
    initializeDealsSlider(); 
}

// * Main Page
function getDepartment(id) {
    $(".hideAll").hide();
  
    let getDepartment = $.ajax({
        url: "./services/get_products_by_department.php",
        type: "POST",
        data: {
            department_id: id
        },
        dataType: "json"
    });
  
    getDepartment.fail(function (jqXHR, textStatus) {
        alert("Something went Wrong! (getDepartment)" +
            textStatus);
    });
    
    // * Getting Department Products
    getDepartment.done(function (data) {
        let product = ``;
        if (data.error.id == "0") {
            $.each(data.products, function (i, item) {
            let id = item.id;
            let upc = item.upc;
            let brand = item.brand;
            let product_name = item.product_name;
            let product_description = item.product_description;
            let avg_price = item.avg_price;
            let department_name = item.department_name;
            let image_path = item.image_path;
            let shortDescription =  jQuery. trim(product_description). substring(0, 100) ;
            let total_stars = [];
            let stars = item.stars;
            for(let i = 1; i<=stars; i++){
                each_stars = `<i class="fas fa-star"></i>`
                total_stars.push(each_stars);
            }
            let all_stars = total_stars.join('');
            product += `<div class="cell large-3 medium-4 small-12 item-2">
                            <div>
                                <div class="main-product-image">
                                    <img src="${image_path}" alt="">
                                </div>
                                <p class="brand-name">${brand}</p>
                                <h5>${product_name}</h5>
                                <p class="productInfo">
                                ${shortDescription}...
                                </p>
                                <div class="productDetails">
                                <p class="cost">$${avg_price}</p>
                                <div class="main-stars">
                                    ${all_stars}
                                </div>
                                </div>
                            </div>
                            <div>
                            <div class="main-cart-btns">
                                <div class="cart-items-btns">
                                    <button class="do-minus" data-id="${id}">-</button>
                                    <p id="quantity_${id}" class="quantity">1</p>
                                    <button class="do-plus" data-id="${id}">+</button>
                                </div>
                                <button class="add do-add" data-id="${id}">Add to cart</button>
                                </div>
                            </div>
                        </div>`
                        
                        $(".department-name").html(department_name);
            });
        }
        $(".breadcrumbs").html(`   <li class="go-splash">Home</li>
                                    <li>Department</li>
                                    <li> ${data.department_search}</li>`);
        $(".product-container").html(product);
        $(window).scrollTop(0);
        $(".main-container").show();
    });
}

// * Checkout Page
function getCheckout() {
    $(".hideAll").hide();
    $(window).scrollTop(0);
    $(".checkout-container").show();
}

// * Payment Page
function getPayment() {
    $(".hideAll").hide();
    $(window).scrollTop(0);
    $(".payment-container").show();
} 

// * OrderConfirm Page 
function confirmOrder() {
    $(".hideAll").hide();
    $(window).scrollTop(0);
    $(".confirm-container").show();
}

// * Login Page
function getLogIn() {
    $(".hideAll").hide();
    $(window).scrollTop(0);
    $(".logIn-container").show();
}

// * Create Account Page
function getCreateAccount() {
    $(".hideAll").hide();
    $(window).scrollTop(0);
    $(".createAccount-container").show();
}

// ****** FETCHING AND SENDING DATA ****** //

// * Generating Department List
function getDepartments() {
    let getDepartments = $.ajax({
        url: "./services/get_departments.php",
        type: "POST",
        dataType: "json"
    });

    getDepartments.fail(function (jqXHR, textStatus) {
        alert("Something went Wrong! (getDepartments)" +
            textStatus);
    });

    getDepartments.done(function (data) {
        let departmentList = ``;
        if (data.error.id == "0") {
            $.each(data.departments, function (i, item) {
                let id = item.id;
                let name = item.name;
                departments[id] = `${name}`;
                departmentList += `<div class="depart-name go-department" data-id="${id}"><h6>${name}</h6></div>`
            });
        }
        $(".department-slider").html(departmentList);
    });
}

// * Create Account
function doCreateAccount() {
    let email = $("#ca-email").val();
    let emailconfirm = $("#ca-email-confirm").val();
    let password = $("#ca-password").val();
    let confirmPassword = $("#ca-confirmPassword").val();
    let namefirst = $("#ca-name-first").val();
    let namelast = $("#ca-name-last").val();

    // Validation
    if (email == "") {
        document.querySelector("#errorText").innerText = "Please enter valid Email Address";
        $("#ca-email").focus();
    } else {
        if (email != emailconfirm) {
            document.querySelector("#errorText").innerText  = "Please confirm Email Address";
            $("#ca-email-confirm").focus();
        } else {
            if ( password == "") {
                document.querySelector("#errorText").innerText = "Please enter valid Password";
                $("#ca-password").focus();
            } else if ( password != confirmPassword ) {
                document.querySelector("#errorText").innerText = "Please confirm Password";
                $("#ca-confirmPassword").focus();
            }
            else {
                let createaccount = $.ajax({
                    url: "./services/create_account.php",
                    type: "POST",
                    data: {
                        email: email,
                        password: password,
                        name_last: namelast,
                        name_first: namefirst
                    },
                    dataType: "json"
                });

                createaccount.fail(function (jqXHR, textStatus) {
                    alert("Something went Wrong! (createaccount)" +
                        textStatus);
                });

                createaccount.done(function (data) {
                    if (data.error.id == "0") {

                        location.href = `#/logIn/`;
                        document.querySelector("#successMsg").innerText  = "Account Created Successfully. Log In to proceed";
                        $("#li-password").focus();
                        
                        // clear this page
                        $("#ca-email").val("");
                        $("#ca-email-confirm").val("");
                        $("#ca-name-first").val("");
                        $("#ca-name-last").val("");
                        $("#ca-password").val("");
                        $("#ca-confirmPassword").val("");
                        
                    } else {
                        alert("We could not create your account at this time.");
                    }
                });
            }
        }
    }
}

// * Default User Login
document.querySelector("#li-email").value   = "sharmajaideep000@gmail.com";
document.querySelector("#li-password").value   = "123";

// * Login 
function doLogin() {
    let email = $("#li-email").val();
    let password = $("#li-password").val();

    if (email == null || email == "") {
        document.querySelector("#logInerrorText").innerText   = "Please enter valid Email Address";
        $("#li-email").focus();
    } else {
        if (password == null || password == "") {
            document.querySelector("#logInerrorText").innerText   = "Please enter valid Password";
            $("#li-password").focus();
        } else {
            let createaccount = $.ajax({
                url: "./services/login_account.php",
                type: "POST",
                data: {
                    email: email,
                    password: password
                },
                dataType: "json"
            });

            createaccount.fail(function (jqXHR, textStatus) {
                alert("Something went Wrong! (loginaccount)" +
                    textStatus);
            });

            createaccount.done(function (data) {
                console.log(data);
                if (data.error.id == "0") {
                    login = true;
                    user_id = data.ea_user_id;
                    
                    // Hiding Buttons on checkout page 
                    loginBtn.classList.add("login-display");
                    createAccountBtn.classList.add("login-display");
                    cancelBtn.classList.add("cancel-btnDisplay");
                    
                    // populating fields with data in checkout page
                    $("#accoutName").html(data.billing_name_first);
                    $("#billing-name-last").val(data.billing_name_last);
                    $("#billing-name-first").val(data.billing_name_first);
                    $("#billing-email").val(data.email);
                    $("#li-password").val("");

                    // * Check if login is from checkout page or not
                    if(location.href == 'https://jaideep.ca/instantGroceries/#/logIn/'){
                        location.href = `#/splash/`
                    }else{
                        location.href = `#/checkout/`
                    }
                } else {
                    document.querySelector("#logInerrorText").innerText = "Your email and password do not match.";
                }
            });
        }
    }
}

// * Getting Cart Items
function getCartProducts(){
    $(".hideAll").hide();
    let myCart = JSON.stringify(cart);
  
    let cartProducts = $.ajax({
      url: "./services/get_products_by_cart.php",
      type: "POST",
      data: {
          json: myCart
      },
      dataType: "json"
    });
  
    cartProducts.fail(function (jqXHR, textStatus) {
      alert("Something went Wrong! (getCart)" +
          textStatus);
    });
  
    cartProducts.done(function (data) {
      let content = ``;
      if (data.error.id == "0") {
          products = data.products;
          console.log(products)
          getCart();
      }
      $(window).scrollTop(0);
      $(".cart-container").show();
  
    });
  }

// * Displaying Cart Items 
function getCart() {
    let content = ``;
    let subtotal = 0.00;
    $.each(products, function (i, item) {
        let id = item.id;
        let upc = item.upc;
        let brand = item.brand;
        let product_name = item.product_name;
        let avg_price = parseInt(item.avg_price);
        let image_path = item.image_path;
        let quantity = cart[id];
        let extended_price = parseInt(quantity) * parseFloat(avg_price);
        subtotal = subtotal + extended_price;
        content += `<tr class="cart-item"  >
                        <td class="item-numbers">${i + 1}</td>
                        <td class="product_description">
                            <img class="cart-product-image" src="${image_path}" alt="${product_name}"> 
                            <div>
                                <p class="brands-name">${brand}</p>
                                <p class="product-name">${product_name}</p>
                                <p class="upc-name">${upc}</p>
                            </div>
                        </td>
                        <td class="unit-price text-centre font-size">$${avg_price}</td>
                        <td class="quantity-cart text-centre">
                            <div class="">
                                <input type="button" value="-" class="cart-quantity-btns cart-minus" data-id="${id}">
                                <span class="qty-no">${quantity}</span>
                                <input type="button" value="+" class="cart-quantity-btns cart-plus" data-id="${id}">
                            </div>
                        </td>
                        <td class="text-centre total-price font-size">$${extended_price.toFixed(2)} <i class="fa fa-trash cart-delete" data-id="${id}" aria-hidden="true" ></i></td>
                    </tr>`;
      });

    $(".cart-page").html(content);
    
    // * TOTAL
    let sub = subtotal.toFixed(2);
    $(".cart-subtotal").html("$" +  sub);
    let hst = subtotal * 0.13;
    $(".cart-hst").html("$" + hst.toFixed(2));
    let total = subtotal + hst;
    $(".cart-total").html("$" + total.toFixed(2));
    $(".confirm-total").html("$" + total.toFixed(2));

    final_total = total;
    final_sub_total = sub;
    final_hst = hst;
}

Object.size = function (obj) {
  var size = 0,
      key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) {
          //size++;
          let qty = obj[key];
          let quantity = parseInt(qty);
          size = size + quantity;
      }
  }
  return size;
};

// * Displaying Cart Size
function displayCartValue() {
  let size = Object.size(cart);
  $("#cart-link-value").html(`(${size})`);
  $("#mobCart-link-value").html(`(${size})`);
}

// * Getting Single Product
function getProduct(item) {
    let product = ``;
    let id = item.id;
    let upc = item.upc;
    let brand = item.brand;
    let product_name = item.product_name;
    let product_description = item.product_description;
    let avg_price = item.avg_price;
    let department_name = item.department_name;
    let image_path = item.image_path;
    let shortDescription =  jQuery. trim(product_description). substring(0, 100) ;
    product += `<div class="cell large-3 medium-4 small-12 item-2">
                    <div class="main-product-image">
                        <img src="${image_path}" alt="">
                    </div>
                    <p class="brand-name">${brand}</p>
                    <h5>${product_name}</h5>
                    <p class="productInfo">
                        ${shortDescription}...
                    </p>
                    <div class="productDetails">
                        <p class="cost">$${avg_price}</p>
                        <div class="main-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="main-cart-btns">
                        <div class="cart-items-btns">
                            <button class="do-minus" data-id="${id}">-</button>
                            <p id="quantity_${id}" class="quantity">1</p>
                            <button class="do-plus" data-id="${id}">+</button>
                        </div>
                        <button class="add do-add" data-id="${id}">Add to cart</button>
                    </div>
                </div>`
    
    return product;
}

// * Order Confirm Page Content
function orderConfirm(){
    let myCart = JSON.stringify(cart);
      let getCart = $.ajax({
            url: "./services/get_products_by_cart.php",
            type: "POST",
            data: {
                json: myCart
            },
            dataType: "json"
      });
  
      getCart.fail(function (jqXHR, textStatus) {
          alert("Something went Wrong! (getCart)" +
              textStatus);
      });
  
      getCart.done(function (data) {
          let content = ``;
          if (data.error.id == "0") {
                let subtotal = 0.00;
                $.each(data.products, function (i, item) {
                    let id = item.id;
                    let upc = item.upc;
                    let product_name = item.product_name;
                    let brand = item.brand;
                    let avg_price = item.avg_price;
                    let image_path = item.image_path;
                    let quantity = item.quantity;
                    let extended_price = parseInt(quantity) * parseFloat(avg_price);
                    subtotal = subtotal + extended_price;
                    content += `<tr class="cart-item"  >
                                    <td class="item-numbers">${i + 1}</td>
                                    <td class="product_description">
                                        <img class="cart-product-image" src="${image_path}" alt="${product_name}"> 
                                        <div>
                                            <p class="brands-name">${brand}</p>
                                            <p class="product-name">${product_name}</p>
                                            <p class="upc-name">${upc}</p>
                                        </div>
                                    </td>
                                    <td class="unit-price text-centre">$${avg_price}</td>
                                    <td class="quantity-cart text-centre">
                                        <div class="">
                                        <span class="qty-no">${quantity}</span>
                                        </div>
                                    </td>
                                    <td class="text-centre total-price">$${extended_price.toFixed(2)}</td>
                                </tr>`;
                });
                $(".confirmOrder-page").html(content);
                
                // * TOTAL
                let sub = subtotal.toFixed(2);
                $(".receipts-subtotal").html("$" +  sub);
                let hst = subtotal * 0.13;
                $(".receipts-hst").html("$" + hst.toFixed(2));
                let total = subtotal + hst;
                $(".receipts-total").html("$" + total.toFixed(2));
            }
            $(window).scrollTop(0);
      });
}

// * Payment 
function doPayment(){

    let payment_name = $("#payment-name").val();
    let payment_number = $("#payment-number").val();
    let payment_month = $("#payment-month").val();
    let payment_year = $("#payment-year").val();
    let payment_cvv = $("#payment-cvv").val();

    let doPayment = $.ajax({
        url: "./services/make_payment.php",
        type: "POST",
        data: {
            card_holder_name: payment_name,
            card_number: payment_number,
            month: payment_month,
            year: payment_year,
            cvv: payment_cvv
        },
        dataType: "json"
    });

    doPayment.fail(function (jqXHR, textStatus) {
        alert("Something went Wrong! (doPayment)" +
            textStatus);
    });

    doPayment.done(function (data) {
        if (data.error.id == "0") {
            // Generating transaction code
            transaction_code = data.transaction_code;

            // Make Receipt
            getConfirm();

            $(".transaction-no").html(`${transaction_code}`);
            document.getElementById("order-date").innerText = date;

            // Make Invoice and Saves order details to database
            getOrderComplete();
        } else {
            alert("We can not process your payment at this time.");
        }
    });
}



// *  Generating Order Receipt
function getConfirm(){
    let myCart = JSON.stringify(cart);
    let getCart = $.ajax({
        url: "./services/get_products_by_cart.php",
        type: "POST",
        data: {
            json: myCart
        },
        dataType: "json"
    });

    getCart.fail(function (jqXHR, textStatus) {
        alert("Something went Wrong! (getCart)" +
            textStatus);
    });

    getCart.done(function (data) {
        let content = ``;
        if (data.error.id == "0") {
            let subtotal = 0.00;
            $.each(data.products, function (i, item) {
                let id = item.id;
                let upc = item.upc;
                let product_name = item.product_name;
                let avg_price = item.avg_price;
                let image_path = item.image_path;
                let quantity = item.quantity;
                let extended_price = parseInt(quantity) * parseFloat(avg_price);
                subtotal = subtotal + extended_price;
                content += `<tr>
                                <td>
                                    <p>${product_name} </p>
                                </td>
                                <td>
                                    <span>${quantity}</span>
                                </td>
                                <td>$${avg_price}</td>
                            </tr>`;
            });
            $(".receipt-page").html(content);
            
            // * TOTAL
            let sub = subtotal.toFixed(2);
            $(".receipts-subtotal").html("$" +  sub);
            let hst = subtotal * 0.13;
            $(".receipts-hst").html("$" + hst.toFixed(2));
            let total = subtotal + hst;
            $(".receipts-total").html("$" + total.toFixed(2));
        }
        $(window).scrollTop(0);
    });
}

// * Complete Order 
function getOrderComplete() {
    $(".hideAll").hide();
    // create object
    let myOrder = {};
    // add object data
    myOrder["ea_user_id"] = user_id;
    myOrder["email"] = $("#billing-email").val();
    myOrder["transaction_code"] = transaction_code;
    myOrder["billing_name_last"] = $("#billing-name-last").val();
    myOrder["billing_name_first"] = $("#billing-name-first").val();
    myOrder["billing_address"] = $("#billing_address").val();
    myOrder["billing_city"] = $("#billing_city").val();
    myOrder["billing_province"] = $("#billing_province").val();
    myOrder["billing_postal_code"] = $("#billing_postal_code").val();
    myOrder["billing_phone"] = $("#billing_phone").val();

    myOrder["shipping_name_last"] = $("#shipping-name-last").val();
    myOrder["shipping_name_first"] = $("#shipping-name-first").val();
    myOrder["shipping_address"] = $("#shipping_address").val();
    myOrder["shipping_city"] = $("#shipping_city").val();
    myOrder["shipping_province"] = $("#shipping_province").val();
    myOrder["shipping_postal_code"] = $("#shipping_postal_code").val();

    myOrder["total"] = final_total;
    myOrder["sub_total"] = final_sub_total;
    myOrder["hst"] = final_hst;

    // add cart
    myOrder["cart"] = cart;

    // stringify
    let theOrder = JSON.stringify(myOrder);

    // send to make invoice
    let makeInvoice = $.ajax({
      url: "./services/make_invoice.php",
      type: "POST",
      data: {
          myOrder: theOrder
      },
      dataType: "json"
  });

  makeInvoice.fail(function (jqXHR, textStatus) {
      alert("Something went Wrong! (makeInvoice)" +
          textStatus);
  });

  makeInvoice.done(function (data) {
      console.log(data)
      if (data.error.id == "0") {
        $(window).scrollTop(0);
        $(".order-complete-container").show();

        // Order No.
        $("#complete-number").html(data.invoice_id);

        // Clearing Card Details
        $("#payment-name").val("");
        $("#payment-card").val("");
        $("#payment-month").val("");
        $("#payment-year").val("");
        $("#payment-cvv").val("");
        $("#cart-link-value").html(``);
        $("#mobCart-link-value").html(`(0)`);
      }
  });
}

// * Search Products
function getSearch() {
    $(".hideAll").hide();
    let search = $("#search").val();

    let getSearch = $.ajax({
        url: "./services/get_products_by_search.php",
        type: "POST",
        data: {
            search: search 
        },
        dataType: "json"
    });
    getSearch.fail(function (jqXHR, textStatus) {
        alert("Something went Wrong! (getSearch)" +
            textStatus);
    });
    getSearch.done(function (data) {
        let content = ``;
        if (data.error.id == "0") {
            $.each(data.products, function (i, item) {
                content += getProduct(item);
            });
        }
        $(".breadcrumbs").html(`   <li class="go-splash">Home</li>
                                    <li>Search</li>
                                    <li> ${data.department_search}</li>`);
        $(".product-container").html(content);
        $(".department-name").html(`Search results for "${search}"`);
        $(".main-container").show();
    });
}

// * Search for Mobile View
function mobileSearch() {
  $(".hideAll").hide();
  let mobSearch = $(".mobSearch").val();

  let getSearch = $.ajax({
      url: "./services/get_products_by_search.php",
      type: "POST",
      data: {
          search: mobSearch 
      },
      dataType: "json"
  });
  getSearch.fail(function (jqXHR, textStatus) {
      alert("Something went Wrong! (getSearch)" +
          textStatus);
  });
  getSearch.done(function (data) {
      let content = ``;
      if (data.error.id == "0") {
          $.each(data.products, function (i, item) {
              content += getProduct(item);
          });
      }
      $(".breadcrumbs").html(`   <li class="go-splash">Home</li>
                                  <li>Search</li>
                                  <li> ${data.department_search}</li>`);
      $(".product-container").html(content);
      $(".department-name").html(`Search results for "${mobSearch}"`);
      $(".main-container").show();
  });
}

// * Copying Billing Details to Shipping Details
function copyDetails(){
  // Getting Billing Details
  let lastName = $("#billing-name-last").val();
  let firstName =$("#billing-name-first").val();
  let address = $("#billing_address").val(); 
  let city = $("#billing_city").val();
  let province =  $("#billing_province").val();
  let postal_code = $("#billing_postal_code").val();

  $("#shipping-name-last").val(lastName);
  $("#shipping-name-first").val(firstName);
  $("#shipping_address").val(address);
  $("#shipping_city").val(city);
  $("#shipping_province").val(province);
  $("#shipping_postal_code").val(postal_code);
}

$(window).on("load", function () {
    // * Download Order Receipt
    document.getElementById("download").addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
        
    getDepartments()

    //* Mobile Navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.link-nav').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // Slider Initialization
    initializeDepartmentSlider();
    initializeHeroSlider(); 
    initializeDealsSlider() 

    // ****** EventHandlers for clicks ****** //

    $(".go-splash").click(
        function () {
            location.href = `#/splash/`;
        }
    );

    $(".go-cart").click(
        function () {
            location.href = `#/cart/`;
        }
    );

    $(".go-checkout").click(
        function () {
            location.href = `#/checkout/`;
        }
    );

    $(".go-payment").click(
        function () {
            if(login == true){
                location.href = `#/payment/`;
            }else{
                alert("Please Log In to checkout")
            } 
        }
    );

    $(".go-orderComplete").click(
        function () {
          location.href = `#/order-complete/`;
        }
    );

    $(".go-login").click(
        function () {
            location.href = `#/logIn/`;
        }
    );

    $(".checkout-login").click(
        function () {
            location.href = `#/checkout/logIn/`;
        }
    );

    $(".confirm-order").click(
        function () {
            location.href = `#/order-confirmation/`;
            orderConfirm();
        }
    );

    $("#create-account").click(
        function () {
            doCreateAccount()
        }
    );

    $("#log-in-account").click(
        function () {
            doLogin();
        }
    );

    $(".go-createAccount").click(
        function () {
            location.href = `#/createAccount/`;
        }
    );

    $(".go-search").click(
        function () {
            location.href = `#/search/`;
            getSearch();
        }
    );

    $(".go-mobSearch").click(
        function () {
            location.href = `#/search/`;
            mobileSearch();
        }
    );

    $(".copy-details").click(
        function () {
            copyDetails()
        }
    );

    $(".go-shopping").click(
        function () {
            location.href = `#/splash/`;
            cart = {};
        }
    );

    $(".go-up").click(
        function(){
            $(window).scrollTop(0);
        }
    );

    // * Delete product from cart
    $(document).on('click', 'body .cart-delete', function () {
        let id = $(this).data("id");
        delete cart[id];
        getCartProducts();
    });

    // * CART QUATITY BUTTONS

    // cart plus button
    $(document).on('click', 'body .cart-plus', function () {
        let id = $(this).data("id");
        let quantity = parseInt(cart[id]) + 1;
        cart[id] = quantity;
        getCart();
    });

    // cart minus button
    $(document).on('click', 'body .cart-minus', function () {
        let id = $(this).data("id");
        let quantity = parseInt(cart[id]) - 1;
        if (quantity < 1) {
            quantity = 1;
        }
        cart[id] = quantity;
        getCart();
    });

    $(document).on('click', 'body .go-department', function () {
        let id = $(this).data("id");
        location.href = `#/department/${id}`;
    }
    );

    // * PRODUCT QUANTITY BUTTONS

    // Product plus button
    $(document).on('click', 'body .do-plus', function () {
        let id = $(this).data("id");
        let quantity = $("#quantity_" + id).html();
        let quantity_num = parseInt(quantity);
        ++quantity_num;
        $("#quantity_" + id).html(quantity_num);
    });

    // Product minus button
    $(document).on('click', 'body .do-minus', function () {
        let id = $(this).data("id");
        let quantity = $("#quantity_" + id).html();
        let quantity_num = parseInt(quantity);
        --quantity_num;
        if (quantity_num < 1) {
            quantity_num = 1;
        }
        $("#quantity_" + id).html(quantity_num);
    });

    // Add to cart to button
    $(document).on('click', 'body .do-add', function () {
        let id = $(this).data("id");
        let quantity = $("#quantity_" + id).html();
        cart[id] = quantity;
        displayCartValue();
        console.log(cart);
    });
    
    // ****** ROUTING ****** //

    var app = $.sammy(function () {

        this.get('#/splash/', function () {
            getSplash();
        });

        this.get('#/department/:id', function () {
            let id = this.params["id"];
            getDepartment(id);
        });

        this.get('#/search/:id', function () {
            let id = this.params["id"];
            getSearch(id);
        });

        this.get('#/cart/', function () {
          getCartProducts();
        });

        this.get('#/checkout/', function () {
            getCheckout();
            if(!login){
              document.querySelector('#login-error').innerText= "*You must login before checkout"
            }
            if(login){
              document.querySelector('#login-error').innerText= ""
            }
        });

        this.get('#/payment/', function () {
            getPayment();
        });

        this.get('#/order-complete/', function () {
          doPayment();
        });

        this.get('#/order-confirmation/', function () {
            confirmOrder();
        });

        this.get('#/logIn/', function () {
            getLogIn();
        });
        
        this.get('#/checkout/logIn/', function () {
            getLogIn();
        });
        
        this.get('#/createAccount/', function () {
            getCreateAccount();
        });

    });

    // default when page first loads
    $(function () {
        app.run('#/splash/');
    });

});

// * Slider
function initializeDepartmentSlider() {
    $('.department-slider').slick({
        slidesToShow: 7,
        variableWidth: true,
        infinite: true,
        slidesToScroll: 5,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
function destroyDepartmentSlider() {
    $('.department-slider').slick("unslick");
}

function initializeHeroSlider() {
    $('.hero-slider').slick({
        slidesToShow: 1,
        infinite: true,
        speed:700,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
        {
        breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll:1
            }
        }
    ]
    });
}

function destroyHeroSlider() {
    $('.hero-slider').slick("unslick");
}

function initializeDealsSlider() {
    $('.popular-deals-slider').slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

function destroyDealsSlider() {
    $('.popular-deals-slider').slick("unslick");
}
