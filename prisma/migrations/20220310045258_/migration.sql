-- CreateTable
CREATE TABLE "writers" (
    "wid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "writer_name" TEXT,
    "ipi" TEXT,
    "mode_key" TEXT,
    "mean_tempo" REAL,
    "matches" BLOB
);

-- CreateIndex
CREATE INDEX "w_wid" ON "writers"("wid");
