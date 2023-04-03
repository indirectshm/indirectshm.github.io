export type NavLink = {
    name: string,
    ref: string,
    sublinks?: Array<NavLink>
};

export const Routes = {
    titles: (): Array<NavLink> => [
        {name: 'Home', ref: '/'},
        {name: 'Research', ref: '/research', sublinks: [
            {name: 'Overview', ref: '/research/overview'},
            {name: 'Methodology', ref: '/research/methodology'}
            ]},
        {name: 'Decision Maker', ref: '/decision_maker'},
        {name: 'Team', ref: '/team'},
        {name: 'Data', ref: '/data'}
    ]
};