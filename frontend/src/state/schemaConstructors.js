export class Name {

	constructor(name) {
		this.firstName = name.given_name;
		this.mName = name.mName;
		this.lastName = name.surname;
		this.prefix = name.prefix;
		this.suffix = name.suffix;
		this.title = name.title;
		this.department = name.department;
	}

	get fullName() {
		const pfx = this?.prefix ? this?.prefix + ' ' : '';
		const fName = this?.firstName || '';
		const mi = this?.mName ? ' ' + this.mName : '';
		const lName = this?.lastName ? ' ' + this.lastName : '';
		const sfx = this?.suffix ? ', ' + this.suffix : '';
		return pfx + fName + mi + lName + sfx;
	}
}

export class Address {

	constructor(address) {
		this.street1 = address.street1;
		this.street2 = address.street2;
		this.city = address.city;
		this.state = address.state;
		this.zip_code = address.zip_code;
		this.cc = address.cc;
		this.department = address.department;
		this.type = address.type;
	}

	get output() {

		const line1Test = !!this?.street1 && !!this?.street2 && ((this?.street1.length > 18 && this?.street2.length <= 10) || (this?.street1.length <= 18 && this?.street2.length <= 18))

		const line2Test = !!this?.street1 && !!this?.street2 && ((this?.street1.length > 18 && this?.street2.length > 10) || (this?.street1.length <= 18 && this?.street2.length > 18))

		const addressObj = {
			street1: this.street1,
			street2: this.street2,
			test2: line2Test,
			addressLine1: `${this.street1 + (line1Test ? ', ' + this.street2 : '')}`,
			addressLine2: `${this.city}, ${this.state} ${this.zip_code}`
		}

		return addressObj
	}
}
