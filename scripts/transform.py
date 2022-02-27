# This was used to help transform the old swg website db / tables into a more
# sensible application database. 

def add_writer_name_to_matches_and_clean_things_up(writers):
    result_set = []
    for writer in writers:
        new_results = {}
        new_results["wid"] = writer["wid"]
        new_results["writer_name"] = writer["writer_name"].strip()
        new_results["ipi"] = writer["ipi"]
        new_results["mode_key"] = writer["mode_key"]
        new_results["mean_tempo"] = writer["mean_tempo"]
        new_results["matches"] = []
        for match in writer["matches"]:
            new_match = {}
            if match["wid"]:
                writer_profile = next(
                    filter(lambda x: x["wid"] == int(match["wid"]), writers)
                )
                writer_name = writer_profile["writer_name"].strip()
                new_match.update(
                    {
                        "wid": int(match["wid"]),
                        "name": writer_name,
                        "rank": match["rank"],
                    }
                )
                new_results["matches"].append(new_match)
            else:
                continue

        result_set.append(new_results)
    return result_set
