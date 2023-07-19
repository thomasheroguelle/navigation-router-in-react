import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError(); // = je recupere mes erreurs
    if (!isRouteErrorResponse(error)) { // si pas une erreur response
        return <p> Ooooops ! </p>
    }
    const {
        status,
        statusText,
        data } = error;
    const { message } = data; // message est dans un objet data, il faut donc le destructurer egalement
    return (
        <main>
            <h2>erreur {status} survenue</h2>
            <p>{statusText || message}</p>
        </main>
    )
};
export default ErrorPage;