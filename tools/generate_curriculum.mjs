import fs from "node:fs";
import path from "node:path";

const outDir = path.join("app", "src", "main", "assets");
fs.mkdirSync(outDir, { recursive: true });

const levelSpecs = [
  {
    title: "Absolute Computer and Programming Basics",
    focus: "understanding computers, programs, Java, and beginner vocabulary",
    topics: [
      "What is a computer program?",
      "What is programming?",
      "What is a programming language?",
      "What is Java?",
      "Why Java is used",
      "What is JDK?",
      "What is JVM?",
      "What is JRE?",
      "What is source code?",
      "What is compilation?",
      "What is bytecode?",
      "What is an IDE?",
      "Android Studio, IntelliJ, and VS Code",
      "What is syntax?",
      "What is an error?",
      "What is debugging?"
    ]
  },
  {
    title: "Java Setup and First Program",
    focus: "writing, reading, and mentally running the first Java program",
    topics: [
      "Installing Java",
      "Writing first Java program",
      "public class Main explanation",
      "main method explanation",
      "System.out.println explanation",
      "Comments",
      "Basic structure of a Java program",
      "Common beginner mistakes",
      "How Java code runs step by step",
      "First program dry run"
    ]
  },
  {
    title: "Variables and Data Types",
    focus: "storing data clearly and choosing the right type",
    topics: [
      "What is data?",
      "What is a variable?",
      "Why variables are needed",
      "int",
      "double",
      "float",
      "char",
      "boolean",
      "String",
      "long",
      "short",
      "byte",
      "final constants",
      "Type conversion",
      "Casting",
      "Naming rules",
      "Good naming practices"
    ]
  },
  {
    title: "Operators",
    focus: "using symbols that calculate, compare, assign, and combine logic",
    topics: [
      "Arithmetic operators",
      "Assignment operators",
      "Comparison operators",
      "Logical operators",
      "Increment and decrement",
      "Operator precedence",
      "Examples with simple math",
      "Common operator mistakes",
      "Boolean expression dry runs",
      "Building small formulas"
    ]
  },
  {
    title: "Input and Output",
    focus: "receiving user input and showing clean output",
    topics: [
      "Scanner",
      "Taking user input",
      "Reading int",
      "Reading double",
      "Reading String",
      "Difference between next() and nextLine()",
      "Output formatting",
      "Input validation basics",
      "Mini project: personal greeting app",
      "Mini project: bill calculator"
    ]
  },
  {
    title: "Conditional Statements",
    focus: "making programs choose different paths",
    topics: [
      "if",
      "if else",
      "else if",
      "nested if",
      "switch",
      "ternary operator",
      "Real-life decision examples",
      "Practice problems",
      "Guard clauses",
      "Decision table dry runs"
    ]
  },
  {
    title: "Loops",
    focus: "repeating work safely without copying code",
    topics: [
      "What is repetition?",
      "for loop",
      "while loop",
      "do while loop",
      "nested loops",
      "break",
      "continue",
      "Infinite loops",
      "Pattern printing",
      "Loop dry run tables",
      "Loop counters and accumulators",
      "Choosing the right loop"
    ]
  },
  {
    title: "Arrays",
    focus: "storing many related values and processing them with loops",
    topics: [
      "What is an array?",
      "Why arrays are needed",
      "Declaring arrays",
      "Accessing elements",
      "Updating elements",
      "Array length",
      "Loops with arrays",
      "Searching in arrays",
      "Finding max and min",
      "Sum and average",
      "2D arrays",
      "Matrix examples",
      "Array boundary mistakes",
      "Array dry runs"
    ]
  },
  {
    title: "Strings",
    focus: "working with text correctly and avoiding common traps",
    topics: [
      "String basics",
      "String methods",
      "charAt",
      "length",
      "substring",
      "equals vs ==",
      "contains",
      "replace",
      "split",
      "trim",
      "StringBuilder",
      "StringBuffer",
      "Common String interview questions",
      "Text cleaning mini project"
    ]
  },
  {
    title: "Methods",
    focus: "breaking programs into named reusable blocks",
    topics: [
      "What is a method?",
      "Why methods are used",
      "Method declaration",
      "Method calling",
      "Parameters",
      "Return values",
      "void methods",
      "Method overloading",
      "Scope",
      "Recursion basics",
      "Single responsibility in methods",
      "Method design practice"
    ]
  },
  {
    title: "Object-Oriented Programming Basics",
    focus: "modeling real things with classes, objects, fields, and behavior",
    topics: [
      "What is OOP?",
      "Class",
      "Object",
      "Fields",
      "Methods in classes",
      "Constructor",
      "this keyword",
      "Object creation",
      "Real-life examples",
      "Memory explanation in simple words",
      "Student class project",
      "Bank account class project"
    ]
  },
  {
    title: "OOP Core Concepts",
    focus: "protecting code and using abstraction to keep systems flexible",
    topics: [
      "Encapsulation",
      "Access modifiers",
      "private",
      "public",
      "protected",
      "default access",
      "Getters and setters",
      "Inheritance",
      "super keyword",
      "Method overriding",
      "Polymorphism",
      "Abstraction",
      "Abstract classes",
      "Interfaces",
      "Composition vs inheritance",
      "OOP design mini project"
    ]
  },
  {
    title: "Exception Handling",
    focus: "handling failures without crashing the whole program",
    topics: [
      "What is an exception?",
      "Difference between error and exception",
      "try",
      "catch",
      "finally",
      "throw",
      "throws",
      "Checked exceptions",
      "Unchecked exceptions",
      "Custom exceptions",
      "Best practices",
      "Defensive input handling"
    ]
  },
  {
    title: "Collections Framework",
    focus: "choosing the right ready-made data structure",
    topics: [
      "What is a collection?",
      "ArrayList",
      "LinkedList",
      "HashSet",
      "TreeSet",
      "HashMap",
      "TreeMap",
      "Queue",
      "Stack",
      "Iterator",
      "forEach",
      "Comparable",
      "Comparator",
      "When to use each collection",
      "Collection diagrams",
      "Inventory collection project"
    ]
  },
  {
    title: "File Handling",
    focus: "reading and writing local data safely",
    topics: [
      "Reading files",
      "Writing files",
      "File class",
      "BufferedReader",
      "BufferedWriter",
      "FileReader",
      "FileWriter",
      "try-with-resources",
      "CSV basics",
      "Serialization basics",
      "File error handling",
      "Text report generator project"
    ]
  },
  {
    title: "Generics",
    focus: "writing reusable type-safe code",
    topics: [
      "What are generics?",
      "Why generics are useful",
      "Generic classes",
      "Generic methods",
      "Bounded types",
      "Wildcards",
      "Type safety",
      "Generic repository pattern",
      "Generic utility methods",
      "Common generic mistakes"
    ]
  },
  {
    title: "Functional Java",
    focus: "writing expressive data-processing code with functions and streams",
    topics: [
      "Lambda expressions",
      "Functional interfaces",
      "Predicate",
      "Consumer",
      "Supplier",
      "Function",
      "Method references",
      "Streams API",
      "map",
      "filter",
      "reduce",
      "collect",
      "Optional",
      "Stream debugging",
      "Functional refactoring practice"
    ]
  },
  {
    title: "Date, Time, Math, Utility Classes",
    focus: "using common Java utility classes in real programs",
    topics: [
      "Math class",
      "Random",
      "LocalDate",
      "LocalTime",
      "LocalDateTime",
      "DateTimeFormatter",
      "UUID",
      "Objects class",
      "Arrays utility class",
      "Collections utility class",
      "Date validation project",
      "Random quiz generator project"
    ]
  },
  {
    title: "Multithreading and Concurrency",
    focus: "running work at the same time without corrupting data",
    topics: [
      "What is a thread?",
      "Process vs thread",
      "Creating threads",
      "Runnable",
      "Thread class",
      "sleep",
      "join",
      "synchronized",
      "race condition",
      "deadlock",
      "ExecutorService",
      "Callable and Future",
      "CompletableFuture basics",
      "Thread safety",
      "Producer consumer concept",
      "Concurrent collections"
    ]
  },
  {
    title: "Advanced OOP and Design",
    focus: "building maintainable systems that can change safely",
    topics: [
      "SOLID principles",
      "Single Responsibility Principle",
      "Open Closed Principle",
      "Liskov Substitution Principle",
      "Interface Segregation Principle",
      "Dependency Inversion Principle",
      "Design patterns basics",
      "Singleton",
      "Factory",
      "Builder",
      "Strategy",
      "Observer",
      "MVC",
      "Clean code",
      "Refactoring",
      "Code smells",
      "Layered architecture",
      "Dependency injection concept"
    ]
  },
  {
    title: "Java Memory and JVM Internals",
    focus: "understanding what happens under the hood",
    topics: [
      "Stack memory",
      "Heap memory",
      "Garbage collection",
      "Object references",
      "String pool",
      "Class loading",
      "JVM architecture",
      "JIT compiler",
      "Memory leaks",
      "Profiling basics",
      "Reference types",
      "Performance measurement basics"
    ]
  },
  {
    title: "Java Database Basics",
    focus: "persisting data and designing database access cleanly",
    topics: [
      "JDBC",
      "Connecting to database",
      "CRUD operations",
      "PreparedStatement",
      "SQL injection prevention",
      "Transactions",
      "DAO pattern",
      "Connection lifecycle",
      "Mapping rows to objects",
      "Repository service separation",
      "Student database project",
      "Inventory CRUD project"
    ]
  },
  {
    title: "Java Networking",
    focus: "communicating over HTTP and understanding client-server systems",
    topics: [
      "HTTP basics",
      "URL class",
      "HttpClient",
      "REST API basics",
      "JSON basics",
      "Client-server concept",
      "Sockets basics",
      "Status codes",
      "Request and response headers",
      "Timeouts and retries",
      "Simple REST API client",
      "Network error handling"
    ]
  },
  {
    title: "Testing in Java",
    focus: "proving code works and changing it with confidence",
    topics: [
      "Why testing matters",
      "Unit testing",
      "JUnit",
      "Assertions",
      "Test cases",
      "Mocking basics",
      "TDD basics",
      "Arrange Act Assert",
      "Testing edge cases",
      "Testing exceptions",
      "Testable design",
      "Coverage and confidence"
    ]
  },
  {
    title: "Build Tools and Project Structure",
    focus: "organizing real projects and managing dependencies",
    topics: [
      "What is a dependency?",
      "Maven basics",
      "Gradle basics",
      "pom.xml",
      "build.gradle",
      "Project folder structure",
      "External libraries",
      "Versioning",
      "Semantic versioning",
      "Multi-module project concept",
      "Build lifecycle",
      "Dependency conflicts"
    ]
  },
  {
    title: "Java for Android Basics",
    focus: "connecting Java knowledge to Android app development",
    topics: [
      "How Java relates to Android",
      "Activity",
      "Fragment",
      "Intent",
      "RecyclerView concept",
      "XML vs Compose concept",
      "Android lifecycle basics",
      "Permissions",
      "APK",
      "Gradle in Android",
      "Local storage on Android",
      "Android debugging basics"
    ]
  },
  {
    title: "Java Interview and Problem Solving",
    focus: "thinking clearly under interview and workplace pressure",
    topics: [
      "Common Java interview questions",
      "Dry run practice",
      "Debugging practice",
      "MCQs",
      "Coding exercises",
      "Mini projects",
      "DSA basics using Java",
      "Explaining trade-offs",
      "Whiteboard problem style",
      "Reading unfamiliar code",
      "Refactoring interview answers",
      "Behavioral project storytelling"
    ]
  },
  {
    title: "Data Structures and Algorithms in Java",
    focus: "solving problems efficiently and explaining complexity",
    topics: [
      "Big O notation",
      "Arrays revision",
      "Linked lists",
      "Stack",
      "Queue",
      "HashMap",
      "Trees",
      "Binary search",
      "Sorting algorithms",
      "Recursion",
      "Graph basics",
      "Practice problems",
      "Two pointer technique",
      "Sliding window technique",
      "Breadth first search",
      "Depth first search",
      "Dynamic programming idea",
      "Algorithm dry runs"
    ]
  },
  {
    title: "Real Java Projects",
    focus: "building portfolio projects from beginner to advanced",
    topics: [
      "Calculator",
      "Number guessing game",
      "Student grade system",
      "Bank account system",
      "Library management system",
      "To-do list app",
      "Expense tracker",
      "Quiz app",
      "Contact book",
      "Simple REST API client",
      "JDBC CRUD app",
      "Mini inventory system",
      "Layered console application",
      "Refactor project to services",
      "Add tests to a project",
      "Prepare project for portfolio"
    ]
  },
  {
    title: "Expert and Super Advanced Java Topics",
    focus: "modern Java, internals, performance, secure coding, and enterprise direction",
    topics: [
      "Reflection",
      "Annotations",
      "Custom annotations",
      "Class loaders",
      "Advanced generics",
      "Records",
      "Sealed classes",
      "Pattern matching",
      "Modules",
      "Virtual threads",
      "Advanced concurrency",
      "Reactive programming concept",
      "Performance optimization",
      "Secure coding",
      "Enterprise Java overview",
      "Spring Boot overview",
      "Microservices overview",
      "Observability basics",
      "API design principles",
      "Production readiness checklist"
    ]
  }
];

