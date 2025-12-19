# REACT AND JAVASCRIPT ASSIGNMENT (Month 4)

## SECTION 1: What React Is and Why It Exists
React is a JavaScript library for building user interfaces, developed to solve the challenge of managing complex and dynamic UI updates efficiently. Instead of manually updating the webpage whenever data changes, React automatically updates the UI based on changes in state or props.

React focuses only on the view layer (UI), allowing developers to integrate it with other tools for routing, data fetching, and state management.

### Declarative Programming in React
React uses a declarative programming approach where developers describe what the UI should look like for a given state, and React handles how the UI updates. This reduces bugs and makes applications easier to understand and maintain.

### The Virtual DOM
The Virtual DOM is a lightweight copy of the real DOM stored in memory. When state changes:
- React creates a new Virtual DOM
- Compares it with the previous version (diffing)
- Updates only the changed parts in the real DOM  
This improves performance and efficiency.

### React Elements and Rendering
A React element is a JavaScript object that describes what should appear on the screen. Rendering connects these elements to the real DOM using `ReactDOM.render()`.

### Components: The Building Blocks of React
Components are reusable UI units that improve:
- Code reusability
- Application organization
- Maintainability

### Function Components and JSX
Function components are JavaScript functions that return JSX. JSX allows HTML-like syntax in JavaScript and improves readability.
Rules:
- One parent element
- JavaScript expressions use `{ }`
- Component names start with capital letters

### Props, State, and Events
- **Props** pass data from parent to child components and are read-only
- **State** stores dynamic data that changes over time
- **Events** trigger state updates and automatic re-rendering

### Side Effects and useEffect
Side effects such as data fetching, timers, and DOM updates are handled using the `useEffect` hook.


## SECTION 2: React Hooks

### What Hooks Are
Hooks allow function components to use React features such as state and lifecycle behavior.

Rules of Hooks:
- Must start with `use`
- Must be called at the top level
- Only used in function components

### Common Hooks
- **useState** – Manages component state
- **useEffect** – Handles side effects
- **useContext** – Shares data without prop drilling
- **useReducer** – Manages complex state logic
- **useRef** – Stores persistent values
- **useMemo & useCallback** – Improve performance


## SECTION 3: JavaScript HTML DOM
The DOM represents an HTML page as a tree of objects. JavaScript can:
- Read content
- Modify styles
- Add or remove elements dynamically

### DOM Access Methods
- `getElementById()`
- `getElementsByClassName()`
- `getElementsByTagName()`
- `querySelector()`
- `querySelectorAll()`


## SECTION 4: JavaScript HTML DOM – Elements
Each HTML element has properties, methods, and attributes.

### Modifying Content and Styles
- `innerHTML`
- `style`
- `className`

### Working with Attributes
- `getAttribute()`
- `setAttribute()`

### Managing Elements
- `appendChild()`
- `removeChild()`
- `replaceChild()`


## Previous Assignment
Documentation for the previous assignment is available in:
- `docs/README-month3.md`
