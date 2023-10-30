function UserCard({ profile = { firstname: 'Rita', lastname: 'Oladokun', occupation: 'Software Developer', id: '6484fb2fdbfbfe240584907e' } }) {
  const { firstname, lastname, occupation, _id: id } = profile;
  return (
    <div className="flex items-center space-x-2 text-sm md:text-base ">
      <div>
        <a href={`/users/${id}`} className="w-8 h-8 md:w-12 md:h-12 flex justify-center items-center rounded-full border text-blue-600 hover:border-blue-800 border-blue-400 bg-[rgba(23,119,209,0.2)]">{`${firstname?.charAt(0).toUpperCase()}${lastname?.charAt(0).toUpperCase()}`}</a>
      </div>
      <div>
        <a href={`/users/${id}`} className="font-generalSansMedium hover:underline hover:text-blue-600">{`${firstname} ${lastname}`}</a>
        <p className="text-gray-500 text-xs font-generalSansRegular">{occupation}</p>
      </div>
    </div>
  );
}

export default UserCard;
