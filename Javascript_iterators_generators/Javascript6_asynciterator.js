async function* numberGenerator() {
    for (let i = 1; i <= 5; i++) {
        // Simulate an asynchronous delay (e.g., waiting for data)
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i; // Yield the number after the delay
    }
}


(async () => {
    for await (const num of numberGenerator()) {
        console.log(num); // Logs the number after each 1-second delay
    }
})();

