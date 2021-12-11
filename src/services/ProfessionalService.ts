import { getCustomRepository } from "typeorm";
import { Professional } from "../domain/entities/Professional";
import { PostgresProfessionalRepository } from "../infra/repositories/PostgresProfessionalRepository";

class ProfessionalService {
  // private respository = getCustomRepository(PostgresProfessionalRepository);

  // constructor() {
  //   this.respository = getCustomRepository(PostgresProfessionalRepository);
  // }

  private async findOrThrowError(professionalId: string) {
    const repository = getCustomRepository(PostgresProfessionalRepository);
    const exists = repository.count({});
    if (!exists) {
      throw new Error('Esse profissional não existe');
    }
  }

  public async updateProfessional(
    data: Professional,
    professionaId: string,
  ) {
    this.findOrThrowError(professionaId);
    const repository = getCustomRepository(PostgresProfessionalRepository);

    await repository.update({
      id: professionaId,
    }, data);

    const professional = repository.findOne({ id: professionaId });

    return professional;
  }
}

export default new ProfessionalService();
