import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { TodoItemModel } from './models';
import { Pluralizer } from '@ngrx/data';
import { Injectable } from "@angular/core";

export interface FilterPattern {
  ids: Array<number>;
}

const entityMetadata: EntityMetadataMap = {
  TodoItemModel: {
    entityName: 'todo-item',
    filterFn: (entities: Array<TodoItemModel>, pattern: FilterPattern) => {
      const filteredEntities = entities.filter((e) => {
        return pattern.ids?.includes(e.id);
      });
      return filteredEntities;
    },
  },
};

const pluralNames = { };

@Injectable()
export class TodoPluralizer extends Pluralizer {
  pluralize(name: string) {
    return name;
  }
}

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
