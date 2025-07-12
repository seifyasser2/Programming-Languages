import "./Webstyle.css";
import Tagbutton from "./Tagbutton";
export default function SideMenu() {
  const Buttons = [
    { id: 1, nameLan: "JavaScript" },
    { id: 2, nameLan: "TypeScript" },
    { id: 3, nameLan: "Kotlin" },
    { id: 4, nameLan: "Python" },
    { id: 5, nameLan: "Swift" },
    { id: 6, nameLan: "Java" },
    { id: 7, nameLan: "C++" },
    { id: 8, nameLan: "PHP" },
    { id: 9, nameLan: "Kotlin" },
    { id: 10, nameLan: "Python" },
    { id: 11, nameLan: "Swift" },
    { id: 12, nameLan: "Java" },
    { id: 13, nameLan: "C++" },
    { id: 14, nameLan: "PHP" },
    { id: 15, nameLan: "PHP" },
    { id: 16, nameLan: "PHP" },
    { id: 17, nameLan: "JavaScript" },
    { id: 18, nameLan: "TypeScript" },
    { id: 19, nameLan: "Kotlin" },
    { id: 20, nameLan: "Python" },
    { id: 21, nameLan: "Swift" },
    { id: 22, nameLan: "Java" },
    { id: 23, nameLan: "C++" },
    { id: 24, nameLan: "PHP" },
    { id: 25, nameLan: "Kotlin" },
    { id: 26, nameLan: "Python" },
    { id: 27, nameLan: "Swift" },
    { id: 28, nameLan: "Java" },
    { id: 29, nameLan: "C++" },
    { id: 30, nameLan: "PHP" },
    { id: 31, nameLan: "PHP" },
    { id: 32, nameLan: "PHP" },
    { id: 33, nameLan: "PHP" },
    { id: 34, nameLan: "PHP" },
    { id: 35, nameLan: "PHP" },
    { id: 36, nameLan: "PHP" },
    { id: 37, nameLan: "PHP" },
  
  ];

  const ButtonsList = Buttons.map((Button) => {
    return <Tagbutton key={Button.id} nameLan={Button.nameLan} />;
  });
  return <div className="SideMenu">{ButtonsList}</div>;
}
