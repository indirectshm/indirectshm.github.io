import Profile from '@/components/profile';
import type { ProfileType } from '@/components/profile';
import { Profiles } from '@/components/variables';

export default function Team() {
    
    const generate_profile = ({name, title, image, description}: ProfileType) => {
        return (
            <Profile 
                name={name}
                title={title}
                image={image}
                description={description}
                />
        )
    };


    return (
        <>
            <h1>Team</h1>
            {
                Profiles.profiles().map(x => generate_profile(x))
            }
        </>  
    )
}