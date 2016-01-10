$(document).ready(function(){
    $home_content_top = $("#home-content-top")
    $home_content_bottom = $("#home-content-bottom")
    $main_container = $("#main-container")

    function setContentSize(parent_height){
        $home_content_top.height(parent_height)
        $home_content_bottom.height(parent_height)
    }

    setContentSize($main_container.height())

    var images = [ "images/Inicio_1.jpg", "images/Inicio_2.jpg", "images/Inicio_3.jpg" ];
    var currentImage = 0;

    function changeBackground(){
        currentImage +1 < images.length ? currentImage++ : currentImage = 0
        setContentSize($main_container.height())

        $home_content_top.hide().css({
            backgroundImage: 'url(' + images[ currentImage ] + ')'
        });

        $home_content_top.fadeIn(1000, function(){
           $home_content_bottom.css({
                backgroundImage: 'url(' + images[ currentImage ] + ')'
            })
        });
    }

    setInterval( changeBackground, 2600 );

});