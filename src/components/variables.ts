import { ProfileType } from "@/components/profile";

// Structure
export type NavLink = {
    name: string,
    ref: string,
    sublinks?: Array<NavLink>
};

// Navbar Routes
export const ROUTES = {
    titles: (): Array<NavLink> => [
        // {name: 'Home', ref: '/'},
        {name: 'Motivation', ref: '/motivation'},
        {name: 'Research', ref: '/research', sublinks: [
            {name: 'Overview', ref: '/research/overview'},
            {name: 'Methodology', ref: '/research/methodology'}
            ]},
        // {name: 'Decision Maker', ref: '/decision_maker'},
        // {name: 'Team', ref: '/team'},
        {name: 'Data', ref: '/data'}
    ]
};

// Profile Information
const PROFILE_WIDTH = 100;
const PROFILE_HEIGHT = 100;

export const Profiles = {
    profiles: (): Array<ProfileType> => [
        {
            name: 'Simon Luo',
            title: 'Chief Investigator',
            image: {
                src: '/profiles/research-damaged-bridge.png',
                alt: 'Image of Simon Luo',
                width: PROFILE_WIDTH,
                height: PROFILE_HEIGHT,
                className: ''
            },
            description: 'Chief investigator.',
        }
    ]
};

// Dataset Links

export const DATASETS = {
    halfcar: (): string => 'https://drive.google.com/file/d/16xb1YxECtZrYv_ae5238jZ7cuLV0B3jt/view?ts=6454bdd8',
    bridgesim: (): string => 'https://drive.google.com/file/d/1VYglZgr86K8-1eV1MfIHjrmoTIHmXf5i/view?usp=drive_link'
};