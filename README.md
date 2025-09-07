# JavaScript/TypeScript Fundamentals

This repository contains comprehensive examples and implementations of core JavaScript and TypeScript concepts, organized into two main sections: **Fundamentals** and **Design Patterns**.

## 📚 Fundamentals

The `fundamentals/` directory covers essential JavaScript/TypeScript concepts with practical examples:

### Core Language Features

- **[Variables](fundamentals/variables.ts)** - Variable declarations with `var`, `let`, and `const`, including scoping rules, hoisting, and Temporal Dead Zone
- **[Functions](fundamentals/functions.ts)** - Function declarations, expressions, arrow functions, hoisting, `this` binding, and `arguments` object
- **[Types](fundamentals/types.ts)** - TypeScript type system, type annotations, and type safety
- **[Closures](fundamentals/closures.ts)** - Lexical scoping, closure creation, and practical closure examples
- **[Modules](fundamentals/modules.ts)** - ES6 modules, import/export statements, and module organization

### Object-Oriented Programming

- **[OOP](fundamentals/oops.ts)** - Classes, constructors, inheritance, encapsulation, polymorphism, abstract classes, interfaces, getters/setters, and method overriding

### Asynchronous Programming

- **[Promises](fundamentals/promise.ts)** - Promise creation, chaining, error handling with `.then()`, `.catch()`, and `.finally()`
- **[Callbacks](fundamentals/callback.ts)** - Callback functions, callback patterns, and asynchronous callback handling
- **[Generators](fundamentals/generators.ts)** - Generator functions, `yield` keyword, and iterator protocol

### Control Flow & Iteration

- **[Loops](fundamentals/loops.ts)** - `for`, `while`, `do-while`, `for...in`, `for...of` loops and iteration patterns
- **[Recursion](fundamentals/recursion.ts)** - Recursive function patterns, base cases, and recursive problem solving

### Data Structures

- **[Arrays](fundamentals/array.ts)** - Array methods, manipulation, iteration, and array-based algorithms
- **[Strings](fundamentals/string.ts)** - String methods, manipulation, template literals, and string processing
- **[Maps](fundamentals/map.ts)** - Map data structure, key-value pairs, and Map methods
- **[Sets](fundamentals/set.ts)** - Set data structure, unique values, and Set operations
- **[Linked Lists](fundamentals/linkedlist.ts)** - Linked list implementation, node structures, and list operations
- **[Stacks](fundamentals/stack.ts)** - Stack data structure, LIFO operations, and stack-based algorithms
- **[Queues](fundamentals/queue.ts)** - Queue data structure, FIFO operations, and queue-based algorithms

### Algorithms & Problem-Solving Patterns

- **[Binary Search](fundamentals/binary_search.ts)** - Binary search algorithm implementation and variations
- **[Two Pointer](fundamentals/two_pointer.ts)** - Two-pointer technique for array and string problems
- **[Sliding Window](fundamentals/sliding_window.ts)** - Sliding window pattern for subarray/substring problems
- **[Pattern Recognition](fundamentals/pattern_recognition.ts)** - Common algorithmic patterns and problem-solving approaches

## 🎨 Design Patterns

The `design-patterns/` directory implements common software design patterns:

- **[Singleton](design-patterns/singleton.ts)** - Ensures a class has only one instance
- **[Factory](design-patterns/factory.ts)** - Creates objects without specifying exact classes
- **[Builder](design-patterns/builder.ts)** - Constructs complex objects step by step
- **[Observer](design-patterns/observer.ts)** - Defines subscription mechanism for object state changes
- **[Strategy](design-patterns/strategy.ts)** - Defines family of algorithms and makes them interchangeable
- **[Command](design-patterns/command.ts)** - Encapsulates requests as objects
- **[Decorator](design-patterns/decorator.ts)** - Adds behavior to objects dynamically
- **[Adapter](design-patterns/adapter.ts)** - Allows incompatible interfaces to work together
- **[State](design-patterns/state.ts)** - Allows object to alter behavior when internal state changes
- **[Template Method](design-patterns/template.ts)** - Defines skeleton of algorithm in base class

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- TypeScript compiler

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nabhag8848/DSA.git
cd typescript
```

2. Install TypeScript globally (if not already installed):
```bash
npm install -g typescript
```

### Running Examples

Navigate to any file and compile/run it:

```bash
# Compile TypeScript to JavaScript
tsc fundamentals/variables.ts

# Run the compiled JavaScript
node fundamentals/variables.js

# Or compile and run directly
ts-node fundamentals/variables.ts
```

### Project Structure

```
├── fundamentals/           # Core JavaScript/TypeScript concepts
│   ├── tsconfig.json      # TypeScript configuration
│   └── *.ts              # Individual concept implementations
├── design-patterns/       # Software design patterns
│   ├── README.md         # Design patterns documentation
│   └── *.ts             # Pattern implementations
└── README.md            # This file
```

## 📖 Learning Path

For beginners, we recommend following this learning sequence:

1. **Start with Basics**: `variables.ts` → `functions.ts` → `types.ts`
2. **Control Flow**: `loops.ts` → `recursion.ts`
3. **Advanced Concepts**: `closures.ts` → `callbacks.ts` → `promise.ts`
4. **Data Structures**: `array.ts` → `string.ts` → `stack.ts` → `queue.ts`
5. **OOP Concepts**: `oops.ts`
6. **Algorithms**: `binary_search.ts` → `two_pointer.ts` → `sliding_window.ts`
7. **Design Patterns**: Explore the `design-patterns/` directory

## 🤝 Contributing

Feel free to contribute by:
- Adding new examples
- Improving existing code
- Adding documentation
- Fixing bugs

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Learning! 🎉**

This repository serves as a comprehensive reference for JavaScript/TypeScript fundamentals and design patterns. Each file contains practical examples with comments explaining the concepts.
