import { useTabContext } from "../../Context/GlobalContext";

export const TabContent = ({ tabValue, children }) => {
  const { activeTab } = useTabContext();

  if (activeTab !== tabValue) return null;

  return (
    <div style={{ marginTop: "16px", padding: "8px" }}>
      {children}
    </div>
  );
};