const definitionOverrides = new Map([
  ["What is programming?", "Programming means writing clear step-by-step instructions that a computer can follow. The computer does not guess. You must tell it exactly what to do."],
  ["What is Java?", "Java is a programming language. You write Java code in text files, the JDK compiles it into bytecode, and the JVM runs that bytecode on many kinds of computers."],
  ["What is a variable?", "A variable is like a small labeled box. The label is the variable name, and the value inside is the data you want to remember and use later."],
  ["What is an array?", "An array is one variable that holds many values of the same type in numbered positions. The first position is index 0."],
  ["What is OOP?", "Object-Oriented Programming means organizing code around objects. An object keeps data and the actions that use that data together."],
  ["What is an exception?", "An exception is a problem that happens while the program is running. Java lets you catch it and respond instead of crashing blindly."],
  ["What is a collection?", "A collection is a ready-made container for groups of values, such as a list of names, a set of unique IDs, or a map from username to score."],
  ["What are generics?", "Generics let you write reusable code while still telling Java what type of value is allowed. They help stop type mistakes early."],
  ["What is a thread?", "A thread is a path of work inside a program. Multiple threads can let a program do more than one job at a time."],
  ["Big O notation", "Big O describes how code slows down as the input grows. It helps you compare approaches before a program becomes too large."]
]);

const tagWords = [
  ["program", "programming", "language", "java", "jdk", "jvm", "jre", "source", "compilation", "bytecode", "ide", "syntax", "error", "debug"],
  ["setup", "first-program", "main", "println", "comments", "structure", "dry-run"],
  ["data", "variables", "types", "constants", "casting", "naming"],
  ["operators", "math", "logic", "precedence"],
  ["input", "output", "scanner", "formatting"],
  ["conditions", "if", "switch", "decision"],
  ["loops", "repetition", "patterns", "dry-run"],
  ["arrays", "search", "matrix", "data"],
  ["strings", "text", "builder", "interview"],
  ["methods", "parameters", "return", "recursion"],
  ["oop", "class", "object", "constructor"],
  ["oop", "encapsulation", "inheritance", "interfaces", "polymorphism"],
  ["exceptions", "errors", "defensive-code"],
  ["collections", "list", "set", "map", "iterator"],
  ["files", "io", "csv", "serialization"],
  ["generics", "type-safety", "reusable-code"],
  ["functional", "lambda", "streams", "optional"],
  ["utilities", "date-time", "math", "random"],
  ["threads", "concurrency", "safety"],
  ["design", "solid", "patterns", "clean-code"],
  ["jvm", "memory", "performance"],
  ["jdbc", "database", "dao", "crud"],
  ["networking", "http", "json", "rest"],
  ["testing", "junit", "tdd"],
  ["build-tools", "maven", "gradle", "dependencies"],
  ["android", "activity", "intent", "apk"],
  ["interview", "problem-solving", "dry-run"],
  ["dsa", "algorithms", "complexity"],
  ["projects", "portfolio", "capstone"],
  ["expert", "modern-java", "performance", "enterprise"]
];

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function difficultyForLevel(levelId) {
  if (levelId <= 5) return "Beginner";
  if (levelId <= 10) return "Easy";
  if (levelId <= 16) return "Medium";
  if (levelId <= 23) return "Hard";
  return "Expert";
}

