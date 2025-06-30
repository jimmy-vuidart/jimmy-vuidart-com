export interface PortfolioItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  link?: string;
  github?: string;
  date: string;
  isShowcased?: boolean;
}

export interface PortfolioData {
  items: PortfolioItem[];
}

export default PortfolioData;
