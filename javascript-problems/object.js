// ****** Problem 01 ******

const student = {
  name: "Rafi Ahmed",
  subjects: {
    bangla: 85,
    math: 90,
    science: 78,
  },
  calculateGrade: function () {
    const marks = [
      this.subjects.bangla,
      this.subjects.math,
      this.subjects.science,
    ];
    let totalMarks = 0;
    for (let i = 0; i < marks.length; i++) {
      totalMarks += marks[i];
    }
    const average = totalMarks / marks.length;

    if (average >= 80) return "A+";
    if (average >= 70) return "A";
    if (average >= 60) return "B";
    if (average >= 50) return "C";
    return "F";
  },
};

// student grade based on average marks
console.log(student.name + " grade:", student.calculateGrade());
// Rafi Ahmed grade: B

// ****** Problem 02 ******
const bookstore = {
  book1: {
    title: "পদ্মা নদীর মাঝি",
    price: 350,
    quantity: 5,
    calculateTotal: function () {
      return this.price * this.quantity;
    },
  },
  book2: {
    title: "শেখ সাহেবের ৭ মার্চ",
    price: 420,
    quantity: 3,
    calculateTotal: function () {
      return this.price * this.quantity;
    },
  },
  book3: {
    title: "সোনার তরী",
    price: 280,
    quantity: 6,
    calculateTotal: function () {
      return this.price * this.quantity;
    },
  },

  calculateGrandTotal: function () {
    return (
      this.book1.calculateTotal() +
      this.book2.calculateTotal() +
      this.book3.calculateTotal()
    );
  },
};

console.log("Total Cost of Books:", bookstore.calculateGrandTotal() + " Taka");
// Total Cost of Books: 1620 Taka
