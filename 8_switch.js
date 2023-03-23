// find the area of circle, triangle and rectangle?

// var area = 'square';
// var PI=3.142, l=5, b=4, r=3;

// if(area == 'circle'){
//     console.log("the area of circle is: " + PI*r**2);
// }else if(area == 'triangle'){
//     console.log("the area of triangle is: " + (l*b)/2);

// }else if(area == 'rectangle'){
//     console.log("the area of rectangle is: " + (l*b));

// }else{
//     console.log("please enter valid data");
// }


var area = 'rectangle';
var PI=3.142, l=5, b=4, r=3;

switch(area){
    case 'circle':
        console.log("the area of circle is: " + PI*r**2);
    break;
    
    case 'triangle':
        console.log("the area of triangle is: " + (l*b)/2);
    break;


    case 'rectangle':
        console.log("the area of rectangle is: " + (l*b));
    break;


    default:
        console.log("please enter valid data");
}