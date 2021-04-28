import { configureStore } from '@reduxjs/toolkit'
import reducer from "./bugs"

export default function configureAppStore() {
    const store = configureStore({ reducer });
    return store;
};
//it was when I did not use reduxToolkit 
// export default function configureStore() {
//     const store = createStore(reducer, devToolsEnhancer({ trace: true }));
//     return store;
// };