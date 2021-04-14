/* eslint-disable no-shadow */
import { v4 as uuidGenerator } from 'uuid';

const growdevers = [];

class GrowdeverController {
  index(request, response) {
    const { turma } = request.query;

    const results = turma
      ? growdevers.filter(growdever =>
          growdever.turma.toLowerCase().includes(turma.toLowerCase())
        )
      : growdevers;

    return response.json(results);
  }

  show(request, response) {
    const { id } = request.params;

    const growdever = growdevers.find(growdever => growdever.id === id);

    return response.json(growdever);
  }

  store(request, response) {
    const { nome, turma, idade, tecnologias, cidade } = request.body;

    const growdever = {
      id: uuidGenerator(),
      nome,
      idade,
      turma,
      tecnologias,
      cidade,
    };

    growdevers.push(growdever);

    return response.json(growdever);
  }

  update(request, response) {
    const { id } = request.params;
    const { nome, turma, idade, tecnologias, cidade } = request.body;

    const growdeverIndex = growdevers.findIndex(
      growdever => growdever.id === id
    );

    if (growdeverIndex < 0) {
      return response.status(404).json({ error: 'Growdever not found' });
    }

    const growdever = {
      id,
      nome,
      idade,
      turma,
      tecnologias,
      cidade,
    };

    growdevers[growdeverIndex] = growdever;

    return response.json(growdever);
  }

  delete(request, response) {
    const { id } = request.params;

    const growdeverIndex = growdevers.findIndex(
      growdever => growdever.id === id
    );

    if (growdeverIndex < 0) {
      return response.status(404).json({ error: 'Growdever not found' });
    }

    growdevers.splice(growdeverIndex, 1);

    return response.status(204).send();
  }
}

export default new GrowdeverController();