function definitionFor(levelId, topic) {
  if (definitionOverrides.has(topic)) return definitionOverrides.get(topic);
  const level = levelSpecs[levelId];
  return `${topic} belongs to ${level.title}. In simple words, it is a tool or idea that helps you ${level.focus}. Learn the plain meaning first, then connect it to a tiny Java example, then use it in a small task.`;
}

function explainLikeTen(topic) {
  return `Imagine you are teaching a younger friend. The idea called ${topic} has one job. You do not need to learn everything at once. First ask: what problem does this solve, what does it look like in Java, and what tiny mistake should I avoid?`;
}

function analogyFor(topic) {
  if (/variable|data|constant/i.test(topic)) return "A variable is like a labeled box on a shelf. You put one value inside, then use the label to find it later.";
  if (/loop|repetition/i.test(topic)) return "A loop is like telling someone, 'stamp every envelope in this pile' instead of saying 'stamp envelope one, stamp envelope two' again and again.";
  if (/array|collection|list|map|set/i.test(topic)) return "A data container is like a row of lockers or a contact list. It helps you keep many related things organized.";
  if (/method|function/i.test(topic)) return "A method is like a named recipe. Once the recipe is written, you can use it many times without rewriting the steps.";
  if (/class|object|oop|constructor/i.test(topic)) return "A class is like a blueprint, and an object is a real thing built from that blueprint.";
  if (/exception|error/i.test(topic)) return "Exception handling is like having a backup plan when something goes wrong during a trip.";
  if (/test|junit/i.test(topic)) return "A test is like a checklist that proves your code still works after you change it.";
  if (/database|jdbc|dao/i.test(topic)) return "A database is like an organized filing cabinet. JDBC is one way Java talks to that cabinet.";
  if (/thread|concurrency/i.test(topic)) return "Threads are like workers sharing a kitchen. They can work faster, but they need rules so they do not grab the same item at the same time.";
  return `Think of ${topic} as one tool in a developer toolbox. A professional chooses the right tool, gives it a clear name, and keeps it separate from unrelated work.`;
}

