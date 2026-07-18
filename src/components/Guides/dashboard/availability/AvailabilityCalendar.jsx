import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AvailabilityCalendar.css";

export default function AvailabilityCalendar() {
  const [selectedDates, setSelectedDates] = useState([]);

  const toggleDate = (date) => {
    const dateString = date.toDateString();

    if (selectedDates.includes(dateString)) {
      setSelectedDates(
        selectedDates.filter((d) => d !== dateString)
      );
    } else {
      setSelectedDates([...selectedDates, dateString]);
    }
  };

  return (
    <div className="bg-[#243342] rounded-2xl p-8 shadow-lg">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl text-white font-bold">
            Availability Calendar
          </h2>

          <p className="text-gray-400 mt-1">
            Select the days you are available for tours.
          </p>
        </div>

        <button className="bg-[#00C896] hover:bg-[#00b383] text-white px-6 py-3 rounded-xl font-semibold">
          Save Availability
        </button>

      </div>

      <Calendar
        onClickDay={toggleDate}
        tileClassName={({ date }) =>
          selectedDates.includes(date.toDateString())
            ? "selected-date"
            : null
        }
      />

    </div>
  );
}