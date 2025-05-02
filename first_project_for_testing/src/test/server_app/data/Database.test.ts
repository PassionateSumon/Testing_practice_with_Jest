import { DataBase } from "../../../app/server_app/data/DataBase";
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";

type someTypeWithId = {
  id: string;
  name: string;
  color: string;
};

describe("Database test suite", () => {
  let sut: DataBase<someTypeWithId>;
  let fakeId: string = "1299484";

  const fakeElement1: someTypeWithId = {
    id: "",
    name: "test1",
    color: "red",
  };
  const fakeElement2: someTypeWithId = {
    id: "",
    name: "test2",
    color: "red",
  };

  beforeEach(() => {
    sut = new DataBase<someTypeWithId>();
    jest.spyOn(IdGenerator, "generateRandomId").mockReturnValue(fakeId);
  });

  it("should return the id of the inserted element", async () => {
    const actual = await sut.insert(fakeElement1);
    expect(actual).toBe(fakeId);
  });

  it("should get element after insert", async () => {
    const id = await sut.insert(fakeElement1);
    const actual = await sut.getBy("id", id);
    expect(actual).toBe(fakeElement1);
  });

  it("should find all elements with the same property", async () => {
    await sut.insert(fakeElement1);
    await sut.insert(fakeElement2);

    const actual = await sut.findAllBy("color", "red");
    console.log(actual);
    const expected = [fakeElement1, fakeElement2];
    expect(actual).toEqual(expected);
  });

  it("should update an element", async () => {
    const id = await sut.insert(fakeElement1);
    const expectedColor = "blue";
    await sut.update(id, "color", expectedColor);
    const object = (await sut.getBy("id", id)) as any;
    const actualColor = object.color;
    expect(actualColor).toBe(expectedColor);
  });

  it("should delete an element", async () => {
    const id = await sut.insert(fakeElement1);
    await sut.delete(id);
    const actual = await sut.getBy("id", id);
    expect(actual).toBeUndefined();
  });

  it("should return all elements", async () => {
    await sut.insert(fakeElement1);
    await sut.insert(fakeElement1);
    await sut.insert(fakeElement2);
    await sut.insert(fakeElement2);

    const expected = [fakeElement1, fakeElement1, fakeElement2, fakeElement2];
    const actual = await sut.getAllElements();
    expect(actual).toEqual(expected);
  });
});
