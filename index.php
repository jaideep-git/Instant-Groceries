<?php

$when = mktime();

?>
<!doctype html>
<html class="no-js" lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Easy Groceries</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<link rel="stylesheet" href="./css/vendor/foundation.css?id=<?php echo"$when"?>">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<link rel="stylesheet" type="text/css" href="./css/vendor/slick.css" />
<link rel="stylesheet" type="text/css" href="./css/vendor/slick-theme.css?id=<?php echo"$when"?>" />
<link rel="stylesheet" href="./css/app.css?id=<?php echo"$when"?>">
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>
</head>
<body>
<!-- Navbar -->
<nav class="main-nav" >
    <header class="desktop-nav grid-container grid-x ">
        <div class="large-4 small-7 cell go-splash logo">
            <img src="assets/images/logo.png" alt="logo">
        </div>
        <div class="cell large-1"></div>
        <div class="large-7 small-12 cell nav-links">
            <div class="searchBar">
              <input type="search" id="search" value="" placeholder="search products">
              <button class="search-btn go-search"><img src="./assets/images/Icon ionic-ios-search.png" alt=""></button>
            </div>
            <div class="links">
                <img class="go-department" src="./assets/images/department-icon.svg" alt="">
                <h5 class="go-department"  data-id="1">Departments</h5>
            </div>
            <div class="links">
                <img class="go-cart" src="./assets/images/cart-icon.svg" alt="">
                <h5 class="go-cart">Cart</h5><span id="cart-link-value"></span>
            </div>
            <div class="links">
                <img class="go-login" src="./assets/images/account-icon.svg" alt="">
                <h5 class="go-login" id="accoutName"></h5>
            </div>
        </div>
    </header>
    <nav class="mob-nav">
        <div class="navbar grid-x">
            <!-- Logo -->
        <div class="go-splash cell small-10">
            <img src="assets/images/logo.png" alt="logo">
        </div>
        <!-- Nav Links -->
        <ul class="menu">
            <li class="go-splash link-nav">Home</li>
            <li class="go-department link-nav" data-id="1">Departments</li>
            <li class="go-login link-nav">Account</li>
        </ul>
        <!-- Hamburger Menu Button -->
        <div class="menu-btn">
            <i class="nav-btn fas fa-bars"></i>
        </div>
        </div>
        <div class="grid-x  nav-input">
          <div class="searchBar small-9 cell">
            <input type="search" class="mobSearch" id="mobileSearch" value="" placeholder="search products">
            <button class="search-btn go-mobSearch"><img src="./assets/images/Icon ionic-ios-search.png" alt=""></button>
          </div>
          <div class="cart-value">
            <img class="go-cart cart-mob" src="./assets/images/cart-icon.svg" alt="">
            <span id="mobCart-link-value">(0)</span>
          </div> 
        </div>
    </nav>

    <!-- Department Slider -->
    <div class="departmentSlider grid-x">
        <div class="department-slider grid-container cell small-12">
        </div>
    </div>
