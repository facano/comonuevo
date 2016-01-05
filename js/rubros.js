$(document).ready(function(){

    $county_filter = $(".county-filter")

    function set_snippets(id_parent, select_value){
        if (select_value=="all"){
            $(id_parent + " .snippet-rubro").removeClass("hidden")
        }
        else{
            $(id_parent + " .snippet-rubro").addClass("hidden")
            $(id_parent + " ." + select_value).removeClass("hidden")
        }
    }

    //  Manage filter changes
    $county_filter.change(function(){
        id_parent =  "#" + $(this).data("rubro")
        select_value = $(this).val()
        set_snippets(id_parent, select_value)
    })

    $county_filter.select2()

});