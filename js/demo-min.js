$(function(){$("select").selectmenu();$("#datepicker").datepicker();$("#tabs").tabs();$("#icons-library").hide();$("#accordion").accordion({heightStyle:"content"});$("#dialog").dialog({autoOpen:!1,modal:!0});$("#dialog-minimal").dialog({autoOpen:!1,modal:!0,dialogClass:"atk-dialog-minimal"});$("#opener").click(function(){$("#dialog").dialog("open")});$("#opener2").click(function(){$("#dialog-minimal").dialog("open")});$("#icons-toggle").click(function(){$("#icons-library").fadeIn();$(this).fadeOut()})});