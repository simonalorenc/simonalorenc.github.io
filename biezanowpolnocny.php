<?php
include("php/header.php");
?>

    
    <?php
    include("php/nav.php");
    ?>

    <!-- HUTA   -->
    <section id="new-page" class="d-flex align-items-center position-relative">
        <div class="container">

            <h1 class="section-header col text-center pb-4">Biezanow</h1>

            
            <div ID="ngDom" data-nanogallery2='{
                "itemsBaseURL": "photos/portfolio/mizia/",
                "thumbnailWidth": "auto",
                "thumbnailBorderVertical": 0,
                "thumbnailBorderHorizontal": 0,
                "thumbnailGutterWidth": 7,
                "thumbnailGutterHeight": 7,
                "colorScheme": {
                  "thumbnail": {
                    "background": "rgba(68,68,68,0)"
                  }
                },
                "thumbnailDisplayTransition": "slideDown",
                "thumbnailLabel": {
                  "display": false
                },
                "thumbnailHoverEffect2": "__0deg_10deg_1000|image_scale_1_0.9_1000",
                "thumbnailAlignment": "center"
              }'>
                    <a href="1.jpg" data-ngthumb="1.jpg" data-ngdesc="">Berlin 1</a>
                    <a href="2.jpg" data-ngthumb="2.jpg" data-ngdesc="">Berlin 1</a>
                    <a href="3.jpg" data-ngthumb="3.jpg" data-ngdesc="">Berlin 1</a>
                    <a href="4.jpg" data-ngthumb="4.jpg" data-ngdesc="">Berlin 1</a>

                </div>

        </div>
        
        <?php
        include("php/footer.php");
        ?>

    </section>


  
        
<?php
include("php/script_closing_tags.php");
?>



    