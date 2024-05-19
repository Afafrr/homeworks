class Serializable {
  serialize() {
    const deepSerialize = (obj) => {
      if (obj instanceof Date) {
        return { type: "Date", value: obj };
      }
      if (typeof obj !== "object") {
        return obj;
      }
      let objCopy = Array.isArray(obj) ? [] : {};

      for (const key in obj) {
        const value = obj[key];
        if (!isFinite(value) && typeof value === "number") {
          objCopy[key] = deepSerialize(`${value}`);
          continue;
        }
        objCopy[key] = deepSerialize(value);
      }
      return objCopy;
    };
    const copiedObj = deepSerialize(this);
    return JSON.stringify({ className: this.constructor.name, copiedObj });
  }

  wakeFrom(serialized) {
    serialized = JSON.parse(serialized);
    const { className, copiedObj: serializedObj } = serialized;
    //class name check
    if (className !== this.constructor.name) {
      throw new Error("Class of deserialization does not match serialized one");
    }
    const deepDeserialize = (obj) => {
      const copiedObj = Array.isArray(obj) ? [] : {};
      //nan, infinity handler
      if (obj === "NaN" || obj === "Infinity" || obj === "-Infinity") {
        return Number(obj);
      }
      //date handler
      if (obj["type"] === "Date") {
        return new Date(obj["value"]);
      }
      if (typeof obj !== "object") {
        return obj;
      }
      //object handler
      for (const key in obj) {
        copiedObj[key] = deepDeserialize(obj[key]);
      }
      return copiedObj;
    };

    const deserialized = deepDeserialize(serializedObj);
    return new this.constructor(deserialized);
  }
}

class UserDTO extends Serializable {
  constructor(data) {
    super();
    //   if (data) {
    //     const { firstName, lastName, phone, birth } = data;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.phone = phone;
    //     this.birth = birth;
    //   }
    // }
    if (data) {
      const { firstName, lastName, phone, money, id, birth, arr } = data;
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this.money = money;
      this.id = id;
      this.birth = birth;
      this.arr = arr;
    }
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${
        this.phone
      }, ${this.birth.toISOString()}`
    );
  }
}

let tolik = new UserDTO({
  firstName: "Anatoliy",
  lastName: "Nashovich",
  phone: "2020327",
  birth: new Date("1999-01-02"),
});

let tolikNested = new UserDTO({
  firstName: "Anatoliy",
  lastName: "Nashovich",
  phone: { work: "1232", home: 12312 },
  money: Infinity,
  id: NaN,
  birth: new Date("1999-01-02"),
  arr: [123, ["123"], "ASD", -Infinity],
});
// tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolikNested.serialize();
tolik = null;
const resurrectedTolik = new UserDTO().wakeFrom(serialized);
console.log(resurrectedTolik);
console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

// class Post extends Serializable {
//   constructor(data) {
//     super();
//     if (data) {
//       const { content, date, author } = data;
//       this.content = content;
//       this.date = date;
//       this.author = author;
//     }
//   }
// }
// console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class
