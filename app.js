var main = function () {
    "use strict";
    var toDos = [
        "21.08.2023 Pulkovo-Igonin A.F. ",
        "01.07.2023 Domodedovo-Shirov A.G. ",
        "24.09.2023 Pulkovo-Kolomoiskii T.P. ",
        "24.09.2023 Pulkovo-Kolomoiskaya H.H. ",
        "05.01.2024 CKA-Latipov A.F. ",
        "21.08.2023 Pulkovo-Gavrilov A.F. "
    ];
    
       
    $(".tabs a span").toArray().forEach(function (element) {
        //создаем обработчик щелчков для этого элемента
        $(element).on("click", function () {
            $(".tabs a span").removeClass("active");
            $(element).addClass("active");
            //$("main .content").empty();
            return false;
        });


        $(element).on("click", function () {
            var $element = $(element),
                $content;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                
                toDos.reverse()
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
                toDos.reverse()
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(3)")) {
                
                $(".content").append("<p>");
                $(".content").append("<input>");
                $(".content").append("<br>");
                $(".content").append("<p>");
				$(".content").append("<button>+</button>");
				$(".content input").addClass("input");
				$(".content button").addClass("button");
            }
            return false;
        })   
               
            
      


    });
    $(".content").on("click", ".button", function() {
		if ($(".input").val() != "") {
			toDos.push($(".input").val());
			alert("Предложение успешно добавлено в список!");
		}
		else {
			alert("ERROR: Длина добавляемого предложения должна быть > 0");
		}
	});
    $(".tabs a:first-child span").trigger("click");
};


main();