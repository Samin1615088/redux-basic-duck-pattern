import { createBug, removeBug, resolveBug, updateBug } from "./store/bugs";
import configureStore from "./store/storeAppConfigure";

const store = configureStore();

const unSubscribed = store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(
	createBug('BUG 1') //sending action
)
store.dispatch(
	createBug('BUG 2')
)


store.dispatch(
	resolveBug(1)
)


store.dispatch(
	updateBug(1, "UPDATED")
)

store.dispatch(
	removeBug(1)
)

