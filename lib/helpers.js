export const createHumanReadableDate = (savedDate) => {
    return new Date(savedDate).toLocaleDateString("cs-CZ", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };