import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
const ShowMenu = true;
function App() {
  const Posts = [
    {
      id: 1,
      title: "JavaScripJavaScript - Powering the Webt",
      description: `JavaScript is a high-level scripting language mainly used for web development.
It allows interactive features like sliders, popups, and dynamic content.
JavaScript works on the client side in the browser but can also run on servers using Node.js.
It’s one of the core technologies of the web alongside HTML and CSS.`,
    },

    {
      id: 2,
      title: "TypeScript - JavaScript with Types",
      description: `TypeScript is a superset of JavaScript that adds static typing.
It helps catch bugs during development and improves code quality.
TypeScript is widely used in large-scale web applications.
It compiles to JavaScript and works anywhere JavaScript runs.`,
    },

    {
      id: 3,
      title: "Kotlin - Modern Java Alternative",
      description: `Kotlin is fully interoperable with Java and runs on the JVM.
It’s concise, safe, and preferred for Android development.
Google officially supports Kotlin for Android apps.
It combines the power of Java with modern features.`,
    },
    {
      id: 4,
      title: "Python - Code Made Simple",
      description: `Python is known for its clean syntax and readability.
It’s widely used in data science, AI, web development, and automation.
With vast libraries and frameworks, Python speeds up development.
It's ideal for both beginners and professionals alike.`,
    },

    {
      id: 5,
      title: "Swift - iOS Development Made Easy",
      description: `Swift is Apple's language for iOS and macOS app development.
It’s fast, safe, and easy to read.
Swift is replacing Objective-C for modern Apple apps.
It integrates well with Apple’s ecosystem and tools.`,
    },

    {
      id: 6,
      title: "Ruby - Programmer's Best Friend",
      description: `Ruby is a dynamic and expressive language focused on simplicity.
It’s most known for the Ruby on Rails web framework.
Developers love its readable syntax and fast development cycle.
Ruby is great for startups and rapid prototyping.`,
    },

    {
      id: 7,
      title: " Java - Write Once, Run Anywhere",
      description: `Java is a versatile and portable language used in enterprise, web, and Android development.
It runs on the Java Virtual Machine (JVM) making it platform-independent.
Java is known for its stability, scalability, and huge community support.
It powers major applications from banking systems to mobile apps.`,
    },

  ];
  const PostLists = Posts.map((post) => {
    return <Post key={post.id} title={post.title} description={post.description} />;
  });

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* POST & SIDE MENU CONTAINER */}
        <div className="Container">
          {/* POSTS CONTAINER */}
          <div style={{ width: "70%" }}>{PostLists}</div>
          {/*==== POSTS CONTAINER ====*/}
          <AppSideMenu />
        </div>
        {/*=== POST & SIDE MENU CONTAINER ===*/}
      </div>
    </div>
  );
}

function AppSideMenu() {
  if (ShowMenu) {
    return <SideMenu />;
  } else {
    return null;
  }
}

export default App;
