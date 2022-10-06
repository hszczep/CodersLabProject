import React, { useState } from "react";
import Calendar, { OnClickResult, Controller } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { OverlayTrigger, Tooltip } from "reactstrap";
import moment from "moment";
// import { useHistory } from 'react-router-dom';
const Calendars = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  let tooltipInstance = null;
  const allMonthValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const events = [
    {
      startDate: "2022-10-05T08:00:00.000Z",
      id: "76tgf39376",
      description: "Zlot miłośników szpinaku",
    },
    // {
    //   startDate: "2022-10-08T08:00:00.000Z",
    //   endDate: "2022-10-10T16:00:00.000Z",
    //   id: "76tgf39376",
    //   description: "Zjazd fanów PCSSu"
    // },
  ];

  const [selectedDate, setSelectedDate] = useState();

  const [calendarText, setCalendarText] = useState(`No Date is selected`);

  // const history = useHistory()

  const handleDateChange = (value) => {
    setSelectedDate(value);
    setCalendarText(`The selected Date is ${value.toDateString()}`);
  };

  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Year  is selected`);
  };

  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Month  is selected`);
  };

  // const onClickDay = (date) => {
  //   if (events.find( e => moment(e.startDate).format("DD-MM-YYYY") === moment(date).format("DD-MM-YYYY"))){
  //     history.push({
  //       pathname: '/days',
  //       search: `?day=${date.getDay()}`
  //     })
  //     // history.push(`/day?day=${date.getDay()}`)
  //   }
  // }

  const handleMouseLeave = (info) => {
    if (tooltipInstance) tooltipInstance.dispose();
    tooltipInstance = null;
  };

  // const handleDayHover = (e) => {
  //     if (e.events.length > 0) {
  //         console.log(e.element.firstChild, e.element)
  //         return (
  //             <OverlayTrigger
  //                 show={true}
  //                 key="top"
  //                 placement="top"
  //                 overlay={
  //                     <Tooltip id={`tooltip-top`}>
  //                         Tooltip on <strong>top</strong>.
  //                     </Tooltip>
  //                 }
  //             >
  //                 {e.element.firstChild}
  //             </OverlayTrigger>
  //         )
  //     }
  // }

  return (
    <div className="app">
      <h2 className="calander-details">{calendarText}</h2>
      <Calendar
        events={events}
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        //onChange={handleDateChange}
        value={selectedDate}
        // dataSource={events}
        // minDate={new Date("11-11-2019")}
        // onDayEnter={e => handleDayHover(e)}
        // onClickDay={({ date, view }) => {
        //   if (events.find( e => moment(e.startDate).format("DD-MM-YYYY") === moment(date).format("DD-MM-YYYY"))){
        //   console.log("dsa");
        //   // window.location.href='/mzuri'
        // }}}

        // onClickDay={onClickDay}

        tileContent={({ date, view }) => {
          if (
            events.find(
              (e) =>
                moment(e.startDate).format("DD-MM-YYYY") ===
                moment(date).format("DD-MM-YYYY")
            )
          ) {
            return (
              <div
                style={{
                  padding: 0,
                  margin: 0,
                  height: 0.5,
                  display: "block",
                  textDecoration: "none",
                }}
              >
                &bull;
              </div>
            );
          }
        }}
      />
    </div>
  );
};
export default Calendars;
