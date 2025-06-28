import { useTabContext } from "../../Context/GlobalContext";

export const TabTrigger = ({ tabValue, label }) => {
  const { activeTab, setActiveTab } = useTabContext();

  const isActive = activeTab === tabValue;

  return (
    <button
      onClick={() => setActiveTab(tabValue)}
      style={{
        padding: "8px 16px",
        border: "none",
        borderBottom: isActive ? "2px solid blue" : "2px solid transparent",
        background: "none",
        cursor: "pointer",
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "black" : "#777",
      }}
    >
      {label}
    </button>
  );
};
