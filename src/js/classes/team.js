export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) {
      throw new Error('такой объект уже в команде!');
    }
    this.members.add(obj);
    return this.members;
  }

  addAll(...objList) {
    [...objList].forEach((item) => {
      this.members.add(item);
    });
    return this.members;
  }

  toArray() {
    const arr = [];
    this.members.forEach((member) => arr.push(member));
    return arr;
  }
}
