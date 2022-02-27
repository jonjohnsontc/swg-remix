-- Creating this as a tool to get the SWG SQLite db in a place
-- to where the prisma client can work with it
-- I cannot use column names/types with CREATE TABLE ... AS SELECT
-- statements, so instead I'm opting for `INSERT INTO` statements

DROP TABLE IF EXISTS writers_1;
CREATE TABLE writers_1 (
   wid INTEGER PRIMARY KEY,
   writer_name TEXT,
   ipi TEXT,
   pro TEXT
);
CREATE INDEX w_wid ON writers_1 (wid);
INSERT INTO writers_1 SELECT wid, writer_name, ipi, pro FROM writers;

DROP TABLE IF EXISTS neighbors_1;
CREATE TABLE neighbors_1 (
   wid INTEGER PRIMARY KEY,
   top_match_1 INTEGER,
   top_match_1_count INTEGER,
   top_match_2 FLOAT,
   top_match_2_count FLOAT,
   top_match_3 FLOAT,
   top_match_3_count FLOAT,
   top_match_4 FLOAT,
   top_match_4_count FLOAT,
   top_match_5 FLOAT,
   top_match_5_count FLOAT,
   top_match_6 FLOAT,
   top_match_6_count FLOAT,
   top_match_7 FLOAT,
   top_match_7_count FLOAT,
   top_match_8 FLOAT,
   top_match_8_count FLOAT,
   top_match_9 FLOAT,
   top_match_9_count FLOAT,
   top_match_10 FLOAT,
   top_match_10_count FLOAT,
   top_match_11 FLOAT,
   top_match_11_count FLOAT
);
CREATE INDEX n_wid ON neighbors_1 (wid);
INSERT INTO neighbors_1 SELECT * FROM neighbors;

DROP TABLE IF EXISTS summary_stats_1;
CREATE TABLE summary_stats_1 (
   wid INTEGER PRIMARY KEY,
   mode_key TEXT,
   mode_mode TEXT,
   mode_time_signature TEXT,
   mean_tempo FLOAT
);
CREATE INDEX s_wid ON summary_stats_1 (wid);
INSERT INTO summary_stats_1 SELECT wid, mode_key, mode_mode, mode_time_signature, mean_tempo FROM summary_stats;

-- WARNING - This has/will drop the original tables w/o id info
-- DROP TABLE IF EXISTS writers;
-- DROP TABLE IF EXISTS neighbors;
-- DROP TABLE IF EXISTS summary_stats;