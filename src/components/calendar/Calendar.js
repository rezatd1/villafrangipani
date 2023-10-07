import React, { useState, useEffect } from "react";
import "./Calendar.scss";
import CommonHelper from "../../utilities/commonHelper/CommonHelper";

import rightArrow from "../../assets/img/right-arrow-15-black.png";
import leftArrow from "../../assets/img/left-arrow-15-black.png";

import Hover from "./Hover";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [toggleHover, setToggleHover] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    calendarEventChecker();
  }, []);

  function getMonthDay(event) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dtStart = new Date(event.DTSTART);
    const month = months[dtStart.getMonth()];
    const day = dtStart.getDate();

    return `${month} ${day}`;
  }

  function formatDate(event) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dtStart = new Date(event.DTSTART);
    const dtEnd = new Date(event.DTEND);

    const formattedStartDate = `${daysOfWeek[dtStart.getDay()]}, ${
      months[dtStart.getMonth()]
    }, ${dtStart.getDate()}, ${formatTime(dtStart)}`;
    const formattedEndDate = `${daysOfWeek[dtEnd.getDay()]}, ${
      months[dtEnd.getMonth()]
    }, ${dtEnd.getDate()}, ${formatTime(dtEnd)}`;

    return `${formattedStartDate} - ${formattedEndDate}`;
  }

  function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  const daysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), day);

      const eventForDay = events.find((event) => {
        const eventStartDate = new Date(event.DTSTART);
        return currentDate.toDateString() === eventStartDate.toDateString();
      });
      console.log(eventForDay);

      const isEventDay = events.some((event) => {
        const eventStartDate = new Date(event.DTSTART);
        const eventEndDate = new Date(event.DTEND);
        return (
          (currentDate >= eventStartDate && currentDate <= eventEndDate) ||
          currentDate.toDateString() === eventStartDate.toDateString()
        );
      });

      const dayClass = isEventDay ? "calendar-day event-day" : "calendar-day";
      const formatedDate = formatDate(events[0]);
      const startMoth = getMonthDay(events[0]);
      days.push(
        <div
          key={day}
          className={`${CommonHelper.isMobileDevice() ? 'responsive-sm-width' : 'responsive-lg-width'} p-2 ${dayClass}`}
          onMouseEnter={(e) => {
            if (isEventDay) setToggleHover(day);
          }}
          onMouseLeave={() => setToggleHover("")}
        >
          {isEventDay && day === toggleHover && (
            <Hover
              display={toggleHover}
              uid={eventForDay && eventForDay["UID"]}
              date={formatedDate}
              startDate={startMoth}
            />
          )}
          <span>{day}</span>
        </div>
      );
    }

    return days;
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const parseICalendarData = (icalData) => {
    const events = [];
    const eventStrings = icalData.split("BEGIN:VEVENT");
    eventStrings.shift();

    for (const eventString of eventStrings) {
      const event = {};

      const lines = eventString.trim().split("\r\n");
      for (const line of lines) {
        const [key, value] = line.split(":");
        if (key && value) {
          event[key] = value;
        }
      }

      events.push({
        UID: event.UID,
        DTSTART: event.DTSTART.replace(
          /(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/,
          "$1-$2-$3T$4:$5:$6Z"
        ),
        DTEND: event.DTEND.replace(
          /(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/,
          "$1-$2-$3T$4:$5:$6Z"
        ),
        IMAGE_URL:
          "https://images.squarespace-cdn.com/content/v1/645efd8204ce186445584a41/1686472330572-RYWCHT1UOF8BO1YY9KFX/Booked-logo.png",
      });
    }

    return events;
  };

  const calendarEventChecker = () => {
    fetch(
      "https://agents.baliluxuryvillas.adinal.co:9999/api/api.php?MOD=462&AGENT=OWNER_KENT_552_1370&VILLA=1370&NAME=FRANGIPANI"
    )
      .then((response) => response.text())
      .then((icalData) => {
        const formattedEvents = parseICalendarData(icalData);
        setEvents(formattedEvents);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className={`w-100 d-flex justify-content-center `}>
      <div className="calendar m-5">
        <div className="calendar-header d-flex justify-content-between w-100">
          <div onClick={prevMonth}>
            <img
              className="navigation-icon"
              src={leftArrow}
              alt="Previous Month"
            />
          </div>
          <h2 className="cu-font-thin h2 mb-4 text-black">
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              year: "numeric",
            }).format(date)}
          </h2>
          <div onClick={nextMonth}>
            <img
              className="navigation-icon"
              src={rightArrow}
              alt="Next Month"
            />
          </div>
        </div>
        {isLoading ? (
          <div className="w-100 d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="calendar-grid">{renderCalendar()}</div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
