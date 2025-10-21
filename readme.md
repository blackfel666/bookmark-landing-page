# 🔖 Bookmark Landing Page

This project is an implementation of a modern and highly modular landing page for a bookmark management service. The development focused on accessibility, functionality, and **CSS scalability** achieved through the use of **Sass**.

***

## ✨ Key Features

* **SASS Architecture (7-1 Pattern):** Styles are organized into a clear, modular system, making maintenance and scaling straightforward.
* **Responsive Design (Mobile-First):** Complete implementation of Media Queries (managed via Sass Mixins) to ensure optimal viewing on mobile, tablet, and desktop devices.
* **Mobile Navigation:** "Hamburger" navigation menu with open and close functionality (controlled by `main.js`).
* **Modular Styles:** Use of Sass variables (`$`) and mixins (`@mixin`) for centralized management of colors, typography, and breakpoints.

***

### 🛠️ Technologies Used

This project was built using fundamental web technologies and essential pre-processing tools.

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic content structure, including modern elements and ARIA attributes. |
| **SASS (SCSS)** | **CSS Preprocessor** for modular styles, nesting, variables, mixins, and complete logic for the tab feature. |
| **JavaScript** | Controls interactive functionality, such as the mobile menu. |
| **Git** | Project version control. |

***

### 🚀 Getting Started

Follow these steps to get a local copy of the project up and running on your machine.

ghpages link = 

**Prerequisites**
You will need **Node.js and npm** installed to be able to compile the Sass files.

**Installation**
1.  Clone the repository or download the source code:

    ```bash
    git clone [https://github.com/blackfel666/bookmark-landing-page.git](https://github.com/blackfel666/bookmark-landing-page.git)
    cd bookmark-landing-page
    ```

2.  **Compile SASS:**
    Run the Sass compiler to convert the `.scss` files into plain CSS:

    ```bash
    # (Ensure Sass is installed globally: npm install -g sass)
    sass src/styles/style.scss src/styles/style.css
    ```
    *(Note: You can automate this compilation using npm scripts if desired).*

3.  Open the `index.html` file in your browser to view the result:
    ```bash
    # On Windows:
    start index.html
    
    # Or for macOS/Linux:
    open index.html
    ```

***

### 📂 Project Structure

The project follows a **modular and scalable structure** (similar to the **7-1 Pattern**) for style management.

```
├── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── ... (SVGs e iconos)
│   │       └── ... (Imágenes de la landing)
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── styles/
│       ├── abstracts/     
│       │   ├── _variables.scss  
│       │   └── _mixins.scss     
│       │
│       ├── base/          
│       │   ├── _reset.scss      
│       │   └── _typography.scss 
│       │
│       ├── components/    
│       │   ├── _buttons.scss    
│       │   └── _rrss-icons.scss 
│       │
│       ├── layout/        
│       │   ├── _header.scss     
│       │   └── _footer.scss     
│       │
│       ├── pages/         
│       │   ├── _hero.scss       
│       │   ├── _features.scss   
│       │   ├── _faq.scss        
│       │   └── _contact.scss    
│       │
│       └── style.scss     
└── README.md
```


***

### ✍️ Author

[Blackfel666 / Yohann Velasquez] - Front-End Development

### 📄 License

This project is under the **MIT License**.

### 💡 Next Steps / Improvements

* Implement **Tailwind** 