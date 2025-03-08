export const USDollar = (amount: number) => {
  const formattedUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
  return formattedUSD;
};
