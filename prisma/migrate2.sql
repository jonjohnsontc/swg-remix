DROP TABLE
    IF EXISTS writers_pk;

CREATE TABLE
    writers_pk (
        wid INTEGER PRIMARY KEY,
        writer_name TEXT,
        ipi TEXT,
        mode_key TEXT,
        mean_tempo FLOAT,
        matches BLOB
    );

CREATE INDEX w_wid
ON writers_pk (wid);

INSERT INTO
    writers_pk
SELECT
    *
FROM
    writers;

DROP TABLE
    IF EXISTS writers;

ALTER TABLE
    writers_pk RENAME TO writers;