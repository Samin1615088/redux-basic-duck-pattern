import { createBug, removeBug, resolveBug, updateBug } from "./store/bugs";
import configureStore from "./store/storeAppConfigure";

const store = configureStore();

const unSubscribed = store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(
	createBug({ description: 'BUG 1' }) //sending action
)
store.dispatch(
	createBug({ description: 'BUG 2' })
)


store.dispatch(
	resolveBug({ id: 1 })
)


store.dispatch(
	updateBug({ id: 1, description: "UPDATED" })
)

store.dispatch(
	removeBug({ id: 1 })
)

