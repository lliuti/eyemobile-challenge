import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { UserRepository } from "../../repositories/UserRepository";

class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUserDTO): Promise<string> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne({ email });

    if (!user) throw new Error("Invalid email/password.");

    const passwordDoesMatch = await compare(password, user.password);

    if (!passwordDoesMatch) throw new Error("Invalid email/password.");

    const token = jwt.sign(
      {
        user_email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
        subject: user.id,
      }
    );

    return token;
  }
}

export { AuthenticateUserUseCase };
