class ToDo {
	content: string;
	completeDate: boolean | Object;
	createDate: Date;
	expireDate: Date;
	complete: Function;
	isExpired: Function;
	_newDate: Function;
	constructor(
		{
			id,
			content,
			createdAt,
			expiresAt
		}: { id: number, content: string, createdAt: Date, expiresAt: Date } = {}
	) {
		// Properties
		this.content = content;
		this.id = id;
		this.completeDate = false;
		this.createDate = createdAt;
		this.expireDate = expiresAt;
		// Methods
		this.complete = this.complete.bind(this);
		this.isExpired = this.isExpired.bind(this);
		this._newDate = this._newDate.bind(this);
	}
	_newDate(): Date {
		return new Date(Date.now());
	}
	complete(): Date {
		this.completeDate = this._newDate();
		return this.completeDate;
	}
	isExpired(): boolean {
		return !this.completedDate ? this._newDate() > this.expireDate : false;
	}
}

export { ToDo };
