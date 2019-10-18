function solve() {
    function getFibonator() {
        let f0 = 0, f1 = 1;
        return function() {
            let f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
            return f1;
        };
    }

    return fib();
}

function getFibonator() {
    let f0 = 0, f1 = 1;
    return function() {
        let f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
        return f1;
    };
}

let fib = getFibonator();
let n = 6;
for (let i = 0; i < n; i++) {
	fib();
}