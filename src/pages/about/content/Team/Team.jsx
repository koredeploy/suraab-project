import "./Team.scss"
import team_member_1 from "../../../../assets/team_member_1.svg"
import team_member_2 from "../../../../assets/team_member_2.svg"
import team_member_3 from "../../../../assets/team_member_3.svg"
import team_member_4 from "../../../../assets/team_member_4.svg"

const Team = () => {
  return (
    <div className="about_team_bg py-5">
        <div>
            <div className="text-center">
            <p className="text-black-100 medium-text">Our Team</p>
            <p className="text-black-200 large-text">Meet the Team</p>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
                <div>
                    <img src={team_member_1} alt="" className=" w-72 h-80 object-cover rounded" />
                    <p className="text-black-200">Benjamin White</p>
                    <p className="text-black-100">Electrician</p>
                </div>
                <div>
                    <img src={team_member_2} alt="" className=" w-72 h-80 object-cover rounded" />
                    <p className="text-black-200">Benjamin White</p>
                    <p className="text-black-100">Electrician</p>
                </div>
                <div>
                    <img src={team_member_3} alt="" className=" w-72 h-80 object-cover rounded" />
                    <p className="text-black-200">Benjamin White</p>
                    <p className="text-black-100">Electrician</p>
                </div>
                <div> 
                    <img src={team_member_4} alt="" className=" w-72 h-80 object-cover rounded" />
                    <p className="text-black-200">Benjamin White</p>
                    <p className="text-black-100">Electrician</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team