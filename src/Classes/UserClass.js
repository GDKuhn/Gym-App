class UserClass {
	static randomId = 1;

	constructor(userId, userFirstName, userLastName) {
		this.userId = UserClass.randomId * Math.floor(Math.random() * 10000);
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
	}
}

export default UserClass;
