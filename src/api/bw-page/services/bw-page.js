'use strict';

/**
 * bw-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bw-page.bw-page');
