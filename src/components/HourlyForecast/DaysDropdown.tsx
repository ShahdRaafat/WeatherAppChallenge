interface DaysDropdownProps {
  selectedDay: number;
  handleDaySelect: (day: number) => void;
  days: { day: string; date: string }[];
}

function DaysDropdown({
  selectedDay,
  handleDaySelect,
  days,
}: DaysDropdownProps) {
  return (
    <div className="absolute right-0 top-full z-10 mt-2 w-48 rounded-md bg-neutral-700 p-1 shadow-lg">
      {days.map((day) => (
        <button
          key={day.day}
          type="button"
          className={`w-full rounded px-2 py-1 text-left hover:bg-neutral-600 ${
            selectedDay === days.indexOf(day) ? "bg-neutral-600" : ""
          }`}
          onClick={() => handleDaySelect(days.indexOf(day))}
        >
          {day.day}
        </button>
      ))}
    </div>
  );
}

export default DaysDropdown;
