import { useNavigate } from "react-router-dom"

const GoBackButton = () => {
    const navigate = useNavigate();
    const back = () => navigate(-1);
    return <button onClick={back}>Retour</button>
}
export default GoBackButton;