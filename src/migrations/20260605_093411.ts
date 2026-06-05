import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_architecture_blueprint_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`num\` text,
  	\`category\` text,
  	\`title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_architecture_blueprint\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_architecture_blueprint_items_order_idx\` ON \`pages_blocks_architecture_blueprint_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_architecture_blueprint_items_parent_id_idx\` ON \`pages_blocks_architecture_blueprint_items\` (\`_parent_id\`);`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_pages_blocks_architecture_blueprint\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`system_label\` text,
  	\`heading\` text,
  	\`description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_pages_blocks_architecture_blueprint\`("_order", "_parent_id", "_path", "id", "system_label", "heading", "description", "block_name") SELECT "_order", "_parent_id", "_path", "id", "system_label", "heading", "description", "block_name" FROM \`pages_blocks_architecture_blueprint\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_architecture_blueprint\`;`)
  await db.run(sql`ALTER TABLE \`__new_pages_blocks_architecture_blueprint\` RENAME TO \`pages_blocks_architecture_blueprint\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`pages_blocks_architecture_blueprint_order_idx\` ON \`pages_blocks_architecture_blueprint\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_architecture_blueprint_parent_id_idx\` ON \`pages_blocks_architecture_blueprint\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_architecture_blueprint_path_idx\` ON \`pages_blocks_architecture_blueprint\` (\`_path\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_architecture_blueprint_items\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_architecture_blueprint\` ADD \`title\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_architecture_blueprint\` ADD \`image_id\` integer NOT NULL REFERENCES media(id);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_architecture_blueprint_image_idx\` ON \`pages_blocks_architecture_blueprint\` (\`image_id\`);`)
  await db.run(sql`ALTER TABLE \`pages_blocks_architecture_blueprint\` DROP COLUMN \`system_label\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_architecture_blueprint\` DROP COLUMN \`heading\`;`)
}
