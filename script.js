        const btn = document.getElementById('btn');
        const output = document.getElementById('output');

        btn.addEventListener('click', () => {
            const inputValue = document.getElementById('ip').value;

            // First promise
            const firstPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(Number(inputValue));
                }, 2000);
            });

            // Chain promises
            firstPromise
                .then(number => {
                    output.textContent = `Result: ${number}`;
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(number * 2);
                        }, 2000);
                    });
                })
                .then(number => {
                    output.textContent = `Result: ${number}`;
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(number - 3);
                        }, 1000);
                    });
                })
                .then(number => {
                    output.textContent = `Result: ${number}`;
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(number / 2);
                        }, 1000);
                    });
                })
                .then(number => {
                    output.textContent = `Result: ${number}`;
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(number + 10);
                        }, 1000);
                    });
                })
                .then(finalResult => {
                    output.textContent = `Final Result: ${finalResult}`;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
