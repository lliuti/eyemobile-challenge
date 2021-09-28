import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepository } from "../../repositories/UserRepository";

class CreateUserUseCase {
  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    const hashed_password = await hash(password, 8);

    const userRepository = getCustomRepository(UserRepository);
    const user = userRepository.create({
      name,
      email,
      password: hashed_password,
    });
    await userRepository.save(user);
  }
}

export { CreateUserUseCase };
