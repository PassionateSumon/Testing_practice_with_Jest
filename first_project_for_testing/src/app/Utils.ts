export const toUpperCase = (str: string): string => {
  return str.toUpperCase();
};

interface PersonInput {
  name: string;
  age: number;
  address: string;
  phone: string[];
  gender: string;
}

interface Person {
  upperCase: string;
  lowerCase: string;
  titleCase: string;
}

const ip = {
  name: "John Doe",
  age: 30,
  address: "123 Main St, Anytown, USA",
  phone: ["123-456-7890", "987-654-3210"],
  gender: "male",
};

export const getPerson = (ip: PersonInput): Person => {
  return {
    upperCase: ip.name.toUpperCase(),
    lowerCase: ip.name.toLowerCase(),
    titleCase: ip.name.charAt(0).toUpperCase() + ip.name.slice(1).toLowerCase(),
  };
};

export class StringUtils {
  public toUpperCase(str: string): string {
    if (!str) {
      throw new Error("String is empty or null");
    }
    return str.toUpperCase();
  }
}
