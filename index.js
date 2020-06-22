// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);//false
console.log(b instanceof Array);//true

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0;i<a.length;i++){
    a[i] = a[i] * 2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var colors_str1 = "";
for(var i=0;i<colors.length-1;i++){
    colors_str1 = colors_str1 + colors[i] + " ";
}
colors_str1 = colors_str1 + colors[colors.length-1];
console.log(colors_str1);
// case 2 output: 'Red+Green+White+Black'
var colors_str2 = "";
for(var i=0;i<colors.length-1;i++){
    colors_str2 = colors_str2 + colors[i] + "+";
}
colors_str2 = colors_str2 + colors[colors.length-1];
console.log(colors_str2);
// case 3 output: 'Red,Green,White,Black'
var colors_str3 = "";
for(var i=0;i<colors.length-1;i++){
    colors_str3 = colors_str3 + colors[i] + ",";
}
colors_str3 = colors_str3 + colors[colors.length-1];
console.log(colors_str3);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var temp;
for(var i=0;i<a.length-1;i++){
    for(var k = i+1;k<a.length;k++){
        if(a[i]<a[k]){
            temp = a[i];
            a[i] = a[k];
            a[k] = temp;
        }
    }   
}
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var max_count = 0;
var max_key = a[0];
var t = 0;
for(var i = 0;i<a.length;i++){
    t = 0;
    for(var j=0;j<a.length;j++){
        if(a[i]==a[j]){
            t++;
        }
    }
    if(t>max_count){
        max_key = a[i];
        max_count = t;
    }
}
console.log(max_key);