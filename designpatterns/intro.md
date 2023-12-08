## Design Patterns

### OOPS
- Inheritance
- Abstraction
- Encapsulation
- Polymorphism etc.
- Classes, Enums, and Structs.

### SOLID Principles - understand main motive
(i) https://lnkd.in/dzEUuuz3
(ii) https://lnkd.in/d2Q5Hcki
(iii) https://lnkd.in/dVxChnNY
(iv) https://lnkd.in/dVr8uVKu

### Design Patterns: - lots of them

a) Singleton (Thread Safe)
b) Factory Method
c) Abstract Factory
d) Strategy Pattern
e) Observer
f) Builder
g) Adapter
h) Asynchronous Design Patterns

#### Resources to learn design Patterns:
- https://lnkd.in/dcrKVew6
- https://lnkd.in/dh2_w_ui
- https://lnkd.in/dXJ-uH9y
- https://lnkd.in/dkQ-HGC3
- https://lnkd.in/dPQG-7TZ

##### Books
- Head First Design Patterns
- Design Patterns: Elements of Reusable Object Oriented Software

#### Design Patterns
a) Singleton design pattern

  Constructor - private. Why? If constructor is public then we can create instances of the object. JS doesnot support private public keywords so inside constructor we have to restrict object creation using consition

`
class Configuration {
  constructor(initValues) {
      if(Configuration.instance) {
        return Configuration.instance;
      }

      Configuration.instance = this;
      //
      //use init vals
  }
}
`

b) Factory design pattern


### Practice LLD Questions,
- Practice standard questions from workat.tech
- LLD Primer (GitHub) : https://lnkd.in/draBJC4U
- LeetCode : https://lnkd.in/dP88b5mW

#### How to practice any LLD question:
1) Don't directly jump into the code writing,
2) First list out all the requirements,
3) Start breaking the requirements into different modules,
4) Try to connect modules for communication,
5) Analyse which design pattern can be used,
6) It may happen that, you end up using more than 1 design pattern for different use cases, that's fine,
7) Try to make class diagrams to understand the communication between different classes,
8) You should know when to use Inheritance and When to use composition,
9) Always try to cover Mandatory Features first,
10) Never implement all the features at once, Try to Test whether the feature is working or not.