function codeFor(levelId, topic) {
  const t = topic.toLowerCase();
  if (/programming|program|language|java|source|compilation|bytecode|jdk|jvm|jre|syntax|debug|ide/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Java follows clear instructions.");\n    }\n}`;
  }
  if (/public class main/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        System.out.println("This code starts inside Main.");\n    }\n}`;
  }
  if (/main method/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Java starts running here.");\n    }\n}`;
  }
  if (/println/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java learner!");\n    }\n}`;
  }
  if (/comment/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        // This line explains the code for humans.\n        System.out.println("Comments do not run.");\n    }\n}`;
  }
  if (/stringbuilder/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        StringBuilder builder = new StringBuilder();\n        builder.append("Java");\n        builder.append(" Mastery");\n        System.out.println(builder.toString());\n    }\n}`;
  }
  if (/stringbuffer/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        StringBuffer buffer = new StringBuffer("Safe text");\n        buffer.append(" update");\n        System.out.println(buffer);\n    }\n}`;
  }
  if (/string|charat|substring|equals|contains|replace|split|trim|text/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        String name = " Ali Rayyan ";\n        String cleanName = name.trim();\n        System.out.println(cleanName.length());\n    }\n}`;
  }
  if (/int|double|float|char|boolean|long|short|byte|variable|data|constant|conversion|casting|naming/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        double price = 99.50;\n        boolean active = true;\n        String name = "Ali";\n        System.out.println(name + " is " + age + " years old.");\n    }\n}`;
  }
  if (/operator|arithmetic|assignment|comparison|logical|increment|precedence|formula|boolean expression/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        int marks = 85;\n        boolean passed = marks >= 50 && marks <= 100;\n        System.out.println("Passed: " + passed);\n    }\n}`;
  }
  if (/scanner|input|reading|output|formatting|validation|bill|greeting/.test(t)) {
    return `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print("Enter your name: ");\n        String name = input.nextLine();\n        System.out.println("Welcome, " + name);\n    }\n}`;
  }
  if (/switch/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        int day = 2;\n        switch (day) {\n            case 1 -> System.out.println("Monday");\n            case 2 -> System.out.println("Tuesday");\n            default -> System.out.println("Another day");\n        }\n    }\n}`;
  }
  if (/if|else|ternary|decision|guard/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        int marks = 72;\n        if (marks >= 50) {\n            System.out.println("Pass");\n        } else {\n            System.out.println("Try again");\n        }\n    }\n}`;
  }
  if (/while/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        int count = 1;\n        while (count <= 3) {\n            System.out.println(count);\n            count++;\n        }\n    }\n}`;
  }
  if (/loop|repetition|break|continue|pattern|counter|accumulator/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        for (int count = 1; count <= 5; count++) {\n            System.out.println("Practice " + count);\n        }\n    }\n}`;
  }
  if (/2d|matrix/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        int[][] matrix = {{1, 2}, {3, 4}};\n        System.out.println(matrix[1][0]);\n    }\n}`;
  }
  if (/array|search|max|min|average|boundary/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        int[] marks = {80, 90, 75};\n        int total = 0;\n        for (int mark : marks) {\n            total += mark;\n        }\n        System.out.println("Total: " + total);\n    }\n}`;
  }
  if (/recursion/.test(t)) {
    return `public class Main {\n    static int factorial(int n) {\n        if (n == 1) return 1;\n        return n * factorial(n - 1);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(factorial(4));\n    }\n}`;
  }
  if (/method|parameter|return|void|overload|scope|responsibility/.test(t)) {
    return `public class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(10, 20));\n    }\n}`;
  }
  if (/constructor|this|object creation|student class|bank account|class|object|field|oop/.test(t)) {
    return `class Student {\n    private String name;\n\n    Student(String name) {\n        this.name = name;\n    }\n\n    void introduce() {\n        System.out.println("Hi, I am " + name);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student ali = new Student("Ali");\n        ali.introduce();\n    }\n}`;
  }
  if (/interface|abstract|polymorphism|inheritance|encapsulation|modifier|private|public|protected|getter|setter|composition|super|overriding/.test(t)) {
    return `interface Payable {\n    double pay();\n}\n\nclass Freelancer implements Payable {\n    private double amount;\n\n    Freelancer(double amount) {\n        this.amount = amount;\n    }\n\n    public double pay() {\n        return amount;\n    }\n}`;
  }
  if (/exception|try|catch|finally|throw|throws|checked|unchecked|defensive/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n            System.out.println(result);\n        } catch (ArithmeticException ex) {\n            System.out.println("Cannot divide by zero.");\n        }\n    }\n}`;
  }
  if (/hashmap|map|treemap/.test(t)) {
    return `import java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> scores = new HashMap<>();\n        scores.put("Ali", 95);\n        System.out.println(scores.get("Ali"));\n    }\n}`;
  }
  if (/arraylist|linkedlist|hashset|treeset|queue|stack|iterator|foreach|comparable|comparator|collection/.test(t)) {
    return `import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = new ArrayList<>();\n        names.add("Ali");\n        names.add("Rayyan");\n        names.forEach(System.out::println);\n    }\n}`;
  }
  if (/file|reader|writer|csv|serialization|report/.test(t)) {
    return `import java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        Path file = Path.of("notes.txt");\n        Files.writeString(file, "Practice Java daily");\n        System.out.println(Files.readString(file));\n    }\n}`;
  }
  if (/generic|bounded|wildcard|type safety|repository/.test(t)) {
    return `class Box<T> {\n    private T value;\n    void put(T value) { this.value = value; }\n    T get() { return value; }\n}`;
  }
  if (/lambda|predicate|consumer|supplier|function|method reference|stream|map|filter|reduce|collect|optional|functional/.test(t)) {
    return `import java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> nums = List.of(1, 2, 3, 4);\n        int total = nums.stream()\n            .filter(n -> n % 2 == 0)\n            .mapToInt(n -> n)\n            .sum();\n        System.out.println(total);\n    }\n}`;
  }
  if (/localdate|localtime|datetime|formatter|date/.test(t)) {
    return `import java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\n\npublic class Main {\n    public static void main(String[] args) {\n        LocalDate today = LocalDate.now();\n        System.out.println(today.format(DateTimeFormatter.ISO_DATE));\n    }\n}`;
  }
  if (/math|random|uuid|objects|arrays utility|collections utility/.test(t)) {
    return `import java.util.Random;\n\npublic class Main {\n    public static void main(String[] args) {\n        Random random = new Random();\n        int number = random.nextInt(10) + 1;\n        System.out.println(number);\n    }\n}`;
  }
  if (/thread|runnable|sleep|join|synchronized|race|deadlock|executor|callable|future|completable|concurrent|producer/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Thread worker = new Thread(() -> System.out.println("Work done"));\n        worker.start();\n        worker.join();\n    }\n}`;
  }
  if (/solid|responsibility|open closed|liskov|segregation|inversion|pattern|singleton|factory|builder|strategy|observer|mvc|clean|refactor|smell|architecture|injection/.test(t)) {
    return `class ReportService {\n    private final ReportPrinter printer;\n\n    ReportService(ReportPrinter printer) {\n        this.printer = printer;\n    }\n\n    void publish(String report) {\n        printer.print(report);\n    }\n}\n\ninterface ReportPrinter {\n    void print(String text);\n}`;
  }
  if (/stack memory|heap|garbage|reference|string pool|class loading|jvm|jit|memory leak|profiling|performance/.test(t)) {
    return `public class Main {\n    public static void main(String[] args) {\n        String name = "Ali";\n        Object reference = name;\n        System.out.println(reference);\n    }\n}`;
  }
  if (/jdbc|database|crud|preparedstatement|sql|transaction|dao|connection|row|repository|inventory crud|student database/.test(t)) {
    return `String sql = "SELECT * FROM students WHERE id = ?";\nPreparedStatement stmt = connection.prepareStatement(sql);\nstmt.setInt(1, studentId);\nResultSet rows = stmt.executeQuery();`;
  }
  if (/http|url|rest|json|client-server|socket|status|header|timeout|retry|network/.test(t)) {
    return `HttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder()\n    .uri(URI.create("https://example.com"))\n    .GET()\n    .build();\nHttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());`;
  }
  if (/test|junit|assert|mock|tdd|coverage|edge/.test(t)) {
    return `import static org.junit.jupiter.api.Assertions.assertEquals;\n\nclass CalculatorTest {\n    @Test\n    void addsTwoNumbers() {\n        assertEquals(5, Calculator.add(2, 3));\n    }\n}`;
  }
  if (/dependency|maven|gradle|pom|build.gradle|folder|library|version|module|lifecycle|conflict/.test(t)) {
    return `plugins {\n    id("java")\n}\n\ndependencies {\n    testImplementation("org.junit.jupiter:junit-jupiter:5.10.0")\n}`;
  }
  if (/android|activity|fragment|intent|recyclerview|xml|compose|lifecycle|permission|apk|local storage/.test(t)) {
    return `Intent intent = new Intent(this, DetailActivity.class);\nintent.putExtra("lessonId", "java-basics");\nstartActivity(intent);`;
  }
  if (/interview|dry run|debugging|mcq|whiteboard|trade-off|storytelling|unfamiliar/.test(t)) {
    return `public class Main {\n    static int findMax(int[] numbers) {\n        int max = numbers[0];\n        for (int number : numbers) {\n            if (number > max) max = number;\n        }\n        return max;\n    }\n}`;
  }
  if (/big o|linked list|stack|queue|binary search|sorting|graph|two pointer|sliding|breadth|depth|dynamic|algorithm/.test(t)) {
    return `public class Main {\n    static int binarySearch(int[] nums, int target) {\n        int left = 0, right = nums.length - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[mid] < target) left = mid + 1;\n            else right = mid - 1;\n        }\n        return -1;\n    }\n}`;
  }
  if (/calculator|guessing|grade|bank|library|to-do|expense|quiz app|contact|rest api client|crud app|inventory|portfolio|project/.test(t)) {
    return `class TaskService {\n    String createTask(String title) {\n        if (title == null || title.isBlank()) {\n            throw new IllegalArgumentException("Title is required");\n        }\n        return "Created: " + title;\n    }\n}`;
  }
  if (/reflection|annotation|class loader|record|sealed|pattern matching|module|virtual thread|reactive|secure|enterprise|spring|microservice|observability|api design|production/.test(t)) {
    return `record User(String name, String email) { }\n\npublic class Main {\n    public static void main(String[] args) {\n        User user = new User("Ali", "ali@example.com");\n        System.out.println(user.name());\n    }\n}`;
  }
  return `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Practice ${topic.replace(/"/g, "")}");\n    }\n}`;
}

function lineByLine(topic) {
  return [
    "Read the code from top to bottom because Java executes statements in order.",
    "Notice the names. Good names explain the purpose before you even read the details.",
    "Watch the braces. Braces show which lines belong together.",
    `Connect each line back to ${topic}: ask what value is created, changed, checked, or printed.`,
    "For scalable code, separate input, processing, and output when the example grows."
  ];
}

function mistakesFor(topic) {
  return [
    `Trying to memorize ${topic} without explaining the simple purpose first.`,
    "Changing many lines at once, then not knowing which change caused the problem.",
    "Using unclear names like a, b, x, and temp when the value has a real meaning.",
    "Ignoring compiler errors instead of reading them as clues.",
    "Mixing unrelated responsibilities in one large block of code."
  ];
}

function deepDiveFor(levelId, topic) {
  const level = levelSpecs[levelId];
  return [
    {
      title: "Why This Matters",
      body: `${topic} matters because it helps you build skill in ${level.focus}. A job-ready developer does not only ask whether code runs. They ask whether the next developer can understand it, test it, and change it without breaking other parts.`
    },
    {
      title: "Mental Model",
      body: `Use this mental model: name the input, name the work, name the output. For ${topic}, pause before coding and say what value enters the code, what decision or transformation happens, and what result should come out.`
    },
    {
      title: "Scalable Code Angle",
      body: `When ${topic} appears in a larger project, keep it close to the class or method that owns the rule. Avoid spreading the same rule across many screens, menus, or files. One clear home for one rule makes changes safer.`
    },
    {
      title: "Interview Explanation",
      body: `If an interviewer asks about ${topic}, explain it in this order: simple definition, tiny Java example, common mistake, and one real project use. This proves understanding instead of memorization.`
    }
  ];
}

function jobUseFor(levelId, topic) {
  if (levelId <= 4) return `${topic} appears in onboarding tasks, console tools, scripts, form handling, and every beginner project where data must be named, printed, or read.`;
  if (levelId <= 9) return `${topic} appears in validation rules, reports, business calculations, text processing, and reusable service methods.`;
  if (levelId <= 13) return `${topic} appears in real application models, service layers, payment rules, permissions, exception-safe workflows, and collection-heavy features.`;
  if (levelId <= 18) return `${topic} appears in persistence, reusable libraries, stream processing, scheduling, date validation, and concurrent background work.`;
  if (levelId <= 24) return `${topic} appears when teams refactor systems, diagnose performance, connect databases, call APIs, write tests, and manage builds.`;
  return `${topic} appears in Android apps, interview tasks, data-structure problem solving, portfolio projects, modern Java, and enterprise Java direction.`;
}

function dryRunFor(topic) {
  return [
    `Step 1: Read the goal: what should ${topic} produce or protect?`,
    "Step 2: List the values before the code starts.",
    "Step 3: Move one line at a time and update the values by hand.",
    "Step 4: Compare your predicted output with the actual output.",
    "Step 5: If they differ, find the first line where your prediction changed."
  ];
}

function masteryChecklistFor(topic) {
  return [
    `I can explain ${topic} without using memorized textbook language.`,
    "I can write a tiny example from memory.",
    "I can dry-run the example line by line.",
    "I can name one common mistake and how to fix it.",
    "I can say how this idea belongs in a clean, changeable project."
  ];
}

function constraintsFor(topic, levelId) {
  return [
    "Use clear names that describe the meaning of the value.",
    "Keep one method focused on one job.",
    "Print or return a result that can be checked.",
    levelId >= 10 ? "Separate model, service, and input/output concerns when the task grows." : "Do not use advanced shortcuts before the simple version is clear.",
    `The solution must demonstrate ${topic}, not only print a hardcoded sentence.`
  ];
}

function dryRunExerciseFor(topic) {
  return [
    "Write the starting values.",
    "Run the first line mentally.",
    "Update one value at a time.",
    "Stop at each condition or loop and choose the next path.",
    `Explain how the final output proves ${topic} worked.`
  ];
}

function wrongSolutionsFor(topic, levelId) {
  const safe = topic.replace(/"/g, "");
  return [
    {
      title: "Hardcoded-only answer",
      explanation: `This is wrong because it avoids practicing ${topic}. It prints a phrase but does not show the rule, data, decision, or structure.`,
      code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("${safe}");\n    }\n}`
    },
    {
      title: "Giant mixed method",
      explanation: "This may run, but it mixes setup, rule, output, and future changes in one place. That becomes painful when the project grows.",
      code: `public class Main {\n    public static void main(String[] args) {\n        String input = "${safe}";\n        String result = input + " done";\n        System.out.println(result);\n        // More unrelated rules would often get dumped here.\n    }\n}`
    }
  ];
}

