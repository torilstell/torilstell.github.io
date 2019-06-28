$("form").submit(function(event){
    event.preventDefault();
    var newSearch= $("#search").val();
    window.location.replace(newSearch.toLowerCase()+".html");
})
  
