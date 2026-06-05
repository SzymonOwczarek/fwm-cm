import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics\` ADD \`system_label\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics\` ADD \`description\` text;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics\` DROP COLUMN \`system_label\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics\` DROP COLUMN \`description\`;`)
}