function tradeOffsFor(topic, levelId) {
  return [
    "A direct solution is faster to write and easier for beginners to inspect.",
    "A method-based solution is easier to test and reuse.",
    "A service-style solution is better when this logic becomes part of a larger app.",
    levelId >= 19 ? "A pattern or abstraction is useful only when it removes real duplication or protects a changing rule." : "Avoid adding abstractions before you understand the simple version."
  ];
}

function rubricFor(topic) {
  return [
    `Correctness: the output proves ${topic} is being used correctly.`,
    "Readability: names explain purpose without extra comments.",
    "Structure: each method or class has one main responsibility.",
    "Testing idea: you can name at least one input that should pass and one that should fail.",
    "Change safety: one small rule change should not require editing unrelated code."
  ];
}

function quizFor(levelId, lessonId, topic) {
  return [
    {
      id: `${lessonId}-q1`,
      question: `What is the simplest useful way to think about ${topic}?`,
      options: [
        `A Java idea that solves a specific kind of problem`,
        "A random word that must be memorized only",
        "A paid online service",
        "Something that cannot be practiced"
      ],
      correctAnswerIndex: 0,
      explanation: `${topic} is useful because it helps solve a real programming problem.`
    },
    {
      id: `${lessonId}-q2`,
      question: `Which habit makes ${topic} easier to learn?`,
      options: [
        "Copy code without reading it",
        "Read the example line by line and predict the output",
        "Ignore mistakes",
        "Use bigger code before understanding smaller code"
      ],
      correctAnswerIndex: 1,
      explanation: "Line-by-line reading builds the same mental model Java uses when it runs code."
    },
    {
      id: `${lessonId}-q3`,
      question: `What is a professional habit when using ${topic}?`,
      options: [
        "Put every idea in one giant method",
        "Use confusing names",
        "Keep responsibilities separate and names clear",
        "Avoid testing"
      ],
      correctAnswerIndex: 2,
      explanation: "Scalable code is easier to change when each block has one clear responsibility."
    },
    {
      id: `${lessonId}-q4`,
      question: `What should you do when code about ${topic} gives an error?`,
      options: [
        "Delete everything immediately",
        "Read the error, check the line, and test one small fix",
        "Add random symbols",
        "Never run the code again"
      ],
      correctAnswerIndex: 1,
      explanation: "Debugging is controlled investigation. Small fixes teach you more than random changes."
    },
    {
      id: `${lessonId}-q5`,
      question: `Which next step turns ${topic} from theory into skill?`,
      options: [
        "Build a tiny working example",
        "Only watch videos",
        "Skip practice",
        "Wait until advanced topics"
      ],
      correctAnswerIndex: 0,
      explanation: "A tiny working example gives your brain a concrete memory of the concept."
    },
    {
      id: `${lessonId}-q6`,
      question: `A teammate says their ${topic} code works but is hard to change. What should you check first?`,
      options: [
        "Whether the code has clear names and one responsibility per method",
        "Whether the file is as long as possible",
        "Whether all logic is hidden in main",
        "Whether there are no examples or tests"
      ],
      correctAnswerIndex: 0,
      explanation: "Maintainability starts with names, focused responsibilities, and behavior that can be checked."
    },
    {
      id: `${lessonId}-q7`,
      question: `Which debugging move is best for a broken ${topic} example?`,
      options: [
        "Rewrite the entire program without reading the error",
        "Add random code until the error disappears",
        "Create a smaller failing example and inspect values step by step",
        "Assume Java is wrong"
      ],
      correctAnswerIndex: 2,
      explanation: "A smaller failing example removes noise and helps you find the real mistake."
    },
    {
      id: `${lessonId}-q8`,
      question: `When should you reveal the solution for a ${topic} exercise?`,
      options: [
        "Before reading the problem",
        "After making a real attempt, writing a prediction, and checking hints",
        "Only after copying someone else's answer",
        "Never, because feedback is useless"
      ],
      correctAnswerIndex: 1,
      explanation: "Learning sticks when you struggle productively first, then compare your approach with a clean solution."
    }
  ];
}

function practiceSolutions(topic, levelId) {
  const safeName = `Skill${levelId}_${slug(topic).replace(/-/g, "_").replace(/[^a-zA-Z0-9_]/g, "")}`;
  return [
    {
      title: "Direct beginner solution",
      explanation: "Use this when the problem is tiny and you are learning the idea for the first time.",
      code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("${topic.replace(/"/g, "")} practice complete");\n    }\n}`
    },
    {
      title: "Method-based solution",
      explanation: "Move the useful work into a method so it has a name and can be reused or tested.",
      code: `public class Main {\n    static String solve() {\n        return "${topic.replace(/"/g, "")} practice complete";\n    }\n\n    public static void main(String[] args) {\n        System.out.println(solve());\n    }\n}`
    },
    {
      title: "Scalable service-style solution",
      explanation: "For real apps, keep business logic away from input/output so one change does not break the whole program.",
      code: `class ${safeName}Service {\n    String completePractice() {\n        return "${topic.replace(/"/g, "")} practice complete";\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        ${safeName}Service service = new ${safeName}Service();\n        System.out.println(service.completePractice());\n    }\n}`
    }
  ];
}

function challengeFor(levelId, topic) {
  return {
    prompt: `Create a small Java example for ${topic}. First solve it directly, then ask how you would split the code if this became part of a larger app.`,
    expectedOutput: `A clear result that proves your ${topic} code ran correctly.`,
    hints: [
      "Write the expected output before writing the code.",
      "Use clear variable and method names.",
      "After it works, ask which lines belong together and which lines should be separated."
    ],
    solutions: practiceSolutions(topic, levelId)
  };
}

const levels = levelSpecs.map((level, levelId) => {
  const lessons = level.topics.map((topic, index) => {
    const id = `level-${levelId}-${slug(topic)}`;
    return {
      id,
      levelId,
      title: topic,
      estimatedMinutes: levelId < 2 ? 7 : levelId < 10 ? 9 : levelId < 20 ? 12 : 14,
      simpleExplanation: definitionFor(levelId, topic),
      explainLikeTen: explainLikeTen(topic),
      realLifeAnalogy: analogyFor(topic),
      javaCode: codeFor(levelId, topic),
      deepDiveSections: deepDiveFor(levelId, topic),
      jobUse: jobUseFor(levelId, topic),
      masteryChecklist: masteryChecklistFor(topic),
      dryRun: dryRunFor(topic),
      lineByLine: lineByLine(topic),
      commonMistakes: mistakesFor(topic),
      miniPractice: `In your own words, explain ${topic}. Then write or read a tiny Java example and predict the output before looking at the answer.`,
      quiz: quizFor(levelId, id, topic),
      codingChallenge: challengeFor(levelId, topic),
      summary: `${topic} is one step toward job-ready Java. Keep the meaning simple, practice the tiny example, then learn how the same idea fits into clean, maintainable programs.`,
      nextLessonId: level.topics[index + 1] ? `level-${levelId}-${slug(level.topics[index + 1])}` : null,
      tags: tagWords[levelId] ?? ["java"]
    };
  });
  return {
    id: levelId,
    title: `LEVEL ${levelId}: ${level.title}`,
    shortTitle: level.title,
    description: `This level focuses on ${level.focus}. Lessons use simple explanations, analogies, Java examples, mistakes, quizzes, and practical tasks.`,
    outcomes: [
      "Explain the concept in simple words",
      "Read and dry-run a Java example",
      "Avoid common beginner and professional mistakes",
      "Apply the idea in a small exercise",
      "Connect the idea to scalable code"
    ],
    lessons
  };
});

