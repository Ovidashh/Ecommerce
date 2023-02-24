import { Icon } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "./Contact.css";
import Formullar from "./Formullar";


export default function Contact() {
    return (<>
        <div className="contact">
        <div className="first-open">
            <ChatIcon/>
            <h6>LUNI - VINERI, 09:00 - 17:00</h6>
            <h1>Scrie-ne pe chat</h1>
            <p>În timpul programului, avem urechile ciulite și preferăm chatul. Indiferent dacă ai nevoie de sfaturi sau este vorba de o comandă plasată, scrie-ne și vom încerca să te ajutăm imediat.</p>
        </div>
        <div className="second-open">
            <CallIcon/>
            <h6>LUNI - VINERI, 09:00 - 17:00</h6>
            <h1>07ovisovis</h1>
            <p>În timpul programului, dacă ai solicitări urgente pentru care chat-ul nu poate aștepta, contactează-ne telefonic.
            </p>
        </div>
        <div className="third-open">
            <MailOutlineIcon/>
            <h6>ÎN AFARA SAU ÎN TIMPUL PROGRAMULUI</h6>
            <h1>Trimite un mesaj</h1>
            <p>Dacă ne-ai prins în afara programului sau preferi e-mailul, lasă-ne un mesaj în formularul de mai jos. Suntem cu ochii pe e-mail și îti vom răspunde cât mai repede.</p>
        
        </div>
       <Formullar/>
        </div>
 
    </>
    );
}
