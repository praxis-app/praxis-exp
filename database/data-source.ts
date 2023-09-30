import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { RefreshToken } from '../src/auth/refresh-tokens/models/refresh-token.model';
import { Comment } from '../src/comments/models/comment.model';
import { EventAttendee } from '../src/events/event-attendees/models/event-attendee.model';
import { Event } from '../src/events/models/event.model';
import { GroupConfig } from '../src/groups/group-configs/models/group-config.model';
import { GroupMemberRequest } from '../src/groups/group-member-requests/models/group-member-request.model';
import { GroupRolePermission } from '../src/groups/group-roles/models/group-role-permission.model';
import { GroupRole } from '../src/groups/group-roles/models/group-role.model';
import { Group } from '../src/groups/models/group.model';
import { Image } from '../src/images/models/image.model';
import { Like } from '../src/likes/models/like.model';
import { Post } from '../src/posts/models/post.model';
import { Proposal } from '../src/proposals/models/proposal.model';
import { ProposalAction } from '../src/proposals/proposal-actions/models/proposal-action.model';
import { ProposalActionEventHost } from '../src/proposals/proposal-actions/proposal-action-events/models/proposal-action-event-host.model';
import { ProposalActionEvent } from '../src/proposals/proposal-actions/proposal-action-events/models/proposal-action-event.model';
import { ProposalActionPermission } from '../src/proposals/proposal-actions/proposal-action-roles/models/proposal-action-permission.model';
import { ProposalActionRoleMember } from '../src/proposals/proposal-actions/proposal-action-roles/models/proposal-action-role-member.model';
import { ProposalActionRole } from '../src/proposals/proposal-actions/proposal-action-roles/models/proposal-action-role.model';
import { ServerInvite } from '../src/server-invites/models/server-invite.model';
import { ServerRolePermission } from '../src/server-roles/models/server-role-permission.model';
import { ServerRole } from '../src/server-roles/models/server-role.model';
import { User } from '../src/users/models/user.model';
import { Vote } from '../src/votes/models/vote.model';
import { Initial1675388391336 } from './migrations/1675388391336-Initial';
import { AddServerInviteTable1677339785709 } from './migrations/1677339785709-AddServerInviteTable';
import { AddLikeTable1679157357262 } from './migrations/1679157357262-AddLikeTable';
import { AddFollowTable1679778147216 } from './migrations/1679778147216-AddFollowTable';
import { AddGroupMemberLinkTable1681010227367 } from './migrations/1681010227367-AddGroupMemberLinkTable';
import { DropGroupMemberEntityTable1681010509841 } from './migrations/1681010509841-DropGroupMemberEntityTable';
import { AddRoleMemberLinkTable1681172948650 } from './migrations/1681172948650-AddRoleMemberLinkTable';
import { DropRoleMemberEntityTable1681173025669 } from './migrations/1681173025669-DropRoleMemberEntityTable';
import { AddProposalActionRoleTable1684893300206 } from './migrations/1684893300206-AddProposalActionRoleTable';
import { AddProposalActionImagesConstraint1685201083917 } from './migrations/1685201083917-AddProposalActionImagesConstraint';
import { AddGroupConfigTable1685746618239 } from './migrations/1685746618239-AddGroupConfigTable';
import { AddProposalActionRoleCascadeDelete1685748700121 } from './migrations/1685748700121-AddProposalActionRoleCascadeDelete';
import { RefactorRolesAndPermissions1688001951695 } from './migrations/1688001951695-RefactorRolesAndPermissions';
import { RenameGroupMemberRequestTable1688348341669 } from './migrations/1688348341669-RenameGroupMemberRequestTable';
import { AddEventTables1690147636077 } from './migrations/1690147636077-AddEventTables';
import { CleanUpGroupMemberRequestTable1690168731029 } from './migrations/1690168731029-CleanUpGroupMemberRequestTable';
import { SetDefaultForGroupMemberRequestTable1690333204053 } from './migrations/1690333204053-SetDefaultForGroupMemberRequestTable';
import { RemoveMemberRequestIdSeq1690336764201 } from './migrations/1690336764201-RemoveMemberRequestIdSeq';
import { AddCommentTable1693003196421 } from './migrations/1693003196421-AddCommentTable';
import { GroupMemberRequestCleanUp1694647639797 } from './migrations/1694647639797-GroupMemberRequestCleanUp';
import { AddProposalActionEventTables1694657129939 } from './migrations/1694657129939-AddProposalActionEventTables';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_SCHEMA,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT as string),
  entities: [
    Comment,
    Event,
    EventAttendee,
    Group,
    GroupConfig,
    GroupMemberRequest,
    GroupRole,
    GroupRolePermission,
    Image,
    Like,
    Post,
    Proposal,
    ProposalAction,
    ProposalActionEvent,
    ProposalActionEventHost,
    ProposalActionPermission,
    ProposalActionRole,
    ProposalActionRoleMember,
    RefreshToken,
    ServerInvite,
    ServerRole,
    ServerRolePermission,
    User,
    Vote,
  ],
  migrations: [
    AddCommentTable1693003196421,
    AddEventTables1690147636077,
    AddFollowTable1679778147216,
    AddGroupConfigTable1685746618239,
    AddGroupMemberLinkTable1681010227367,
    AddLikeTable1679157357262,
    AddProposalActionEventTables1694657129939,
    AddProposalActionImagesConstraint1685201083917,
    AddProposalActionRoleCascadeDelete1685748700121,
    AddProposalActionRoleTable1684893300206,
    AddRoleMemberLinkTable1681172948650,
    AddServerInviteTable1677339785709,
    CleanUpGroupMemberRequestTable1690168731029,
    DropGroupMemberEntityTable1681010509841,
    DropRoleMemberEntityTable1681173025669,
    GroupMemberRequestCleanUp1694647639797,
    Initial1675388391336,
    RefactorRolesAndPermissions1688001951695,
    RemoveMemberRequestIdSeq1690336764201,
    RenameGroupMemberRequestTable1688348341669,
    SetDefaultForGroupMemberRequestTable1690333204053,
  ],
});