const projectPractice = [
  "Calculator: design operations cleanly",
  "Calculator: add input validation",
  "Number guessing game: build loop and hints",
  "Number guessing game: separate game logic from console input",
  "Student grade system: calculate grade letters",
  "Student grade system: use arrays and methods",
  "Bank account system: deposit and withdraw safely",
  "Bank account system: add transaction history",
  "Library management system: model Book and Member",
  "Library management system: borrow and return books",
  "To-do list app: create tasks",
  "To-do list app: mark tasks complete",
  "Expense tracker: add expenses by category",
  "Expense tracker: monthly summary",
  "Quiz app: ask MCQs and score answers",
  "Quiz app: store questions in collections",
  "Contact book: add and search contacts",
  "Contact book: update and delete contacts",
  "REST API client: parse a simple JSON response",
  "REST API client: handle timeouts and errors",
  "JDBC CRUD app: create DAO interface",
  "JDBC CRUD app: implement create and read",
  "Mini inventory system: add products",
  "Mini inventory system: low-stock report",
  "Portfolio refactor: split model, service, and UI",
  "Portfolio tests: add unit tests for service methods",
  "Portfolio README: explain project decisions",
  "Clean architecture drill: isolate business logic",
  "Interview drill: explain trade-offs in a project",
  "Debugging drill: fix a broken loop",
  "DSA drill: binary search by hand",
  "DSA drill: two-pointer pair sum",
  "DSA drill: sliding window maximum sum",
  "DSA drill: stack parentheses check",
  "DSA drill: queue ticket counter",
  "DSA drill: HashMap frequency count",
  "Concurrency drill: protect a shared counter",
  "Testing drill: test exceptions",
  "Database drill: prevent SQL injection",
  "Networking drill: retry failed request",
  "Advanced drill: use records for DTOs",
  "Advanced drill: use sealed interface for result states",
  "Security drill: validate input before saving",
  "Performance drill: compare nested loop and map lookup",
  "Production drill: create readiness checklist"
];

const lessonPractice = levels.flatMap(level =>
  level.lessons.map((lesson, index) => ({
    id: `practice-${lesson.id}`,
    title: `Practice: ${lesson.title}`,
    levelId: level.id,
    difficulty: difficultyForLevel(level.id),
    tags: lesson.tags,
    problem: `Build a small Java exercise that demonstrates ${lesson.title}. Then improve it so the code is easy to read, easy to test, and easy to change.`,
    constraints: constraintsFor(lesson.title, level.id),
    sampleInput: `Topic: ${lesson.title}`,
    sampleOutput: `${lesson.title} practice complete`,
    hints: [
      "Write one expected output line first.",
      "Start with the simplest version that works.",
      "Refactor into a method or service when the code grows.",
      "Use names that describe the real meaning of the data."
    ],
    expectedOutput: `A visible result proving ${lesson.title} works.`,
    dryRun: dryRunExerciseFor(lesson.title),
    commonWrongSolutions: wrongSolutionsFor(lesson.title, level.id),
    tradeOffs: tradeOffsFor(lesson.title, level.id),
    rubric: rubricFor(lesson.title),
    solutions: practiceSolutions(lesson.title, level.id)
  }))
);

const projectExercises = projectPractice.map((title, index) => {
  const levelId = Math.min(29, 5 + Math.floor(index / 2));
  return {
    id: `project-practice-${index + 1}`,
    title,
    levelId,
    difficulty: difficultyForLevel(levelId),
    tags: ["project", "portfolio", ...(tagWords[levelId] ?? ["java"])],
    problem: `Complete this portfolio-style task: ${title}. The goal is not only to make it work, but to keep the code modular so changing one part does not break the rest.`,
    constraints: [
      "Create or identify a model class for the main business object.",
      "Keep business rules in a service class or clearly named method.",
      "Keep console/UI code separate from business rules.",
      "Include validation for at least one bad input.",
      "Write at least three test ideas before revealing the solution."
    ],
    sampleInput: `Feature request: ${title}`,
    sampleOutput: `Working feature: ${title}`,
    hints: [
      "Write the core rule in plain English.",
      "Create a model class if the task has a real thing such as Student, Book, Account, Product, or Task.",
      "Put business logic in a service method.",
      "Keep console input/output separate from the business rule.",
      "Add at least one test idea."
    ],
    expectedOutput: `A working feature for ${title}.`,
    dryRun: [
      "Follow one realistic user action from input to service to output.",
      "Write which object owns the data.",
      "Write which method owns the rule.",
      "Check what happens when input is invalid.",
      "Check what must change if the feature grows."
    ],
    commonWrongSolutions: wrongSolutionsFor(title, levelId),
    tradeOffs: [
      "A single-file solution is useful for learning but weak for portfolio code.",
      "A layered solution takes longer but shows professional thinking.",
      "Validation adds code, but it prevents broken state.",
      "Tests take time, but they make refactoring safer."
    ],
    rubric: [
      "Feature works for the normal case.",
      "At least one invalid input is handled.",
      "Model, service, and input/output responsibilities are separated.",
      "Names are clear enough to explain in an interview.",
      "You can describe one future feature and where it would be added."
    ],
    solutions: practiceSolutions(title, levelId)
  };
});

const practiceExercises = [...lessonPractice, ...projectExercises];

