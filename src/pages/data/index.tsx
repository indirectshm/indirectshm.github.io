import { DATASETS } from '@/components/variables';
import Image from '@/components/image';

export default function Data() {
    return (
        <>
            <h2 className='text-2xl font-medium'>Datasets</h2>
            <div className='py-5'>
                To explore the dataset, click <a className='text-cyan-700' href={DATASETS.halfcar()}>here</a>!
            </div>
            <div className='py-5'>
                The data, diagrams, and details are sourced from <a className='text-cyan-700' href='https://www.sciencedirect.com/science/article/abs/pii/S0022460X23000482#sec4'>Unsupervised learning-based framework for indirect structural health monitoring using adversarial autoencoder.</a>
            </div>

            <h2 className='text-2xl font-medium'>Simulated Datasets</h2>
            <ul className="list-disc">
                <li>An experimental case study was conducted to test a proposed drive-by bridge inspection framework</li>
                <li>A scaled two-axle vehicle was used in a laboratory setting</li>
                <li>The model bridge's structural state was manipulated by adding concentrated mass at different areas to mimic four states of structural integrity </li>
                <li>The steel beam bridge comprised of three spans: a main span of 5.4 m, an accelerating span, and decelerating span of each 2.5 m </li>
                <li>The bridge's boundary conditions designed as simple supports</li>
                <li>Square steel rails were attached to the bridge to guide the inspection vehicle</li>
                <li>The dynamic properties of the bridge were altered to create three new conditions by adding different mass values</li>
                <li>These alterations simulated different damage scenarios without permanently harming the bridge</li>
                <li>The dynamic properties of each state were tested through independent vibration tests</li>
                <li>The test vehicle was a scaled two-axle model with a total mass of 20.2 kg</li>
                <li>The stiffness of the test vehicle's spring was 35,693 N/m and the distance between axles was 400 mm</li>
                <li>Details like the vehicle model's dynamic characteristics influence the sensed data about the bridge's state</li>
                <li>The study did not intend to optimize the sensor vehicle's specifications but to test the inspection framework</li>
                <li>The vehicle's propulsion and speed were controlled by an electric motor and an electronic controller.</li>
            </ul>


            {/* <div className='py-5'>
                Ten different bridge states are analyzed in our study, including an intact bridge state (BC0), and various damage states located at mid-span (BCM1:BCM3), quarter-span (BCQ1:BCQ3), and three-quarter span (BCT1:BCT3), each with varying degrees of severity. The vehicle's response while traveling over each bridge state at a constant speed is obtained using the Newmark-Beta time integration method.
            </div>

            <div className='py-5'>
                Fig. 3 presents the acceleration response of the vehicle's front and rear axles as the vehicle travels over the different bridge states. It is presupposed that the vehicle passes over the bridge regularly while the bridge state potentially deteriorates over time due to progressive damage. Additionally, it's assumed that the vehicle's dynamic characteristics remain constant. 
            </div> */}
            <Image 
                src='/data/data_synthetic_2.png'
                alt=''
                width={600}
                height={259}
                className='py-5'
            />


            {/* <div className='py-5'>
                To prepare a dataset of vehicle responses for our data-driven framework, each axle's response is obtained 900 times for the healthy bridge and 100 times for each other bridge state. To mimic real-life variability, random noise and various road roughness profiles are added to the raw time signals. This enrichment renders the problem more challenging, yet more valid as the condition of the road surface would likely vary over time. 
                The numerical dataset was simulated with the following parameters.
            </div> */}
            <Image 
                src='/data/data_synthetic.jpeg'
                alt=''
                width={600}
                height={259}
                className='py-5'
            />
            {/* <div className='py-5'>
                In his study, the acceleration time signals obtained from the vehicle's axles are utilized for drive-by bridge inspection, and the process of pre-processing will be described in later sections. Refer to Tables 1, 2 and 3 for a more detailed outline of bridge states and methods of retrieval.
            </div> */}
            {/* <div className='py-5'>
                As explained, there are in total 10 different bridge states, (i.e., a healthy bridge (BC0), a damaged bridge with damage at mid-span with three different severity (BCM1:BCM3), a damaged bridge with damage at quarter-span with three different severity (BCQ1:BCQ3), and a damaged bridge with damage at three-quarter-span with three different severity (BCT1:BCT3), which will be investigated in this study. 
                For each bridge state, the response of the vehicle once traveling over the bridge at a constant speed is obtained by solving the dynamic coupling between the vehicle and the bridge (see Section 2). 
                To this aim, the conventional time integration method Newmark-Beta with a time step of 0.001 s is adopted. 
            </div>
            <div className='py-5'>
                The time response of each axle is obtained from the time instance they enter into the bridge until they leave the bridge. 
                That means the response for each axle is only considered for the duration when they are on the bridge.
                Fig. 3 shows the acceleration response of the vehicle's front and rear axles once the vehicle travels over the bridge states BC0 and BCM1 to BCM3.
                It is assumed that the prescribed vehicle passes over the bridge regularly, and the state of the bridge deteriorates over time, for instance, due to progressive damage. 
                Further, it is assumed that the vehicle's dynamic characteristics remain unchanged. In the context of any sensing, it is vital to calibrate the sensor to ensure its transfer function, reflecting the input/output relationship, has not changed; the same applies here when the vehicle is acting as a sensor.
            </div>
            <div className='py-5'>
                In order to create a dataset of vehicle responses for training and testing our data-driven framework (which will be presented in Section 5), the response of the vehicle's axles traveling over the healthy bridge 900 times is first obtained. 
                Further, for each other bridge state, the response of the vehicle traveling 100 times over the bridge is acquired. To introduce variability and randomness in the simulated vehicle responses, not only 5% random noise is added to the obtained raw time signals, but variability in the road roughness is also considered. 
                In other words, it is assumed that, in practice, this dataset may be collected over the course of a long time window from a bridge under investigation. Hence, the condition of the road surface may also experience some variability, which is modeled by considering a different random type A profile on each pass of the vehicle. 
                Indeed, this additional source of variability in this dataset makes the problem more challenging compared to the case when exactly the same road roughness is considered for all the vehicle runs in the dataset.
            </div> */}

            <h2 className='text-2xl font-medium'>Experimental Dataset</h2>

            <ul className="list-disc">
                <li>The study investigates 10 different bridge states, including varying levels of damage at mid-span, quarter-span and three-quarter-span.</li>
                <li>For each bridge state, the vehicle’s response when traveling at a constant speed over the bridge is recorded.</li>
                <li>The Newmark-Beta time integration method is used to solve the dynamic coupling between the vehicle and the bridge.</li>
                <li>The vehicle’s front and rear axle acceleration response are measured from entering to leaving the bridge.</li>
            </ul>
            {/* <div className='py-5'>
                This paper presents an experimental case study analysing the feasibility of a proposed drive-by bridge inspection framework. A scaled vehicle in a laboratory was used to investigate practical scenarios. The experiment involved a simply supported beam with concentrated mass added at different locations to simulate four different structural states of the bridge under investigation, including an intact state.
            </div>

            <div className='py-5'>
                The test bridge was a steel beam set up in a weak orientation with three simple support spans. The beam had guide tracks for the inspection vehicle to travel on. The bridge's dynamic properties were altered to create three new states. Each condition was obtained from independent free vibration tests. The goal was to emulate damage by placing a lumped mass on the bridge without causing actual harm.
            </div> */}
            <Image 
                src='/data/data_experimental.png'
                alt=''
                width={600}
                height={259}
                className='py-5'
            />

            <ul className="list-disc">
                <li>The assumption is made that the vehicle passes over the bridge regularly and bridge suffers progressive damage over time.</li>
                <li>It's also assumed that the vehicle’s dynamic characteristics remain unchanged.</li>
                <li>A dataset of vehicle responses is created by obtaining the response of the vehicle travelling over the healthy bridge 900 times, and 100 times over the bridge for each other state.</li>
                <li>Randomness is introduced to the vehicle responses by adding 5% random noise to the raw time signals and allowing for variation in road roughness.</li>
                <li>Acceleration time signals from the moving vehicle’s axles were used for the drive-by bridge inspection.</li>
            </ul>

            <Image 
                src='/data/simulated_example_data.png'
                alt=''
                width={600}
                height={259}
                descriptor='Example of simulated dataset.'
                className='py-5'
            />
            
            {/* <div className='py-5'>
                Figure 5(a) and 5(b) illustrate how this emulated damage was effected by placing mass at various points on the beam. Fig 5(a) demonstrates the new bridge condition created by adding mass at a quarter-span of the bridge, or BXQ1, simulating the least severe damage scenario. Fig 5(b) and 5(c) depict other bridge conditions created by adding different mass values at mid-span, referred to as BXM1 and BXM2. 
            </div>
            <div className='py-5'>
                A scaled two-axle vehicle, demonstrated in Fig 6, was used for inspection. The model has a total mass of 20.2kg, inclusive of attached sensors. Free vibration tests on the vehicle revealed a significant bouncing mode frequency at 12.57 Hz. The performance of this inspection vehicle was not optimized for this study, but its dynamic characteristics were accounted for as they influenced the interaction with the bridge and the subsequent data gathered.
            </div>
            <div className='py-5'>
                The vehicle was moved using an electric motor and pulley system, with speed maintained by an electronic controller. This movement mechanism was depicted in Fig 4(a). The study aimed to assess drive-by bridge inspection methods and optimize detection rather than refining the vehicle used for inspections. Thus, the vehicle and associated systems used were selected based on availability and previous successful data transmission outcomes on the bridge model used.
            </div>
            <div className='py-5'></div> */}
        </>  
    )
};

