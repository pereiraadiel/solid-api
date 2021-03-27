import { IMailProvider } from "./../../providers/IMailProvider";
import { User } from "./../../entities/User";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IUsersRepository } from "./../../repositories/IUsersRepository";
export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        email: data.email,
        name: data.name,
      },
      subject: "Bem vindo(a) à bordo!",
      body: `<p>Bem vindo(a) ${data.name}!</p>`,
      from: {
        email: "support@meuapp.com",
        name: "Meu APP",
      },
    });
  }
}
