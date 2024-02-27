import { createContext } from "react";

const RefreshAnalyticContext = createContext({refreshValue: 1, setRefreshValue: () => {}})

export default RefreshAnalyticContext;