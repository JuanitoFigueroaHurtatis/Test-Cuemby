// JavaScript Document

$(document).ready ( function(){
	$(".table tbody tr:even").addClass("gris_claro");
	$(".planning li.normal:even").addClass("gris_claro");
	$(".desplegable .table tbody tr:even").addClass("gris_claro");
	$(".panel .content li:even").addClass("gris_claro");
<!--============================================================ -->
$("#idiomas p").click(function(){
	$(this).parent().find("ul").toggle("fast");
	$(this).parent().find("ul").toggleClass("activo");
	$("#idiomas p").toggleClass("activo");
});
<!--============================================================ -->
$(".abre_desplegable").click(function(){
	$(this).parent().parent().parent().next(".desplegable").toggle("fast");
});
<!--============================================================ -->
$("h1.titulo_contiene").click(function(){
	$(this).toggleClass("activo");
	$(this).next(".contenido").toggle("fast");
});
<!--============================================================ -->
$(".panel .title").click(function(){
	$(this).toggleClass("activo");
	$(this).next(".content").toggle("fast");
});

<!--============================================================ -->
	$(".pagina_sencilla").hide();
	$(".pagina_sencilla:first").show();
	$("#tabs li:first").addClass("activo");
	$("#tabs li").bind('click', function() {
		var linkIndex = $("#tabs li").index(this);
		$("#tabs li").removeClass("activo");
		$(".pagina_sencilla:visible").hide();
		$(".pagina_sencilla:eq("+linkIndex+")").show();
		$(this).addClass("activo");
		return false;
	});
<!--============================================================ -->
	$("#tabs_planning li:first").addClass("activo");
	$("#tabs_planning li").bind('click', function() {
		var linkIndex = $("#tabs_planning li").index(this);
		$("#tabs_planning li").removeClass("activo");
		$(".pagina_sencilla:visible").hide();
		$(".pagina_sencilla:eq("+linkIndex+")").show();
		$(this).addClass("activo");
		return false;
	});
<!--========================================================-->
var width = $(window).width(), height = $(window).height();
if (width <= 767){
	$('li.especial_01').appendTo('.navbar-right');
}
<!--============================================================ -->
function reset_tab(){
	$(".pagina_sencilla").hide();
		$("#tabs li").removeClass("activo");
};

$(".next_paso_1").click(function(){
	reset_tab();
	$(".pagina_sencilla:nth-child(2)").show();
	$("#tabs li:nth-child(2)").addClass("activo");

});
$(".next_paso_2").click(function(){
	reset_tab();
	$(".pagina_sencilla:nth-child(3)").show();
	$("#tabs li:nth-child(3)").addClass("activo");

});
$(".prev_paso_2").click(function(){
	reset_tab();
	$(".pagina_sencilla:nth-child(1)").show();
	$("#tabs li:nth-child(1)").addClass("activo");

});
$(".prev_paso_3").click(function(){
	reset_tab();
	$(".pagina_sencilla:nth-child(2)").show();
	$("#tabs li:nth-child(2)").addClass("activo");

});
<!--============================================================ -->
$(".pasos_2 .next_paso_1").click(function(){
	reset_tab();
	$(".pagina_sencilla:nth-child(2)").show();
	$("#tabs li:nth-child(2)").addClass("activo");

});
$(".pasos_2 .prev_paso_2").click(function(){
	reset_tab();
	$(".pagina_sencilla:nth-child(1)").show();
	$("#tabs li:nth-child(1)").addClass("activo");

});

<!--============================================================ -->
});
