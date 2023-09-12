const formatPrice = (num) => {
  return new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(num / 100);
};

const getUniqueValue = (arr, type) => {
  let tempItems = arr.map((item) => item[type]);
  if (type == "colors") {
    tempItems = tempItems.flat();
  }
  return ["all", ...new Set(tempItems)];
};
export { formatPrice, getUniqueValue };
