import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButtton() {
    const navigate = useNavigate()

    return (
        <Button type="back" onClick={ (e) => { e.preventDefault(); navigate(-1) } }>&larr; Назад</Button>
    )
}

export default BackButtton