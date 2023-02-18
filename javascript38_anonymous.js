// anonymous function
// function has no name 
// stored in variable
a = function()
{
document.write("anonymous function has no name<br>")
};
a();


// passing a anonymous function

function display(myfun)
{
    return(myfun());
}
document.write(display(function(){
    return "passing a function ";
}));

// returning anonymous function

function display1(a)
{
    return function(){
        return a+b;
    };
}
var anonymous_fun = display1(10);
document.write(anonymous_fun);