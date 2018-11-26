function countOccurrences(targetString, text) {
    let count = 0;
    let index = text.indexOf(targetString);

    while (index > -1) {
        count++;
        index = text.indexOf(targetString, index + 1);
    }

    console.log(count);
}

countOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');