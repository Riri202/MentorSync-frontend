function UserCard({ profile = { firstname: 'Rita', lastname: 'Oladokun', occupation: 'Software Developer', id: '6484fb2fdbfbfe240584907e' } }) {
  const { firstname, lastname, occupation, _id: id } = profile;
  return (
    <div className="flex items-center space-x-2">
      <div>
        <a href={`/users/${id}`} className="w-12 h-12 flex justify-center items-center rounded-full border text-[#1776D1] hover:border-[#1776D1] border-[rgba(54,132,206,0.34)] bg-[rgba(23,119,209,0.2)]">{`${firstname?.charAt(0).toUpperCase()}${lastname?.charAt(0).toUpperCase()}`}</a>
      </div>
      <div>
        <a href={`/users/${id}`} className="text-base font-semibold hover:underline hover:text-[#1776D1]">{`${firstname} ${lastname}`}</a>
        <p className="font-medium text-gray-500 text-xs">{occupation}</p>
      </div>
    </div>
  );
}

export default UserCard;
