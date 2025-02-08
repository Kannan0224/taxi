import { maintaince } from "../../assets/images/Image";
import './maintaince.css'
function MaintaincePage () {
    return (
        <div className="maintaince-container">
            <img width={600} height={800} src={maintaince} alt=""></img>
            <div>
                <h4>Maintenance is Going on... </h4>
            </div>
        </div>
    )
}

export default MaintaincePage