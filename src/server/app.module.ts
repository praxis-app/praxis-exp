import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLSchema } from 'graphql';
import { applyMiddleware } from 'graphql-middleware';
import { GraphQLUpload } from 'graphql-upload';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { Environment } from './shared/shared.constants';
import { ContextModule } from './context/context.module';
import { ContextService } from './context/context.service';
import { DatabaseModule } from './database/database.module';
import { DataloaderModule } from './dataloader/dataloader.module';
import { EventsModule } from './events/events.module';
import { GroupsModule } from './groups/groups.module';
import { ImagesModule } from './images/images.module';
import { LikesModule } from './likes/likes.module';
import { PostsModule } from './posts/posts.module';
import { ProposalsModule } from './proposals/proposals.module';
import { ServerInvitesModule } from './server-invites/server-invites.module';
import { ServerRolesModule } from './server-roles/server-roles.module';
import { ShieldModule } from './shield/shield.module';
import { shieldPermissions } from './shield/shield.permissions';
import { UsersModule } from './users/users.module';
import { VotesModule } from './votes/votes.module';

export const ApolloModule = GraphQLModule.forRootAsync<ApolloDriverConfig>({
  driver: ApolloDriver,
  imports: [ContextModule],
  inject: [ConfigService, ContextService],
  useFactory: (configService: ConfigService, contextService: ContextService) => ({
    autoSchemaFile: true,
    context: contextService.getContext.bind(contextService),
    cors: { origin: true, credentials: true },
    csrfPrevention: configService.get('NODE_ENV') !== Environment.Development,
    resolvers: { Upload: GraphQLUpload },
    transformSchema: (schema: GraphQLSchema) => applyMiddleware(schema, shieldPermissions),
  }),
});

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api/(.*)', '/graphql'],
      renderPath: '/*',
    }),
    ApolloModule,
    AuthModule,
    CommentsModule,
    DatabaseModule,
    DataloaderModule,
    EventsModule,
    GroupsModule,
    ImagesModule,
    LikesModule,
    PostsModule,
    ProposalsModule,
    ServerInvitesModule,
    ServerRolesModule,
    ShieldModule,
    UsersModule,
    VotesModule,
  ],
})
export class AppModule {}
