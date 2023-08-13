CREATE TABLE IF NOT EXISTS uptime_status (
  api_key VARCHAR UNIQUE NOT NULL,
  monitor_value JSON NOT NULL,
  updated_date TIMESTAMP NOT NULL DEFAULT NOW()
);