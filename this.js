// console.log(this);
const halimaAkter = {
    name: 'Halima Akter',
    money: 5000,
    study: 'science',
    subjects: ['biology', 'phisics', 'chemistry'],
    exam: function () {
        console.log(this)
        return this.name + ' is a participating in a exam'
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function (amount) {
        this.moeny = this.moeny - amount;
        return this.moeny;
    }
};
halimaAkter.exam();
const sadiaAkter = {
    name: 'sadia Akter',
    money: 8000
};
sadiaAkter.exam = halimaAkter.exam;
sadiaAkter.exam();