(function($){
    $(function(){
        // Color Set TEST
        var $colorList = $('#gnb > ul > li').eq(1).find('.depth2 a');
        $colorList.click(function(){
            
            var $bodyEl = $('body');
            var color = $(this).text();
            $bodyEl.removeClass();
            
            switch (color) {
                case 'Royal classic':
                    break;
                case 'Grape Fruit' :
                    $bodyEl.addClass('color_grape_fruit');
                    break;
                case 'Hot Pink' :
                    $bodyEl.addClass('color_hot_pink');
                    break;
                case 'Orchid' :
                    $bodyEl.addClass('color_orchid');
                    break;
                case 'Blue Jeans' :
                    $bodyEl.addClass('color_blue_jeans');
                    break;
                case 'Mint' :
                    $bodyEl.addClass('color_mint');
                    break;
                case 'Sunflower' :
                    $bodyEl.addClass('color_sunflower');
                    break;
                case 'Bitter Sweet ' :
                    $bodyEl.addClass('color_bitter_sweet');
                    break;
                case 'Java Coffee' :
                    $bodyEl.addClass('color_java_coffee');
                    break;
                case 'Gray' :
                    $bodyEl.addClass('color_gray');
                    break;
            }
            return false;
        });
    })
})(jQuery);
