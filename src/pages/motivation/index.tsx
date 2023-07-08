import Image from '@/components/image';

export default function Motivation() {

    return (
        <>
            <h2 className='text-2xl font-medium'>Motivation</h2>
            <div className='py-5'>
                Critical infrastructures such as bridges inevitable degrade over time due to a varity of factors such as fatigue, corrosion, aging or natural events such as storms and earthquakes. The damage accumulates over time has an effect on the structural integrity leading to potential safety issues. Structural health monitoring provides periodic samples of the structural health of the bridge to allow for proactive and cost effective maintenance.
            </div>
            <Image 
                src='/research-damaged-bridge.png'
                alt='Bridges degrade over time due to external factors such as weather or decay.'
                width={620}
                height={370}
                className='py-5'
            />
            <div className='py-5'>
                Traditionally, structural health has been assessed through mechanisms such as instrumenting sensors to bridges or manually inspecting bridges for damage. More recently, indirect methods have arisen that leverage driving vehicles to collect desired information about bridge properties in order to reliably assess bridge health in an economically feasible way.
            </div>
            <Image 
                src='/research-truck-sensors.png'
                alt='Mobile vehicles equipped with sensors can analyse bridge health.'
                width={600}
                height={259}
                className='py-5'
            />
            <div className='py-5'>
                Indirect structural health monitoring utilise sensor equipment on driving vehicles, or fleets of vehicles, to extract desirable information about a bridge’s properties in order to identify damages and prevent catastrophes.
            </div>
        </>
    )
}