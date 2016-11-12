var jQuery = jQuery.noConflict();
 
jQuery(document).ready(function ($) {
    
    "use strict";
    
    $("#collapse1").collapsible({
        expand: function (event, ui) {
            $("#collapse2").collapsible({
                collapsed: true
            });
            $("#collapse3").collapsible({
                collapsed: true
            });
        }
    });
    
    $("#collapse2").collapsible({
        expand: function (event, ui) {
            $("#collapse1").collapsible({
                collapsed: true
            });
            $("#collapse3").collapsible({
                collapsed: true
            });
        }
    });
    
    $("#collapse3").collapsible({
        expand: function (event, ui) {
            $("#collapse1").collapsible({
                collapsed: true
            });
            $("#collapse2").collapsible({
                collapsed: true
            });
        }
    });
    
});