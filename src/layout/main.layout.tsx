import * as React from 'react';
import {ProfileComponent} from "../components/profile.component";
import {HobbiesComponent} from "../components/hobbies.component";
export const MainLayout = () => {
    return (
        <main className="[ main ]">
            <ProfileComponent/>
            <HobbiesComponent/>
        </main>
    );
};
