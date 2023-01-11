let findHardestTest = (grades) => {
  let numGrades = grades[Object.keys(grades)[0]].length;

  let testAverages = [];

  for (let i = 0; i < numGrades; i++) {
    let testTotal = 0;
    let totalPeople = 0;

    for (prop in grades) {
      totalPeople += 1;
      testTotal += grades[prop][i];
    }
    testAverages.push(Math.floor(testTotal / totalPeople));
  }

  let hardestTestGrade = Math.min(...testAverages);

  console.log(hardestTestGrade);

  let hardestTestNumber = testAverages.indexOf(hardestTestGrade) + 1;

  console.log(`Test ${hardestTestNumber} is the hardest test`);
};

let mainGrades = {
  April: [88, 56, 55, 97, 100, 88, 100, 98],
  Tammy1: [78, 46, 92, 84, 55, 74, 89, 80],
  Ben: [77, 59, 89, 47, 57, 83, 90, 89],
  Garry: [54, 90, 84, 88, 39, 73, 67, 79],
  Tammy2: [86, 49, 90, 77, 89, 92, 88, 75],
};

findHardestTest(main);
