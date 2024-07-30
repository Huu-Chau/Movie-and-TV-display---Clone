export default function Watch() {
    return ( 
        <main className='bg-primary_black h-full w-full' style={{paddingTop:`50px`}}>
                  <h1>Video Player Example</h1>
                <video width="1500" controls autoPlay loop>
                    <source src="https://www.youtube.com/watch?v=h9YHHgWHHK8" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </main>
    );
}