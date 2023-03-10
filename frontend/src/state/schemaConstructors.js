import { Global } from "globals/js";

const { spBef, spAft } = Global;

export class Name {

	constructor(name) {
		this.firstName = name?.given_name;
		this.mName = name?.mName;
		this.lastName = name?.surname;
		this.prefix = name?.prefix;
		this.suffix = name?.suffix;
		this.title = name?.title;
		this.department = name?.department;
	}

	get fullName() {

		const PFX = this?.prefix || '';
		const FNAME = this?.firstName || '';
		const MI = this?.mName || '';
		const LNAME = this?.lastName || '';
		const SFX = this?.suffix || '';

		return spAft(PFX) + FNAME + spBef(MI) + spBef(LNAME) + spBef(SFX, ',');
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

		const STREET1 = this.street1;
		const STREET2 = this?.street2 || '';
		const CITY = this.city;
		const STATE = this.state;
		const ZIP = this.zip_code;
		const CC = this.cc;

		const ls1 = STREET1.length;
		const ls2 = STREET2.length;

		const test1 = !!STREET1 && !!STREET2 && ((ls1 > 18 && ls2 <= 10) || (ls1 <= 18 && ls2 <= 18));
		const test2 = !!STREET1 && !!STREET2 && ((ls1 > 18 && ls2 > 10) || (ls1 <= 18 && ls2 > 18));

		return {
			street1: STREET1,
			street2: STREET2,
			addressLine1: STREET1 + (test1 ? spBef(STREET2, ',') : ''),
			addressLine2: CITY + spBef(STATE, ',') + spBef(ZIP),
			country: CC,
			test2
		}
	}
}
