export enum PasswordErrors {
  SHORT = "Password is too short!",
  NO_UPPER_CASE = "Password has no uppercase!",
  NO_LOWER_CASE = "Password has no lowercase!",
}

export interface IPasswordChecker {
  valid: boolean;
  errors: PasswordErrors[];
}

export class PasswordChecker {
  errors: PasswordErrors[] = [];
  public checkPassword(pass: string): IPasswordChecker {
    if (pass.length < 8) {
      this.errors.push(PasswordErrors.SHORT);
    }
    return {
      valid: this.errors.length === 0,
      errors: this.errors,
    };
  }
}
