import { createContext } from "react";

const SentimentDataContext = createContext({sentimentData: [null], setSentimentData : () => {}})

export default SentimentDataContext;