import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { LikedListComponent } from './liked-list/liked-list.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children:
        [
            { path: 'member-list', component: MemberListComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'liked-list', component: LikedListComponent },
        ]
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];
