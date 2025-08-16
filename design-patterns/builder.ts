class Student {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }
}

class StudentBuilder {
  private name: string = ""; // Initialize with default value
  private age: number = 0; // Initialize with default value

  setName(name: string): StudentBuilder {
    // Add return type
    this.name = name;
    return this;
  }

  setAge(age: number): StudentBuilder {
    // Add return type
    this.age = age;
    return this;
  }

  build(): Student {
    // Renamed from getStudent for better naming
    if (!this.name || this.age <= 0) {
      // Better validation
      throw new Error("Name is required and age must be greater than 0");
    }

    return new Student(this.name, this.age);
  }
}

// Usage example
const builder = new StudentBuilder().setAge(22).setName("nabhag");
const student = builder.build(); // Fixed method name
const student1 = builder.build(); // Fixed method name
console.log(student.getAge(), student1.getAge());
console.log(student === student1); // false - different instances

// Better usage - create fresh builder for each student
const student2 = new StudentBuilder().setName("Alice").setAge(20).build();

const student3 = new StudentBuilder().setName("Bob").setAge(25).build();

console.log(`Student 2: ${student2.getName()}, Age: ${student2.getAge()}`);
console.log(`Student 3: ${student3.getName()}, Age: ${student3.getAge()}`);
