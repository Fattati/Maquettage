<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Ogani Template">
    <meta name="keywords" content="Ogani, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ogani | Template</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet">

    <!-- Css Styles -->
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="css/elegant-icons.css" type="text/css">
    <link rel="stylesheet" href="css/nice-select.css" type="text/css">
    <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css">
    <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css">
    <link rel="stylesheet" href="css/slicknav.min.css" type="text/css">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <link rel="stylesheet" href="css/toasts.css">
</head>

<body>
    <?php
    include 'header.php';
    ?>
    <!-- Hero Section Begin -->
    <section class="hero">
        <div class="container">
            <div class="row">
                <div class="col-lg-9" style="margin: 0 auto;">
                    <div class="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                        <div class="hero__text">
                            <span>FRUIT FRESH</span>
                            <h2>Vegetable <br />100% Organic</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <a href="#" class="primary-btn">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- Featured Section Begin -->
    <section class="featured spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12" style="display: flex;flex-direction: column;align-items: center;">
                    <div class="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div class="hero__search__form" style="margin-bottom: 20px;">
                        <form action="#">
                            <input type="text" placeholder="What do yo u need?">
                            <button type="submit" class="site-btn">SEARCH</button>
                        </form>
                    </div>
                    <div class="featured__controls">
                        <ul>
                            <li class="active" data-filter="*">Tous</li>
                            <?php
                            include 'functions.php';
                            // 
                            $categories = getAllDataFromTable('categorie');
                            while ($row = $categories->fetch_assoc()) {
                                $categId = $row["id_categorie"];
                                $categName = $row["nom_categorie"];
                                echo "<li data-filter='.$categName' data-categId=$categId>$categName</li>";
                            }
                            ?>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row featured__filter">
                <?php
                // include 'functions.php';
                // 
                
                $produits = getAllDataFromTable('produit');
                while ($row = $produits->fetch_assoc()) {
                    $prodId = $row["id_produit"];
                    $prodName = $row["nom_produit"];
                    $prodCategId = $row["id_categori"];
                    $prodPrice = $row["prix_u"];
                    $prodImage = $row["id_image"];
                    $categName = null;
                    // 
                    $categs = getAllDataFromTable('categorie');
                    while ($row = $categs->fetch_assoc()) {
                        if ($prodCategId == $row["id_categorie"])
                            $categName = $row["nom_categorie"];
                    }
                    // 
                    echo "<div class='col-lg-3 col-md-4 col-sm-6 mix $categName $prodName'>";
                    // 
                    echo "<div class='featured__item'>";
                    // 
                    echo "<div class='featured__item__pic set-bg' data-setbg='imgs/$prodImage.png'>";
                    // 
                    echo "<ul class='featured__item__pic__hover'>";
                    echo "<li><a onclick='jeclick($prodId)'><i class='fa fa-shopping-cart'></i></a></li>";
                    echo "</ul>";
                    // 
                    echo "</div>";
                    echo "<div class='featured__item__text'>";
                    // 
                    echo "<h6><a href='#'>$prodName</a></h6>";
                    echo "<h5>$prodPrice DH</h5>";
                    // 
                    echo "</div>";
                    // 
                    echo "</div>";
                    // 
                    echo "</div>";
                }
                ?>
            </div>
        </div>
    </section>
    <!-- Featured Section End -->

    <!-- Banner Begin -->
    <div class="banner" style="margin-bottom: 20px;">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                        <img src="img/banner/banner-1.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                        <img src="img/banner/banner-2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner End -->

    <?php
    include 'footer.php';
    ?>
    <!-- Js Plugins -->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.nice-select.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/jquery.slicknav.js"></script>
    <script src="js/mixitup.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>
    <!--  -->
    <script src="myJs/index.js"></script>
    <script src="myJs/toast.js"></script>
</body>

</html>