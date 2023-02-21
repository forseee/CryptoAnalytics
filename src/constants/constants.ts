export const API_KEY =
  "0eff0e69110923e9f16cbab7780a88c38769f8fcb6ed66835101d4da849f";

type CurrencyT = Array<"USD" | "BTC" | "ETH">;

export const allCurrency: CurrencyT = ["USD", "BTC", "ETH"];

export const routes = {
  home: "/",
  converter: "/converter",
};
