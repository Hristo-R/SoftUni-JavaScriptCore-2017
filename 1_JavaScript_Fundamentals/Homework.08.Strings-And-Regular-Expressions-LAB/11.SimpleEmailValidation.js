function simpleEmailValidation(string) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+.[a-z]+$/g;
    let result = pattern.test(string);
    console.log(result  ? "Valid" : "Invalid")
}

simpleEmailValidation("in1valid@emai.bg");