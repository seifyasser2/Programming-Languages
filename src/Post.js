import "./Webstyle.css";
export default function Post({  title , description }) {
  return (
    <div className="Post">
      <h2 className="title"> {title} </h2>
      <p>{description}</p>
    </div>
  );
}
