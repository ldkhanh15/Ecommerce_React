import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  return (
    <>
      {item &&
        <>
          <Link to={item.path}>
            {item.title}
            {item.children &&
              <ul>
                {item.children.map((child, index) => (
                  <li key={index}>
                    <Link to={child.path}>{child.title}</Link>
                  </li>
                ))}
              </ul>
            }
          </Link>
        </>
      }

    </>
  );
};
export default SubMenu