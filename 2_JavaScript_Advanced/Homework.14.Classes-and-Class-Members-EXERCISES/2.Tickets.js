function manageDatabaseOfTickets(descriptions, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];
    for (let obj of descriptions) {
        let destination = obj.split('|')[0];
        let price = obj.split('|')[1];
        let status = obj.split('|')[2];
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
   }

   return tickets.sort((a, b) => a[sortingCriteria] > b[sortingCriteria]);
}

console.log(manageDatabaseOfTickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));

