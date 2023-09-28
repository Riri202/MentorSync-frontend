export default function TabPanel(props) {
  const { children, value, index, className = "p-3" } = props;

  return (
    <div
      className={className}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        children
      )}
    </div>
  );
}
