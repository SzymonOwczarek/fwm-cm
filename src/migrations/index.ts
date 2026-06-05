import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20260605_080118 from './20260605_080118';
import * as migration_20260605_090414 from './20260605_090414';
import * as migration_20260605_090945 from './20260605_090945';
import * as migration_20260605_093411 from './20260605_093411';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20260605_080118.up,
    down: migration_20260605_080118.down,
    name: '20260605_080118',
  },
  {
    up: migration_20260605_090414.up,
    down: migration_20260605_090414.down,
    name: '20260605_090414',
  },
  {
    up: migration_20260605_090945.up,
    down: migration_20260605_090945.down,
    name: '20260605_090945',
  },
  {
    up: migration_20260605_093411.up,
    down: migration_20260605_093411.down,
    name: '20260605_093411'
  },
];
