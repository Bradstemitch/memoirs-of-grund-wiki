import { Link } from "react-router-dom";
import { CHARACTER_Core } from "../__DATA_Core";
import { internalLink } from "../../utils/common";


export const TimelineEvents =
{
    "siegeOfCoedDuon2": {
        "name": "The Second Siege of Coed-Duon",
        "story": [
        ],
        "html": <div>
            <p>Knight Commando builds an unmanned pallisade to delay the enemy roughly 250 meters from the walls</p>
            <p>Commando cavalry perform skirmish attacks against any Fomorians that breach the pallisade, slowing the assault and inflicting heavy early casualties</p>
            <p>Commando has pre dug a trench in archer range to slow teh enemy and allow the cav the safely retreat</p>
            <p>Chevron pallisades built before the walls manned as a bottleneck and flaming trench lit to buy time for retreat</p>
            <p>Commando and Glynden soldiers retreat to the first wall, beginning an archer skirmish at the front</p>
            <p>Days of skirmihs pass as the Fomorians fill the moat and build a siege tower</p>
            <p>Siege tower starts to approach the walls, arrows from the top pinning down troops on the wall</p>
            <p>With the archers pinned, the formorian giants move up, clearing the wall of stragglers</p>
            <p>Commando retreats to the keep, preparing for the final assault</p>
            <p>{internalLink('Lyra', CHARACTER_Core.LYRA_VITAE)} and her Zealots arrive, forcing the fomorian assault from the walls</p>
        </div>

    }
}

export default TimelineEvents