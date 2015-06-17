/* zoom and opacity changed */
(function($){
    $.fn.extend({ 

        hoverZoom: function(settings) {
 
            var defaults = {
                overlay: true,
                overlayColor: '#2e9dbd',
                overlayOpacity: 0.7,
                zoom: 25,
                speed: 500
            };
             
            var settings = $.extend(defaults, settings);
         
            return this.each(function() {
            
                var s = settings;
                var hz = $(this);

                // select which elements would be changed
                var image = $('img', hz);

                image.load(function() {
                    
                    // when load img decide what layer should be overlay
                    if(s.overlay === true) {
                        $(this).parent().append('<div class="zoomOverlay" />');
                        $(this).parent().find('.zoomOverlay').css({
                            opacity:0, 
                            display: 'block', 
                            backgroundColor: s.overlayColor
                        }); 
                    }
                
                    var width = $(this).width();
                    var height = $(this).height();
                
                    $(this).fadeIn(1000, function() {
                        $(this).parent().css('background-image', 'none');
                        hz.hover(function() {
                            $('img', this).stop().animate({
                                height: height + s.zoom,
                                marginLeft: -(s.zoom),
                                marginTop: -(s.zoom)
                            }, s.speed);
                            if(s.overlay === true) {
                                $(this).parent().find('.zoomOverlay').stop().animate({
                                    opacity: s.overlayOpacity
                                }, s.speed);
                            }
                        }, function() {
                            $('img', this).stop().animate({
                                height: height,
                                marginLeft: 0,
                                marginTop: 0
                            }, s.speed);
                            if(s.overlay === true) {
                                $(this).parent().find('.zoomOverlay').stop().animate({
                                    opacity: 0
                                }, s.speed);
                            }
                        });
                    });
                });    
            });
        }
    });
})(jQuery);
