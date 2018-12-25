function usernames(input) {
    let result = [];
    let name;
    let domain;
    let domainInitials = [];

    for (let email of input) {
        //name = email.split('@')[0];
        //domain = email.split('@')[1];
        [name, domain] = email.split('@');
        domainInitials = domain.split('.');
        // domainInitials = domainInitials.map(x => x.substr(0, 1));
        domainInitials = domainInitials.map(x => x[0]);
        result.push(name + '.' + domainInitials.join(''));
    }

    console.log(result.join(', '));
}

usernames([
    'peshoo@gmail.com',
    'todor_43@mail.dir.bg',
    'foo@bar.com'
]);