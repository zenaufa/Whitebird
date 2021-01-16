import logger from '~/utils/logger';
import customEvents from '~/utils/customEvents';

const REFERER = 'STORE: Socket';
/* eslint-disable no-shadow */
export const state = () => ({});

export const mutations = {};

export const actions = {
  messageToClient({ commit, state }, payload) {
    logger(REFERER, 'Received messageToClient');
    logger(REFERER, payload);
  },
  createCanvasObjectClient({ commit, state }, payload) {
    // this.$nuxt.$emit(customEvents.canvasTools.enliven, payload);
    logger(REFERER, 'Received CREATE_CANVAS_OBJECT');
    logger(REFERER, payload);
  },
  deleteCanvasObject({ commit, state }) {
    logger(REFERER, 'Received DELETE_CANVAS_OBJECT');
  },
  updateCanvasObject({ commit, state }) {
    logger(REFERER, 'Received UPDATE_CANVAS_OBJECT');
  },
};
