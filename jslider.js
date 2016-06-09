(function($){
    $.fn.jSlider = function(options) {
        var options = $.extend({
            leftBtn: '#leftBtn', /* Left button elemet's identyfier */
            rightBtn: '#rightBtn', /* Right button elemet's identyfier */
            pointers: '#sl-pointers', /* Pointers block's identyfier */
            pointers_elems: 'a', /* Pointers element with link */
            links_attr: 'rel', /* Attribute from pointers_elems to load next slide */
            container: '#sl-container', /* Slider's container */
            active_class: 'active', /* Pointers active class */
            inactive_class: 'inactive', /* Pointers inactive class */
            quantity: 1, /* @TODO: quantity */
            autoPlay: false,  // true or false
            autoPlayDelay: 10  // delay in seconds
        }, options);
        
        var make = function() {
            var n = $(options.pointers + ' a').length;
            $.fn.SetActiveClass = function(){
                $(this).removeClass(options.inactive_class).addClass(options.active_class);
            };

            $.fn.SetInactiveClass = function(){
                $(this).removeClass(options.active_class).addClass(options.inactive_class);
            };
            function pickNextPoints(){
                var $el = $(options.pointers + ' .' + options.active_class);
                if ($el.is(options.pointers + ' ' + options.pointers_elems + ':last-child')){
                    var $nel = $(options.pointers + ' ' + options.pointers_elems + ':first-child');
                } else {
                    var $nel = $el.next('.' + options.inactive_class);
                }
                
                $nel.SetActiveClass();
                $el.SetInactiveClass();
                var link = $nel.attr(options.links_attr);
                $(options.container).html($(link).html());
                return false;
            }
            function pickPrevPoints(){
                var $el = $(options.pointers + ' .' + options.active_class);
                if ($el.is(options.pointers + ' ' + options.pointers_elems + ':first-child')){
                    var $pel = $(options.pointers + ' ' + options.pointers_elems + ':last-child');
                } else {
                    var $pel = $el.prev('.' + options.inactive_class);
                }
                $pel.SetActiveClass();
                $el.SetInactiveClass;
                var link = $pel.attr(options.links_attr);
                $(options.container).html($(link).html());
                return false;
            }
            $(options.leftBtn).click(function(event){
                event.preventDefault();
                pickPrevPoints();
                return false;
            });

            $(options.rightBtn).click(function(event){
                event.preventDefault();
                pickNextPoints();
                return false;
            });
            $(options.pointers + ' ' + options.pointers_elems).click(function(){
                $(options.pointers + ' .' + options.active_class).SetInactiveClass();
                $(this).SetActiveClass();
                var link = $(options.pointers + ' .' + options.active_class).attr(options.links_attr);
                $(options.container).html($(link).html());
                return false;
            });
            if (options.autoPlay) {
                function aPlay() {
                    $(options.rightBtn).click();
                    delId = setTimeout(aPlay, options.autoPlayDelay * 1000);
                }
                var delId = setTimeout(aPlay, options.autoPlayDelay * 1000);
            }
        };
        return this.each(make);
    };
})(jQuery);
