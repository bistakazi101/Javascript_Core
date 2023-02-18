
//factory function

function mobile(model_no) {
    return {
        model: model_no,
        price: function () {
            return ("price of mobile is rs: 3000 ")
        }
    };
}

var samsung= mobile(3100);
document.write("Mobile price of samsung",mobile.model);
var Mi= mobile(4001);
document.write("Mobile price of Mi",mobile.price);