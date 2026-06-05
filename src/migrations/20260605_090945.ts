import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` ADD \`metric\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` ADD \`stat\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` ADD \`benefit\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` ADD \`description\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` ADD \`code_log\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` DROP COLUMN \`label\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` DROP COLUMN \`value\`;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` ADD \`label\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` ADD \`value\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` DROP COLUMN \`metric\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` DROP COLUMN \`stat\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` DROP COLUMN \`benefit\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` DROP COLUMN \`description\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_benefits_speed_metrics_metrics\` DROP COLUMN \`code_log\`;`)
}
