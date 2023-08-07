const TimeslotButton = ({ time, onClick, queryParams, scheduleSession }) => {
  const handleButtonClick = () => {
    onClick(time);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        className={`rounded-lg transition-all duration-300 text-base py-3 ${
          time === queryParams.get('timeslot') ? 'w-[50%] px-2 text-white bg-[#666666] cursor-default' : 'w-full px-6 border border-[#1776D1] text-[#1776D1] hover:outline hover:transition-none'
        }`}
        onClick={handleButtonClick}
      >
        {time}
      </button>
      {(time === queryParams.get('timeslot')) && (
        <button
          type="button"
          onClick={scheduleSession}
          className="px-2 py-3 bg-[#1776D1] hover:bg-[#1465B2] w-[50%] text-base text-white font-semibold rounded-lg focus:outline-none"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default TimeslotButton;
