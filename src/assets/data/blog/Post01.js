import React from 'react';
import './style.css';
import cloudinary from '../../images/blog/01/cloudinary-logo.svg';
import forager from '../../icons/forager.svg';
import wishfulThinking from '../../images/blog/01/p01-process.png';
import oopsAllSecrets from '../../images/blog/01/p01-oopsallsecrets.png';
import newFront from '../../images/blog/01/p01-front.png';
import newBack from '../../images/blog/01/p01-back.png';


function Post01() {

    return (
        <div className='blog-div'>
            <div>

                <div className='logos'>
                    <img src={forager} style={{ height: 150 }} alt='forager mushroom logo' />
                    <img src={cloudinary} style={{ width: 400 }} alt='cloudinary logo' />
                </div>
                <div className='intro'>
                    <div className='section-title'><b>Secure Image Uploading with Cloudinary</b></div>
                    Now that bootcamp is over, I continue to work on projects to solidify and expand my skills. I've been refactoring a React version of my favorite project from bootcamp, FungID.
                    Images are at the heart of the app. Not only are they the visual centerpiece of the user experience, they’re also the source of data for the next-most important map feature. In its original iteration, I used a popular service, Cloudinary,  for uploading and hosting, as well as implementing their provided widget in a front end component. This component required my private API credentials, which I provided through the shield of process.env. The upload succeeded and returned a JSON object with pertinent EXIF data which was then formatted to suit my needs and saved to a Mongo database collection.
                </div>
                <div>
                    <div className='section-title'><b>Oh Dear, a Problem</b></div>
                    I showed my progress to a more-savvy-than-myself developer who was kind enough to point out my error. While my environment variables were shielded from obvious view when, say, pushed up to GitHub, they were still accessible on the front end and findable through the inspector when running the app. Not a great time, security-wise.
                </div>
                <div className='before-and-after'>
                    <div className='before'>
                        <img src={wishfulThinking} alt='code in code editor' />
                        <p><i>What I thought I was saying.</i></p>
                    </div>
                    <div className='after'>
                        <img src={oopsAllSecrets} alt='code in inspector' />
                        <p><i>What I actually said.</i></p>
                    </div>
                </div>

                <div>
                    <div className='section-title'><b>Best Practices</b></div>
                    Anything that needs to remain actually-private, like API keys and other potentially valuable credentials, must live and verb in the back end. I hazily remembered this from bootcamp, but it seems that my novice mistake was missed in critique. Thankfully I had an experienced developer to confer with and opportunity to review and practice.
                </div>

                <div>
                    <div className='section-title'><b>The Refactor</b></div>
                    I set up a new API route and refactored the existing function into an async fetch that:
                    <ul className='upload-process'>
                        <li>1. base64 encodes the image data</li>
                        <li>2. sends the base64 string to an endpoint in the back end of the app</li>
                        <li>3. securely accesses cloudinary creds via the config file, which pulls them from process.env</li>
                        <li>4. securely uploads image information to Cloudinary</li>
                        <li>5. receives Cloudinary’s JSON response object</li>
                        <li>6. extracts and formats pertinent data</li>
                        <li>7. saves data to Mongo database</li>
                    </ul>

                    Once the try/fetch succeeds, the front end code goes on to reset the file input fields and call loadUploads() which re-renders the thumbnail gallery to include the new image. My Cloudinary credentials are now separate and secure. Huzzah.
                </div>
                <div className='refactored'>
                    <div className='front'>
                        <img src={newFront} alt='code in code editor' />
                        <p><i>Refactored front end function.</i></p>
                    </div>
                    <div className='back'>
                        <img src={newBack} alt='code in editor' />
                        <p><i>New API endpoint on the back end.</i></p>
                    </div>
                </div>
            </div>


            <div className='section-title'><b>What's Next: Security and State</b></div>
            <div>
                With images securely uploading, I've moved on to implementing a system for managing users—-another crucial unit of functionality for my vision of this app’s final form. I initially set it up with Auth0, a serviced I’d implemented on another project, but decided to try and do it myself from more-or-less-scratch. Presently, I’ve managed to set up user registration/login/etc and auth protected routes with JWT and cookies. The refactored upload function routes through the same auth-routes I set up for users, in anticipation of establishing the links between users and their content. However, achieving a persistent state for logged in users has been an elusive goal. I’ve managed it with local storage, but reading around, it seems like another somewhat vulnerable front end practice. From here, I'll be focusing on more effective state management alongside user-related authentication and security.
            </div>
        </div>

    )
}
export default Post01;


