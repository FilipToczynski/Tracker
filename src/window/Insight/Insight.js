import { IconContext } from "react-icons";
import {
  AiOutlineBarChart,
  AiOutlineCheck,
  AiOutlineNumber,
} from "react-icons/ai";
import { BsCalendarEvent, BsClock } from "react-icons/bs";
import "./insight.scss";

function Insight({ date, time, numOfTask, taskDone }) {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
        <div>
          <AiOutlineBarChart />
        </div>
      </IconContext.Provider>
      <div>
        <div className="window__row">
          <div className="window__inData">
            <h4>
              <IconContext.Provider value={{ color: "#fff", size: "0.7rem" }}>
                <div>
                  <BsCalendarEvent />
                </div>
              </IconContext.Provider>
            </h4>
            <p>{date}</p>
          </div>
          <div className="window__inData">
            <h4>
              <IconContext.Provider value={{ color: "#fff", size: "0.7rem" }}>
                <div>
                  <BsClock />
                </div>
              </IconContext.Provider>
            </h4>
            <p>{time}</p>
          </div>
          <div className="window__inData">
            <h4>
              <IconContext.Provider value={{ color: "#fff", size: "0.7rem" }}>
                <div>
                  <AiOutlineNumber />
                </div>
              </IconContext.Provider>
            </h4>
            <p>{numOfTask}</p>
          </div>
          <div className="window__inData">
            <h4>
              <IconContext.Provider value={{ color: "#fff", size: "0.7rem" }}>
                <div>
                  <AiOutlineCheck />
                </div>
              </IconContext.Provider>
            </h4>
            <p>{taskDone}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insight;
