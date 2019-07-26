function init() {

}

function getHeight() {
    topAngle = parseFloat(document.forms[0].topAngle.value)
    datumAngle = parseFloat(document.forms[0].datumAngle.value)
    distance = parseFloat(document.forms[0].distance.value)
    datumHeight = parseFloat(document.forms[0].datumHeight.value)
    height = calculateDegHeight(topAngle, datumAngle, distance, datumHeight)
    document.getElementById("output").innerText = height

}
function degToRad(V) {

    V=V*Math.PI/180
    return(V)
}




function calculateDegHeight(top, datum, dist, datumht) {



        if (top > 50) {

            alert("Angles greater than 50 degrees may produce poor estimates of height")

        }

        top = degToRad(top)

        datum = degToRad(datum)

        height = Math.round(10 * (datumht + dist * (Math.tan(top) * Math.abs(Math.cos(datum) - Math.sin(datum))))) / 10
    return (height)

}


function calculatePercHeight(top, datum, dist, datumht) {

    if (numcheck(top, 50, 135, "Top angle") && numcheck(datum, -50, 50, "Datum angle") && numcheck(dist, 5, 120, "Distance") && numcheck(datumht, 0, 5, "Datum Height")) {

        if (top > 120) {

            alert("Angles greater than 120% may produce poor estimates of height")
        }

        height = Math.round(10 * (datumht + dist * ((top - datum) / Math.sqrt(10000 + datum * datum)))) / 10

    } else {

        height = ""

    }

    return (height)

}

