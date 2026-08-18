export default function updateData(e, dataType, setData) {
  setData((prev) => {
    const newValue = e.target.value;
    return {
      ...prev,
      [dataType]: newValue,
    };
  });
}
