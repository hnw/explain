$(function(){
  var main = $("#table-main");
  var selected = main;
  
  $("#tree").jstree({
    "plugins": [
      "themes",
      "html_data",
      "ui"
    ]
  })
  .bind("select_node.jstree", function(event, data){
    if (data.rslt.obj.attr("id")) {
      var select = $("#table-"+data.rslt.obj.attr("id"));
      if (select) {
        selected.css({"display": "none"});
        select.css({"display": ""});
        
        selected = select;
      }
    }
  })
  .delegate("a", "click", function (event, data) { event.preventDefault(); });
});
