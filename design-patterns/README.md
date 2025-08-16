# Design Patterns Quick Reference 🎯

A concise guide to remember design patterns for interviews and development.

## Creational Patterns 🏗️

### Singleton

- **What**: Only one instance exists globally
- **When**: Database connections, loggers, caches
- **Remember**: Private constructor + static getInstance()

### Factory

- **What**: Creates objects without specifying exact classes
- **When**: Different object types based on conditions
- **Remember**: VehicleFactory.create("car") → returns Car object

### Builder

- **What**: Constructs complex objects step by step
- **When**: Many optional parameters, fluent interface
- **Remember**: new CarBuilder().setBrand().setColor().build()

## Behavioral Patterns 🔄

### Observer

- **What**: One-to-many dependency, auto-notification
- **When**: Event systems, model-view architectures
- **Remember**: Subject notifies all observers when state changes

### Strategy

- **What**: Interchangeable algorithms/behaviors
- **When**: Multiple ways to do same thing (payment methods)
- **Remember**: context.setStrategy(new CreditCardPayment())

### Command

- **What**: Encapsulates requests as objects
- **When**: Undo/redo, queuing, macro operations
- **Remember**: remote.setCommand(lightOnCommand); remote.execute(); remote.undo()

### State

- **What**: Object behavior changes based on internal state
- **When**: State machines, UI states, game characters
- **Remember**: Traffic light - each state knows next state

### Template Method

- **What**: Algorithm skeleton, subclasses fill steps
- **When**: Similar processes with variations
- **Remember**: process() { step1(); step2(); step3(); } - subclasses override steps

## Structural Patterns 🔗

### Decorator

- **What**: Adds features to objects dynamically
- **When**: Stacking features (coffee + milk + sugar)
- **Remember**: Wrapping objects like layers of gift wrap

### Adapter

- **What**: Makes incompatible interfaces work together
- **When**: Legacy code integration, third-party libraries
- **Remember**: Electrical plug adapter - converts one interface to another

### Facade

- **What**: Simple interface to complex subsystem
- **When**: Hiding complexity, API wrappers
- **Remember**: TV remote vs manual circuit control

## Key Differences 🔍

### Strategy vs State

- **Strategy**: Algorithms are interchangeable, context doesn't change
- **State**: Behavior changes based on internal state, states transition

### Factory vs Builder

- **Factory**: Creates complete objects in one step
- **Builder**: Constructs objects step by step with optional parameters

### Decorator vs Adapter

- **Decorator**: Adds new functionality to existing interface
- **Adapter**: Converts one interface to another

### Observer vs Command

- **Observer**: One-to-many notification (publish-subscribe)
- **Command**: Encapsulates single action for execution/undo

### Facade vs Proxy

- **Facade**: Simplifies complex subsystem
- **Proxy**: Controls access to single object (lazy loading, security)

## Memory Hooks 🧠

| Pattern   | Remember As                                           |
| --------- | ----------------------------------------------------- |
| Singleton | "One ring to rule them all"                           |
| Factory   | "Car factory produces different car types"            |
| Builder   | "Build burger step by step"                           |
| Observer  | "Newspaper subscription - notify all subscribers"     |
| Strategy  | "Payment methods - credit card, PayPal, crypto"       |
| Command   | "TV remote buttons - execute and undo"                |
| State     | "Traffic light - each color knows what's next"        |
| Decorator | "Pizza toppings - wrap with more toppings"            |
| Adapter   | "Power plug adapter for different countries"          |
| Template  | "Recipe template - same steps, different ingredients" |

## Interview Quick Tips 💡

### Most Asked Patterns

1. **Singleton** (almost always)
2. **Factory** (very common)
3. **Observer** (frontend essential)
4. **Strategy** (shows polymorphism understanding)
5. **Decorator** (popular in frameworks)

### Common Questions

- "When not to use Singleton?" → Global state issues
- "Factory vs Abstract Factory?" → One vs family of objects
- "How does React use Observer?" → State changes trigger re-renders
- "Real-world Strategy example?" → Payment processing
- "Why Decorator over inheritance?" → Runtime composition vs compile-time

### Red Flags to Avoid

- ❌ Don't overuse patterns for simple problems
- ❌ Don't memorize without understanding the problem they solve
- ❌ Don't suggest Singleton for everything
- ❌ Don't confuse Strategy with State

## Framework Usage 🌟

### React

- **Component Pattern** (composition)
- **HOCs** (decorator)
- **Hooks** (facade + observer)

### Angular

- **Dependency Injection**
- **Decorators** (@Component)
- **Observer** (RxJS)

### Express.js

- **Chain of Responsibility** (middleware)
- **Factory** (app creation)

### Node.js

- **Module Pattern**
- **Observer** (EventEmitter)

---

**Remember**: Patterns solve problems. Always explain the **problem** first, then the **solution** (pattern).
