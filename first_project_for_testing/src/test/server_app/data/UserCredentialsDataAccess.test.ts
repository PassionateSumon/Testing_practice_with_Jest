import { DataBase } from "../../../app/server_app/data/DataBase";
import { UserCredentialsDataAccess } from "../../../app/server_app/data/UserCredentialsDataAccess";
import { Account } from "../../../app/server_app/model/AuthModel";

const insertMock = jest.fn();
const getByMock = jest.fn();

jest.mock("../../../app/server_app/data/DataBase", () => {
  return {
    DataBase: jest.fn().mockImplementation(() => {
      return {
        insert: insertMock,
        getBy: getByMock,
      };
    }),
  };
});

describe("UserCredentialsDataAccess test suite", () => {
  let sut: UserCredentialsDataAccess;

  const someAccount: Account = {
    id: "",
    userName: "userName",
    password: "password",
  };
  const someId = "12345";

  beforeEach(() => {
    sut = new UserCredentialsDataAccess();
    expect(DataBase).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should add the user and return the id", async () => {
    insertMock.mockResolvedValueOnce(someId); // set the return ID value
    const actual = await sut.addUser(someAccount);

    expect(actual).toBe(someId);
    expect(insertMock).toHaveBeenCalledWith(someAccount);
  });

  it("should get the user and return it", async () => {
    getByMock.mockResolvedValueOnce(someAccount); // set the return ID value
    const actualUser = await sut.getUserById(someId);

    expect(actualUser).toBe(someAccount);
    expect(getByMock).toHaveBeenCalledWith("id", someId);
  });

  it("should get the username and return the user", async () => {
    getByMock.mockResolvedValueOnce(someAccount); // set the return ID value
    const actualUser = await sut.getUserByUserName(someAccount.userName);

    expect(actualUser).toBe(someAccount);
    expect(getByMock).toHaveBeenCalledWith("userName", someAccount.userName);
  });
});
