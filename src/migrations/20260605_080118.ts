import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_home_hero_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text NOT NULL,
  	\`label\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_home_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_home_hero_metrics_order_idx\` ON \`pages_blocks_home_hero_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_home_hero_metrics_parent_id_idx\` ON \`pages_blocks_home_hero_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_home_hero_metrics_locales\` (
  	\`value\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_home_hero_metrics\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_home_hero_metrics_locales_locale_parent_id_uniq\` ON \`pages_blocks_home_hero_metrics_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_home_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`system_status\` text DEFAULT 'STABLE_READY',
  	\`code_panel_database\` text DEFAULT 'PostgreSQL_Pool',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_home_hero_order_idx\` ON \`pages_blocks_home_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_home_hero_parent_id_idx\` ON \`pages_blocks_home_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_home_hero_path_idx\` ON \`pages_blocks_home_hero\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_home_hero_locales\` (
  	\`heading_start\` text NOT NULL,
  	\`heading_highlight\` text NOT NULL,
  	\`subheading\` text NOT NULL,
  	\`primary_cta_text\` text DEFAULT 'EXECUTE_STRATEGY_INIT' NOT NULL,
  	\`secondary_cta_text\` text DEFAULT 'VIEW_COMPOSED_STACK()' NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_home_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_home_hero_locales_locale_parent_id_unique\` ON \`pages_blocks_home_hero_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_architecture_blueprint\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text,
  	\`image_id\` integer NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_architecture_blueprint_order_idx\` ON \`pages_blocks_architecture_blueprint\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_architecture_blueprint_parent_id_idx\` ON \`pages_blocks_architecture_blueprint\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_architecture_blueprint_path_idx\` ON \`pages_blocks_architecture_blueprint\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_architecture_blueprint_image_idx\` ON \`pages_blocks_architecture_blueprint\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_metrics_bento_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_metrics_bento\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_metrics_bento_metrics_order_idx\` ON \`pages_blocks_metrics_bento_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_metrics_bento_metrics_parent_id_idx\` ON \`pages_blocks_metrics_bento_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_metrics_bento\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_metrics_bento_order_idx\` ON \`pages_blocks_metrics_bento\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_metrics_bento_parent_id_idx\` ON \`pages_blocks_metrics_bento\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_metrics_bento_path_idx\` ON \`pages_blocks_metrics_bento\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_benefits_content_control_benefits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text,
  	\`title\` text NOT NULL,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_benefits_content_control\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_content_control_benefits_order_idx\` ON \`pages_blocks_benefits_content_control_benefits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_content_control_benefits_parent_id_idx\` ON \`pages_blocks_benefits_content_control_benefits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_benefits_content_control\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_content_control_order_idx\` ON \`pages_blocks_benefits_content_control\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_content_control_parent_id_idx\` ON \`pages_blocks_benefits_content_control\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_content_control_path_idx\` ON \`pages_blocks_benefits_content_control\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_benefits_speed_metrics_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_benefits_speed_metrics\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_speed_metrics_metrics_order_idx\` ON \`pages_blocks_benefits_speed_metrics_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_speed_metrics_metrics_parent_id_idx\` ON \`pages_blocks_benefits_speed_metrics_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_benefits_speed_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_speed_metrics_order_idx\` ON \`pages_blocks_benefits_speed_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_speed_metrics_parent_id_idx\` ON \`pages_blocks_benefits_speed_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_speed_metrics_path_idx\` ON \`pages_blocks_benefits_speed_metrics\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_security_scanner_checks\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`status\` text DEFAULT 'secure',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_security_scanner\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_security_scanner_checks_order_idx\` ON \`pages_blocks_security_scanner_checks\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_security_scanner_checks_parent_id_idx\` ON \`pages_blocks_security_scanner_checks\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_security_scanner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_security_scanner_order_idx\` ON \`pages_blocks_security_scanner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_security_scanner_parent_id_idx\` ON \`pages_blocks_security_scanner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_security_scanner_path_idx\` ON \`pages_blocks_security_scanner\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_omni_channel_api\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`code_snippet\` text,
  	\`description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_omni_channel_api_order_idx\` ON \`pages_blocks_omni_channel_api\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_omni_channel_api_parent_id_idx\` ON \`pages_blocks_omni_channel_api\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_omni_channel_api_path_idx\` ON \`pages_blocks_omni_channel_api\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_webhook_ecosystem_integrations\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`logo_id\` integer,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_webhook_ecosystem\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_webhook_ecosystem_integrations_order_idx\` ON \`pages_blocks_webhook_ecosystem_integrations\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_webhook_ecosystem_integrations_parent_id_idx\` ON \`pages_blocks_webhook_ecosystem_integrations\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_webhook_ecosystem_integrations_logo_idx\` ON \`pages_blocks_webhook_ecosystem_integrations\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_webhook_ecosystem\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_webhook_ecosystem_order_idx\` ON \`pages_blocks_webhook_ecosystem\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_webhook_ecosystem_parent_id_idx\` ON \`pages_blocks_webhook_ecosystem\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_webhook_ecosystem_path_idx\` ON \`pages_blocks_webhook_ecosystem\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_slug_idx\` ON \`pages\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`pages_updated_at_idx\` ON \`pages\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`pages_created_at_idx\` ON \`pages\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`pages_locales\` (
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_meta_meta_image_idx\` ON \`pages_locales\` (\`meta_image_id\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_locales_locale_parent_id_unique\` ON \`pages_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`header_nav_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_nav_items_order_idx\` ON \`header_nav_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_nav_items_parent_id_idx\` ON \`header_nav_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_nav_items_locales\` (
  	\`label\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_nav_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_nav_items_locales_locale_parent_id_unique\` ON \`header_nav_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`cta_link\` text DEFAULT '/contact',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE TABLE \`header_locales\` (
  	\`logo_text\` text DEFAULT 'CORE_ENGINE' NOT NULL,
  	\`cta_text\` text DEFAULT 'INIT_PROJECT_IO',
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_locales_locale_parent_id_unique\` ON \`header_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`pages_id\` integer REFERENCES pages(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_pages_id_idx\` ON \`payload_locked_documents_rels\` (\`pages_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_home_hero_metrics\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_home_hero_metrics_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_home_hero\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_home_hero_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_architecture_blueprint\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_metrics_bento_metrics\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_metrics_bento\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_benefits_content_control_benefits\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_benefits_content_control\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_benefits_speed_metrics_metrics\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_benefits_speed_metrics\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_security_scanner_checks\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_security_scanner\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_omni_channel_api\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_webhook_ecosystem_integrations\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_webhook_ecosystem\`;`)
  await db.run(sql`DROP TABLE \`pages\`;`)
  await db.run(sql`DROP TABLE \`pages_locales\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`header_nav_items\`;`)
  await db.run(sql`DROP TABLE \`header_nav_items_locales\`;`)
  await db.run(sql`DROP TABLE \`header\`;`)
  await db.run(sql`DROP TABLE \`header_locales\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
}
