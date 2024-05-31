"use strict";
class Mail {
    later(email, after) {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email) {
        console.log(`Sent email to ${email} `);
        return true;
    }
    queue(email) {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
let name5 = new Mail();
name5.later("sagar1232gmail.com", 20);