function expectedOutputForCode(code, topic) {
  const printlnMatches = [...code.matchAll(/System\.out\.println\("([^"]*)"\)/g)].map(match => match[1]);
  if (printlnMatches.length) return printlnMatches.join("\n");
  if (code.includes("for (int count = 1; count <= 5; count++)")) return "Practice 1\nPractice 2\nPractice 3\nPractice 4\nPractice 5";
  if (code.includes("add(10, 20)")) return "30";
  if (code.includes("StringBuilder")) return "Java Mastery";
  if (code.includes("scores.get(\"Ali\")")) return "95";
  if (code.includes("names.forEach")) return "Ali\nRayyan";
  return `${topic} practice complete`;
}

const playgroundTasks = [
  ...levels.flatMap(level => level.lessons).slice(0, 90).map((lesson, index) => {
    const starterCode = lesson.javaCode;
    return {
      id: `playground-${lesson.id}`,
      title: lesson.title,
      levelId: lesson.levelId,
      prompt: `Edit and run the simulator for ${lesson.title}. Your goal is to predict the output, then adjust the code while keeping the purpose clear.`,
      starterCode,
      expectedOutput: expectedOutputForCode(starterCode, lesson.title),
      checks: [
        "The code has a Main class or a clearly named class.",
        "The example has one focused purpose.",
        "At least one output line proves the idea worked.",
        "Names are readable enough to explain aloud."
      ],
      hints: [
        "Change one thing at a time.",
        "Predict the output before tapping Run Simulation.",
        "If output differs, compare the first different line."
      ],
      explanation: `This simulator is for beginner-safe practice. It does not replace a real compiler, but it helps you build the habit of predicting output and checking small changes for ${lesson.title}.`,
      tags: lesson.tags
    };
  }),
  ...projectPractice.slice(0, 30).map((title, index) => {
    const levelId = Math.min(29, 5 + Math.floor(index / 2));
    const starterCode = `class ProjectFeature {\n    String run() {\n        return "${title.replace(/"/g, "")}";\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        ProjectFeature feature = new ProjectFeature();\n        System.out.println(feature.run());\n    }\n}`;
    return {
      id: `playground-project-${index + 1}`,
      title,
      levelId,
      prompt: `Use the simulator to shape a small feature for ${title}. Keep business logic in a named method instead of dumping everything into main.`,
      starterCode,
      expectedOutput: `${title}`,
      checks: [
        "Business logic is inside a named class or method.",
        "main is only coordinating the feature.",
        "The output proves the feature path works.",
        "The design could accept validation or tests later."
      ],
      hints: [
        "Rename ProjectFeature to match the real feature.",
        "Add one validation rule in the service method.",
        "Keep printing separate from calculating."
      ],
      explanation: "This project-style playground task trains separation of responsibilities, which is one of the biggest differences between beginner code and job-ready code.",
      tags: ["project", "playground", ...(tagWords[levelId] ?? ["java"])]
    };
  })
];

function capstone(id, title, levelId, goal, scenario, files, expectedOutput, tags) {
  return {
    id,
    title,
    levelId,
    difficulty: difficultyForLevel(levelId),
    goal,
    scenario,
    files,
    tests: [
      {
        id: `${id}-smoke`,
        name: "Compile and run smoke test",
        input: "",
        expectedOutput,
        points: 40,
        description: "The project must compile and the Main class must print the expected result."
      },
      {
        id: `${id}-structure`,
        name: "Structure check",
        input: "",
        expectedOutput: "Uses model/service separation",
        points: 30,
        description: "The solution should keep core business logic outside Main where possible."
      },
      {
        id: `${id}-edge`,
        name: "Edge-case reasoning",
        input: "",
        expectedOutput: "Handles invalid or boundary input",
        points: 30,
        description: "The learner should explain at least one invalid input and where it is handled."
      }
    ],
    rubric: [
      {
        title: "Correctness",
        description: "The project compiles and produces the required output for the smoke test.",
        points: 40
      },
      {
        title: "Modularity",
        description: "Business rules live in focused classes or methods, not one giant main method.",
        points: 25
      },
      {
        title: "Validation",
        description: "The project prevents at least one invalid state or bad input.",
        points: 15
      },
      {
        title: "Readability",
        description: "Names are clear enough to explain in an interview.",
        points: 10
      },
      {
        title: "Test Thinking",
        description: "The learner can name normal, edge, and failure test cases.",
        points: 10
      }
    ],
    milestones: [
      "Read the scenario and write the expected output.",
      "Compile and run the starter project.",
      "Move one rule into a service/model method if it is not already separated.",
      "Add one validation rule.",
      "Run the smoke test and compare output.",
      "Grade the project using the rubric."
    ],
    runInstructions: [
      "Save each file using the shown path.",
      "Run javac *.java from the folder containing Main.java.",
      "Run java Main.",
      "Compare the console output with the expected output."
    ],
    tags
  };
}

const capstoneProjects = [
  capstone(
    "capstone-calculator",
    "Calculator Service",
    9,
    "Build a calculator where arithmetic rules live outside Main.",
    "A user needs a small calculator that can add, subtract, multiply, and divide while preventing division by zero.",
    [
      {
        path: "Main.java",
        explanation: "Main coordinates the demo and prints a result.",
        content: `public class Main {\n    public static void main(String[] args) {\n        Calculator calculator = new Calculator();\n        System.out.println(calculator.add(10, 5));\n    }\n}`
      },
      {
        path: "Calculator.java",
        explanation: "Calculator owns arithmetic rules and validation.",
        content: `public class Calculator {\n    public int add(int a, int b) { return a + b; }\n    public int subtract(int a, int b) { return a - b; }\n    public int multiply(int a, int b) { return a * b; }\n    public int divide(int a, int b) {\n        if (b == 0) throw new IllegalArgumentException("Cannot divide by zero");\n        return a / b;\n    }\n}`
      }
    ],
    "15",
    ["capstone", "methods", "testing", "clean-code"]
  ),
  capstone(
    "capstone-student-grades",
    "Student Grade System",
    10,
    "Model students and calculate grade letters cleanly.",
    "A teacher wants a small program that stores a student's name and marks, then prints the grade letter.",
    [
      {
        path: "Main.java",
        explanation: "Main creates the model and asks the service for the grade.",
        content: `public class Main {\n    public static void main(String[] args) {\n        Student student = new Student("Ali", 92);\n        GradeService service = new GradeService();\n        System.out.println(student.getName() + ": " + service.gradeFor(student));\n    }\n}`
      },
      {
        path: "Student.java",
        explanation: "Student keeps student data private and validated.",
        content: `public class Student {\n    private final String name;\n    private final int marks;\n\n    public Student(String name, int marks) {\n        if (name == null || name.isBlank()) throw new IllegalArgumentException("Name is required");\n        if (marks < 0 || marks > 100) throw new IllegalArgumentException("Marks must be 0 to 100");\n        this.name = name;\n        this.marks = marks;\n    }\n\n    public String getName() { return name; }\n    public int getMarks() { return marks; }\n}`
      },
      {
        path: "GradeService.java",
        explanation: "GradeService owns the grading rule.",
        content: `public class GradeService {\n    public String gradeFor(Student student) {\n        int marks = student.getMarks();\n        if (marks >= 90) return "A";\n        if (marks >= 80) return "B";\n        if (marks >= 70) return "C";\n        if (marks >= 60) return "D";\n        return "F";\n    }\n}`
      }
    ],
    "Ali: A",
    ["capstone", "oop", "encapsulation", "conditions"]
  ),
  capstone(
    "capstone-bank-account",
    "Bank Account System",
    11,
    "Practice encapsulation, validation, and state changes.",
    "A bank account should allow deposits and withdrawals, but should reject negative amounts and overdrafts.",
    [
      {
        path: "Main.java",
        explanation: "Main demonstrates one account workflow.",
        content: `public class Main {\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount("Ali", 100);\n        account.deposit(25);\n        account.withdraw(55);\n        System.out.println(account.getBalance());\n    }\n}`
      },
      {
        path: "BankAccount.java",
        explanation: "BankAccount protects balance changes behind methods.",
        content: `public class BankAccount {\n    private final String owner;\n    private int balance;\n\n    public BankAccount(String owner, int openingBalance) {\n        if (owner == null || owner.isBlank()) throw new IllegalArgumentException("Owner is required");\n        if (openingBalance < 0) throw new IllegalArgumentException("Opening balance cannot be negative");\n        this.owner = owner;\n        this.balance = openingBalance;\n    }\n\n    public void deposit(int amount) {\n        if (amount <= 0) throw new IllegalArgumentException("Deposit must be positive");\n        balance += amount;\n    }\n\n    public void withdraw(int amount) {\n        if (amount <= 0) throw new IllegalArgumentException("Withdrawal must be positive");\n        if (amount > balance) throw new IllegalArgumentException("Insufficient balance");\n        balance -= amount;\n    }\n\n    public int getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}`
      }
    ],
    "70",
    ["capstone", "oop", "encapsulation", "validation"]
  ),
  capstone(
    "capstone-library",
    "Library Management System",
    13,
    "Use collections to model borrow and return operations.",
    "A library needs to track books and allow a book to be borrowed when it is available.",
    [
      {
        path: "Main.java",
        explanation: "Main runs a tiny borrow scenario.",
        content: `public class Main {\n    public static void main(String[] args) {\n        LibraryService library = new LibraryService();\n        library.addBook(new Book("Clean Code"));\n        System.out.println(library.borrow("Clean Code"));\n    }\n}`
      },
      {
        path: "Book.java",
        explanation: "Book represents one library item.",
        content: `public class Book {\n    private final String title;\n    private boolean borrowed;\n\n    public Book(String title) {\n        if (title == null || title.isBlank()) throw new IllegalArgumentException("Title is required");\n        this.title = title;\n    }\n\n    public String getTitle() { return title; }\n    public boolean isBorrowed() { return borrowed; }\n    public void markBorrowed() { borrowed = true; }\n}`
      },
      {
        path: "LibraryService.java",
        explanation: "LibraryService owns collection and borrowing rules.",
        content: `import java.util.ArrayList;\nimport java.util.List;\n\npublic class LibraryService {\n    private final List<Book> books = new ArrayList<>();\n\n    public void addBook(Book book) { books.add(book); }\n\n    public String borrow(String title) {\n        for (Book book : books) {\n            if (book.getTitle().equals(title) && !book.isBorrowed()) {\n                book.markBorrowed();\n                return "Borrowed " + title;\n            }\n        }\n        return "Not available";\n    }\n}`
      }
    ],
    "Borrowed Clean Code",
    ["capstone", "collections", "oop", "library"]
  ),
  capstone(
    "capstone-inventory",
    "Mini Inventory System",
    21,
    "Model products and report low stock with clean service logic.",
    "A shop needs to know how many products have stock below the reorder level.",
    [
      {
        path: "Main.java",
        explanation: "Main creates products and prints the low stock count.",
        content: `public class Main {\n    public static void main(String[] args) {\n        InventoryService inventory = new InventoryService();\n        inventory.add(new Product("Keyboard", 3));\n        inventory.add(new Product("Mouse", 15));\n        System.out.println(inventory.lowStockCount(5));\n    }\n}`
      },
      {
        path: "Product.java",
        explanation: "Product keeps product data valid.",
        content: `public class Product {\n    private final String name;\n    private final int stock;\n\n    public Product(String name, int stock) {\n        if (name == null || name.isBlank()) throw new IllegalArgumentException("Name is required");\n        if (stock < 0) throw new IllegalArgumentException("Stock cannot be negative");\n        this.name = name;\n        this.stock = stock;\n    }\n\n    public String getName() { return name; }\n    public int getStock() { return stock; }\n}`
      },
      {
        path: "InventoryService.java",
        explanation: "InventoryService owns inventory rules.",
        content: `import java.util.ArrayList;\nimport java.util.List;\n\npublic class InventoryService {\n    private final List<Product> products = new ArrayList<>();\n\n    public void add(Product product) { products.add(product); }\n\n    public long lowStockCount(int threshold) {\n        return products.stream().filter(product -> product.getStock() < threshold).count();\n    }\n}`
      }
    ],
    "1",
    ["capstone", "collections", "streams", "inventory"]
  ),
  capstone(
    "capstone-dsa-toolkit",
    "DSA Toolkit",
    27,
    "Implement and explain binary search in a reusable class.",
    "An interview practice toolkit needs a reliable binary search method with clear boundaries.",
    [
      {
        path: "Main.java",
        explanation: "Main demonstrates binary search.",
        content: `public class Main {\n    public static void main(String[] args) {\n        int[] numbers = {1, 3, 5, 7, 9};\n        SearchService search = new SearchService();\n        System.out.println(search.binarySearch(numbers, 7));\n    }\n}`
      },
      {
        path: "SearchService.java",
        explanation: "SearchService owns algorithm logic.",
        content: `public class SearchService {\n    public int binarySearch(int[] numbers, int target) {\n        int left = 0;\n        int right = numbers.length - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (numbers[mid] == target) return mid;\n            if (numbers[mid] < target) left = mid + 1;\n            else right = mid - 1;\n        }\n        return -1;\n    }\n}`
      }
    ],
    "3",
    ["capstone", "dsa", "binary-search", "interview"]
  )
];

const flashcards = levels.flatMap(level =>
  level.lessons.map(lesson => ({
    id: `flash-${lesson.id}`,
    levelId: level.id,
    front: `Explain: ${lesson.title}`,
    back: `${definitionFor(level.id, lesson.title)} Tiny practice: say the idea out loud, then write one small Java example.`,
    tag: level.shortTitle
  }))
);

const achievementSeed = [
  ["first_lesson", "First Lesson Completed", "You completed your first Java lesson.", "Complete 1 lesson"],
  ["first_quiz", "First Quiz Passed", "You passed your first quiz.", "Score 70% or more"],
  ["seven_day_streak", "7 Day Streak", "You studied for seven days in a row.", "Study 7 days"],
  ["java_basics_completed", "Java Basics Completed", "You completed at least ten beginner lessons.", "Complete 10 lessons"],
  ["oop_beginner", "OOP Beginner", "You reached class and object practice.", "Open OOP levels"],
  ["loops_master", "Loops Master", "You practiced repetition and patterns.", "Complete loop work"],
  ["arrays_explorer", "Arrays Explorer", "You started storing many values together.", "Complete array work"],
  ["collections_starter", "Collections Starter", "You began using lists, sets, and maps.", "Study collections"],
  ["advanced_unlocked", "Advanced Java Unlocked", "You moved past the core beginner path.", "Unlock advanced levels"],
  ["java_master", "Java Master", "You completed a broad Java path.", "Complete 30 lessons"],
  ["bookmark_builder", "Bookmark Builder", "You saved lessons for review.", "Bookmark 5 lessons"],
  ["quiz_grinder", "Quiz Grinder", "You attempted many quizzes.", "Attempt 10 quizzes"],
  ["project_builder", "Project Builder", "You opened real project practice.", "Practice projects"],
  ["clean_code_cadet", "Clean Code Cadet", "You started thinking about maintainable design.", "Study design"],
  ["expert_path", "Expert Path", "You reached super advanced Java ideas.", "Reach level 29"],
  ["method_maker", "Method Maker", "You learned to split code into reusable blocks.", "Study methods"],
  ["debug_detective", "Debug Detective", "You practiced reading errors and fixing code carefully.", "Study debugging"],
  ["testing_starter", "Testing Starter", "You began writing tests for confidence.", "Study testing"],
  ["database_starter", "Database Starter", "You began learning JDBC and DAO patterns.", "Study databases"],
  ["networking_starter", "Networking Starter", "You began learning HTTP and clients.", "Study networking"],
  ["dsa_starter", "DSA Starter", "You began solving algorithm problems.", "Study DSA"],
  ["portfolio_ready", "Portfolio Ready", "You practiced project structure and explanation.", "Complete project exercises"],
  ["scalable_thinker", "Scalable Thinker", "You focused on code that changes safely.", "Study design and projects"],
  ["thread_safety", "Thread Safety Learner", "You started thinking about concurrency risks.", "Study concurrency"],
  ["modern_java", "Modern Java Explorer", "You reached records, sealed classes, and modern Java.", "Study advanced Java"],
  ["spring_direction", "Spring Direction", "You learned where Spring Boot fits after core Java.", "Study Spring overview"],
  ["security_minded", "Security Minded", "You practiced validating input and preventing unsafe code.", "Study secure coding"],
  ["performance_minded", "Performance Minded", "You practiced measuring and improving performance.", "Study performance"],
  ["interview_ready", "Interview Ready", "You practiced explaining solutions and trade-offs.", "Study interview level"],
  ["java_academy_finisher", "Java Academy Finisher", "You completed the full academy path.", "Complete all lessons"]
];

const achievements = achievementSeed.map(([id, title, description, rule]) => ({ id, title, description, rule }));

const finalExams = [];
for (let start = 0; start < 30; start += 5) {
  const end = start + 4;
  const questions = [];
  for (let i = 0; i < 25; i++) {
    const level = levels[start + (i % 5)];
    const lesson = level.lessons[i % level.lessons.length];
    questions.push({
      id: `final-${start}-${end}-q${i + 1}`,
      question: `Final exam Levels ${start}-${end}: what is the strongest professional approach when using ${lesson.title}?`,
      options: [
        "Understand the purpose, write a tiny example, test the behavior, and keep responsibilities separate",
        "Copy a large answer without reading it",
        "Avoid naming variables clearly",
        "Mix input, business logic, storage, and output in one giant block"
      ],
      correctAnswerIndex: 0,
      explanation: "Job-ready Java is about correct code plus maintainable structure. Small examples build understanding; separation of responsibilities keeps systems changeable."
    });
  }
  finalExams.push({
    id: `final-${start}-${end}`,
    title: `Final Exam: Levels ${start}-${end}`,
    levelStart: start,
    levelEnd: end,
    questions
  });
}

const curriculum = {
  levels,
  practiceExercises,
  playgroundTasks,
  capstoneProjects,
  flashcards,
  achievements,
  finalExams,
  resourceNotes: [
    {
      name: "Exercism Java Track",
      url: "https://github.com/exercism/java",
      license: "MIT",
      usage: "Downloaded as external reference material for future exercise expansion; app lessons and questions are original local content."
    },
    {
      name: "TheAlgorithms Java",
      url: "https://github.com/TheAlgorithms/Java",
      license: "MIT",
      usage: "Downloaded as external reference material for algorithms and data structures practice; app questions are original and attribution-safe."
    },
    {
      name: "Java Design Patterns",
      url: "https://github.com/iluwatar/java-design-patterns",
      license: "Open-source repository; verify exact license before copying any text or code into lessons.",
      usage: "Downloaded as design-pattern inspiration for future advanced lessons."
    },
    {
      name: "Kaggle public programming language trend datasets",
      url: "https://www.kaggle.com/api/v1/datasets/list?search=java%20programming",
      license: "Mixed public licenses, including Apache 2.0 and CC0 in downloaded small datasets",
      usage: "Downloaded only for optional context about programming language popularity; not needed by the APK."
    }
  ]
};

const outFile = path.join(outDir, "curriculum.json");
fs.writeFileSync(outFile, JSON.stringify(curriculum, null, 2));

const lessons = levels.flatMap(level => level.lessons);
console.log(`Wrote ${outFile}`);
console.log(JSON.stringify({
  levels: levels.length,
  lessons: lessons.length,
  lessonQuizQuestions: lessons.flatMap(lesson => lesson.quiz).length,
  practiceExercises: practiceExercises.length,
  playgroundTasks: playgroundTasks.length,
  capstoneProjects: capstoneProjects.length,
  flashcards: flashcards.length,
  achievements: achievements.length,
  finalExams: finalExams.length,
  finalExamQuestions: finalExams.flatMap(exam => exam.questions).length
}, null, 2));
