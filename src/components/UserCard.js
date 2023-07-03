function UserCard() {
  return (
    <div className="flex items-center space-x-2">
      <div>
        <a href="/" className="w-12 h-12 flex justify-center items-center rounded-full border text-[#1776D1] hover:border-[#1776D1] border-[rgba(54,132,206,0.34)] bg-[rgba(23,119,209,0.2)]">RO</a>
      </div>
      <div>
        <a href="/" className="text-base font-semibold hover:underline hover:text-[#1776D1]">Rita Oladokun</a>
        <p className="font-medium text-gray-500 text-xs">Software developer</p>
      </div>
    </div>
  );
}

export default UserCard;
