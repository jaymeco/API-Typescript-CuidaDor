"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGraphicThreeValuesController = void 0;
const GetGraphicThreeValues_1 = require("../domain/UseCases/GetGraphicThreeValues");
const GetGraphicThreeValues_2 = require("../adapters/controllers/GetGraphicThreeValues");
const getGraphicThreeValuesUseCase = new GetGraphicThreeValues_1.GetGraphicThreeValues();
const getGraphicThreeValuesController = new GetGraphicThreeValues_2.GetGraphicThreeValuesController(getGraphicThreeValuesUseCase);
exports.getGraphicThreeValuesController = getGraphicThreeValuesController;
