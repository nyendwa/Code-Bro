const PI = 3.142;


function getArea(radius) {
    return radius*PI;
}

function getVolumeOfCylinder(radius,height) {
    return PI * radius * height;
}
function getCircumference(radius) {
    return 2 * PI * radius;
}
export { PI, getArea, getVolumeOfCylinder, getCircumference };