</nav>
<main id="app" class="grid-container">
    <!-- Splash Page -->
    <section class="splash-container hideAll">
    <!-- Hero Section -->
        <article id="hero" class="hero-slider grid-x">
          <div class="hero-image cell small-12">
            <img src="./assets/images/slider1.png" alt="">
          </div>
          <div class="hero-image">
            <img src="./assets/images/banner3.jpg" alt="">
          </div>
          <div class="hero-image hero-image cell small-12">
            <img src="./assets/images/slider2.png" alt="">
          </div>
        </article>
        <article class="popular-categories">
            <h3 class="popular_cat_head">Popular Categories</h3>
            <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell large-3 small-6 department">
                    <img src="./assets/images/popDep1.png" alt="">
                </div>
                <div class="cell large-3 small-6 department">
                    <img src="./assets/images/popDep2.png" alt="">
                </div>
                <div class="cell large-3 small-6 department">
                    <img src="./assets/images/popDep3.png" alt="">
                </div>
                <div class="cell large-3 small-6 department">
                    <img src="./assets/images/popDep4.png" alt="">
                </div>
            </div>
        </article>

        <!-- Deals of Week Section -->
        <article id="deal-section">
            <div class="popular_cat_head">
                <h3> <span class="color"> Special Offers </span>of the Week</h3>
                <h4 class="go-department view-all" data-id="1">view all</h4>
            </div>

            <div class="popular-deals-slider">
                <!-- Popular Product 1  -->
                <div class="item">
                    <div class="main-product-image">
                        <img src="./images/2500/25000056031.jpg" alt="">
                    </div>
                    <p class="brand-name">Minute Maid</p>
                    <h5>100% Juice, Orange, Original</h5>
                    <p class="productInfo">
                        Naturally delicious. 100% pure squeezed orange juice from concentrate with vitamin C. Pasteurized. A...
                    </p>
                    <div class="productDetails">
                        <p class="cost">$2.25</p>
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
                            <button class="do-minus" data-id="1056">-</button>
                            <p id="quantity_1056" class="quantity">1</p>
                            <button class="do-plus" data-id="1056">+</button>
                        </div>
                        <button class="add do-add" data-id="1056">Add to cart</button>
                    </div>
                </div>

                <!-- Popular Product 2 -->
                <div class="item">
                    <div class="main-product-image">
                        <img src="./images/2840/28400024501.jpg" alt="">
                    </div>
                    <p class="brand-name">Lay's</p>
                    <h5>Potato Chips</h5>
                    <p class="productInfo">
                        Potato Chips, Honey Barbecue Flavored, Hunger Grab 0 grams trans fat. Frito Lay - good fun! Still ma...
                    </p>
                    <div class="productDetails">
                        <p class="cost">$2.97</p>
                        <div class="main-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="main-cart-btns">
                        <div class="cart-items-btns">
                            <button class="do-minus" data-id="383">-</button>
                            <p id="quantity_383" class="quantity">1</p>
                            <button class="do-plus" data-id="383">+</button>
                        </div>
                        <button class="add do-add" data-id="383">Add to cart</button>
                    </div>
                </div>

               
                <!-- Popular Product 4 -->
                <div class="item">
                    <div class="main-product-image">
                        <img src="./images/4500/45000110243.jpg" alt="">
                    </div>
                    <p class="brand-name">Wonder </p>
                    <h5>Bread, Smartwheat</h5>
                    <p class="productInfo">
                        Soft. Delicious. Nutritious. 100% whole wheat. No high fructose corn syrup. 22 g whole grains per se...
                    </p>
                    <div class="productDetails">
                        <p class="cost">$2.35</p>
                        <div class="main-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="main-cart-btns">
                        <div class="cart-items-btns">
                            <button class="do-minus" data-id="971">-</button>
                            <p id="quantity_971" class="quantity">1</p>
                            <button class="do-plus" data-id="971">+</button>
                        </div>
                        <button class="add do-add" data-id="971">Add to cart</button>
                    </div>
                </div>

                <!-- Popular Product 5 -->
                <div class="item">
                    <div class="main-product-image">
                        <img src="./images/7800/78000152463.jpg" alt="">
                    </div>
                    <p class="brand-name">Canada Dry</p>
                    <h5>Ginger Ale</h5>
                    <p class="productInfo">
                        100% natural flavors. Made from real ginger. Caffeine free. Since 1904. 140 calories per 12 fl oz se...
                    </p>
                    <div class="productDetails">
                        <p class="cost">$1.00</p>
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
                            <button class="do-minus" data-id="359">-</button>
                            <p id="quantity_359" class="quantity">1</p>
                            <button class="do-plus" data-id="359">+</button>
                        </div>
                        <button class="add do-add" data-id="359">Add to cart</button>
                    </div>
                </div>

                <!-- Popular Product 2 -->
                <div class="item">
                    <div class="main-product-image">
                      <img src="./images/4332/43324005542.jpg" alt="">
                    </div>
                    <p class="brand-name">Wardley</p>
                    <h5>Goldfish Flake Food</h5>
                    <p class="productInfo">
                      Reduces waste for cleaner water. Wardley takes care of the science so you can enjoy your fish! Wardl... 
                    </p>
                    <div class="productDetails">
                        <p class="cost">$2.99</p>
                        <div class="main-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="main-cart-btns">
                        <div class="cart-items-btns">
                            <button class="do-minus" data-id="309">-</button>
                            <p id="quantity_309" class="quantity">1</p>
                            <button class="do-plus" data-id="309">+</button>
                        </div>
                        <button class="add do-add" data-id="309">Add to cart</button>
                    </div>
                </div>
        </article>
        <article class="advertisement">
            <img src="./assets/images/ad.png" alt="">
        </article>
    </section>

    <!-- Account Page -->
    <section class="logIn-container hideAll">
        <h2 class="cart-heading">Log In</h2>
        <div class="successBox">
            <p id="successMsg"></p>
        </div>
        <article class="logIn-box">
            <p id="logInerrorText"></p>
            <div class="grid-x">
                <div class="cell large-4">
                    <Label for="email">Email</Label>
                    <input type="email" id="li-email" name="email">
                </div>
            </div>
            <div class="grid-x">
                <div class="cell large-4">
                    <Label>Password</Label>
                    <input type="password" id="li-password">
                </div>
            </div>
            <button id="log-in-account">Log In</button>
            <p class="new-user">New User? <strong class="go-createAccount">Create Account</strong></p>
        </article>
    </section>

    <!-- Create Account Page -->
    <section class="createAccount-container hideAll">
        <h2 class="cart-heading">Create Account</h2>
        <article class="createAccount-box">
            <p id="errorText"></p>
            <div class="grid-x">
                <div class="cell large-4">
                    <Label>Email</Label>
                    <input type="text" id="ca-email" placeholder="email">
                </div>
            </div>
            <div class="grid-x">
                <div class="cell large-4">
                    <Label>Confirm Email</Label>
                    <input type="text" id="ca-email-confirm" placeholder="confirm Email">
                </div>
            </div>
            <div class="grid-x">
                <div class="cell large-4">
                    <Label>First Name</Label>
                    <input type="text" id="ca-name-first" placeholder="first Name">
                </div>
            </div>
            <div class="grid-x">
                <div class="cell large-4">
                    <Label>Last Name</Label>
                    <input type="text" id="ca-name-last" placeholder="last Name">
                </div>
            </div>
            <div class="grid-x">
                <div class="cell large-4">
                    <Label>Password</Label>
                    <input type="password" id="ca-password" placeholder="password">
                </div>
            </div>
            <div class="grid-x">
            <div class="cell large-4">
                <Label>Confirm Password</Label>
                <input type="password" id="ca-confirmPassword" placeholder="confirm password">
            </div>
            </div>
            <button id="create-account">Create Account</button>
        </article>
    </section>

    <!-- Main Page -->
    <section class="main-container hideAll">
        <article class="grid-x grid-margin-x">
            <div class="cell large-12 small-12 cookie-crumb">
                <ul class="breadcrumbs">
                    
                </ul>
            </div>
        </article>
        <div class="department-header">
            <h3 class="department-name"> </h3>
        </div>
        <article>
            <div class="grid-x grid-margin-x grid-margin-y product-container">
            </div>
        </article>
    </section>

    <!-- Cart Page -->
    <section class="cart-container hideAll">
        <h2 class="cart-heading">Your Cart </h2>
        <article class="grid-x">
            <table class="cart-table cell large-12 ">
            <thead class="">
                <tr>
                  <th class="item-numbers" width="200">Item</th>
                  <th class="text-centre" width="600">Product</th>
                  <th class="cart-head unit-price text-centre" width="300" >Unit Price</th>
                  <th class="text-centre" width="400">Quantity</th>
                  <th class="cart-head text-centre" width="400">Total Price</th>
                </tr>
            </thead>
            
            <tbody class="cart-page">
                <!-- Cart list -->
            </tbody>
            </table>
        </article>
        <article class="grid-x total-container">
            <div class="large-12 total-box  cell small-12">
              <div class="product-box-2">
                <h3>Total</h3>
                  <div class="total">
                      <div class="total-headings">
                        <h5>Subtotal</h5>
                      </div>
                      <h5 class="cart-subtotal"></h5>
                  </div>
                  <div class="total">
                    <div class="total-headings">
                      <h5>HST</h5>
                    </div>
                    <h5 class="cart-hst"></h5>
                  </div>
                  <div class="total">
                    <div class="total-headings">
                        <h4>Total</h4>
                    </div>
                    <h5 class="cart-total"></h5>
                  </div>
                  <div class="checkout-btns">
                      <button class="go-checkout checkout-btn">Checkout</button> 
                  </div>
              </div>
            </div>
        </article>
        <button class="go-splash" id="checkout-btn-2">Add More</button>
    </section>

    <!-- Checkout Page -->
    <section class="checkout-container hideAll">
        <h2 class="cart-heading">Checkout</h2>
        <p id="login-error"></p>
        <div class="checkout-btns">
            <button class="checkout-buttons checkout-login" id="login-btn">Log In</button>
            <button class="checkout-buttons go-createAccount" id="createAccount-btn">Create Account</button>
            <button class="checkout-buttons go-payment">Proceed To Payment</button>
            <button class="checkout-buttons go-payment cancel-btn" id="cancel-btn">Back</button>
        </div>
        <article class="checkout-box">
            <div class="grid-x">
            <div class="cell large-4">
                <Label>Email</Label>
                <input type="text" id="billing-email">
            </div>
            </div>
            <h3 class="checkout-heading">Billing Details</h3>
            <div class="grid-x grid-margin-x">
            <div class="cell large-6">
                <Label>First Name</Label>
                <input type="text" id="billing-name-first">
            </div>
            <div class="cell large-6">
                <Label>Last Name</Label>
                <input type="text" id="billing-name-last">
            </div>
            </div>
            <div class="grid-x grid-margin-x">
            <div class="cell large-6">
                <Label>Street Address</Label>
                <input type="text" id="billing_address">
            </div>
            <div class="cell large-3">
                <Label>City</Label>
                <input type="text" id="billing_city">
            </div>
            <div class="cell large-3">
                <Label>Province</Label>
                <input type="text" id="billing_province">
            </div>
            </div>
            <div class="grid-x grid-margin-x">
            <div class="cell large-3">
                <Label>Postal Code</Label>
                <input type="text" id="billing_postal_code">
            </div>
            <div class="cell large-3">
                <Label>Phone Number</Label>
                <input type="text" id="billing_phone">
            </div>
            </div>

            <div class="shipping-head"> 
              <h3 class="checkout-heading">Shipping Details</h3> 
              <div class="clipboard-div">
                <i class="fa fa-clipboard clipboard-icon checkout-heading copy-details"></i>
                <h6 class="checkout-heading copy-details">Copy Billing details</h6> 
              </div>
            </div>
           
            <div class="grid-x grid-margin-x">
            <div class="cell large-6">
                <Label>First Name</Label>
                <input type="text" id="shipping-name-first">
            </div>
            <div class="cell large-6">
                <Label>Last Name</Label>
                <input type="text" id="shipping-name-last">
            </div>
            </div>
            <div class="grid-x grid-margin-x">
            <div class="cell large-6">
                <Label>Street Address</Label>
                <input type="text" id="shipping_address">
            </div>
            <div class="cell large-3">
                <Label>City</Label>
                <input type="text" id="shipping_city">
            </div>
            <div class="cell large-3">
                <Label>Province</Label>
                <input type="text" id="shipping_province">
            </div>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="cell large-3">
                    <Label>Postal Code</Label>
                    <input type="text" id="shipping_postal_code">
                </div>
            </div>
        </article>
        <div class="goUp">
          <p class="go-up">Go to top &#8593</p>
        </div>
    </section>

    <!-- Payement Page -->
    <section class="payment-container hideAll">
        <h2 class="cart-heading">Payment</h2>
        <article class="payment-box">
            <div class="grid-x">
            <div class="cell large-4">
                <Label>Card Holder Name</Label>
                <input type="text" id="payment-name">
            </div>
            </div>
            <div class="grid-x">
                <div class="cell large-4">
                    <Label>Card Number</Label>
                    <input type="text" id="payment-name" id="payment-number">
                </div>
                </div>
                <div class="grid-x">
                    <div class="cell large-4">
                        <Label>Month</Label>
                        <select id="payment-month">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                </div>
                <div class="grid-x">
                    <div class="cell large-4">
                        <Label>Year</Label>
                        <select id="payment-year">
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                        </select>
                    </div>
                </div>
                <div class="grid-x">
                <div class="cell large-4">
                    <Label>CVV</Label>
                    <input type="text" id="payment-cvv">
                </div>
            </div>
            <div class="confirm-btns">
              <button class="confirm-order">Confirm</button>
              <button class="go-splash confirm-btn2" id="confirm-btn2">Cancel</button>
            </div>
        </article>
    </section>

    <!-- Confirm Page -->
    <section class="confirm-container hideAll">
      <article class="grid-x">
        <div class="cell large-5">
        <h2 class="cart-heading">Order Confirmation</h2>
        </div>
        <div class="cell large-4"></div>
          <div class="confirm-flex2 cell large5">
              <p>order Total: <span class="confirm-total"></span></p>
              <button class="confirm-btn go-orderComplete">Place Order</button>
              <button class="go-splash confirm-btn2">Add More</button>
          </div>
        </div>
      </article>
        <article class="grid-x">
            <table class="cell large-12">
            <thead>
                <tr>
                  <th class="item-numbers" width="200">Item</th>
                  <th class="text-centre" width="600">Product</th>
                  <th class="cart-head unit-price text-centre" width="300" >Unit Price</th>
                  <th class="text-centre" width="400">Quantity</th>
                  <th class="cart-head text-centre" width="400">Total Price</th>
                </tr>
            </thead>
        
            <tbody class="confirmOrder-page">
                <!-- Cart list -->
            </tbody>
            </table>
        </article>
    </section>

    <!-- Order Complete Page -->
    <section class="order-complete-container hideAll">
        <article class="order-complete-box">
            <h3>Thank You For Your Order!</h3>
            <div class="complete-buttons">
                <button id="download">Download receipt</button>
                <button class="go-splash go-shopping order-complete-btn">Continue Shopping</button>
            </div>
            <div class="order-receipt" id="invoice">
                <div class="receipt-head">
                    <div class="receipt-logo">
                        <img src="./assets/images/logo2.png" alt="">
                    </div>
                    <div class="receipt-heading">
                        <h4>INVOICE</h4>
                    </div>
                </div>
                <div class="order-box grid-x grid-margin-x ">
                    <div class="receipt-box cell large-6 small-6">
                        <p>Order Date: <span id="order-date" class="receipt-text"></span></p>
                    </div>
                    <div class="receipt-box cell large-6 small-6">
                        <p>Order No : <span class="transaction-no receipt-text" id="complete-number"></span></p>
                    </div>
                </div>
                <table class="cell large-12">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
            
                    <tbody class="receipt-page">
                        <!-- Cart list -->
                    </tbody>
                </table>
                <article class="grid-x total-container">
                    <div class="large-7" ></div>
                    <div class="large-5 receipt-box-2 cell small-12">
                        <div class="receipt-total">
                            <h5>Subtotal</h5>
                            <h5 class="receipts-subtotal"></h5>
                        </div>
                        <div class="receipt-total">
                            <h5>HST</h5>
                            <h5 class="receipts-hst"></h5>
                        </div>
                        <div class="receipt-total">
                            <h4>Total</h4>
                            <h4 class="receipts-total"></h4>
                        </div>
                    </div>
                </article>
            </div>
        </article>
    </section>
    </section>
