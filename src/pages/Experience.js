import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function Experience(){
    return(
        <div className="experience">

            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element-education"
                date="2015-2016" iconStyle={{background:"#3e497a",color:"#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline=element-title">My High School is from  Ravindra Bharathi School,VNC,Hyderabad </h3>
                    <p>SSC , Board of Secondary Education</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element-education"
                date="2016-2018" iconStyle={{background:"#3e497a",color:"#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline=element-title">My Intermediate is from Trinity Junior College
                     Bhagatnagar,Karimnagar </h3>
                    <p> Telangana State Board of Intermediate Education (TSBIE)
                                                                                                </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element-education"
                date="2018-2022" iconStyle={{background:"#3e497a",color:"#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline=element-title">My Graduation is from  Vivekananda Institute Of Technology And Science College, JNTUH University
                    Housing Board colony,Bommakal,Karimnagar</h3>
                    <p>B.Tech in  Computer Science and  Engineering</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element-education"
                date="2021-2022" iconStyle={{background:"#e9d35b",color:"#fff"}}
                icon={<WorkIcon />}>
                    <h3 className="vertical-timeline=element-title">Associate Customer Support Agent
                     TechMahindra Hyderabad
                     </h3>
                     <p>Inbound Agent for Project Vodafone Qatar
                        (Handle all customer queries and troubleshooting over calls)
                     </p>
                
                </VerticalTimelineElement>
                
                <VerticalTimelineElement className="vertical-timeline-element-education"
                date="2022-2023" iconStyle={{background:"#e9d35b",color:"#fff"}}
                icon={<WorkIcon />}>
                    <h3 className="vertical-timeline=element-title">Full Stack Java Developer course from Digital Lync Institute ,Hyderabad
                     </h3>
                    <p>Certified as Full Stack Java Developer</p>
                </VerticalTimelineElement>
                

            </VerticalTimeline>
        </div>
    )
}
export default Experience;