// In JavaScript, a regular function is executed based on the run-to-completion model. 
// It cannot pause midway and then continues from where it paused.

function *generators()
    {
        console.log("number 1")
        console.log("number 2")

        // yeild keyword is used to pause and resume a generator function (function*).
        yield 1;
        console.log("number 3")
        yield 2;
        console.log("number 5")
    }

    let gen = generators()
    console.log("number 4")
    console.log(gen.next())
    // here yeald returns value 1 and iteration is false 
    console.log(gen.next())
    console.log(gen.next())