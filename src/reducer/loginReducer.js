export default function loginReducer(state = true, action) {
	switch (action.type) {
		case "LOGIN":
			return true;
		case "LOGOUT":
			return false;
		default:
			return state;
	}
}
