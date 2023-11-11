export const togglePasswordType = (currentType, setType) => {
  setType(currentType === "password" ? "text" : "password");
};

export const checkFreq = (freq) => {
  switch (freq) {
    case 0:
      return "Daily";
    case 1:
      return "Weekly";
    case 2:
      return "Monthly";
    default:
      return "Daily";
  }
};

export const checkStatus = (status) => {
  switch (status) {
    case 1:
      return "Ongoing";
    case 2:
      return "Running";
    case 3:
      return "Completed";
    default:
      return "Ongoing";
  }
}