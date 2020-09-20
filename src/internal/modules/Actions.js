import React from 'react';
import _ from 'lodash';
import { ModuleSet } from './ModuleSet';


export const Actions = _(ModuleSet)
  .keyBy(module => module)
  .mapValues(module => {
    return require(`../../modules/${module}/Actions`);
  })
  .mapValues(module => module.default)
  .value();
