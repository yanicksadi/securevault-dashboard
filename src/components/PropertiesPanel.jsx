const PropertiesPanel = ({ file }) => {
  if (!file) {
    return <div style={{ padding: "20px", color: "#9CA3AF" }}>Select a file</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginTop: 0 }}>{file.name}</h2>
      <p>Type: {file.type}</p>
      <p>Size: {file.size || "N/A"}</p>
    </div>
  );
};

export default PropertiesPanel;
