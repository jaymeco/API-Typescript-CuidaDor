import { GetGraphicThreeValues } from '../domain/UseCases/GetGraphicThreeVales';
import { GetGraphicThreeValuesController } from '../adapters/controllers/GetGraphicThreeValues';

const getGraphicThreeValuesUseCase = new GetGraphicThreeValues();

const getGraphicThreeValuesController = new GetGraphicThreeValuesController(getGraphicThreeValuesUseCase);

export { getGraphicThreeValuesController };
