
let studentData = {
    name: "Andi",
    java_programming_score: 80,
    python_programming_score: 100,
    javascript_programming_score: 80
};

console.log("--- Mengakses Data ---");
console.log(studentData["name"]);
console.log(studentData["java_programming_score"]);
console.log(studentData.python_programming_score);
console.log(studentData.javascript_programming_score);


let studentWithFunction = {
    name: "Andi",
    java_programming_score: 80,
    python_programming_score: 100,
    javascript_programming_score: 80,
    infoStudent: function () {
        return (
            "Name: " + this.name + "\n" +
            "Java Score: " + this.java_programming_score + "\n" +
            "Python Score: " + this.python_programming_score + "\n" +
            "JS Score: " + this.javascript_programming_score
        );
    }
};

console.log("\n--- Menjalankan Fungsi infoStudent() ---");
console.log(studentWithFunction.infoStudent());


console.log("\n--- Setelah Mengubah Nama menjadi Doni ---");
console.log(studentWithFunction.infoStudent());


const studentMutable = {
    name: "Andi",
    java_programming_score: 80,
    python_programming_score: 100,
    javascript_programming_score: 80,
    infoStudent: function () {
        return (
            "Name: " + this.name + "\n" +
            "Java Score: " + this.java_programming_score + "\n" +
            "Python Score: " + this.python_programming_score + "\n" +
            "JS Score: " + this.javascript_programming_score
        );
    }
};

studentMutable["id_number"] = "1182020";
console.log("\n--- Setelah Menambah key id_number ---");
console.log(studentMutable);


delete studentMutable["id_number"];
console.log("\n--- Setelah Menghapus key id_number ---");
console.log(studentMutable);


const studentsArray = [
    {
        name: "Andi",
        java_programming_score: 80,
        python_programming_score: 100,
        javascript_programming_score: 80
    },
    {
        name: "Rudi",
        java_programming_score: 50,
        python_programming_score: 90,
        javascript_programming_score: 70
    },
    {
        name: "Dio",
        java_programming_score: 70,
        python_programming_score: 95,
        javascript_programming_score: 60
    }
];

console.log("\n--- Mengakses Objek di Dalam Array ---");
for (let i in studentsArray) {
    for (let j in studentsArray[i]) {
        console.log(j + " : " + studentsArray[i][j]);
    }
}