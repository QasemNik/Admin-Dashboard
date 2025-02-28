import VisibilityIcon from "@mui/icons-material/Visibility";
import "./WidgetSm.css"
import { newMembers } from "../../../../data.js"
function WidgetSm() {
    return (
        <>
            <div className="widgetSm">
                <span className="widgetSmTitle">New Join Members</span>
                <ul className="widgetSmList">
                    {newMembers.map((member) => (
                        <li key={member.id} className="widgetSmListItem">
                            <img src={member.img}  alt="MemberImage" aria-label="widget image" className="widgetSmImg" />
                            <div className="widgetSmUser">
                                <span className="widgetSmUserName">{member.name}</span>
                                <title className="widgetSmUserTitle">{member.title}</title>
                            </div>
                            <button aria-labelledby="widget label" className="widgetSmButton">
                                <VisibilityIcon className="widgetSmIcon" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default WidgetSm
