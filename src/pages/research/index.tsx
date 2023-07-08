import Image from '@/components/image';

export default function Research() {
    const iframe_style = { loading: 'lazy' };
    return (
        <>
            <h2 className='text-2xl font-medium'>What kind of problem needs to be solved?</h2>
            <div className='py-5'>
                A building undergoing increasing structural damage. A bridge in different climates experiences qualitatively different vibrations. An aircraft begins on the runway, accelerates, cruises in the sky while experiencing turbulence, then begins descending. These are all examples of structures that undergo avariety of stresses in distinct contextual ‘states’. It would be advantageous for operators to be able to detect these contextual shifts in both controlled and non-controlled settings.
            </div>
            <div className='py-5'>
                Now, let us suppose we can record data by attaching an array of sensors (accelerometers, pressuresensors, thermometers) to the structure to try and divine when such transitions occur. How should we approach such a problem? Preliminary visual inspection of accelerometer data on aircrafts and other structures gives no clues as to how this might be done (fig:aircraft phases, fig:building experiment blog). Even worse, as you can see, sensor data is naturally very noisy, and so any method we think up of needs to be able to contend with this type of unstructured, messy, time-correlated data, and anomalous transitions may not be able to be captured by a simple set of features.
            </div>
            <div className='py-5'>
                In this blog post, we introduce our proposed methodology for detecting anomalies in context; specifically, we will use our methodology to detect transitions between different damage levels in an experimental building data set (the ‘building’ or ‘bookshelf’ data set). The data set we will focus on is accelerometer data coming from a sensor array attached to a miniature three-storeyed building structure. To introduce anomalies into the data, damage was introduced to certain sections of the structure (bolts loosening, removing brackets, etc.). The goal is to create an algorithm that can automatically identify when a part of the underlying structure undergoes an increase in damage.
            </div>
            <div className='py-5'>
                In our background investigation of this problem, we trained and reported the performance of a number of baseline models - off-the-shelf machine learning algorithms - that could potentially solve the damage detection problem, with models such as feature-extraction-SVMs and 1D convolution networks. However, we ran into a number of issues which commonly plague all anomaly detection algorithms. A lack of training data on the most important anomalies means that any supervised algorithm could learn normal behaviour quite well, but struggles to generalise beyond the baseline. The complexity (and noisiness) of building accelerometer data means manual feature engineering can hardly capture the necessary differentiators between different damage levels, leading to poor performance. If we opt for automatic feature extraction (as in 1D convolution networks) then we run afoul of model explainability:in high-risk contexts such as building/aircraft/bridge monitoring, understanding the how and why in anomaly detection is almost as important as the power of the model itself.
            </div>
            <div className='py-5'></div>
            <iframe 
                title="" 
                className='w-full h-64'
                src="https://www.youtube.com/embed/i1sp4X57TL4?rel=0"></iframe>
            <div className='py-5'>
                Is it a banana or a toaster? Knowing how a model categorises something as anomalous is essential in high-impact environments, where a false negative could imply disastrous consequences..
In order to create more intelligent, well-performing and explainable models that do not rely on the existence of prior training data, we need to introduce a number of key players that we used in our project to efficiently solve the contextual anomaly detection problem.
            </div>
            <div className='py-5'>
                In order to create more intelligent, well-performing and explainable models that do not rely on the existence of prior training data, we need to introduce a number of key players that we used in our project to efficiently solve the contextual anomaly detection problem.
            </div>
            <Image 
                src='/research/blog1_img1.png'
                alt=''
                width={600}
                height={259}
                descriptor='Figure 1: Two different distinct cruise phases for an aircraft, with data for Cruise Phase 2 in both healthy and damaged aircrafts.'
                className='py-5'
            />
            <Image 
                src='/research/blog1_img2.png'
                alt=''
                width={600}
                height={259}
                descriptor='Figure 2: Time series data of a building structure being shaken as the structure is increasingly damaged (state: healthy, mild damage, large damage and extreme damage, in that order). While healthy data is easy to tell apart from the rest, it is not easy to visually categorise the three different levels of damage!'
                className='py-5'
            />
            <div className='py-5'>
                In order to create more intelligent, well-performing models with the above characteristics, we need to introduce a number of key players that we used in our project to efficiently solve the contextual anomaly detection problem.
            </div>

            <h2 className='text-2xl font-medium'>A few theoretical ideas</h2>
            <div className='py-5'>
                Our methods build on a special data structure called the matrix profile which computes the pairwise distances between subsequences of a given window length and records a list of ‘nearest neighbour indices’ (subsequences that match each other the closest in the time series); these indices play an important role in semantic segmentation. Each nearest neighbour index defines an ‘arc’ (like an arrow) from one data point to another, and for each data point, we can count the number of times an arc crosses above the point. When the statistical properties of the generating random process changes significantly over a period of time, the number of arcs crossing over points in and around the transition decreases significantly, since it is unlikely a subsequence of the first regime is a nearest neighbour for a subsequence of the second regime! 
                After dividing by a correction factor (We need to account for the fact that in the baseline random-neighbours scenario, we naturally expect more crossovers for data points in the center than data points on the extremities.), we obtain the Corrected Arc Curve (CAC), which ‘reacts’ numerically to perceived regime changes (insert image of CAC). Even better, the matrix profile gives interpretable meaning to the anomalous transitions it detects. Contrast this with the difficult-to-interpret black-box methods popularised by neural learning, which is particularly inapplicable to high-risk operations (such as the building data set we consider in this blog post) where understanding how a model categorises failure/anomalies is almost as important as the categorisation itself. 
                We refer to <a href='https://stumpy.readthedocs.io/en/latest/'>https://stumpy.readthedocs.io/en/latest/</a>, in particular Tutorials/Semantic Segmentation, for more details on the theoretical foundations of the matrix profile.
            </div>
            <div className='py-5'>
                Given a single time-series signal, we can apply the matrix profile, obtain the CAC and figure out where the transition occurs from this single source of information. However, information from a single CAC is often noisy by itself - see, for example, 3, where we can just about see three main ‘peaks’, but with a high degree of uncertainty. We have an array of 24 sensors in our data - how can we use this extra data to ensemble together predictions and increase stability?
            </div>
            <Image 
                src='/research/blog2_img1.jpeg'
                alt=''
                width={600}
                height={259}
                descriptor='Figure 3: CAC from a single signal.'
                className='py-5'
            />
            <Image 
                src='/research/blog2_img2.png'
                alt=''
                width={600}
                height={259}
                descriptor='Figure 4: Naive Euclidean averaging destroys the main features from the anomalous spike from each distribution. Effectively working with sensor array data means being able to combine the information from each sensor while retaining the most important features - this is where the Wasserstein barycenter comes in! Image Credit: https://github.com/fpetitjean/DBA'
                className='py-5'
            />
            <Image 
                src='/research/blog2_img3.jpeg'
                alt=''
                width={600}
                height={259}
                descriptor='Figure 5: The same CAC as in the previous figure, but barycentered over all 24 sensors. Notice the much clearer and smoother peaks. We can now confidently note the locations of possible regime changes.'
                className='py-5'
            />
            <div className='py-5'>
                For a (more formal) introduction to the matrix profile, see the STUMPY documentation <a href='https://stumpy.readthedocs.io/en/latest/Tutorial_The_Matrix_Profile.html'>here</a>. 
                STUMPY is a code package implementing the matrix profile with efficient algorithms, and has been invaluable in the results of this project. 
                For the Wasserstein barycenter, the library Python Optimal Transport (see <a href='https://pythonot.github.io/'>https://pythonot.github.io/</a>) was likewise essential to our work and provides an introduction to the use of optimal transport in data mining contexts.
            </div>

            <h3 className='font-semibold'>Algorithm Description</h3>
            <div className='py-5'>
                Let's put all of these ingredients together into a coherent data pipeline. For each input signal, compute their VMD with n modes (so each input returns n output time series for each mode). 
                Apply the Welch transform to each mode (we are now in the frequency domain), take the log and re-scale (this is just for smoothing purposes). 
                Concatenate the transformed data belonging to the same sensor and same VMD together into one long time series. 
                We now compute the matrix profiles and CACs of each concatenated sequence. Each of these CACs will 'respond' in some way to a perceived anomalous transition (see image of CAC dip), and we wish to combine these responses together. 
                This is where the Wasserstein barycenter comes in! We barycenter the VMDs together (so 5 VMDs become a single time series) and finally compute the barycenter of the data over the sensors (so 24 sensors worth of data becomes a single time series). Peaks of this final CAC corresponds to segments of high 'disruption', in the sense that subsequences to the left of the peak tend to be related to other subsequences on the left, and subsequences to the right tend to be related to other subsequences on the right. 
                Hence, it makes sense to postulate that an anomalous transition has taken place in-between.
            </div>
            <div className='py-5'>
                See Figure 6 for a flowchart of the proposed (offline) methodology that summarises our explanations above. 
                It works 'offline' since we assume all of the data has completely arrived before we process it and figure out where the anomalous transitions take place (if there are any!).
            </div>
            <Image 
                src='/research/blog2_img4.png'
                alt=''
                width={600}
                height={259}
                descriptor='Figure 6: Offline End-to-End algorithm flowchart. Flowchart diagram for online anomaly detection on the three-storeyed building data set. We take a subset of the data from each sensor, apply variational mode decomposition to obtain the quasi-orthogonal components, Welch transform then take the logarithm and normalise. The transformed data is then concatenated together. We record the updated CACs every 100 new data points, barycenter across the variational modes then finally barycenter over all sensors.'
                className='py-5'
            />
            <div className='py-5'>
                As it turns out, it is not difficult to make the above algorithm work in an 'online' environment, where we process the data as it arrives to get a real-time view of how the CAC responds in real-time. 
                What makes this work is the linear structure of the matrix profile: when a new point is ingested, we only need to recompute the pairwise distances to the new point, which gives a massive reduction in time complexity. For the algorithm in real-time, we compute all of the above transformations (Welch, VMD) in batches as data arrives. 
                We then update the matrix profile one point at a time; every 100 points, we compute the updated CAC and save it in an array. At the end, we produce a gif to visualise how the CAC reacts in real-time to perceived anomalous transitions. 
                For the online methodology flowchart, see Figure 7.
            </div>
            <Image 
                src='/research/blog2_img5.png'
                alt=''
                width={600}
                height={259}
                descriptor='Figure 7: Flowchart diagram for online anomaly detection on the three-storeyed building data set. Beginning with a pre-determined starting subset, we perform the offline algorithm (VMD, log-normalise, etc.) to get the initial CACs at three distinct phases of the data process. We then proceed to update the matrix profiles point-by-point, and every 100 points, record CACs to be animated.'
                className='py-5'
            />
            <div className='py-5'>
                In the next section, we present a number of notebooks where you can see the results of each data processing step and the final predictors themselves in an online and offline environment.
            </div>

            <h2 className='text-2xl font-medium'>What about Methodologies?</h2>
            <div className='py-5'>
                Our project work is contained in a number of Jupyter notebooks embedded in the page below. 
                You can also run the code yourself by cloning our GitHub repository <a href='https://github.com/sjmluo/Contextually_Situated_Anomaly_Detection'>here</a>. 
                See in particular the final output images and CAC animations in the offline and online notebook sections respectively (scroll down!).
            </div>
            <h3 className='font-semibold'>Offline Notebook</h3>
            <div className='py-5'>
                See below for a statically embedded Jupyter notebook showcasing our offline methodology. 
                The basic idea (described fully in a previous blog post) is that we transform the data, concatenate all of it together, compute the matrix profile and Corrected Arc Curves (CACs), combine predictions using the Wasserstein barycenter and use a peak-finder to figure out where the anomalies are. 
                For a quick summary, look out for the output images of the data at each step of the processing pipeline and the final result: a CAC curve that clearly demarcates the true anomalous transitions without any false positives!
            </div>    
            <iframe 
                src="https://notebooks.githubusercontent.com/view/ipynb?color_mode=auto&amp;commit=6b46a92d2037b4ebc52f05ada8eb129171d289f8&amp;enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f676973742f65726963667a68752f35333637373538613866303936643063316437656633393732306365353638632f7261772f366234366139326432303337623465626335326630356164613865623132393137316432383966382f656e6432656e642e6970796e62&amp;logged_in=false&amp;nwo=ericfzhu%2F5367758a8f096d0c1d7ef39720ce568c&amp;path=end2end.ipynb&amp;repository_id=113729795&amp;repository_type=Gist#281efc69-39dd-48eb-be5e-ea230cbb5806" sandbox="allow-scripts allow-same-origin allow-top-navigation" title="File display" name="281efc69-39dd-48eb-be5e-ea230cbb5806"
                className='w-full h-96'
            >
                Viewer requires iframe.
            </iframe>
            <h3 className='font-semibold'>Online Notebook</h3>
            <div className='py-5'>
                See below for a statically embedded Jupyter notebook showcasing our online methodology. 
                The basic idea remains the same as the offline algorithm, except we now transform the data in batches (mimicking "arrival in real-time"), and update the matrix profiles and CACs in a time-efficient way. 
                Every 100 points added (corresponding to approximately 0.06 seconds of real time), we record the updated CAC in an array. Look out for the gifs of the CAC changing in time as anomalies are recorded! We see a demonstrable clear peak for each anomalous transition that occurs in our data. 
                Compare also the effects of using only a single sensors worth of data to compute the CAC (the first three gifs in the notebook) versus using all 24 sensors (the final gif of the notebook): there is an enormous improvement in smoothness and clarity in the anomaly signal, which bodes well for live operational use.
            </div>    
            <iframe 
                src="https://notebooks.githubusercontent.com/view/ipynb?color_mode=auto&amp;commit=6b46a92d2037b4ebc52f05ada8eb129171d289f8&amp;enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f676973742f65726963667a68752f35333637373538613866303936643063316437656633393732306365353638632f7261772f366234366139326432303337623465626335326630356164613865623132393137316432383966382f696e74726f5f73747265616d696e675f626f6f6b7368656c662e6970796e62&amp;logged_in=false&amp;nwo=ericfzhu%2F5367758a8f096d0c1d7ef39720ce568c&amp;path=intro_streaming_bookshelf.ipynb&amp;repository_id=113729795&amp;repository_type=Gist#25d716fa-5d53-4972-a73c-17ff1f23ebd6" sandbox="allow-scripts allow-same-origin allow-top-navigation" title="File display" name="25d716fa-5d53-4972-a73c-17ff1f23ebd6"
                className='w-full h-96'
                >
                Viewer requires iframe.
            </iframe>
            
            <h2 className='text-2xl font-medium'>Towards the Future!</h2>

            <div className='py-5'>
                As you can tell from our code, this is still just a proof-of-concept! 
                There is still much to do to make the algorithm applicable in real-world situations. 
                In this section, we describe some possible ideas and advancements to consider for future work on this project.
            </div>
            <div className='py-5'>
                While the proposed methodology is able to identify and segment data in both offline and online environments, computational feasibility is still an issue, with input data recorded over the seconds scale (each 8192 data points of input corresponds to only 5 seconds of recording time), running our non-optimised proposed methodology for 2 minutes of data from 24 sensors takes more than 20 minutes. 
                This is clearly not feasible for live environments, so proceeding efforts could focus on streamlining the algorithm towards effective, fast computations. This includes parallelising the computation for each sensor over multiple CPUs, taking advantage of just-in-time compilation (e.g. with Python's Numba) and using cloud and GPU clusters to accelerate computations. 
                Some back-of-the-envelope calculations shows that such improvements (particularly parallelising the computations) will make the proposed methodology much more feasible in production environments.
            </div>
            <div className='py-5'>
            From the results of the online algorithm, another question presents itself: visually speaking, each peak in the animations clearly corresponds to exactly one damage transition. 
            How can we adapt our model to detect 'peaks in time' automatically in real-time? 
            A simple solution would be to test whether the CAC window has an 'active' peak (a localised maximum above a fixed threshold). 
            In order to account for noise, we can enforce that this peak must persist for a certain number of frames. If detected, display a visual alert for a potential anomalous shift so that shutdown, inspection and repair decisions can be made. 
            Figure 8 has a flowchart of what such an detector would look like. The anomaly 'persisting' in multiple frames was one of the key indicators separating the true anomalous transitions and noise that we observed in our experiments, the second feature being the magnitude of the peaks. 
            Tuning would have to be performed to remove false positives from the result. 
            Machines wrongly categorising x as y, how many times have we heard this before? Too many false positives would not be good for the engineer's morale...too many false negatives and the building comes down! 
            Thankfully, our model is able to capture all true positives - a good sign!
            </div>
            <Image 
                src='/research/blog4_img1.png'
                alt=''
                width={600}
                height={259}
                descriptor='Figure 8: A simple extension on the proposed methodology. If not much noise is expected (all sensors operational), then we can issue an alert whenever the CAC exceeds a certain threshold. Otherwise, we can increase robustness to noise by enforcing that a certain number of frames must have a peak past a certain threshold to issue an anomaly alert.'
                className='py-5'
            />
            <div className='py-5'>
                Finally, we point out the following: because we only segment the final output which is actually in the frequency domain, we are only able to make predictions accurate to one experiment's worth of data. For our analysis, the accurate time resolution is 5 seconds; for certain purposes, this is sufficient, but in high-risk situations, reducing this input-prediction lag would be paramount for better outcomes.
            </div>
            <div className='py-5'></div>
        </>
    )
}