</main>
<footer class="grid-container">
    <article class="grid-x grid-margin-x grid-padding-x">
    <section class="cell small-6 large-3">
        <img src="./assets/images/logo2.png" alt="">
        <div class="footer-content">
        <div class="footer-img">
            <img src="./assets/images/phone-icon.png" alt="">
        </div>
        <h5>1800-000-000</h5>
        </div> 
        <div class="footer-content">
        <div class="footer-img">
            <img src="./assets/images//message-icon.jpg" alt="">
        </div>
        <h5>1800-000-000</h5>
        </div>
        <div class="footer-links">
        <img src="./assets/images/facebook-icon.png" alt="">
        <img src="./assets/images/twitter-icon.png" alt="">
        <img src="./assets/images/instagram-icon.png" alt="">
        </div>
    </section>
    <section class="cell small-6 large-3 footer-h3">
        <h3>About Us</h3>
        <ul>
        <li>Privacy Policy</li>
        <li>Refund & Return Policy</li>
        <li>Contact Us</li>
        <li>Blog</li>
        <li>Careers</li>
        </ul>
    </section>
    <section class="cell small-6 large-3 footer-1 footer-h3">
        <h3>My Account</h3>
        <ul>
        <li>My Orders</li>
        <li>Wishlist</li>
        <li>Return or Refund</li>
        <li>Shopping Cart</li>
        <li>Payments</li>
        </ul>
    </section>
    <section class="cell small-6 large-3 footer-1 footer-h3">
        <h3>Our Store Locations</h3>
        <ul>
        <li>Torronto</li>
        <li>Oshawa</li>
        <li>Brampton</li>
        <li>Kitchner</li>
        <li>Miississauga</li>
        </ul>
    </section>
    </article>
</footer>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
<script src="./js/vendor/sammy.min.js" type="text/javascript"></script>
<script src="./js/vendor/sammy.template.js" type="text/javascript"></script>
<script src="https://code.jquery.com/jquery-migrate-3.3.2.min.js" integrity="sha256-Ap4KLoCf1rXb52q+i3p0k2vjBsmownyBTE1EqlRiMwA=" crossorigin="anonymous"></script>
<script type="text/javascript" src="./js/vendor/slick.min.js"></script>
<script src="js/app.js?id=<?php echo"$when"?>"></script>
</body>

</html>