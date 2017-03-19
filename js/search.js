/**
 * Created by Transport_Dept on 3/18/2017.
 * Search Function for Photo Gallery
 */

//Get input typed by user
//check input against alt attribute of all anchor tags in list
//if input is found in any alt attribute - display the image associated with the alt attribute
//Hide those that don't match input

$(document).ready(function() {
    $('#search').keyup(function(){

         var $search = $('#search').val().toLowerCase();

        $('.gallery-list li a img').each(function(index, captionValue){
            if($(this).attr('alt').indexOf($search) >= 0){
                $(this).closest('li').show();
            } else {
                $(this).closest('li').hide();
            }
        })






    });

}); /* end of document.ready */