// Optional cahining operator in javascript 


function getUser(id) {

    if(id <= 0) {
        return null;
    }

    // get the user from database
    // and return null if id does not exist
    // ...
    
    // if user was found, return the user
    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English'
        }
    }
}

let user = getUser(2);
let profile= user?.profile;
console.log(profile);
// Technically, it is equivalent to the following:
// let user = getUser(2);
// let profile = (user !== null || user !== undefined)
//             ? user.profile
//             : undefined;

// Combining with the nullish coalescing operator
let defaultProfile =  { default: '/default.png', language: 'English'};

let user1 = getUser(2);
let profile1 = user ?. profile ?? defaultProfile;
console.log(profile1);

// In this example, if the user.profile is null or undefined,
//  the profile will take the defaultProfile due to the nullish coalescing operator:

// Using optional chaining operator with function calls
let file = {
    read() {
        return 'file content';
    },
    write(content) {
        console.log(`Writing ${content} to file...`);
        return true;
    }
};
// syntax functionName ?. (args)
let compressedData = file.compress?.();
