<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skelectroics</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>-
    <!-- Include the header and navigation bar -->
    <div class="container">
        <include src="header.html"></include>
        <include src="navbar.html"></include>

        <!-- Content specific to the page goes here -->
        <h2>Welcome to Skelectroics!</h2>
    </div>
    
    <!-- Include the footer -->
    <include src="footer.html"></include>

    <script src="script.js"></script>


</body>

document.getElementById("addToCartBtn").addEventListener("click", function () {
    alert("Product added to your cart!");
});
</html>

