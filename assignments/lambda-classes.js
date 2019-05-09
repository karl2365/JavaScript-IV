// CODE here for your Lambda Classes

class Person {
    constructor(args){
        this.name = args.name;
        this.age = args.age;
        this.location = args.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(iArgs){
        super(iArgs);
        this.specialty = iArgs.specialty;
        this.favLanguage = iArgs.favLanguage;
        this.catchPhrase = iArgs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    changeGrade(student, direction){
   
        let amount = Math.floor(Math.random()*10);
        if (direction == '+'){
            student.grade += amount;
        }else if (direction == "-"){
            student.grade -= amount;
        }else {
            console.log("Direction must be either + or -");
        }
        if (student.grade > 100){
            student.grade = 100;
        }  
        if (student.grade < 0){
            student.grade = 0;
        }
        console.log(`${student.name}'s grade has been updated to ${student.grade}`);
    }

    
}

class Student extends Person {
    constructor(sArgs){
        super(sArgs);
        this.previousBackground = sArgs.previousBackground;
        this.className = sArgs.className;
        this.favSubjects = sArgs.favSubjects;
        this.grade = sArgs.grade;
    }
    listSubjects(){
        for(let i = 0; i<this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge for ${subject}`);
    }
    graduate(){
        if (this.grade >= 70){
            console.log(`Congratulations ${this.name}, you are eligible to graduate!`)
        }else{
            console.log(`We're sorry ${this.name}, you need more points to graduate!`)
  
        }
    }
}

class ProjectManager extends Person{
    constructor(pmArgs){
        super(pmArgs);
        this.gradClassName = pmArgs.gradClassName;
        this.favInstructor = pmArgs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
    changeGrade(student, direction){
   
        let amount = Math.floor(Math.random()*10);
        if (direction == '+'){
            student.grade += amount;
        }else if (direction == "-"){
            student.grade -= amount;
        }else {
            console.log("Direction must be either + or -");
        }
        if (student.grade > 100){
            student.grade = 100;
        }  
        if (student.grade < 0){
            student.grade = 0;
        }
        console.log(`${student.name}'s grade has been updated to ${student.grade}`);
    }

    
}


dan = new Instructor({
    name: 'Dan',
    age: 38,
    location: 'Denver',
    specialty: 'javaScript',
    favLanguage: 'javaScript',
    catchPhrase: 'I love cats a lot!'

})

karl = new Student({
    name: 'Karl',
    age: 44,
    location: 'Highland',
    previousBackground: 'management',
    className: 'WEB20',
    favSubjects: ['Java', 'javaScript', 'HTML'],
    grade: 65
})

josh = new ProjectManager({
    name: 'Josh',
    age: 29,
    location: 'Arizona',
    gradClassName: 'WEB20',
    favInstructor: 'Josh Knell',
})

console.log(dan);
console.log(karl);
console.log(josh);

karl.listSubjects();
karl.PRAssignment('javaScript');
karl.sprintChallenge('HTML');

dan.demo('react');
dan.grade(karl, "java");

josh.standUp('web20');
josh.debugsCode(karl, 'react');

josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '-');
dan.changeGrade(karl, '-');
dan.changeGrade(karl, '-');
dan.changeGrade(karl, '-');
dan.changeGrade(karl, '-');
karl.graduate();
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
karl.graduate();
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
josh.changeGrade(karl, '+');
karl.graduate();
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');
josh.changeGrade(karl, '-');

