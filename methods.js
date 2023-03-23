const student = {
    name: 'Halima Tus Sadia',
    moeny: 5000,
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
}
const output = student.exam()
// console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining = student.treatDey(800);
console.log(remaining);