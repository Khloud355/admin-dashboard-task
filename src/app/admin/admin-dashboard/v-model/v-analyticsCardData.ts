export interface V_AnalyticCardData {
  name: string;
  image: string;
  value: string;
  percentage?: {
    amount: string;
    positive: boolean;
  };
}
