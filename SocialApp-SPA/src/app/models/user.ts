import { NumberValueAccessor } from '@angular/forms/src/directives';
import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownas: string;
    age: NumberValueAccessor;
    created: Date;
    lastActive: Date;
    photUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    hobbies?: string;
    photos?: Photo[];
}
