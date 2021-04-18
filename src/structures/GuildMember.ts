import { Snowflake } from '../util/Snowflake';
import { User } from '../util/User';

export type GuildMember = {
    /**
     * @param {Object} data - The data for the Guild Member
     */
    user: User;
    nick?: string;
    roles: Snowflake[];
    joinedAt: Date;
    premiumsince?: Date;
    deaf?: boolean;
    mute?: boolean;
}