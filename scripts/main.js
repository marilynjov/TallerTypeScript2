import { series } from "./data.js";
var seriesTabla = document.getElementById("series");
var promedioT = document.getElementById("promedio");
var Series = series;
mostrardatosTabla(Series);
promedioT.innerHTML = "".concat(average(Series));
console.log(series);
function mostrardatosTabla(Series) {
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            " <td scope=\"col\"> &nbsp ".concat(serie.id, " &nbsp </td>\n\n        <td scope=\"col\"> <button type=\"button\" class=\"btn shadow-none\" id=\"btn\" > &nbsp ").concat(serie.Name, " &nbsp </button> </td>\n\n        <td scope=\"col\" style='text-align:center'> &nbsp ").concat(serie.Chan, " &nbsp </td>\n        <td scope=\"col\" style='text-align:center'> &nbsp ").concat(serie.Seas, " &nbsp </td>");
        seriesTabla.appendChild(trElement);
        trElement.children[1].classList.add("link");
        trElement.children[1].addEventListener("click", function () { cardMaker(serie, serie.id); });
    };
    for (var _i = 0, Series_1 = Series; _i < Series_1.length; _i++) {
        var serie = Series_1[_i];
        _loop_1(serie);
    }
}
function average(Series) {
    var count = 0;
    var cant = 0;
    for (var _i = 0, Series_2 = Series; _i < Series_2.length; _i++) {
        var serie = Series_2[_i];
        count += serie.Seas;
        cant += 1;
    }
    var promedio = count / cant;
    console.log(promedio);
    return promedio;
}
function cardMaker(Serie, id) {
    for (var _i = 0, Series_3 = Series; _i < Series_3.length; _i++) {
        var serie = Series_3[_i];
        if (id == serie.id) {
            var card = document.getElementById("card");
            card.innerHTML =
                "<div class=\"card\" style=\"width: 18rem;\">\n                <img src=\"".concat(serie.img, "\" class=\"card-img-top\" alt=\"Foto\"/>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"> ").concat(serie.Name, " </h5>\n                    <p class=\"card-text\">").concat(serie.set, "</p>\n                </div>\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\">").concat(serie.Chan, "</li>\n                    </ul>\n                <div class=\"card-body\">\n                    <a href=\"").concat(serie.link, "\" class=\"card-link\"> Ir a la P\u00E1gina </a>\n                </div>\n            </div>");
        }
    }
}
