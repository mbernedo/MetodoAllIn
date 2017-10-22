/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $(".bienv").click(function () {
        $("#content").hide("fast");
        $("#information").hide("fast");
        $("#welcome").show("fast");
    });

    $(".cont").click(function () {
        $("#welcome").hide("fast");
        $("#information").hide("fast");
        $("#content").show("fast");
    });

    $(".info").click(function () {
        $("#welcome").hide("fast");
        $("#content").hide("fast");
        $("#information").show("fast");
    });

    $(".menu_d").mouseenter(function () {
        $("#move_down2").css("margin-top", "75px");
    }).mouseleave(function () {
        $("#move_down2").css("margin-top", "0px");
    });
    /*$(".figura").click(function () {
     var id = $(this).attr("id");
     $(this).map(function (i, elem) {
     $(".figura").css("background-image", "url(./imagenes/octo_blanco.png)");
     });
     $("#im_shape_1").css("background-image", "url(./imagenes/Icon11.png)");
     $("#im_shape_2").css("background-image", "url(./imagenes/Icon22.png)");
     $("#im_shape_3").css("background-image", "url(./imagenes/Icon33.png)");
     $("#im_shape_4").css("background-image", "url(./imagenes/Icon44.png)");
     $(".text_shape").css("color", "#284c5a");
     $("#" + id).css("background-image", "url(./imagenes/octo_color.png)");
     $("#im_shape_" + id).css("background-image", "url(./imagenes/Icon" + id + ".png)");
     $("#text_shape" + id).css("color", "#ffffff");
     });*/
    $(".figura").click(function () {
        var id = $(this).attr("id");
        var idioma = $(this).attr("lang");
        var img;
        if (id > 4) {
            img = id / 5;
            $(".contenedor_pops").css("display", "block");
        } else {
            img = id;
        }
        if (idioma === "en") {
            if (id === "5") {
                $(".popupjs").html("• Staff training" +
                        "<br>" +
                        "• Strengthening og capacities" +
                        "<br>" +
                        "• Lidership and functions assigning" +
                        "<br>" +
                        "• Work enviroment analysis");
            } else if (id === "10") {
                $(".popupjs").html("• Organization of objectives" +
                        "<br>" +
                        "• Complete brand development" +
                        "<br>" +
                        "• Logistics and supply chain" +
                        "<br>" +
                        "• Value chain");
            } else if (id === "15") {
                $(".popupjs").html("• Student counseling" +
                        "<br>" +
                        "• Early stimulation" +
                        "<br>" +
                        "• Couple objectives" +
                        "<br>" +
                        "• Community inclusion");
            } else if (id === "20") {
                $(".popupjs").html("• Community health and care" +
                        "<br>" +
                        "• City hall integration" +
                        "<br>" +
                        "• Responsible recyclage" +
                        "<br>" +
                        "• Energetic renovation");
            }
        } else if (idioma === "es") {
            if (id === "5") {
                $(".popupjs").html("• Capacitación de personal" +
                        "<br>" +
                        "• Fortalecimiento de capacidades" +
                        "<br>" +
                        "• Liderazgo y asignación de funciones" +
                        "<br>" +
                        "• Análisis de clima laboral");
            } else if (id === "10") {
                $(".popupjs").html("• Organización de objetivos" +
                        "<br>" +
                        "• Desarrollo integral de marcas" +
                        "<br>" +
                        "• Logística y cadena de suministro" +
                        "<br>" +
                        "• Cadena de valor");
            } else if (id === "15") {
                $(".popupjs").html("• Orientación vocacional" +
                        "<br>" +
                        "• Estimulación temprana" +
                        "<br>" +
                        "• Objetivos de pareja" +
                        "<br>" +
                        "• Inclusión a la comunidad");
            } else if (id === "20") {
                $(".popupjs").html("• Salud comunitaria" +
                        "<br>" +
                        "• Integración municipal" +
                        "<br>" +
                        "• Reciclaje responsable" +
                        "<br>" +
                        "• Renovación energética");
            }
        }
        $(this).map(function (i, elem) {
            $(".figura").css("background-image", "url(../imagenes/octo_blanco.png)");
        });
        $("#im_shape_1").css("background-image", "url(../imagenes/Icon11.png)");
        $("#im_shape_2").css("background-image", "url(../imagenes/Icon22.png)");
        $("#im_shape_3").css("background-image", "url(../imagenes/Icon33.png)");
        $("#im_shape_4").css("background-image", "url(../imagenes/Icon44.png)");
        $("#im_shape_5").css("background-image", "url(../imagenes/Icon11.png)");
        $("#im_shape_10").css("background-image", "url(../imagenes/Icon22.png)");
        $("#im_shape_15").css("background-image", "url(../imagenes/Icon33.png)");
        $("#im_shape_20").css("background-image", "url(../imagenes/Icon44.png)");
        $(".text_shape").css("color", "#284c5a");
        $("#" + id).css("background-image", "url(../imagenes/octo_color.png)");
        $("#im_shape_" + id).css("background-image", "url(../imagenes/Icon" + img + ".png)");
        $("#text_shape" + id).css("color", "#ffffff");
    });
});

