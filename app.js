var main = function (toDoObjects) {
    "use strict";
    var toDos = toDoObjects.map(function (toDo) {
        // просто возвращаем описание
        // этой задачи
        return toDo.description;

    });


    function convertToTags(obj) {
        var newToDosDescription = obj.map(function (newToDo) {
            return newToDo.description;
        });

        var newToDosTags = obj.map(function (toDo) {
            return toDo.tags;
        });

        var newTags = function (name, toDos) {
            this.name = name;
            this.toDos = toDos;
        }

        var newArray = [];
        var arrayTags = [];
        var strTag = '';
        var array = [];

        for (var i = 0; i < newToDosTags.length; i++) {
            for (var j = 0; j < newToDosTags[i].length; j++) {
                if (arrayTags.indexOf(newToDosTags[i][j]) == -1) {
                    arrayTags.push(newToDosTags[i][j]);
                    strTag = newToDosTags[i][j];
                    for (var k = 0; k < newToDosDescription.length; k++) {
                        if (newToDosTags[k].indexOf(newToDosTags[i][j]) != -1) {
                            newArray.push(newToDosDescription[k]);
                        }
                    }

                    var x = new newTags(strTag, newArray);
                    newArray = [];
                    array.push(x);
                }
            }
        }

        let json = JSON.stringify(array);
        json = JSON.parse(json);

        return json;
    }

    var $ = jQuery;

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
            $(".content").empty();
            if ($element.parent().is(":nth-child(1)")) {

                toDos.reverse()
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $(".content").append($content);
                toDos.reverse()
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $(".content").append($content);
            } else if ($element.parent().is(":nth-child(3)")) {
                
                console.log("Щелчок на вкладке Теги");
                
                var organizedByTag = convertToTags(toDoObjects);
                organizedByTag.forEach(function (tag) {
                    var $tagName = $("<h3>").text(tag.name),
                        $content = $("<ul>");
                    tag.toDos.forEach(function (description) {
                        var $li = $("<li>").text(description);
                        $content.append($li);
                    });
                    $(".content").append($tagName);
                    $(".content").append($content);
                });

            } else if ($element.parent().is(":nth-child(4)")) {

                $(".content").append("<p>");
                $(".content").append("<h3>Информация: </h3>");
                $(".content").append("<input id='description'>");
                $(".content").append("<br>");
                $(".content").append("<p>");
                $(".content").append("<h3>Описание: </h3>");
                $(".content").append("<input id='tags'>");
                $(".content").append("<p>");
                $(".content").append("<button>Добавить</button>");
                $(".content input").addClass("input");
                $(".content button").addClass("button");
            }
            return false;
            $content = $("<div>").append($input).append($button);
        })
    });
    $(".content").on("click", ".button", function () {
        if ($(".input").val() != "") {
            toDos.push($(".input").val());
            //alert("Предложение успешно добавлено в список!");
        }
        else {
            alert("ERROR: Длина добавляемого предложения должна быть > 0");
        }
        var newDescription = $("#description").val();
        var newTags = $("#tags").val().replace(/\s/g, "").split(',');

        var result = updateJson(toDoObjects, newDescription, newTags);
    });
    $(".tabs a:first-child span").trigger("click");


    function updateJson(toDoObjects, newDescription, newTags) {
        var newJsonObject = function (description, tags) {
            this.description = description;
            this.tags = tags
        }
        var newJson = new newJsonObject(newDescription, newTags);
        toDoObjects.push(newJson);
        alert("Предложение успешно добавлено в список!");

        return toDoObjects;
    }

};
function loadbody() {
    $(document).ready(function () {
        $.ajaxSetup({ cache: false });
        $.getJSON("todos.json", function (toDoObjects) {
            main(toDoObjects);

        });
    });
}
//main();