import { useRouteError, Link } from "react-router-dom";
import Style from "./index.module.css";
type ErrorResponse = {
  data: any;
  status: number;
  statusText: string;
  message?: string;
};

export const NotFound = () => {
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div className={Style.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'}>
      <button
        className={Style.button}
        //   onClick={() => addTaskOnList()}
      >
        Voltar
      </button>
      </Link>
    </div>
  );
};
