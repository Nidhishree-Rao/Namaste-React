import { useRouteError } from "react-router-dom";

//Using useRouteError hook we can read the type of error and can show it to the user

const Error = () =>
{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Ops!! Something went wrong</h1>
            <h3>{err.status} : {err.statusText} </h3>
        </div>
    )
}

export default Error;