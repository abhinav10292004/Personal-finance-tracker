export const currencyFormatter = (amount) => {
  const formatter = Intl.NumberFormat("en-US", {
    currency: "INR",
    style: "currency",
  });

  return formatter.format(amount);
};
