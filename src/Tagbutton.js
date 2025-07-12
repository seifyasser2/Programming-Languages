import "./Webstyle.css";
export default function Tagbutton({nameLan,children}) {
  return <button className="Tagbutton">{children} {nameLan} </button>;
}
