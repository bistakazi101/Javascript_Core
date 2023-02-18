//javascript mixin or composition
var walking =
{
    walk: function () {

        return "I can walk";
    }
}
var talking =
{
    talk: function () {
        return "I can talk";
    }
};
var eating = {
    eat: function () {
        return "I can eat";
    },
};


var human = Object.assign({}, walking, talking, eating);
document.write("<br>Human:",human.eat());

var robot= Object.assign({},walking,talking);
document.write("<br>Robot:",robot.talk());