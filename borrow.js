const halimaAkter = {
    name: 'Halima Akter',
    money: 5000,
    study: 'science',
    subjects: ['biology', 'phisics', 'chemistry'],
    exam: function () {
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
const result1 = halimaAkter.exam();
const sadiaAkter = {
    name: 'sadia Akter',
    money: 8000
};
const result2 = halimaAkter.exam.call(sadiaAkter);
console.log(result2);
const treatMoney = halimaAkter.treatDey.call(sadiaAkter, 600);
// console.log(treatMoney);
const treatMoney2 = halimaAkter.treatDey.apply(sadiaAkter, [500]);
console.log(treatMoney2);
