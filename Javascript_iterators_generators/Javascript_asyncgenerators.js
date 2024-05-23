// same as async function generators but returns a promise in place of yeild 
// we always return a promise in yield like async operation in yeild 
async function* asyncSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i);
            }, 1000);
        });

    }
}

(async () => {
    let seq = asyncSequence(1, 5);

    for await (let num of seq) {
        console.log(num);
    }
})();

