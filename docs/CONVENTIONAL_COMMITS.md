# Polytable - Conventional Commits

A concise reference explaining each Conventional Commit type, when it should be used, and a short example for clarity.

### **feat**

* Used when introducing a new feature that adds new capabilities to the project.
* Example: `feat: implement multi-cell range selection for table interactions`

### **fix**

* Used when correcting a bug, unexpected behavior, or faulty logic.
* Example: `fix: correct inaccurate selection boundaries when dragging upwards`

### **docs**

* Used when modifying or improving documentation without touching code behavior.
* Example: `docs: expand setup section with Proto and Bun installation steps`

### **style**

* Used for formatting changes that do not modify program logic.
* Example: `style: normalize import order and apply consistent spacing`

### **refactor**

* Used when restructuring or improving code internals without changing its behavior.
* Example: `refactor: extract common selection utilities into shared helpers`

### **perf**

* Used when improving performance or reducing unnecessary computation.
* Example: `perf: optimize cell rendering to reduce component re-renders`

### **test**

* Used when adding, updating, or improving tests.
* Example: `test: add coverage for reversed drag selection scenarios`

### **build**

* Used when changing build configuration, bundlers, or tooling setup.
* Example: `build: adjust Vite build settings for library output mode`

### **ci**

* Used when modifying continuous integration workflows or pipelines.
* Example: `ci: add workflow step to verify lockfile integrity on each commit`

### **chore**

* Used for maintenance tasks unrelated to source logic or builds.
* Example: `chore: update dependencies and regenerate bun.lock`
