import Card from '@mui/material/Card';

function SectionCard({ img, children }) {
  return (
    <Card elevation={0} style={{ border: '1px solid #E0DFDB', borderRadius: 10 }}>
      {img && (
        <div className="flex flex-row justify-center items-center h-[350px] w-full">
          <img
            className="max-w-full min-h-full h-full w-full object-cover"
            src={img}
            alt="profile banner"
          />
        </div>
      )}

      <div className="p-10">
        {children}
      </div>
    </Card>
  );
}

export default SectionCard;
