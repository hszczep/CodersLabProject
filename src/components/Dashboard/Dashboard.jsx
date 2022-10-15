import React from "react";
import styled from "styled-components";
import Calendar from "../Analytics/Calendar";
import SwiperSlides from "../Analytics/SwiperSlide";
export default function Dashboard() {
  const events = [
    {
      startDate: "2022-10-05T08:00:00.000Z",
      endDate: "2022-10-05T19:00:00.000Z",
      id: "76tgf39376",
      description: "Zlot miłośników szpinaku",
    },
    {
      startDate: "2022-10-22T08:00:00.000Z",
      endDate: "2022-10-22T16:00:00.000Z",
      id: "76tgf39376",
      description: "Zjazd fanów BMW",
    },
    {
      startDate: "2022-10-18T08:00:00.000Z",
      endDate: "2022-10-18T16:00:00.000Z",
      id: "76tgf39376",
      description: "Zjazd fanów Audi",
    },
    {
      startDate: "2022-10-18T08:00:00.000Z",
      endDate: "2022-10-18T16:00:00.000Z",
      id: "76tgf39376",
      description: "Wizyta u fryzjera",
    },
  ];

  return (
    <DashboardContainer>
      <DashboardMain>
        <DashbordMenu>
          <DashbordHello>1</DashbordHello>
          <DashbordCalendar>
            <Calendar events={events} />
          </DashbordCalendar>
        </DashbordMenu>
        <DdashbordEvents>
          <SwiperSlides events={events} />
        </DdashbordEvents>
      </DashboardMain>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 24px;
  gap: 36px;
`;

const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashbordMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

const DashbordHello = styled.div`
  display: flex;
  flex: 1;
`;

const DashbordCalendar = styled.div`
  display: flex;
  flex: 1;
`;

const DdashbordEvents = styled.div`
  display: flex;
  flex: 1;
  max-width: 900px;
`;
