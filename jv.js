let suma1 = 12;
let suma2 = 5;
let suma3 = 6;
let suma4 = 20;

if (suma1 > suma2 && suma1 > suma3 && suma1 > suma4){
    console.log("J1 va ganando");
}
if (suma2 > suma1 && suma2 > suma3 && suma2 > suma4){
    console.log("J2 va ganando");
}
if (suma3 > suma1 && suma3 > suma2 && suma3 > suma4){
    console.log("J3 va ganando");
}
if  (suma4 > suma1 && suma4 > suma2 && suma4 > suma3){
    console.log("J4 va ganando");
}
if (suma1 < suma2 && suma1 < suma3 && suma1 < suma4){
    console.log("J1 va perdiendo");
}
if (suma2 < suma1 && suma2 < suma3 && suma2 < suma4){
    console.log("J2 va perdiendo");
}
if (suma3 < suma1 && suma3 < suma2 && suma3 < suma4){
    console.log("J3 va perdiendo");
}
if  (suma4 < suma1 && suma4 < suma2 && suma4 < suma3){
    console.log("J4 va perdiendo");
}
mayor2(n1,n2);

function mayor2(n1,n2)
{
    if (n1>n2) return n1;
    else return n2;
}
function mayor3(n1,n2,n3)
{
    if ((n1>n2) && (n1>n3)) 
    {
        return n1;
    }
    else if (n2>n3)
    {
        return n2;
    }
    else
    {
        return n3
    }

    
}
function mayor4(n1,n2,n3,n4)
{
    if ((n1>n2) && (n1>n3) && (n1>n4)) 
    {
        return n1;
    }
    else if ((n2>n3) && (n2>n4))
    {
        return n2;
    }
    else if (n3>n4)
    {
        return n3
    }
    else
    {
        return n4
    }

    
}
let anun= [];
anun[0]=9;
anun[1]=99;
anun[0]=999;