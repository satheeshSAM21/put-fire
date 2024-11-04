import { Route, Routes} from "react-router-dom";

export const PageRouter = ({...props}) => {
  return (
    <div>
      <Routes>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((ele, i) => {
            return <Route key={i} path={ele.path} element={ele.element} />;
          })}
      </Routes>
    </div>
  );
};