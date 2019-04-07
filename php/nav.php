    <nav id="navbar-top" class="navbar fixed-top navbar-expand-md">
        <!--        <a class="navbar-brand hide-element" href="#">NAVBAR</a>-->
        <div class="container">

            <div class="logo-div">
                <a href="index.php#Top">
                    <div class="row d-flex align-items-end">
                        <img class="logo-full d-none d-md-block" src="photos/logo/logo.png" alt="logo Maciek">
                        <img class="logo-full d-md-none pl-2" src="photos/logo/lgsmall-min.png" alt="logo Maciek">
                    </div>
                </a>
            </div>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-center" aria-controls="menu-center" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon d-flex align-items-center justify-content-center">
                    <i id="faButton" class="fas fa-bars"></i>
                </span>
            </button>
            
            <?php
                $prelink = "";
                if(basename($_SERVER['PHP_SELF']) != "index.php"){
                    $prelink = "index.php";
                }
            ?>

            <div class="collapse navbar-collapse" id="menu-center">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item text-center">
                        <a class="nav-link" href="<?php echo $prelink; ?>#portfolio">Portfolio</a>
                    </li>

                    <li class="nav-item text-center">
                        <a class="nav-link" href="<?php echo $prelink; ?>#skills">Umiejętności</a>
                    </li>

                    <li class="nav-item text-center">
                        <a class="nav-link" href="<?php echo $prelink; ?>#gallery">Galeria</a>
                    </li>

                    <li class="nav-item text-center">
                        <a class="nav-link" href="<?php echo $prelink; ?>#contact">O mnie</a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="nav-link" href="<?php echo $prelink; ?>#contact"><?php echo basename($_SERVER['PHP_SELF']); ?></a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>