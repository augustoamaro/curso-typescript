"use strict";
var Geometria;
(function (Geometria) {
    // nested namespace
    let Area;
    (function (Area) {
        function circuferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circuferencia = circuferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
