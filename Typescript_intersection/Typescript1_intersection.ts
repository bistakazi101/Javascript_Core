interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name1: string;
}

interface Contact {
    email: string;
    phone: string;
}
// here types is created to create an alias 
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;


// The Employee type contains all properties of the Identity and Contact type:
let e:Employee={
    id:100,
    name1:"sagar ",
    email:"sagar123@gmail.com",
    phone:"9756789876"
}

